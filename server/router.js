var React = require('react');
var Router = require('react-router');
var routes = require('../shared/routes');
var flux = require('../shared/flux')();
var getInitialData = require('./get-initial-data');
var Layout = require('./layout');

function router(req, res) {
    var router = Router.create({
        routes,
        location: req.url
    });

    router.run((Handler, state) => {
        getInitialData(flux, state).then(data => {
            var storesInitialDataScript = `var storesInitialData = ${JSON.stringify(data)};`;
            var component = React.renderToString(<Handler flux={flux}/>);

            res.send(React.renderToStaticMarkup(<Layout storesInitialDataScript={storesInitialDataScript} component={component}/>));
        });
    });
}

module.exports = router;