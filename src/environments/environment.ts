// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json.

const packageJson = require('../../package.json');

export const environment = {
  appName: 'Bookstore',
  envName: 'Dev',
  production: false,
  versions: {
    app: packageJson.version
  },
  serverUrl: '',
  defaultLanguage: 'vi-VN',
  supportedLanguages: ['en-US', 'vi-VN']
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
