import React, {PropTypes} from 'react';
var {RouteHandler} = require('react-router');

var App = React.createClass({
	propTypes: {
		flux: PropTypes.object.isRequired
	},
    render() {
        return <RouteHandler flux={this.props.flux}/>;
    }
});

module.exports = App;