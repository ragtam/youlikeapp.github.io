(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("2f39");


/***/ }),

/***/ "2f39":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/regenerator/index.js
var regenerator = __webpack_require__("967e");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__("a481");

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("96cf");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("fa84");
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/@quasar/extras/fontawesome-v5/fontawesome-v5.css
var fontawesome_v5 = __webpack_require__("573e");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/roboto-font/roboto-font.css
var roboto_font = __webpack_require__("7d6e");

// EXTERNAL MODULE: ./node_modules/quasar/dist/quasar.sass
var quasar = __webpack_require__("985d");

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__("2b0e");

// EXTERNAL MODULE: ./node_modules/quasar/lang/en-us.js
var en_us = __webpack_require__("1f91");

// EXTERNAL MODULE: ./node_modules/quasar/icon-set/fontawesome-v5.js
var icon_set_fontawesome_v5 = __webpack_require__("b3f7");

// EXTERNAL MODULE: ./node_modules/quasar/src/vue-plugin.js + 1 modules
var vue_plugin = __webpack_require__("b05d");

// CONCATENATED MODULE: ./.quasar/import-quasar.js
/**
 * THIS FILE IS GENERATED AUTOMATICALLY.
 * DO NOT EDIT.
 *
 * You are probably looking on adding startup/initialization code.
 * Use "quasar new boot <name>" and add it there.
 * One boot file per concern. Then reference the file(s) in quasar.conf.js > boot:
 * boot: ['file', ...] // do not add ".js" extension to it.
 *
 * Boot files are your "main.js"
 **/




