const merge = require('webpack-merge');

module.exports = env => {

    console.log('NODE_ENV', env.NODE_ENV);
    console.log('Production', env.production);

    let config = require('./webpack.dev.js');
    if (env.NODE_ENV === "prod" && env.production) {
        config = require('./webpack.prod.js');
    }

    return merge(config);
}