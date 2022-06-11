const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'rremote',
  fileName: 'remoteEntry.js',

  exposes: {
    // './Component': './apps/rremote/src/app/app.component.ts',
    './web-components': './src/app/app.tsx'
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
