const { withModuleFederation } = require('@nrwl/react/module-federation');
const config = require('./module-federation.config');
module.exports = withModuleFederation(config);