vue_runtime_esm["default"].use(vue_plugin["a" /* default */], {
  config: {},
  lang: en_us["a" /* default */],
  iconSet: icon_set_fontawesome_v5["a" /* default */]
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=2b9197ce&
var Appvue_type_template_id_2b9197ce_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"q-app"}},[_c('router-view')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=2b9197ce&

// EXTERNAL MODULE: ./src/store/mutation-types.js
var mutation_types = __webpack_require__("9fb0");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js&
//
//
//
//
//
//


var googleAuthenticationApi = 'https://apis.google.com/js/platform.js';
/* harmony default export */ var Appvue_type_script_lang_js_ = ({
  name: 'App',
  mounted: function mounted() {
    var _this = this;

    vue_runtime_esm["default"].loadScript(googleAuthenticationApi).then(function () {
      _this.$store.dispatch(mutation_types["g" /* SET_UP_GOOGLE_AUTHENTICATION_API */]);
    });
  }
});
// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Appvue_type_script_lang_js_ = (Appvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/App.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_Appvue_type_script_lang_js_,
  Appvue_type_template_id_2b9197ce_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var App = (component.exports);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js
var es7_object_get_own_property_descriptors = __webpack_require__("8e6e");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.symbol.js
var es6_symbol = __webpack_require__("8a81");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("ac6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__("cadf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.to-string.js
var es6_object_to_string = __webpack_require__("06db");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__("456d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7f7f");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js
var defineProperty = __webpack_require__("c47a");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.promise.js
var es6_promise = __webpack_require__("551c");

// CONCATENATED MODULE: ./src/services/google-api.service.js


var publicApi = {
  setUpAuthInstance: setUpAuthInstance,
  signIn: signIn,
  logOff: logOff,
  listenToSignedInChanges: listenToSignedInChanges
};
var clientConfiguration = {
  clientId: '830004684171-h17li43l6bp0j7nf1ln7slv3v6bdcvl0.apps.googleusercontent.com',
  scope: 'https://www.googleapis.com/auth/youtube'
};
var oauthClient = 'client:auth2';
var authInstance;

function setUpAuthInstance() {
  return new Promise(function (resolve) {
    gapi.load(oauthClient, function () {
      gapi.client.init(clientConfiguration).then(function () {
        authInstance = gapi.auth2.getAuthInstance();
      });
    });
  });
}

function signIn() {
  return new Promise(function (resolve, reject) {
    authInstance.signIn().then(function (_ref) {
      var Pt = _ref.Pt;
      var name = Pt.Ad,
          image = Pt.fL;
      resolve({
        name: name,
        image: image
      });
    }, function () {
      reject();
    });
  });
}

function logOff() {
  return authInstance.signOut();
}

function listenToSignedInChanges(callback) {
  if (authInstance.isSignedIn.ie) {
    callback({
      isSignedIn: true,
      user: getSignedInUser()
    });
  }

  authInstance.isSignedIn.listen(function (isSignedIn) {
    var user = isSignedIn ? getSignedInUser() : null;
    callback({
      isSignedIn: isSignedIn,
      user: user
    });
  });
}

function getSignedInUser() {
  var _authInstance$current = authInstance.currentUser.get().getBasicProfile(),
      name = _authInstance$current.Ad,
      image = _authInstance$current.jL;

  return {
    name: name,
    image: image
  };
}

var googleApiService = publicApi;
/* harmony default export */ var google_api_service = (googleApiService);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.iterator.js
var es6_string_iterator = __webpack_require__("5df3");

// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__("2ef0");

// EXTERNAL MODULE: ./node_modules/validator/index.js
var validator = __webpack_require__("f90c");
var validator_default = /*#__PURE__*/__webpack_require__.n(validator);

// EXTERNAL MODULE: ./src/services/youtube-url-parser.service.js
var youtube_url_parser_service = __webpack_require__("c7ad");

// CONCATENATED MODULE: ./src/services/youtube-rating.service.js








var youtube_rating_service_publicApi = {
  checkVideos: checkVideos,
  setRating: setRating
};
var maxSizeOfGapiBatchRequest = 580;
var gapiService = {
  name: 'youtube',
  version: 'v3'
};

function checkVideos(videos) {
  var videoIds = Object(lodash["uniq"])(extractVideoIds(videos));
  var videoIdsChunksMatrix = split(videoIds).intoChunksOf(maxSizeOfGapiBatchRequest);
  return loadGapiClient().then(function () {
    var promisesArray = [];
    videoIdsChunksMatrix.forEach(function (videoIdsChunk) {
      console.log(videoIdsChunk);
      var promise = gapi.client.youtube.videos.getRating({
        id: videoIdsChunk.join(',')
      });
      promisesArray.push(promise);
    });
    return Promise.all(promisesArray);
  }).then(function (responses) {
    var withLikes = [];
    var withoutLikes = [];

    for (var i = 0; i < responses.length; i++) {
      var response = responses[i];
      var videoRatingArray = response.result.items;

      for (var _i = 0; _i < videoRatingArray.length; _i++) {
        var videoRating = videoRatingArray[_i];

        if (videoRating.rating !== 'like') {
          withoutLikes.push(videoRating.videoId);
        } else {
          withLikes.push(videoRating.videoId);
        }
      }
    }

    return {
      withLikes: withLikes,
      withoutLikes: withoutLikes
    };
  }, function (data) {
    console.error('youtube-rating.service.js'); // toastr.error(`Не удалось проверить список видео.`);

    return data;
  });
}

function setRating(videoIds, rating, onSuccess, onError) {
  return loadGapiClient().then(function () {
    var promisesArray = [];
    var recoveredVideos = {
      successfull: [],
      failed: []
    };
    videoIds.forEach(function (videoId) {
      var promise = gapi.client.youtube.videos.rate({
        id: videoId,
        rating: rating
      }).then(function () {
        recoveredVideos.successfull.push(videoId);
      }, function () {
        recoveredVideos.failed.push(videoId);
      });
      promisesArray.push(promise);
    });
    return Promise.all(promisesArray).then(function () {
      return Promise.resolve(recoveredVideos);
    });
  });
}

function loadGapiClient() {
  return gapi.client.load(gapiService.name, gapiService.version);
}

function extractVideoIds(videos) {
  return videos.map(function (videoUrl) {
    return validator_default.a.isURL(videoUrl) ? youtube_url_parser_service["a" /* default */].getVideoId(videoUrl) : videoUrl;
  });
}

function split(arrayToSplit) {
  return {
    intoChunksOf: function intoChunksOf(chunkSize) {
      return _.chunk(arrayToSplit, chunkSize);
    }
  };
}

var youtubeRatingService = youtube_rating_service_publicApi;
/* harmony default export */ var youtube_rating_service = (youtubeRatingService);
// CONCATENATED MODULE: ./src/services/storage.service.js


var storage_service_publicApi = {
  save: save,
  get: get,
  remove: remove
};

function save(key, value) {
  var valueStringified = JSON.stringify(value);
  localStorage.setItem(key, valueStringified);
  return Promise.resolve(get(key));
}

function get(key) {
  var stringifiedValue = localStorage.getItem(key);
  var obj = JSON.parse(stringifiedValue);
  return Promise.resolve(obj);
}

function remove(key) {
  localStorage.removeItem(key);
  return Promise.resolve(get(key));
}

var storageService = storage_service_publicApi;
/* harmony default export */ var storage_service = (storageService);
// CONCATENATED MODULE: ./src/store/index.js









var _mutations, _actions;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







vue_runtime_esm["default"].use(vuex_esm["a" /* default */]);
var videosStorageKey = 'videosList';
var initialState = {
  user: {
    name: 'Anonymous User',
    image: 'far fa-user',
    isSignedIn: false
  },
  checkedVideos: {
    withLikes: [],
    withoutLikes: []
  },
  recoveredVideos: {
    successful: [],
    failed: []
  },
  savedVideos: []
};
var mutations = (_mutations = {}, defineProperty_default()(_mutations, mutation_types["h" /* SIGN_IN */], function (state, user) {
  state.user = _objectSpread({}, user);
}), defineProperty_default()(_mutations, mutation_types["c" /* LOG_OFF */], function (state, user) {
  state.user = _objectSpread({}, user);
}), defineProperty_default()(_mutations, mutation_types["a" /* CHECK_VIDEOS */], function (state, checkedVideos) {
  state.checkedVideos = _objectSpread({}, checkedVideos);
}), defineProperty_default()(_mutations, mutation_types["b" /* GET_SAVED_VIDEOS */], function (state, savedVideos) {
  state.savedVideos = savedVideos;
}), defineProperty_default()(_mutations, mutation_types["e" /* REMOVE_VIDEOS */], function (state, removedVideos) {
  state.savedVideos = removedVideos;
}), defineProperty_default()(_mutations, mutation_types["f" /* SAVE_VIDEOS */], function (state, savedVideos) {
  state.savedVideos = savedVideos;
}), defineProperty_default()(_mutations, mutation_types["d" /* RECOVER_VIDEOS */], function (state, recoveredVideos) {
  state.recoveredVideos = recoveredVideos;
}), _mutations);
var actions = (_actions = {}, defineProperty_default()(_actions, mutation_types["h" /* SIGN_IN */], function (_ref) {
  var commit = _ref.commit;
  google_api_service.signIn().then(function (_ref2) {
    var name = _ref2.name,
        image = _ref2.image;
    commit(mutation_types["h" /* SIGN_IN */], {
      name: name,
      image: image,
      isSignedIn: true
    });
  }, function () {
    commit(mutation_types["c" /* LOG_OFF */], _objectSpread({}, initialState.user));
  });
}), defineProperty_default()(_actions, mutation_types["c" /* LOG_OFF */], function (_ref3) {
  var commit = _ref3.commit;
  google_api_service.logOff().then(function () {
    commit(mutation_types["c" /* LOG_OFF */], _objectSpread({}, initialState.user));
  });
}), defineProperty_default()(_actions, mutation_types["g" /* SET_UP_GOOGLE_AUTHENTICATION_API */], function (_ref4) {
  var commit = _ref4.commit;
  google_api_service.setUpAuthInstance().then(function () {
    google_api_service.listenToSignedInChanges(function (_ref5) {
      var isSignedIn = _ref5.isSignedIn,
          user = _ref5.user;

      if (isSignedIn) {
        commit(mutation_types["h" /* SIGN_IN */], {
          name: user.name,
          image: user.image,
          isSignedIn: isSignedIn
        });
      } else {
        commit(mutation_types["c" /* LOG_OFF */], _objectSpread({}, initialState.user));
      }
    });
  });
}), defineProperty_default()(_actions, mutation_types["a" /* CHECK_VIDEOS */], function (_ref6, _ref7) {
  var commit = _ref6.commit;
  var videosToCheck = _ref7.videosToCheck;
  youtube_rating_service.checkVideos(videosToCheck).then(function (checkedVideos) {
    commit(mutation_types["a" /* CHECK_VIDEOS */], checkedVideos);
  });
}), defineProperty_default()(_actions, mutation_types["b" /* GET_SAVED_VIDEOS */], function (_ref8) {
  var commit = _ref8.commit;
  setTimeout(function () {
    storage_service.get(videosStorageKey).then(function (res) {
      var savedVideos = res || [];
      commit(mutation_types["b" /* GET_SAVED_VIDEOS */], savedVideos);
    });
  }, 1000);
}), defineProperty_default()(_actions, mutation_types["f" /* SAVE_VIDEOS */], function (_ref9, _ref10) {
  var commit = _ref9.commit;
  var videosToSave = _ref10.videosToSave;
  storage_service.save(videosStorageKey, videosToSave).then(function (result) {
    commit(mutation_types["f" /* SAVE_VIDEOS */], result);
  });
}), defineProperty_default()(_actions, mutation_types["e" /* REMOVE_VIDEOS */], function (_ref11) {
  var commit = _ref11.commit;
  storage_service.remove(videosStorageKey).then(function (result) {
    commit(mutation_types["e" /* REMOVE_VIDEOS */], result || []);
  });
}), defineProperty_default()(_actions, mutation_types["d" /* RECOVER_VIDEOS */], function (_ref12, _ref13) {
  var commit = _ref12.commit;
  var videosToRecover = _ref13.videosToRecover;
  youtube_rating_service.setRating(videosToRecover, 'like').then(function (result) {
    commit(mutation_types["d" /* RECOVER_VIDEOS */], result || []);
  });
}), _actions);
/* harmony default export */ var src_store = (function ()
/* { ssrContext } */
{
  return new vuex_esm["a" /* default */].Store({
    state: _objectSpread({}, initialState),
    mutations: mutations,
    actions: actions,
    strict: false
  });
});
// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm.js
var vue_router_esm = __webpack_require__("8c4f");

// CONCATENATED MODULE: ./src/router/routes.js
var routes = [{
  path: '/',
  component: function component() {
    return Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, "713b"));
  },
  children: [{
    path: '',
    component: function component() {
      return Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(4)]).then(__webpack_require__.bind(null, "bc13b"));
    }
  }]
}, {
  path: '/about',
  component: function component() {
    return Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, "713b"));
  },
  children: [{
    path: '',
    component: function component() {
      return __webpack_require__.e(/* import() */ 6).then(__webpack_require__.bind(null, "a1d1"));
    }
  }]
}, {
  path: '/extension',
  component: function component() {
    return Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, "713b"));
  },
  children: [{
    path: '',
    component: function component() {
      return Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(7)]).then(__webpack_require__.bind(null, "2973"));
    }
  }]
}, {
  path: '/recovery',
  component: function component() {
    return Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, "713b"));
  },
  children: [{
    path: '',
    component: function component() {
      return Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(8)]).then(__webpack_require__.bind(null, "afad"));
    }
  }]
}]; // Always leave this as last one

