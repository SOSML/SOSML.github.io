/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "static/css/bootstrap-theme.css",
    "revision": "b9b46bcc4dad6cc90fc4f95073c50735"
  },
  {
    "url": "static/css/bootstrap-theme.min.css",
    "revision": "ab6b02efeaf178e0247b9504051472fb"
  },
  {
    "url": "static/css/bootstrap.css",
    "revision": "2a31dca112f26923b51676cb764c58d5"
  },
  {
    "url": "static/css/bootstrap.min.css",
    "revision": "ec3bb52a00e176a7181d454dffaea219"
  },
  {
    "url": "static/css/main.596291c4.css",
    "revision": "d1e8a23fb9a1b45a9b9e84952a9679c0"
  },
  {
    "url": "static/js/main.a9b88dde.js",
    "revision": "0fd6bc8e44cf02a55a06a75d0f9677ca"
  },
  {
    "url": "static/fonts/glyphicons-halflings-regular.eot",
    "revision": "f4769f9bdb7466be65088239c12046d1"
  },
  {
    "url": "static/fonts/glyphicons-halflings-regular.svg",
    "revision": "89889688147bd7575d6327160d64e760"
  },
  {
    "url": "static/fonts/glyphicons-halflings-regular.ttf",
    "revision": "e18bbf611f2a2e43afc071aa2f4e1512"
  },
  {
    "url": "static/fonts/glyphicons-halflings-regular.woff",
    "revision": "fa2772327f55d8198301fdb8bcfc8158"
  },
  {
    "url": "static/fonts/glyphicons-halflings-regular.woff2",
    "revision": "448c34a56d699c29117adc64c43affeb"
  },
  {
    "url": "interpreter.js",
    "revision": "7f4e349aa5faec1109fac4160605bc02"
  },
  {
    "url": "webworker.js",
    "revision": "fcf4111542c1d646eb6edc6f9344f445"
  },
  {
    "url": "index.html",
    "revision": "bcc7330719d314e6ec4de90d2a0f7f64"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("index.html"));
