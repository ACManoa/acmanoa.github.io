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

var precacheConfig = [["/404/index.html","0302ab22e2c687550d1a457fc721179f"],["/about/index.html","cbca6897a5ecd8174da6b8f4de3bbcb9"],["/aci/index.html","a8372f8f93bef43cceaa9fe22c3b3113"],["/acm-graduation-ceremony-spring-2018/index.html","941e1927b32461dd347fac5f3da6abf1"],["/acmanoa-first-general-meeting-fall-2018/index.html","155936cdb056352525cb1b07d0de6b83"],["/acmanoa-outreach-workshop/index.html","bd6d3d4a01a2bf832cf1d056fe790c0c"],["/assets/css/main.css","533a935e31418fedf0d0f03d2e1eb398"],["/assets/img/favicon.jpg","20da386352ac56191203a62359131d07"],["/assets/img/icons/android-chrome-192x192.png","d0a14e63ad1cce3020f5d71763d8870a"],["/assets/img/icons/android-chrome-256x256.png","939ec88a61f407945a27d867fca1651d"],["/assets/img/icons/apple-touch-icon.png","cfa99b6b03097dafc8f1ad46e3e48e26"],["/assets/img/icons/favicon-16x16.png","cff4d90fdce73dae8215fb1d1b0e3361"],["/assets/img/icons/favicon-32x32.png","af7f5aaa04de963acc8b408be2442108"],["/assets/img/icons/icon-github.svg","4e06335104a29f91e08d4ef420da7679"],["/assets/img/icons/icon-instagram.svg","1e1119e2628235ee4c8771bff15eb2ca"],["/assets/img/icons/icon-twitter.svg","30551913d5399d6520e8a74b6f1e23f0"],["/assets/img/icons/mstile-150x150.png","1cea2ceb806d1a018330a51a1d8b73b6"],["/assets/img/icons/post318b.jpg","293b4eb114e36ed61b6a7b84c39bf293"],["/assets/img/icons/safari-pinned-tab.svg","398ef6b25c0f7f3f6e54c112a8facc5f"],["/assets/img/logos/aci-blue.png","6d93d3ab749070c27af53d074a60f3cb"],["/assets/img/logos/aci-orange.png","199b7503b19b93252e2bfa9005b78f17"],["/assets/img/logos/acm.png","d0a14e63ad1cce3020f5d71763d8870a"],["/assets/img/logos/ccdc.png","9271cd535c8b996c45b54ceb98d482d7"],["/assets/img/logos/google-codejam.jpg","77e026d466eaae1e36aa2352d837f161"],["/assets/img/logos/greyhats.png","3cd4c3cbe103d01ea36d527110f5fa23"],["/assets/img/logos/icpc.png","56fc0ceb556dc6f3bcbc1393852a904c"],["/assets/img/logos/manoadatascience.png","be40b92451f660b28e3570e5bf9c5087"],["/assets/img/officers/alicewy.jpg","2a2a1a875ee68cd40408492bffec9c33"],["/assets/img/officers/awyz.jpg","c0bb68115f68b541b83acdebbf12945d"],["/assets/img/officers/bwong7.jpg","cc7c5f922c489a05c591e225cac6310d"],["/assets/img/officers/idemello.png","c6f85402733215e7350e2038630a7e8b"],["/assets/img/officers/khtakani.jpg","1fc4eb3149b2f951b16d27b761a54963"],["/assets/img/officers/nodari.jpg","40992a1501310569a513dcfc63d3a7f3"],["/assets/img/officers/omurray4.png","8cf3e4e81d09312a6e4c98849fa23852"],["/assets/img/officers/placehold.png","18e30e06e9d78dfa501e188b59a72404"],["/assets/img/officers/rknakata.jpg","412d244ab08532a22a19afa773fc5174"],["/assets/img/officers/saehyun.jpg","3646c27d99e2bf3dcc31190407236ad2"],["/assets/img/officers/tcchong.jpg","3b6dddd20b265fa00ff7e7d40f4f3b6d"],["/assets/img/officers/tyu.png","9a598d14aff929d9fbcedf55a6643a84"],["/assets/img/posts/Spring18-1.jpg","6e934902860fe42076a420aea94a9795"],["/assets/img/posts/Spring18-1_lg.jpg","6e934902860fe42076a420aea94a9795"],["/assets/img/posts/Spring18-1_md.jpg","6e934902860fe42076a420aea94a9795"],["/assets/img/posts/Spring18-1_placehold.jpg","6e934902860fe42076a420aea94a9795"],["/assets/img/posts/Spring18-1_sm.jpg","6e934902860fe42076a420aea94a9795"],["/assets/img/posts/Spring18-1_thumb.jpg","6e934902860fe42076a420aea94a9795"],["/assets/img/posts/Spring18-1_thumb@2x.jpg","6e934902860fe42076a420aea94a9795"],["/assets/img/posts/Spring18-1_xs.jpg","6e934902860fe42076a420aea94a9795"],["/assets/img/posts/acmanoa-first-general-meeting-fall-2018/aci.jpg","aa7b3988189c2059d17427c4a0b7fc07"],["/assets/img/posts/acmanoa-first-general-meeting-fall-2018/acmanoa.jpg","30ed6b12a0d8e219203831c7ccc791eb"],["/assets/img/posts/acmanoa-first-general-meeting-fall-2018/crowd1.jpg","47d96326781ee0cc80e419f54ca94d37"],["/assets/img/posts/acmanoa-first-general-meeting-fall-2018/crowd2.jpg","dfc797279a67da4f391d41c52716a400"],["/assets/img/posts/acmanoa-first-general-meeting-fall-2018/crowd3.jpg","8d2cfada52c84760fcfdd8af1cca4be9"],["/assets/img/posts/acmanoa-first-general-meeting-fall-2018/data-science.jpg","3fd850e02fdfbe9f844173627de242e1"],["/assets/img/posts/acmanoa-first-general-meeting-fall-2018/greyhats.jpg","7ed6f3026556cf49be7d5b272719adb2"],["/assets/img/posts/discord.jpg","eb50a958eda11e86965eed694f5deff7"],["/assets/img/posts/discord.png","eb50a958eda11e86965eed694f5deff7"],["/assets/img/posts/discord_lg.jpg","eb50a958eda11e86965eed694f5deff7"],["/assets/img/posts/discord_md.jpg","eb50a958eda11e86965eed694f5deff7"],["/assets/img/posts/discord_placehold.jpg","eb50a958eda11e86965eed694f5deff7"],["/assets/img/posts/discord_sm.jpg","eb50a958eda11e86965eed694f5deff7"],["/assets/img/posts/discord_thumb.jpg","eb50a958eda11e86965eed694f5deff7"],["/assets/img/posts/discord_thumb@2x.jpg","eb50a958eda11e86965eed694f5deff7"],["/assets/img/posts/discord_thumb_xs.jpg","eb50a958eda11e86965eed694f5deff7"],["/assets/img/posts/drfortress-field-trip/logo2.jpg","e4b8e2bec59f8396542a3ba181fc025f"],["/assets/img/posts/drfortress.jpg","0ab6e5982bf8192364c1c4a420b19c5e"],["/assets/img/posts/drfortress_lg.jpg","0ab6e5982bf8192364c1c4a420b19c5e"],["/assets/img/posts/drfortress_md.jpg","0ab6e5982bf8192364c1c4a420b19c5e"],["/assets/img/posts/drfortress_placehold.jpg","0ab6e5982bf8192364c1c4a420b19c5e"],["/assets/img/posts/drfortress_sm.jpg","0ab6e5982bf8192364c1c4a420b19c5e"],["/assets/img/posts/drfortress_thumb.jpg","0ab6e5982bf8192364c1c4a420b19c5e"],["/assets/img/posts/drfortress_thumb@2x.jpg","0ab6e5982bf8192364c1c4a420b19c5e"],["/assets/img/posts/drfortress_xs.jpg","0ab6e5982bf8192364c1c4a420b19c5e"],["/assets/img/posts/emile-perron-190221.jpg","4705474281b975b7a213b96e71f772e7"],["/assets/img/posts/emile-perron-190221_lg.jpg","aafe35b1dc6d9dc9293c8c2ef4121046"],["/assets/img/posts/emile-perron-190221_md.jpg","03ed35ed656429599daba312f0990a0f"],["/assets/img/posts/emile-perron-190221_placehold.jpg","67f40708f69ab671cee04d624258b85c"],["/assets/img/posts/emile-perron-190221_sm.jpg","4ce4178a62d5a456e90e7bc47bde50f5"],["/assets/img/posts/emile-perron-190221_thumb.jpg","f20085dfe2e36854f8a12f1fd6c50425"],["/assets/img/posts/emile-perron-190221_thumb@2x.jpg","b8fa22c3237de529316037f093b9cb4d"],["/assets/img/posts/emile-perron-190221_xs.jpg","ac32cbd525d72e932499668af5647d03"],["/assets/img/posts/first-general-meeting-fall-2018.jpg","47d96326781ee0cc80e419f54ca94d37"],["/assets/img/posts/first-general-meeting-fall-2018_lg.jpg","47d96326781ee0cc80e419f54ca94d37"],["/assets/img/posts/first-general-meeting-fall-2018_md.jpg","47d96326781ee0cc80e419f54ca94d37"],["/assets/img/posts/first-general-meeting-fall-2018_placehold.jpg","47d96326781ee0cc80e419f54ca94d37"],["/assets/img/posts/first-general-meeting-fall-2018_sm.jpg","47d96326781ee0cc80e419f54ca94d37"],["/assets/img/posts/first-general-meeting-fall-2018_thumb.jpg","47d96326781ee0cc80e419f54ca94d37"],["/assets/img/posts/first-general-meeting-fall-2018_thumb@2x.jpg","47d96326781ee0cc80e419f54ca94d37"],["/assets/img/posts/first-general-meeting-fall-2018_thumb_xs.jpg","47d96326781ee0cc80e419f54ca94d37"],["/assets/img/posts/first-general-meeting-fall-2018_xs.jpg","47d96326781ee0cc80e419f54ca94d37"],["/assets/img/posts/hs_student_presents_app.png","0712151e2a75e733fe3ed4ec1bcde6ff"],["/assets/img/posts/icspace-rennovation/footer.jpg","61aac8ebad1ae2ae86cce097a8f71fed"],["/assets/img/posts/icspace-ty.jpg","61aac8ebad1ae2ae86cce097a8f71fed"],["/assets/img/posts/icspace-ty_lg.jpg","61aac8ebad1ae2ae86cce097a8f71fed"],["/assets/img/posts/icspace-ty_md.jpg","61aac8ebad1ae2ae86cce097a8f71fed"],["/assets/img/posts/icspace-ty_placehold.jpg","61aac8ebad1ae2ae86cce097a8f71fed"],["/assets/img/posts/icspace-ty_sm.jpg","61aac8ebad1ae2ae86cce097a8f71fed"],["/assets/img/posts/icspace-ty_thumb.jpg","61aac8ebad1ae2ae86cce097a8f71fed"],["/assets/img/posts/icspace-ty_thumb@2x.jpg","61aac8ebad1ae2ae86cce097a8f71fed"],["/assets/img/posts/icspace-ty_xs.jpg","61aac8ebad1ae2ae86cce097a8f71fed"],["/assets/img/posts/punahou_compsci_students.png","528eb90bb9c68b0369b175876f95c97d"],["/assets/img/posts/sacred_hearts_club.jpg","be18656140838bf89fad3083eb4418d2"],["/assets/img/posts/sacred_hearts_club_lg.jpg","be18656140838bf89fad3083eb4418d2"],["/assets/img/posts/sacred_hearts_club_md.jpg","be18656140838bf89fad3083eb4418d2"],["/assets/img/posts/sacred_hearts_club_placehold.jpg","be18656140838bf89fad3083eb4418d2"],["/assets/img/posts/sacred_hearts_club_sm.jpg","be18656140838bf89fad3083eb4418d2"],["/assets/img/posts/sacred_hearts_club_thumb.jpg","be18656140838bf89fad3083eb4418d2"],["/assets/img/posts/sacred_hearts_club_thumb@2x.jpg","be18656140838bf89fad3083eb4418d2"],["/assets/img/posts/sacred_hearts_club_xs.jpg","be18656140838bf89fad3083eb4418d2"],["/assets/img/posts/sacred_hearts_with_acm.png","fca4a65b49e189eba81e728744c0acc6"],["/assets/img/posts/shane-rounce-205187.jpg","bb774d6e05b2b55ffdabe11a8aac7c56"],["/assets/img/posts/shane-rounce-205187_lg.jpg","83cd838024fff9c3faec59fa1da97872"],["/assets/img/posts/shane-rounce-205187_md.jpg","628cf27bf658cf6de9df79ab9bf2cb2d"],["/assets/img/posts/shane-rounce-205187_placehold.jpg","249fc4a09bcfcbd7d5764f14c14ae82e"],["/assets/img/posts/shane-rounce-205187_sm.jpg","a2400a468e10d7d64528ac9c6bc3b6f0"],["/assets/img/posts/shane-rounce-205187_thumb.jpg","c3b2dd0d95a6d3a44d7702f8c06b1e78"],["/assets/img/posts/shane-rounce-205187_thumb@2x.jpg","b0722b63a92c92a44cd92c0201fc92a4"],["/assets/img/posts/shane-rounce-205187_xs.jpg","cd58fd23f3b3c1de2183beb9ed08327b"],["/assets/img/posts/sleek.jpg","a32252a618ffe8ae57c9ce9ab157a01b"],["/assets/img/posts/sleek_lg.jpg","95a1338aa524727f34950f269133e904"],["/assets/img/posts/sleek_md.jpg","4e35ceb2f5fffd3d758fade699b0b85a"],["/assets/img/posts/sleek_placehold.jpg","0f48050cd7776895b98c6ce21597ff39"],["/assets/img/posts/sleek_sm.jpg","f30af3d30b7df905d962e494750f5da0"],["/assets/img/posts/sleek_thumb.jpg","f7b8a94ac9da8e5ea36bb9e459872400"],["/assets/img/posts/sleek_thumb@2x.jpg","e67e2129dc58a100b98a5e027c964dbc"],["/assets/img/posts/sleek_xs.jpg","c8212cace6d446950556a3bf6efe4520"],["/assets/img/sponsors/FAST.png","af20fc9e56f42b2162a9696a4ec5f099"],["/assets/img/sponsors/crowdstrike.jpg","bf1dedf5c9c979f862b79260f8feb5a7"],["/assets/img/sponsors/cyberhui.jpg","6f2c2f0ed11c8a0d9883dd515a33667b"],["/assets/img/sponsors/oath.png","7c6338928d864a3def6261b775104fd7"],["/assets/img/sponsors/revacomm.jpg","42241c7ed6b7393312830def2f910ba0"],["/assets/img/sponsors/uhics.png","d11a7c7c262ec5baf3d44a43b2cf61dd"],["/assets/js/bundle.js","df854a763d7d3fd95381b95081eb822f"],["/assets/js/vanilla-tilt.min.js","8351aea0565670bbab35cfd0647c6505"],["/categories/index.html","c8cc30f6c74881f1044bf55f94760147"],["/contact/index.html","5d2a9d12113bcdd7dc36c0ebe3402641"],["/datascience/index.html","4b109e3168d2580ad2675429a18e9a78"],["/drfortress-field-trip/index.html","913092512514c0fe4a6fbd074f3da7b7"],["/getting-started.md/index.html","ea1e984552be37d4bdf42dd1abc2b049"],["/greyhats/index.html","64723cf29630af139ca9960cb4088d1c"],["/history/index.html","cf5c6e02c88b50fccf1d6999fd6a406d"],["/icspace-rennovation/index.html","1af413db7d0d19859bff02a5fc5b7722"],["/icspace/index.html","3cd00e8ea6e76955a6c880a23b3ba6c1"],["/index.html","db086783ddc3a98f0bcab52147cb58a6"],["/markdown-cheatsheet.md/index.html","caf2091d227b96bf3012de86b69b9363"],["/slack-to-discord/index.html","1a467bd8d2f4ccdae8ed7cb3a003b60e"],["/sponsors/index.html","696fc1133bbd632ee3d5ffc3d442453b"],["/super-long-article.md/index.html","524ea4bd89b2903b891f9841ac1d9d73"],["/sw.js","34cae1899fe41c86c97eed538ffa753b"],["/welcome-to-jekyll.md/index.html","822b9d2be4757b2987e289e1bb077122"]];
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