if (true) {
  routes.push({
    path: '*',
    component: function component() {
      return Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(5)]).then(__webpack_require__.bind(null, "e51e"));
    }
  });
}

/* harmony default export */ var router_routes = (routes);
// CONCATENATED MODULE: ./src/router/index.js



vue_runtime_esm["default"].use(vue_router_esm["a" /* default */]);
/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

/* harmony default export */ var src_router = (function ()
/* { store, ssrContext } */
{
  var Router = new vue_router_esm["a" /* default */]({
    scrollBehavior: function scrollBehavior() {
      return {
        x: 0,
        y: 0
      };
    },
    routes: router_routes,
    // Leave these as they are and change in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: "hash",
    base: ""
  });
  return Router;
});
// CONCATENATED MODULE: ./.quasar/app.js




/**
 * THIS FILE IS GENERATED AUTOMATICALLY.
 * DO NOT EDIT.
 *
 * You are probably looking on adding startup/initialization code.
 * Use "quasar new boot <name>" and add it there.
 * One boot file per concern. Then reference the file(s) in quasar.conf.js > boot:
 * boot: ['file', ...] // do not add ".js" extension to it.
 *
 * Boot files are your "main.js"
 **/





/* harmony default export */ var _quasar_app = (function () {
  return app_ref.apply(this, arguments);
});

