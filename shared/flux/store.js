var Fluxxor = require('fluxxor');
var constants = require('./constants');

module.exports = Fluxxor.createStore({
    actions: {
        [constants.LOAD_FEEDS_SUCCESS]: 'onLoadItems',
        [constants.LOAD_FEED_SUCCESS]: 'onLoadItem'
    },
    initData(data) {
        this.items = Array.isArray(data) ? data : [data];
    },
    initialize() {
        this.items = [];
    },
    onLoadItems(data) {
        this.items = data;
        this.emit('change');
    },
    onLoadItem(data) {
        this.items.push(data);
        this.emit('change');
    },
    getItem(id) {
        return this.items.find(item => item.id == id);
    }
});