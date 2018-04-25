importScripts('workbox-sw.prod.v2.1.3.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "404.html",
    "revision": "6f2c6888e9f517bf8389b3622a5fcea7"
  },
  {
    "url": "app/app-0c7143e740.js",
    "revision": "0c7143e7405a1abcec6ce48c77f86b73"
  },
  {
    "url": "app/vendor-731fd609cd.js",
    "revision": "731fd609cd79306ea48f9088c328ea95"
  },
  {
    "url": "content/css/main-d41d8cd98f.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "content/css/vendor-d41d8cd98f.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "index.html",
    "revision": "743e0fabb20457ec0ad5efaef643204e"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);