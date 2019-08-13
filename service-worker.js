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
    "url": "static/css/main.ce2b511f.css",
    "revision": "2c5ce38fffe36ecf72185e6705e95740"
  },
  {
    "url": "static/js/main.ab9f52a7.js",
    "revision": "6a51ea0a1655e2c7b2b0d5ba0e904937"
  },
  {
    "url": "interpreter.js",
    "revision": "6eb68391db7f3507a67728ff8fa86aee"
  },
  {
    "url": "webworker.js",
    "revision": "badde79962c4463a08d1a6ec2ad13ad9"
  },
  {
    "url": "index.html",
    "revision": "def69f8c400de14589c67d2462a318bc"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("index.html"));
