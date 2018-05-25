/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/404/index.html","1a1e6593ce14390da7bb02275fb75e86"],["/about/index.html","c802e6e864882f8955be30730d73ed83"],["/aci/index.html","b646b8cd9b40f583a42ece25b3251647"],["/acm-graduation-ceremony-spring-2018/index.html","92b522e97eeeb95cdf90a65c49c84b36"],["/acmanoa-outreach-workshop/index.html","2b453f58524167b3b3ee4873c4d9b058"],["/assets/css/main.css","533a935e31418fedf0d0f03d2e1eb398"],["/assets/img/favicon.jpg","20da386352ac56191203a62359131d07"],["/assets/img/icons/android-chrome-192x192.png","d0a14e63ad1cce3020f5d71763d8870a"],["/assets/img/icons/android-chrome-256x256.png","939ec88a61f407945a27d867fca1651d"],["/assets/img/icons/apple-touch-icon.png","cfa99b6b03097dafc8f1ad46e3e48e26"],["/assets/img/icons/favicon-16x16.png","cff4d90fdce73dae8215fb1d1b0e3361"],["/assets/img/icons/favicon-32x32.png","af7f5aaa04de963acc8b408be2442108"],["/assets/img/icons/icon-github.svg","4e06335104a29f91e08d4ef420da7679"],["/assets/img/icons/icon-instagram.svg","1e1119e2628235ee4c8771bff15eb2ca"],["/assets/img/icons/icon-twitter.svg","30551913d5399d6520e8a74b6f1e23f0"],["/assets/img/icons/mstile-150x150.png","1cea2ceb806d1a018330a51a1d8b73b6"],["/assets/img/icons/safari-pinned-tab.svg","398ef6b25c0f7f3f6e54c112a8facc5f"],["/assets/img/logos/aci-blue.png","6d93d3ab749070c27af53d074a60f3cb"],["/assets/img/logos/aci-orange.png","199b7503b19b93252e2bfa9005b78f17"],["/assets/img/logos/greyhats.png","98e739c0fd84e10e083d6ca3bb7b8772"],["/assets/img/officers/alicewy.jpg","3ce8afc832394af8065f4f977e3e5dde"],["/assets/img/officers/idemello.png","4df4e10a257d4ea2dc70a7fbdde305a9"],["/assets/img/officers/omurray4.png","8cf3e4e81d09312a6e4c98849fa23852"],["/assets/img/officers/tcchong.jpg","2859425008694ab170937df3462e936d"],["/assets/img/officers/tyu.png","9a598d14aff929d9fbcedf55a6643a84"],["/assets/img/posts/Spring18-1.jpg","6e934902860fe42076a420aea94a9795"],["/assets/img/posts/Spring18-1_lg.jpg","6e934902860fe42076a420aea94a9795"],["/assets/img/posts/Spring18-1_md.jpg","6e934902860fe42076a420aea94a9795"],["/assets/img/posts/Spring18-1_placehold.jpg","6e934902860fe42076a420aea94a9795"],["/assets/img/posts/Spring18-1_sm.jpg","6e934902860fe42076a420aea94a9795"],["/assets/img/posts/Spring18-1_thumb.jpg","6e934902860fe42076a420aea94a9795"],["/assets/img/posts/Spring18-1_thumb@2x.jpg","6e934902860fe42076a420aea94a9795"],["/assets/img/posts/Spring18-1_xs.jpg","6e934902860fe42076a420aea94a9795"],["/assets/img/posts/discord.jpg","eb50a958eda11e86965eed694f5deff7"],["/assets/img/posts/discord.png","eb50a958eda11e86965eed694f5deff7"],["/assets/img/posts/discord_lg.jpg","eb50a958eda11e86965eed694f5deff7"],["/assets/img/posts/discord_md.jpg","eb50a958eda11e86965eed694f5deff7"],["/assets/img/posts/discord_placehold.jpg","eb50a958eda11e86965eed694f5deff7"],["/assets/img/posts/discord_sm.jpg","eb50a958eda11e86965eed694f5deff7"],["/assets/img/posts/discord_thumb.jpg","eb50a958eda11e86965eed694f5deff7"],["/assets/img/posts/discord_thumb@2x.jpg","eb50a958eda11e86965eed694f5deff7"],["/assets/img/posts/discord_thumb_xs.jpg","eb50a958eda11e86965eed694f5deff7"],["/assets/img/posts/emile-perron-190221.jpg","4705474281b975b7a213b96e71f772e7"],["/assets/img/posts/emile-perron-190221_lg.jpg","aafe35b1dc6d9dc9293c8c2ef4121046"],["/assets/img/posts/emile-perron-190221_md.jpg","03ed35ed656429599daba312f0990a0f"],["/assets/img/posts/emile-perron-190221_placehold.jpg","67f40708f69ab671cee04d624258b85c"],["/assets/img/posts/emile-perron-190221_sm.jpg","4ce4178a62d5a456e90e7bc47bde50f5"],["/assets/img/posts/emile-perron-190221_thumb.jpg","f20085dfe2e36854f8a12f1fd6c50425"],["/assets/img/posts/emile-perron-190221_thumb@2x.jpg","b8fa22c3237de529316037f093b9cb4d"],["/assets/img/posts/emile-perron-190221_xs.jpg","ac32cbd525d72e932499668af5647d03"],["/assets/img/posts/hs_student_presents_app.png","0712151e2a75e733fe3ed4ec1bcde6ff"],["/assets/img/posts/punahou_compsci_students.png","528eb90bb9c68b0369b175876f95c97d"],["/assets/img/posts/sacred_hearts_club.jpg","be18656140838bf89fad3083eb4418d2"],["/assets/img/posts/sacred_hearts_club_lg.jpg","be18656140838bf89fad3083eb4418d2"],["/assets/img/posts/sacred_hearts_club_md.jpg","be18656140838bf89fad3083eb4418d2"],["/assets/img/posts/sacred_hearts_club_placehold.jpg","be18656140838bf89fad3083eb4418d2"],["/assets/img/posts/sacred_hearts_club_sm.jpg","be18656140838bf89fad3083eb4418d2"],["/assets/img/posts/sacred_hearts_club_thumb.jpg","be18656140838bf89fad3083eb4418d2"],["/assets/img/posts/sacred_hearts_club_thumb@2x.jpg","be18656140838bf89fad3083eb4418d2"],["/assets/img/posts/sacred_hearts_club_xs.jpg","be18656140838bf89fad3083eb4418d2"],["/assets/img/posts/sacred_hearts_with_acm.png","fca4a65b49e189eba81e728744c0acc6"],["/assets/img/posts/shane-rounce-205187.jpg","bb774d6e05b2b55ffdabe11a8aac7c56"],["/assets/img/posts/shane-rounce-205187_lg.jpg","83cd838024fff9c3faec59fa1da97872"],["/assets/img/posts/shane-rounce-205187_md.jpg","628cf27bf658cf6de9df79ab9bf2cb2d"],["/assets/img/posts/shane-rounce-205187_placehold.jpg","249fc4a09bcfcbd7d5764f14c14ae82e"],["/assets/img/posts/shane-rounce-205187_sm.jpg","a2400a468e10d7d64528ac9c6bc3b6f0"],["/assets/img/posts/shane-rounce-205187_thumb.jpg","c3b2dd0d95a6d3a44d7702f8c06b1e78"],["/assets/img/posts/shane-rounce-205187_thumb@2x.jpg","b0722b63a92c92a44cd92c0201fc92a4"],["/assets/img/posts/shane-rounce-205187_xs.jpg","cd58fd23f3b3c1de2183beb9ed08327b"],["/assets/img/posts/sleek.jpg","a32252a618ffe8ae57c9ce9ab157a01b"],["/assets/img/posts/sleek_lg.jpg","95a1338aa524727f34950f269133e904"],["/assets/img/posts/sleek_md.jpg","4e35ceb2f5fffd3d758fade699b0b85a"],["/assets/img/posts/sleek_placehold.jpg","0f48050cd7776895b98c6ce21597ff39"],["/assets/img/posts/sleek_sm.jpg","f30af3d30b7df905d962e494750f5da0"],["/assets/img/posts/sleek_thumb.jpg","f7b8a94ac9da8e5ea36bb9e459872400"],["/assets/img/posts/sleek_thumb@2x.jpg","e67e2129dc58a100b98a5e027c964dbc"],["/assets/img/posts/sleek_xs.jpg","c8212cace6d446950556a3bf6efe4520"],["/assets/img/sponsors/uhics.png","d11a7c7c262ec5baf3d44a43b2cf61dd"],["/assets/js/bundle.js","df854a763d7d3fd95381b95081eb822f"],["/categories/index.html","d161f39cc16a7d6e9a1622cee3ea43fa"],["/contact/index.html","2dbe947ae60f70568082ddcc34c9163a"],["/getting-started.md/index.html","57684039826ba0d248bf17782eb83626"],["/greyhats/index.html","e636aae6d84db53ad199d4aa7c8c50be"],["/index.html","a5f43fec6f3c66173be21138b75a4a94"],["/markdown-cheatsheet.md/index.html","30e910a5bff0b36dc8923574bc4a805f"],["/slack-to-discord/index.html","3160fc1935a760ff4aced178c60bbfcc"],["/sponsors/index.html","ce53dd6800e0328e3628ad040639498e"],["/super-long-article.md/index.html","a230ded1e3bcd526ecaeeec893022528"],["/sw.js","dcf5739b58dcb56b1b2201353e12c690"],["/welcome-to-jekyll.md/index.html","56385580997ce5c570125d66f22917e5"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