function app_ref() {
  app_ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
    var store, router, app;
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(typeof src_store === 'function')) {
              _context.next = 6;
              break;
            }

            _context.next = 3;
            return src_store({
              Vue: vue_runtime_esm["default"]
            });

          case 3:
            _context.t0 = _context.sent;
            _context.next = 7;
            break;

          case 6:
            _context.t0 = src_store;

          case 7:
            store = _context.t0;

            if (!(typeof src_router === 'function')) {
              _context.next = 14;
              break;
            }

            _context.next = 11;
            return src_router({
              Vue: vue_runtime_esm["default"],
              store: store
            });

          case 11:
            _context.t1 = _context.sent;
            _context.next = 15;
            break;

          case 14:
            _context.t1 = src_router;

          case 15:
            router = _context.t1;
            // make router instance available in store
            store.$router = router; // Create the app instantiation Object.
            // Here we inject the router, store to all child components,
            // making them available everywhere as `this.$router` and `this.$store`.

            app = {
              el: '#q-app',
              router: router,
              store: store,
              render: function render(h) {
                return h(App);
              }
            }; // expose the app, the router and the store.
            // note we are not mounting the app here, since bootstrapping will be
            // different depending on whether we are in a browser or on the server.

            return _context.abrupt("return", {
              app: app,
              store: store,
              router: router
            });

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return app_ref.apply(this, arguments);
}
// EXTERNAL MODULE: ./node_modules/vue-i18n/dist/vue-i18n.esm.js
var vue_i18n_esm = __webpack_require__("a925");

