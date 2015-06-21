module.exports = function (flux, state) {
    var storesInitialData = {};

    var storesInitialDataPromises = state.routes.reduce((promises, route) => {
        var routeInitialData = route.handler.getInitialData;

        if (routeInitialData) {
            routeInitialData = routeInitialData(flux.actions, state.params);

            Object.keys(routeInitialData).forEach(storeName => promises[storeName] = routeInitialData[storeName]);
        }

        return promises;
    }, {});

    return Promise.all(Object.keys(storesInitialDataPromises)
        .map(storeName => storesInitialDataPromises[storeName].then(storeInitialData => storesInitialData[storeName] = storeInitialData)
    )).then(() => storesInitialData);
};