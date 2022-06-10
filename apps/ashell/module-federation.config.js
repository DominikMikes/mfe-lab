module.exports = {
  name: 'ashell',
  remotes: [
    ['ng-app', 'http://localhost:4001/remoteEntry.js'],
    ['react-app', 'react_app@http://localhost:4002/remoteEntry.js']
  ]

};
