var Fluxxor = require('fluxxor');
var Store = require('./store');
var action = require('./action');

module.exports = () => new Fluxxor.Flux({
    feed: new Store()
}, action);