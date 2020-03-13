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
      _this.$store.dispatch(mutation_types["b" /* SET_UP_GOOGLE_AUTHENTICATION_API */]);
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
      var Qt = _ref.Qt;
      var name = Qt.Ad,
          image = Qt.jL;
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
  authInstance.signOut();
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

var googleApiService = {
  setUpAuthInstance: setUpAuthInstance,
  signIn: signIn,
  logOff: logOff,
  listenToSignedInChanges: listenToSignedInChanges
};
/* harmony default export */ var google_api_service = (googleApiService);
// CONCATENATED MODULE: ./src/store/index.js









function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





vue_runtime_esm["default"].use(vuex_esm["a" /* default */]);
var initialState = {
  user: {
    name: 'Anonymous User',
    image: 'far fa-user',
    isSignedIn: false
  }
};
/* harmony default export */ var src_store = (function ()
/* { ssrContext } */
{
  var _mutations, _actions;

  var Store = new vuex_esm["a" /* default */].Store({
    state: _objectSpread({}, initialState),
    mutations: (_mutations = {}, defineProperty_default()(_mutations, mutation_types["c" /* SIGN_IN */], function (state, user) {
      state.user = _objectSpread({}, user);
    }), defineProperty_default()(_mutations, mutation_types["a" /* LOG_OFF */], function (state, user) {
      state.user = _objectSpread({}, user);
    }), _mutations),
    actions: (_actions = {}, defineProperty_default()(_actions, mutation_types["c" /* SIGN_IN */], function (_ref) {
      var commit = _ref.commit;
      google_api_service.signIn().then(function (_ref2) {
        var name = _ref2.name,
            image = _ref2.image;
        commit(mutation_types["c" /* SIGN_IN */], {
          name: name,
          image: image,
          isSignedIn: true
        });
      }, function () {
        commit(mutation_types["a" /* LOG_OFF */], _objectSpread({}, initialState.user));
      });
    }), defineProperty_default()(_actions, mutation_types["a" /* LOG_OFF */], function () {
      google_api_service.logOff();
    }), defineProperty_default()(_actions, mutation_types["b" /* SET_UP_GOOGLE_AUTHENTICATION_API */], function (_ref3) {
      var commit = _ref3.commit;
      google_api_service.setUpAuthInstance().then(function () {
        google_api_service.listenToSignedInChanges(function (_ref4) {
          var isSignedIn = _ref4.isSignedIn,
              user = _ref4.user;

          if (isSignedIn) {
            commit(mutation_types["c" /* SIGN_IN */], {
              name: user.name,
              image: user.image,
              isSignedIn: isSignedIn
            });
          } else {
            commit(mutation_types["a" /* LOG_OFF */], _objectSpread({}, initialState.user));
          }
        });
      });
    }), _actions),
    strict: false
  });
  return Store;
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
      return __webpack_require__.e(/* import() */ 7).then(__webpack_require__.bind(null, "8b24"));
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
      return __webpack_require__.e(/* import() */ 5).then(__webpack_require__.bind(null, "a1d1"));
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
      return Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(6)]).then(__webpack_require__.bind(null, "2973"));
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
      return __webpack_require__.e(/* import() */ 8).then(__webpack_require__.bind(null, "afad"));
    }
  }]
}]; // Always leave this as last one

if (true) {
  routes.push({
    path: '*',
    component: function component() {
      return Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(4)]).then(__webpack_require__.bind(null, "e51e"));
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
  index_es["c" /* library */].add(free_brands_svg_icons_index_es["i" /* faVk */], free_brands_svg_icons_index_es["h" /* faTwitter */], free_brands_svg_icons_index_es["b" /* faFacebook */], free_brands_svg_icons_index_es["e" /* faOdnoklassniki */], free_brands_svg_icons_index_es["d" /* faGooglePlus */], free_brands_svg_icons_index_es["g" /* faTelegram */], free_brands_svg_icons_index_es["a" /* faChrome */], free_brands_svg_icons_index_es["f" /* faOpera */], free_brands_svg_icons_index_es["c" /* faFirefox */], free_solid_svg_icons_index_es["a" /* faThumbsUp */]);
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
            bootFiles = [boot_i18n, vue_social_sharing, fontawesome, boot_vue_plugin_load_script];
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SIGN_IN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOG_OFF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SET_UP_GOOGLE_AUTHENTICATION_API; });
var SIGN_IN = 'SIGN IN';
var LOG_OFF = 'LOG OFF';
var SET_UP_GOOGLE_AUTHENTICATION_API = 'SET_UP_GOOGLE_AUTHENTICATION_API';

/***/ })

},[[0,3,0]]]);
//# sourceMappingURL=app.ac2c4e8f.js.map