// CONCATENATED MODULE: ./src/i18n/en-us/index.js
// This is just an example,
// so you can safely delete all default props below
/* harmony default export */ var i18n_en_us = ({
  failed: 'Action failed',
  success: 'Action was successful'
});
// CONCATENATED MODULE: ./src/i18n/index.js

/* harmony default export */ var i18n = ({
  'en-us': i18n_en_us
});
// CONCATENATED MODULE: ./src/boot/i18n.js



vue_runtime_esm["default"].use(vue_i18n_esm["a" /* default */]);
var i18n_i18n = new vue_i18n_esm["a" /* default */]({
  locale: 'en-us',
  fallbackLocale: 'en-us',
  messages: i18n
});
/* harmony default export */ var boot_i18n = (function (_ref) {
  var app = _ref.app;
  // Set i18n instance on app
  app.i18n = i18n_i18n;
});

// CONCATENATED MODULE: ./src/boot/vue-social-sharing.js




var SocialSharing = __webpack_require__("5299");

/* harmony default export */ var vue_social_sharing = (/*#__PURE__*/(function () {
  var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee(_ref2) {
    var Vue;
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            Vue = _ref2.Vue;
            Vue.use(SocialSharing);

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
})());
// EXTERNAL MODULE: ./node_modules/@fortawesome/fontawesome-svg-core/index.es.js
var index_es = __webpack_require__("ecee");

// EXTERNAL MODULE: ./node_modules/@fortawesome/vue-fontawesome/index.es.js
var vue_fontawesome_index_es = __webpack_require__("ad3d");

// EXTERNAL MODULE: ./node_modules/@fortawesome/free-brands-svg-icons/index.es.js
var free_brands_svg_icons_index_es = __webpack_require__("f2d1");

// EXTERNAL MODULE: ./node_modules/@fortawesome/free-solid-svg-icons/index.es.js
var free_solid_svg_icons_index_es = __webpack_require__("c074");

// CONCATENATED MODULE: ./src/boot/fontawesome.js

 // Icons












/* harmony default export */ var fontawesome = (function (_ref) {
  var Vue = _ref.Vue;
  index_es["c" /* library */].add(free_brands_svg_icons_index_es["j" /* faVk */], free_brands_svg_icons_index_es["i" /* faTwitter */], free_brands_svg_icons_index_es["b" /* faFacebook */], free_brands_svg_icons_index_es["f" /* faOdnoklassniki */], free_brands_svg_icons_index_es["e" /* faGooglePlus */], free_brands_svg_icons_index_es["h" /* faTelegram */], free_brands_svg_icons_index_es["a" /* faChrome */], free_brands_svg_icons_index_es["g" /* faOpera */], free_brands_svg_icons_index_es["c" /* faFirefox */], free_solid_svg_icons_index_es["f" /* faThumbsUp */], free_solid_svg_icons_index_es["d" /* faSave */], free_solid_svg_icons_index_es["e" /* faTasks */], free_solid_svg_icons_index_es["a" /* faFileDownload */], free_solid_svg_icons_index_es["g" /* faTrashAlt */], free_brands_svg_icons_index_es["d" /* faGithub */], free_solid_svg_icons_index_es["b" /* faHome */], free_solid_svg_icons_index_es["c" /* faRecycle */]);
  Vue.component('fa', vue_fontawesome_index_es["a" /* FontAwesomeIcon */]);
});
// EXTERNAL MODULE: ./node_modules/vue-plugin-load-script/index.js
var vue_plugin_load_script = __webpack_require__("67b0");

// CONCATENATED MODULE: ./src/boot/vue-plugin-load-script.js




/* harmony default export */ var boot_vue_plugin_load_script = (/*#__PURE__*/(function () {
  var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee(_ref2) {
    var Vue;
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            Vue = _ref2.Vue;
            Vue.use(vue_plugin_load_script["a" /* default */]);

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
})());
// EXTERNAL MODULE: ./node_modules/vuelidate/lib/index.js
var lib = __webpack_require__("1dce");
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: ./src/boot/vuelidate.js




/* harmony default export */ var vuelidate = (/*#__PURE__*/(function () {
  var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee(_ref2) {
    var Vue;
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            Vue = _ref2.Vue;
            Vue.use(lib_default.a);

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
})());
// CONCATENATED MODULE: ./.quasar/client-entry.js





/**
 * THIS FILE IS GENERATED AUTOMATICALLY.
 * DO NOT EDIT.
 *
 * You are probably looking on adding startup/initialization code.
 * Use "quasar new boot <name>" and add it there.
 * One boot file per concern. Then reference the file(s) in quasar.conf.js > boot:
 * boot: ['file', ...] // do not add ".js" extension to it.
 *
 * Boot files are your "main.js"
 **/

 // We load Quasar stylesheet file










function start() {
  return _start.apply(this, arguments);
}

function _start() {
  _start = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
    var _ref, app, store, router, routeUnchanged, redirect, urlPath, bootFiles, i;

    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _quasar_app();

          case 2:
            _ref = _context.sent;
            app = _ref.app;
            store = _ref.store;
            router = _ref.router;
            routeUnchanged = true;

            redirect = function redirect(url) {
              routeUnchanged = false;
              window.location.href = url;
            };

            urlPath = window.location.href.replace(window.location.origin, '');
            bootFiles = [boot_i18n, vue_social_sharing, fontawesome, boot_vue_plugin_load_script, vuelidate];
            i = 0;

          case 11:
            if (!(routeUnchanged === true && i < bootFiles.length)) {
              _context.next = 29;
              break;
            }

            if (!(typeof bootFiles[i] !== 'function')) {
              _context.next = 14;
              break;
            }

            return _context.abrupt("continue", 26);

          case 14:
            _context.prev = 14;
            _context.next = 17;
            return bootFiles[i]({
              app: app,
              router: router,
              store: store,
              Vue: vue_runtime_esm["default"],
              ssrContext: null,
              redirect: redirect,
              urlPath: urlPath
            });

          case 17:
            _context.next = 26;
            break;

          case 19:
            _context.prev = 19;
            _context.t0 = _context["catch"](14);

            if (!(_context.t0 && _context.t0.url)) {
              _context.next = 24;
              break;
            }

            window.location.href = _context.t0.url;
            return _context.abrupt("return");

          case 24:
            console.error('[Quasar] boot error:', _context.t0);
            return _context.abrupt("return");

          case 26:
            i++;
            _context.next = 11;
            break;

          case 29:
            if (!(routeUnchanged === false)) {
              _context.next = 31;
              break;
            }

            return _context.abrupt("return");

          case 31:
            new vue_runtime_esm["default"](app);

          case 32:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[14, 19]]);
  }));
  return _start.apply(this, arguments);
}

