var _ = require('lodash');
var shared_config = require('./shared.conf.js');

exports.config = _.extend(shared_config.config, {

    // If sauceUser and sauceKey are specified, seleniumServerJar will be ignored.
    // The tests will be run remotely using SauceLabs.
    sauceUser: process.env.SAUCE_USER,
    sauceKey: process.env.SAUCE_ACCESS_KEY,
    capabilities: {
        'tunnel-identifier': process.env.BUILD_NUMBER,
        'build': process.env.BUILD_NUMBER
    }

});
