'use strict';

const HttpsProxyAgent = require('https-proxy-agent');

const serverUrl = 'http://localhost:5000';
/*
 * API proxy configuration.
 * This allows you to proxy HTTP request like `http.get('/api/stuff')` to another server/port.
 * This is especially useful during app development to avoid CORS issues while running a local server.
 * For more details and options, see https://github.com/angular/angular-cli#proxy-to-backend
 */
const proxyConfig = [
  {
    context: '/api/*',
    target: serverUrl,
    changeOrigin: true,
    secure: false
  }
];

/*
 * Configures a corporate proxy agent for the API proxy if needed.
 */
function setupForCorporateProxy(proxyConfig) {
  if (!Array.isArray(proxyConfig)) {
    proxyConfig = [proxyConfig];
  }

  return proxyConfig;
}

module.exports = setupForCorporateProxy(proxyConfig);
