var React = require('react');
var Router = require('react-router');
var routes = require('../shared/routes');
var flux = require('../shared/flux')();

require('babel/polyfill');
require('isomorphic-fetch');

Object.keys(window.storesInitialData)
    .forEach(storeName => flux.store(storeName).initData(storesInitialData[storeName]));

var router = Router.create({
    routes,
    location: Router.HistoryLocation
});

router.run(Handler => React.render(<Handler flux={flux}/>, document.getElementById('app')));
