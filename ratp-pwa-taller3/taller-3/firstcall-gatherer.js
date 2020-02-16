'use strict';

const Gatherer = require('lighthouse').Gatherer;

class TimeToFirstCall extends Gatherer {
    afterPass(options) {
        const driver = options.driver;

        return driver.evaluateAsync('window.firstCallLoadTime')
            .then(firstCallLoadTime => {
                if (!firstCallLoadTime) {

                    throw new Error('Unable to find first call load metrics in page');
                }
                return firstCallLoadTime;
            });
    }
}

module.exports = TimeToFirstCall;