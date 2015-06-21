var Fluxxor = require('fluxxor');
var constants = require('./constants');
var api = require('./api');

module.exports = {
    loadFeeds() {
        return api.loadFeeds().then(res => {
            this.dispatch(constants.LOAD_FEEDS_SUCCESS, res);
            return res;
        });
    },
    loadFeed(id) {
        return api.loadFeed(id).then(res => {
            this.dispatch(constants.LOAD_FEED_SUCCESS, res);
            return res;
        });
    }
};