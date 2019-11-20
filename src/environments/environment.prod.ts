const packageJson = require('../../package.json');

export const environment = {
  appName: 'Bookstore',
  envName: 'Prod',
  production: true,
  versions: {
    app: packageJson.version
  },
  serverUrl: '',
  defaultLanguage: 'vi-VN',
  supportedLanguages: ['en-US', 'vi-VN']
};
