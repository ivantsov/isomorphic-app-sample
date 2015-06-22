import React, {PropTypes} from 'react';
var {FluxMixin, StoreWatchMixin} = require('fluxxor');
var {Link} = require('react-router');

var FeedListItem = React.createClass({
    propTypes: {
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired
    },
    render() {
        var {
            id,
            title,
            content,
            likes
        } = this.props;

        return (
            <div>
                <h3>
                    <Link to="feedItem" params={{id}}>{title}</Link>
                </h3>
                <p>{content}</p>
                <p>Likes: {likes}</p>
            </div>
        );
    }
});

var FeedList = React.createClass({
    statics: {
        getInitialData(actions) {
            return {
                feed: actions.loadFeeds()
            }
        }
    },
    mixins: [
        FluxMixin(React),
        StoreWatchMixin('feed')
    ],
    propTypes: {
        flux: PropTypes.object.isRequired
    },
    getStateFromFlux() {
        var store = this.getFlux().store('feed');

        return {
            items: store.items
        };
    },
    componentDidMount() {
        // if store has no elements or only one - load new
        if (this.state.items.length < 2) {
            this.getFlux().actions.loadFeeds();
        }
    },
    render() {
        var items = this.state.items.map(item => <FeedListItem key={item.id} {...item}/>);

        return (
            <div>
                <h1>Feeds</h1>
                {items}
            </div>
        );
    }
});

module.exports = FeedList;