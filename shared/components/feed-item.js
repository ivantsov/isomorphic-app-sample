import React, {PropTypes} from 'react';
var {FluxMixin, StoreWatchMixin} = require('fluxxor');

var Feed = React.createClass({
    statics: {
        getInitialData(actions, params) {
            return {
                feed: actions.loadFeed(params.id)
            }
        }
    },
    mixins: [
        FluxMixin(React),
        StoreWatchMixin('feed')
    ],
    propTypes: {
        flux: PropTypes.object.isRequired,
        params: PropTypes.shape({
            id: PropTypes.string.isRequired
        }).isRequired
    },
    getStateFromFlux() {
        var store = this.getFlux().store('feed');

        return {
            feed: store.getItem(this.props.params.id)
        };
    },
    componentDidMount() {
        if (!this.state.feed) {
            this.getFlux().actions.loadFeed(this.props.params.id);
        }
    },
    render() {
        var {
            title,
            content,
            likes
        } = this.state.feed;

        return (
            <div>
                <h1>{title}</h1>
                <p>{content}</p>
                <p>Likes: {likes}</p>
            </div>
        );
    }
});

module.exports = Feed;