start();

/***/ }),

/***/ "9fb0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return SIGN_IN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LOG_OFF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return SET_UP_GOOGLE_AUTHENTICATION_API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CHECK_VIDEOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GET_SAVED_VIDEOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return SAVE_VIDEOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return REMOVE_VIDEOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return RECOVER_VIDEOS; });
var SIGN_IN = 'SIGN_IN';
var LOG_OFF = 'LOG_OFF';
var SET_UP_GOOGLE_AUTHENTICATION_API = 'SET_UP_GOOGLE_AUTHENTICATION_API';
var CHECK_VIDEOS = 'CHECK_VIDEOS';
var GET_SAVED_VIDEOS = 'GET_SAVED_VIDEOS';
var SAVE_VIDEOS = 'SAVE_VIDEOS';
var REMOVE_VIDEOS = 'REMOVE_VIDEOS';
var RECOVER_VIDEOS = 'RECOVER_VIDEOS';

/***/ }),

/***/ "c7ad":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("72bf");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_0__);

var publicApi = {
  getVideoId: getVideoId,
  isIdValid: isIdValid
};

function getVideoId(url) {
  return query_string__WEBPACK_IMPORTED_MODULE_0___default.a.parse(query_string__WEBPACK_IMPORTED_MODULE_0___default.a.extract(url)).v;
}

function isIdValid(videoId) {
  // https://webapps.stackexchange.com/questions/54443/format-for-id-of-youtube-video
  return /[0-9A-Za-z_-]{10}[048AEIMQUYcgkosw]/.test(videoId);
}

var youtubeUrlParserService = publicApi;
/* harmony default export */ __webpack_exports__["a"] = (youtubeUrlParserService);

/***/ })

},[[0,3,0]]]);
//# sourceMappingURL=app.480d9528.js.map