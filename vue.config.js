// vue.config.js
const merge = require('webpack-merge');

// modules
const commonModule = require('./config/vue.common.js');
const devModule = require('./config/vue.dev.js');
const prodModule = require('./config/vue.prod.js');
const zipModule = require('./config/vue.zip.js');

module.exports = () => {
    if(process.env.NODE_ENV === 'dev' || process.env.NODE_ENV === 'prod'){
        return merge(commonModule, devModule);
    }else if(process.env.NODE_ENV === 'build-dev' || process.env.NODE_ENV === 'build-prod') {
        return merge(commonModule, prodModule, zipModule);
    } else {
        return {}
    }
};


