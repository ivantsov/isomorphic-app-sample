import React, {PropTypes} from 'react';

var Layout = React.createClass({
    propTypes: {
        component: PropTypes.string.isRequired,
        storesInitialDataScript: PropTypes.string
    },
    render() {
        var {
            storesInitialDataScript,
            component
        } = this.props;

        return (
            <html>
            <head lang="en">
                <meta charSet="utf-8"/>
                <title>Simple isomorphic app</title>

                <script dangerouslySetInnerHTML={{__html: storesInitialDataScript}}></script>
            </head>
            <body>
            <div id="app" dangerouslySetInnerHTML={{__html: component}}/>

            <script src="http://localhost:3001/bundle.js"></script>
            </body>
            </html>
        );
    }
});

module.exports = Layout;