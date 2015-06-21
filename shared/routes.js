var React = require('react');
var {Route, DefaultRoute} = require('react-router');

var App = require('./components/app');
var FeedList = require('./components/feed-list');
var FeedItem = require('./components/feed-item');

var routes = (
    <Route name="app" handler={App} path="/">
        <DefaultRoute name="feed" handler={FeedList}/>
        <Route name="feedItem" path="feed/:id" handler={FeedItem}/>
    </Route>
);

module.exports = routes;