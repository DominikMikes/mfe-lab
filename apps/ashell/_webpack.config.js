// const { withModuleFederation } = require('@nrwl/angular/module-federation');
// const config = require('./module-federation.config');
// module.exports = withModuleFederation(config);
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;

module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: 'ashell',
      remotes: {
        rremote: 'rremote@http://localhost:5002/remoteEntry.js',
        'ng-app': 'ng-app@http://localhost:4001/remoteEntry.mjs'
      }
    })
  ]
}
