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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=54683bfa&
var Appvue_type_template_id_54683bfa_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"q-app"}},[_c('router-view')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=54683bfa&

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
      _this.$store.dispatch(mutation_types["b" /* SET_UP_GOOGLE_CLIENT_ID */]);
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
  Appvue_type_template_id_54683bfa_render,
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



function signIn() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve({
        name: 'Mateusz Garbaciak',
        image: 'img:statics/photo.png'
      });
    }, 1000);
  });
}

function logOff() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve({
        name: '',
        image: ''
      });
    }, 1000);
  });
}

function setUp() {
  gapi.load('client:auth2', function () {
    gapi.client.init({
      clientId: '871050293069-eqou5jodn7u9tahldd0jqdhu10mlk13f.apps.googleusercontent.com',
      scope: 'https://www.googleapis.com/auth/youtube'
    }).then(function () {
      console.log('authenticated');
    });
  });
}

var googleApiService = {
  signIn: signIn,
  logOff: logOff,
  setUp: setUp
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
      });
    }), defineProperty_default()(_actions, mutation_types["a" /* LOG_OFF */], function (_ref3) {
      var commit = _ref3.commit;
      google_api_service.logOff().then(function () {
        commit(mutation_types["a" /* LOG_OFF */], _objectSpread({}, initialState.user));
      });
    }), defineProperty_default()(_actions, mutation_types["b" /* SET_UP_GOOGLE_CLIENT_ID */], function () {
      google_api_service.setUp();
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
      return Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(5)]).then(__webpack_require__.bind(null, "8b24"));
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
    mode: "history",
    base: "/"
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SET_UP_GOOGLE_CLIENT_ID; });
var SIGN_IN = 'SIGN IN';
var LOG_OFF = 'LOG OFF';
var SET_UP_GOOGLE_CLIENT_ID = 'SET_UP_GOOGLE_CLIENT_ID';

/***/ })

},[[0,3,0]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi8ucXVhc2FyL2ltcG9ydC1xdWFzYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC52dWU/ZTRhYiIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwLnZ1ZT80NDE3Iiwid2VicGFjazovLy8uL3NyYy9BcHAudnVlP2M1NzUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2dvb2dsZS1hcGkuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlci9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi8ucXVhc2FyL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaTE4bi9lbi11cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaTE4bi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYm9vdC9pMThuLmpzIiwid2VicGFjazovLy8uL3NyYy9ib290L3Z1ZS1zb2NpYWwtc2hhcmluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYm9vdC9mb250YXdlc29tZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYm9vdC92dWUtcGx1Z2luLWxvYWQtc2NyaXB0LmpzIiwid2VicGFjazovLy8uLy5xdWFzYXIvY2xpZW50LWVudHJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9tdXRhdGlvbi10eXBlcy5qcyJdLCJuYW1lcyI6WyJWdWUiLCJ1c2UiLCJRdWFzYXIiLCJjb25maWciLCJsYW5nIiwiaWNvblNldCIsImdvb2dsZUF1dGhlbnRpY2F0aW9uQXBpIiwibmFtZSIsIm1vdW50ZWQiLCJsb2FkU2NyaXB0IiwidGhlbiIsIiRzdG9yZSIsImRpc3BhdGNoIiwiU0VUX1VQX0dPT0dMRV9DTElFTlRfSUQiLCJzaWduSW4iLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJpbWFnZSIsImxvZ09mZiIsInNldFVwIiwiZ2FwaSIsImxvYWQiLCJjbGllbnQiLCJpbml0IiwiY2xpZW50SWQiLCJzY29wZSIsImNvbnNvbGUiLCJsb2ciLCJnb29nbGVBcGlTZXJ2aWNlIiwiVnVleCIsImluaXRpYWxTdGF0ZSIsInVzZXIiLCJpc1NpZ25lZEluIiwiU3RvcmUiLCJzdGF0ZSIsIm11dGF0aW9ucyIsInR5cGUiLCJhY3Rpb25zIiwiY29tbWl0Iiwic3RyaWN0IiwicHJvY2VzcyIsIkRFViIsInJvdXRlcyIsInBhdGgiLCJjb21wb25lbnQiLCJjaGlsZHJlbiIsInB1c2giLCJWdWVSb3V0ZXIiLCJSb3V0ZXIiLCJzY3JvbGxCZWhhdmlvciIsIngiLCJ5IiwibW9kZSIsImJhc2UiLCJWVUVfUk9VVEVSX0JBU0UiLCJjcmVhdGVTdG9yZSIsInN0b3JlIiwiY3JlYXRlUm91dGVyIiwicm91dGVyIiwiJHJvdXRlciIsImFwcCIsImVsIiwicmVuZGVyIiwiaCIsIkFwcCIsImZhaWxlZCIsInN1Y2Nlc3MiLCJlblVTIiwiVnVlSTE4biIsImkxOG4iLCJsb2NhbGUiLCJmYWxsYmFja0xvY2FsZSIsIm1lc3NhZ2VzIiwiU29jaWFsU2hhcmluZyIsInJlcXVpcmUiLCJsaWJyYXJ5IiwiYWRkIiwiZmFWayIsImZhVHdpdHRlciIsImZhRmFjZWJvb2siLCJmYU9kbm9rbGFzc25pa2kiLCJmYUdvb2dsZVBsdXMiLCJmYVRlbGVncmFtIiwiZmFDaHJvbWUiLCJmYU9wZXJhIiwiZmFGaXJlZm94IiwiZmFUaHVtYnNVcCIsIkZvbnRBd2Vzb21lSWNvbiIsIkxvYWRTY3JpcHQiLCJzdGFydCIsImNyZWF0ZUFwcCIsInJvdXRlVW5jaGFuZ2VkIiwicmVkaXJlY3QiLCJ1cmwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJ1cmxQYXRoIiwicmVwbGFjZSIsIm9yaWdpbiIsImJvb3RGaWxlcyIsInFib290X0Jvb3RpMThuIiwicWJvb3RfQm9vdHZ1ZXNvY2lhbHNoYXJpbmciLCJxYm9vdF9Cb290Zm9udGF3ZXNvbWUiLCJxYm9vdF9Cb290dnVlcGx1Z2lubG9hZHNjcmlwdCIsImkiLCJsZW5ndGgiLCJzc3JDb250ZXh0IiwiZXJyb3IiLCJTSUdOX0lOIiwiTE9HX09GRiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7OztBQVlBO0FBRUE7QUFHQTs7QUFLQUEsMEJBQUcsQ0FBQ0MsR0FBSixDQUFRQyw2QkFBUixFQUFnQjtBQUFFQyxRQUFNLEVBQUUsRUFBVjtBQUFhQyxNQUFJLEVBQUVBLHdCQUFuQjtBQUF3QkMsU0FBTyxFQUFFQSwwQ0FBT0E7QUFBeEMsQ0FBaEIsRTs7QUN0QkEsSUFBSSx1Q0FBTSxnQkFBZ0IsYUFBYSwwQkFBMEIsd0JBQXdCLGlCQUFpQixPQUFPLGNBQWM7QUFDL0g7Ozs7Ozs7OztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQSxJQUFNQyx1QkFBdUIsR0FBRyx3Q0FBaEM7QUFFZTtBQUNYQyxNQUFJLEVBQUUsS0FESztBQUVYQyxTQUZXLHFCQUVEO0FBQUE7O0FBQ05SLDhCQUFHLENBQUNTLFVBQUosQ0FBZUgsdUJBQWYsRUFBd0NJLElBQXhDLENBQTZDLFlBQU07QUFDL0MsV0FBSSxDQUFDQyxNQUFMLENBQVlDLFFBQVosQ0FBcUJDLGlEQUFyQjtBQUNILEtBRkQ7QUFHSDtBQU5VLENBQWYsRTs7QUNaMk8sQ0FBZ0IsK0ZBQUcsRUFBQyxDOzs7OztBQ0E3SztBQUMzQjtBQUNMOzs7QUFHbEQ7QUFDdUY7QUFDdkYsZ0JBQWdCLDhDQUFVO0FBQzFCLEVBQUUsK0JBQU07QUFDUixFQUFFLHVDQUFNO0FBQ1IsRUFBRSxlQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVlLHlEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQmYsU0FBU0MsTUFBVCxHQUFrQjtBQUNkLFNBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUFDLE9B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QUFoQjtBQUNBLElBQU1DLE9BQU8sR0FBRyxTQUFoQjtBQUNBLElBQU1sRyx1QkFBdUIsR0FBRyx5QkFBaEMsQyIsImZpbGUiOiJqcy9hcHAuNzU4OGE0YTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRISVMgRklMRSBJUyBHRU5FUkFURUQgQVVUT01BVElDQUxMWS5cbiAqIERPIE5PVCBFRElULlxuICpcbiAqIFlvdSBhcmUgcHJvYmFibHkgbG9va2luZyBvbiBhZGRpbmcgc3RhcnR1cC9pbml0aWFsaXphdGlvbiBjb2RlLlxuICogVXNlIFwicXVhc2FyIG5ldyBib290IDxuYW1lPlwiIGFuZCBhZGQgaXQgdGhlcmUuXG4gKiBPbmUgYm9vdCBmaWxlIHBlciBjb25jZXJuLiBUaGVuIHJlZmVyZW5jZSB0aGUgZmlsZShzKSBpbiBxdWFzYXIuY29uZi5qcyA+IGJvb3Q6XG4gKiBib290OiBbJ2ZpbGUnLCAuLi5dIC8vIGRvIG5vdCBhZGQgXCIuanNcIiBleHRlbnNpb24gdG8gaXQuXG4gKlxuICogQm9vdCBmaWxlcyBhcmUgeW91ciBcIm1haW4uanNcIlxuICoqL1xuXG5pbXBvcnQgbGFuZyBmcm9tICdxdWFzYXIvbGFuZy9lbi11cydcblxuaW1wb3J0IGljb25TZXQgZnJvbSAncXVhc2FyL2ljb24tc2V0L2ZvbnRhd2Vzb21lLXY1J1xuXG5cbmltcG9ydCBWdWUgZnJvbSAndnVlJ1xuXG5pbXBvcnQge1F1YXNhcn0gZnJvbSAncXVhc2FyJ1xuXG5cblZ1ZS51c2UoUXVhc2FyLCB7IGNvbmZpZzoge30sbGFuZzogbGFuZyxpY29uU2V0OiBpY29uU2V0IH0pXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygnZGl2Jyx7YXR0cnM6e1wiaWRcIjpcInEtYXBwXCJ9fSxbX2MoJ3JvdXRlci12aWV3JyldLDEpfVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG5cbmltcG9ydCB7IFNFVF9VUF9HT09HTEVfQ0xJRU5UX0lEIH0gZnJvbSAnLi9zdG9yZS9tdXRhdGlvbi10eXBlcyc7XG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XG5cbmNvbnN0IGdvb2dsZUF1dGhlbnRpY2F0aW9uQXBpID0gJ2h0dHBzOi8vYXBpcy5nb29nbGUuY29tL2pzL3BsYXRmb3JtLmpzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6ICdBcHAnLFxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIFZ1ZS5sb2FkU2NyaXB0KGdvb2dsZUF1dGhlbnRpY2F0aW9uQXBpKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKFNFVF9VUF9HT09HTEVfQ0xJRU5UX0lEKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbn07XG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTEtMCEuLi9ub2RlX21vZHVsZXMvQHF1YXNhci9hcHAvbGliL3dlYnBhY2svbG9hZGVyLmF1dG8taW1wb3J0LmpzP2tlYmFiIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0xLTAhLi4vbm9kZV9tb2R1bGVzL0BxdWFzYXIvYXBwL2xpYi93ZWJwYWNrL2xvYWRlci5hdXRvLWltcG9ydC5qcz9rZWJhYiEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTQ2ODNiZmEmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZnVuY3Rpb24gc2lnbkluKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnTWF0ZXVzeiBHYXJiYWNpYWsnLFxuICAgICAgICAgICAgICAgIGltYWdlOiAnaW1nOnN0YXRpY3MvcGhvdG8ucG5nJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gbG9nT2ZmKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICBpbWFnZTogJycsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHNldFVwKCkge1xuICAgIGdhcGkubG9hZCgnY2xpZW50OmF1dGgyJywgKCkgPT4ge1xuICAgICAgICBnYXBpLmNsaWVudFxuICAgICAgICAgICAgLmluaXQoe1xuICAgICAgICAgICAgICAgIGNsaWVudElkOlxuICAgICAgICAgICAgICAgICAgICAnODcxMDUwMjkzMDY5LWVxb3U1am9kbjd1OXRhaGxkZDBqcWRodTEwbWxrMTNmLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tJyxcbiAgICAgICAgICAgICAgICBzY29wZTogJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgveW91dHViZScsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhdXRoZW50aWNhdGVkJyk7XG4gICAgICAgICAgICB9KTtcbiAgICB9KTtcbn1cblxuY29uc3QgZ29vZ2xlQXBpU2VydmljZSA9IHtcbiAgICBzaWduSW4sXG4gICAgbG9nT2ZmLFxuICAgIHNldFVwLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZ29vZ2xlQXBpU2VydmljZTtcbiIsImltcG9ydCBWdWUgZnJvbSAndnVlJztcbmltcG9ydCBWdWV4IGZyb20gJ3Z1ZXgnO1xuXG5pbXBvcnQgKiBhcyB0eXBlIGZyb20gJy4vbXV0YXRpb24tdHlwZXMnO1xuXG5pbXBvcnQgZ29vZ2xlQXBpU2VydmljZSBmcm9tICcuLi9zZXJ2aWNlcy9nb29nbGUtYXBpLnNlcnZpY2UnO1xuXG5WdWUudXNlKFZ1ZXgpO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgdXNlcjoge1xuICAgICAgICBuYW1lOiAnQW5vbnltb3VzIFVzZXInLFxuICAgICAgICBpbWFnZTogJ2ZhciBmYS11c2VyJyxcbiAgICAgICAgaXNTaWduZWRJbjogZmFsc2UsXG4gICAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKC8qIHsgc3NyQ29udGV4dCB9ICovKSB7XG4gICAgY29uc3QgU3RvcmUgPSBuZXcgVnVleC5TdG9yZSh7XG4gICAgICAgIHN0YXRlOiB7IC4uLmluaXRpYWxTdGF0ZSB9LFxuICAgICAgICBtdXRhdGlvbnM6IHtcbiAgICAgICAgICAgIFt0eXBlLlNJR05fSU5dKHN0YXRlLCB1c2VyKSB7XG4gICAgICAgICAgICAgICAgc3RhdGUudXNlciA9IHsgLi4udXNlciB9O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFt0eXBlLkxPR19PRkZdKHN0YXRlLCB1c2VyKSB7XG4gICAgICAgICAgICAgICAgc3RhdGUudXNlciA9IHsgLi4udXNlciB9O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgYWN0aW9uczoge1xuICAgICAgICAgICAgW3R5cGUuU0lHTl9JTl0oeyBjb21taXQgfSkge1xuICAgICAgICAgICAgICAgIGdvb2dsZUFwaVNlcnZpY2Uuc2lnbkluKCkudGhlbigoeyBuYW1lLCBpbWFnZSB9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbW1pdCh0eXBlLlNJR05fSU4sIHsgbmFtZSwgaW1hZ2UsIGlzU2lnbmVkSW46IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW3R5cGUuTE9HX09GRl0oeyBjb21taXQgfSkge1xuICAgICAgICAgICAgICAgIGdvb2dsZUFwaVNlcnZpY2UubG9nT2ZmKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbW1pdCh0eXBlLkxPR19PRkYsIHsgLi4uaW5pdGlhbFN0YXRlLnVzZXIgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW3R5cGUuU0VUX1VQX0dPT0dMRV9DTElFTlRfSURdKCkge1xuICAgICAgICAgICAgICAgIGdvb2dsZUFwaVNlcnZpY2Uuc2V0VXAoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHN0cmljdDogcHJvY2Vzcy5lbnYuREVWLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIFN0b3JlO1xufVxuIiwiY29uc3Qgcm91dGVzID0gW1xuICAgIHtcbiAgICAgICAgcGF0aDogJy8nLFxuICAgICAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnbGF5b3V0cy9NYWluTGF5b3V0LnZ1ZScpLFxuICAgICAgICBjaGlsZHJlbjogW3sgcGF0aDogJycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCdwYWdlcy9JbmRleC52dWUnKSB9XSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogJy9hYm91dCcsXG4gICAgICAgIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCdsYXlvdXRzL01haW5MYXlvdXQudnVlJyksXG4gICAgICAgIGNoaWxkcmVuOiBbeyBwYXRoOiAnJywgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJ3BhZ2VzL0Fib3V0LnZ1ZScpIH1dLFxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiAnL2V4dGVuc2lvbicsXG4gICAgICAgIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCdsYXlvdXRzL01haW5MYXlvdXQudnVlJyksXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICB7IHBhdGg6ICcnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgncGFnZXMvRXh0ZW5zaW9uLnZ1ZScpIH0sXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6ICcvcmVjb3ZlcnknLFxuICAgICAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnbGF5b3V0cy9NYWluTGF5b3V0LnZ1ZScpLFxuICAgICAgICBjaGlsZHJlbjogW3sgcGF0aDogJycsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCdwYWdlcy9SZWNvdmVyeS52dWUnKSB9XSxcbiAgICB9LFxuXTtcblxuLy8gQWx3YXlzIGxlYXZlIHRoaXMgYXMgbGFzdCBvbmVcbmlmIChwcm9jZXNzLmVudi5NT0RFICE9PSAnc3NyJykge1xuICAgIHJvdXRlcy5wdXNoKHtcbiAgICAgICAgcGF0aDogJyonLFxuICAgICAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgncGFnZXMvRXJyb3I0MDQudnVlJyksXG4gICAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcztcbiIsImltcG9ydCBWdWUgZnJvbSAndnVlJ1xuaW1wb3J0IFZ1ZVJvdXRlciBmcm9tICd2dWUtcm91dGVyJ1xuXG5pbXBvcnQgcm91dGVzIGZyb20gJy4vcm91dGVzJ1xuXG5WdWUudXNlKFZ1ZVJvdXRlcilcblxuLypcbiAqIElmIG5vdCBidWlsZGluZyB3aXRoIFNTUiBtb2RlLCB5b3UgY2FuXG4gKiBkaXJlY3RseSBleHBvcnQgdGhlIFJvdXRlciBpbnN0YW50aWF0aW9uO1xuICpcbiAqIFRoZSBmdW5jdGlvbiBiZWxvdyBjYW4gYmUgYXN5bmMgdG9vOyBlaXRoZXIgdXNlXG4gKiBhc3luYy9hd2FpdCBvciByZXR1cm4gYSBQcm9taXNlIHdoaWNoIHJlc29sdmVzXG4gKiB3aXRoIHRoZSBSb3V0ZXIgaW5zdGFuY2UuXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKC8qIHsgc3RvcmUsIHNzckNvbnRleHQgfSAqLykge1xuICBjb25zdCBSb3V0ZXIgPSBuZXcgVnVlUm91dGVyKHtcbiAgICBzY3JvbGxCZWhhdmlvcjogKCkgPT4gKHsgeDogMCwgeTogMCB9KSxcbiAgICByb3V0ZXMsXG5cbiAgICAvLyBMZWF2ZSB0aGVzZSBhcyB0aGV5IGFyZSBhbmQgY2hhbmdlIGluIHF1YXNhci5jb25mLmpzIGluc3RlYWQhXG4gICAgLy8gcXVhc2FyLmNvbmYuanMgLT4gYnVpbGQgLT4gdnVlUm91dGVyTW9kZVxuICAgIC8vIHF1YXNhci5jb25mLmpzIC0+IGJ1aWxkIC0+IHB1YmxpY1BhdGhcbiAgICBtb2RlOiBwcm9jZXNzLmVudi5WVUVfUk9VVEVSX01PREUsXG4gICAgYmFzZTogcHJvY2Vzcy5lbnYuVlVFX1JPVVRFUl9CQVNFXG4gIH0pXG5cbiAgcmV0dXJuIFJvdXRlclxufVxuIiwiLyoqXG4gKiBUSElTIEZJTEUgSVMgR0VORVJBVEVEIEFVVE9NQVRJQ0FMTFkuXG4gKiBETyBOT1QgRURJVC5cbiAqXG4gKiBZb3UgYXJlIHByb2JhYmx5IGxvb2tpbmcgb24gYWRkaW5nIHN0YXJ0dXAvaW5pdGlhbGl6YXRpb24gY29kZS5cbiAqIFVzZSBcInF1YXNhciBuZXcgYm9vdCA8bmFtZT5cIiBhbmQgYWRkIGl0IHRoZXJlLlxuICogT25lIGJvb3QgZmlsZSBwZXIgY29uY2Vybi4gVGhlbiByZWZlcmVuY2UgdGhlIGZpbGUocykgaW4gcXVhc2FyLmNvbmYuanMgPiBib290OlxuICogYm9vdDogWydmaWxlJywgLi4uXSAvLyBkbyBub3QgYWRkIFwiLmpzXCIgZXh0ZW5zaW9uIHRvIGl0LlxuICpcbiAqIEJvb3QgZmlsZXMgYXJlIHlvdXIgXCJtYWluLmpzXCJcbiAqKi9cbmltcG9ydCBWdWUgZnJvbSAndnVlJ1xuaW1wb3J0ICcuL2ltcG9ydC1xdWFzYXIuanMnXG5cblxuXG5pbXBvcnQgQXBwIGZyb20gJ2FwcC9zcmMvQXBwLnZ1ZSdcblxuXG5pbXBvcnQgY3JlYXRlU3RvcmUgZnJvbSAnYXBwL3NyYy9zdG9yZS9pbmRleCdcblxuaW1wb3J0IGNyZWF0ZVJvdXRlciBmcm9tICdhcHAvc3JjL3JvdXRlci9pbmRleCdcblxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiAoKSB7XG4gIC8vIGNyZWF0ZSBzdG9yZSBhbmQgcm91dGVyIGluc3RhbmNlc1xuICBcbiAgY29uc3Qgc3RvcmUgPSB0eXBlb2YgY3JlYXRlU3RvcmUgPT09ICdmdW5jdGlvbidcbiAgICA/IGF3YWl0IGNyZWF0ZVN0b3JlKHtWdWV9KVxuICAgIDogY3JlYXRlU3RvcmVcbiAgXG4gIGNvbnN0IHJvdXRlciA9IHR5cGVvZiBjcmVhdGVSb3V0ZXIgPT09ICdmdW5jdGlvbidcbiAgICA/IGF3YWl0IGNyZWF0ZVJvdXRlcih7VnVlLCBzdG9yZX0pXG4gICAgOiBjcmVhdGVSb3V0ZXJcbiAgXG4gIC8vIG1ha2Ugcm91dGVyIGluc3RhbmNlIGF2YWlsYWJsZSBpbiBzdG9yZVxuICBzdG9yZS4kcm91dGVyID0gcm91dGVyXG4gIFxuXG4gIC8vIENyZWF0ZSB0aGUgYXBwIGluc3RhbnRpYXRpb24gT2JqZWN0LlxuICAvLyBIZXJlIHdlIGluamVjdCB0aGUgcm91dGVyLCBzdG9yZSB0byBhbGwgY2hpbGQgY29tcG9uZW50cyxcbiAgLy8gbWFraW5nIHRoZW0gYXZhaWxhYmxlIGV2ZXJ5d2hlcmUgYXMgYHRoaXMuJHJvdXRlcmAgYW5kIGB0aGlzLiRzdG9yZWAuXG4gIGNvbnN0IGFwcCA9IHtcbiAgICBlbDogJyNxLWFwcCcsXG4gICAgcm91dGVyLFxuICAgIHN0b3JlLFxuICAgIHJlbmRlcjogaCA9PiBoKEFwcClcbiAgfVxuXG4gIFxuXG4gIC8vIGV4cG9zZSB0aGUgYXBwLCB0aGUgcm91dGVyIGFuZCB0aGUgc3RvcmUuXG4gIC8vIG5vdGUgd2UgYXJlIG5vdCBtb3VudGluZyB0aGUgYXBwIGhlcmUsIHNpbmNlIGJvb3RzdHJhcHBpbmcgd2lsbCBiZVxuICAvLyBkaWZmZXJlbnQgZGVwZW5kaW5nIG9uIHdoZXRoZXIgd2UgYXJlIGluIGEgYnJvd3NlciBvciBvbiB0aGUgc2VydmVyLlxuICByZXR1cm4ge1xuICAgIGFwcCxcbiAgICBzdG9yZSxcbiAgICByb3V0ZXJcbiAgfVxufVxuIiwiLy8gVGhpcyBpcyBqdXN0IGFuIGV4YW1wbGUsXG4vLyBzbyB5b3UgY2FuIHNhZmVseSBkZWxldGUgYWxsIGRlZmF1bHQgcHJvcHMgYmVsb3dcblxuZXhwb3J0IGRlZmF1bHQge1xuICBmYWlsZWQ6ICdBY3Rpb24gZmFpbGVkJyxcbiAgc3VjY2VzczogJ0FjdGlvbiB3YXMgc3VjY2Vzc2Z1bCdcbn1cbiIsImltcG9ydCBlblVTIGZyb20gJy4vZW4tdXMnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgJ2VuLXVzJzogZW5VU1xufVxuIiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5pbXBvcnQgVnVlSTE4biBmcm9tICd2dWUtaTE4bidcbmltcG9ydCBtZXNzYWdlcyBmcm9tICdzcmMvaTE4bidcblxuVnVlLnVzZShWdWVJMThuKVxuXG5jb25zdCBpMThuID0gbmV3IFZ1ZUkxOG4oe1xuICBsb2NhbGU6ICdlbi11cycsXG4gIGZhbGxiYWNrTG9jYWxlOiAnZW4tdXMnLFxuICBtZXNzYWdlc1xufSlcblxuZXhwb3J0IGRlZmF1bHQgKHsgYXBwIH0pID0+IHtcbiAgLy8gU2V0IGkxOG4gaW5zdGFuY2Ugb24gYXBwXG4gIGFwcC5pMThuID0gaTE4blxufVxuXG5leHBvcnQgeyBpMThuIH1cbiIsImNvbnN0IFNvY2lhbFNoYXJpbmcgPSByZXF1aXJlKFwidnVlLXNvY2lhbC1zaGFyaW5nXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAoeyBWdWUgfSkgPT4ge1xuICBWdWUudXNlKFNvY2lhbFNoYXJpbmcpO1xufTtcbiIsImltcG9ydCB7IGxpYnJhcnkgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUnO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3Z1ZS1mb250YXdlc29tZSc7XG5cbi8vIEljb25zXG5pbXBvcnQgeyBmYVZrIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucyc7XG5pbXBvcnQgeyBmYVR3aXR0ZXIgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zJztcbmltcG9ydCB7IGZhRmFjZWJvb2sgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zJztcbmltcG9ydCB7IGZhT2Rub2tsYXNzbmlraSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMnO1xuaW1wb3J0IHsgZmFHb29nbGVQbHVzIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucyc7XG5pbXBvcnQgeyBmYVRlbGVncmFtIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucyc7XG5pbXBvcnQgeyBmYUNocm9tZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMnO1xuaW1wb3J0IHsgZmFGaXJlZm94IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucyc7XG5pbXBvcnQgeyBmYU9wZXJhIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucyc7XG5cbmltcG9ydCB7IGZhVGh1bWJzVXAgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCAoeyBWdWUgfSkgPT4ge1xuICAgIGxpYnJhcnkuYWRkKFxuICAgICAgICBmYVZrLFxuICAgICAgICBmYVR3aXR0ZXIsXG4gICAgICAgIGZhRmFjZWJvb2ssXG4gICAgICAgIGZhT2Rub2tsYXNzbmlraSxcbiAgICAgICAgZmFHb29nbGVQbHVzLFxuICAgICAgICBmYVRlbGVncmFtLFxuICAgICAgICBmYUNocm9tZSxcbiAgICAgICAgZmFPcGVyYSxcbiAgICAgICAgZmFGaXJlZm94LFxuICAgICAgICBmYVRodW1ic1VwXG4gICAgKTtcbiAgICBWdWUuY29tcG9uZW50KCdmYScsIEZvbnRBd2Vzb21lSWNvbik7XG59O1xuIiwiaW1wb3J0IExvYWRTY3JpcHQgZnJvbSAndnVlLXBsdWdpbi1sb2FkLXNjcmlwdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jICh7IFZ1ZSB9KSA9PiB7XG4gICAgVnVlLnVzZShMb2FkU2NyaXB0KTtcbn07XG4iLCIvKipcbiAqIFRISVMgRklMRSBJUyBHRU5FUkFURUQgQVVUT01BVElDQUxMWS5cbiAqIERPIE5PVCBFRElULlxuICpcbiAqIFlvdSBhcmUgcHJvYmFibHkgbG9va2luZyBvbiBhZGRpbmcgc3RhcnR1cC9pbml0aWFsaXphdGlvbiBjb2RlLlxuICogVXNlIFwicXVhc2FyIG5ldyBib290IDxuYW1lPlwiIGFuZCBhZGQgaXQgdGhlcmUuXG4gKiBPbmUgYm9vdCBmaWxlIHBlciBjb25jZXJuLiBUaGVuIHJlZmVyZW5jZSB0aGUgZmlsZShzKSBpbiBxdWFzYXIuY29uZi5qcyA+IGJvb3Q6XG4gKiBib290OiBbJ2ZpbGUnLCAuLi5dIC8vIGRvIG5vdCBhZGQgXCIuanNcIiBleHRlbnNpb24gdG8gaXQuXG4gKlxuICogQm9vdCBmaWxlcyBhcmUgeW91ciBcIm1haW4uanNcIlxuICoqL1xuXG5cblxuaW1wb3J0ICdAcXVhc2FyL2V4dHJhcy9mb250YXdlc29tZS12NS9mb250YXdlc29tZS12NS5jc3MnXG5cbmltcG9ydCAnQHF1YXNhci9leHRyYXMvcm9ib3RvLWZvbnQvcm9ib3RvLWZvbnQuY3NzJ1xuXG5cblxuXG4vLyBXZSBsb2FkIFF1YXNhciBzdHlsZXNoZWV0IGZpbGVcbmltcG9ydCAncXVhc2FyL2Rpc3QvcXVhc2FyLnNhc3MnXG5cblxuXG5cblxuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5pbXBvcnQgY3JlYXRlQXBwIGZyb20gJy4vYXBwLmpzJ1xuXG5cblxuXG5pbXBvcnQgcWJvb3RfQm9vdGkxOG4gZnJvbSAnYm9vdC9pMThuJ1xuXG5pbXBvcnQgcWJvb3RfQm9vdHZ1ZXNvY2lhbHNoYXJpbmcgZnJvbSAnYm9vdC92dWUtc29jaWFsLXNoYXJpbmcnXG5cbmltcG9ydCBxYm9vdF9Cb290Zm9udGF3ZXNvbWUgZnJvbSAnYm9vdC9mb250YXdlc29tZSdcblxuaW1wb3J0IHFib290X0Jvb3R2dWVwbHVnaW5sb2Fkc2NyaXB0IGZyb20gJ2Jvb3QvdnVlLXBsdWdpbi1sb2FkLXNjcmlwdCdcblxuXG5cblxuXG5cblxuXG5cblxuXG5cbmFzeW5jIGZ1bmN0aW9uIHN0YXJ0ICgpIHtcbiAgY29uc3QgeyBhcHAsIHN0b3JlLCByb3V0ZXIgfSA9IGF3YWl0IGNyZWF0ZUFwcCgpXG5cbiAgXG5cbiAgXG4gIGxldCByb3V0ZVVuY2hhbmdlZCA9IHRydWVcbiAgY29uc3QgcmVkaXJlY3QgPSB1cmwgPT4ge1xuICAgIHJvdXRlVW5jaGFuZ2VkID0gZmFsc2VcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICB9XG5cbiAgY29uc3QgdXJsUGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnJlcGxhY2Uod2luZG93LmxvY2F0aW9uLm9yaWdpbiwgJycpXG4gIGNvbnN0IGJvb3RGaWxlcyA9IFtxYm9vdF9Cb290aTE4bixxYm9vdF9Cb290dnVlc29jaWFsc2hhcmluZyxxYm9vdF9Cb290Zm9udGF3ZXNvbWUscWJvb3RfQm9vdHZ1ZXBsdWdpbmxvYWRzY3JpcHRdXG5cbiAgZm9yIChsZXQgaSA9IDA7IHJvdXRlVW5jaGFuZ2VkID09PSB0cnVlICYmIGkgPCBib290RmlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodHlwZW9mIGJvb3RGaWxlc1tpXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgYXdhaXQgYm9vdEZpbGVzW2ldKHtcbiAgICAgICAgYXBwLFxuICAgICAgICByb3V0ZXIsXG4gICAgICAgIHN0b3JlLFxuICAgICAgICBWdWUsXG4gICAgICAgIHNzckNvbnRleHQ6IG51bGwsXG4gICAgICAgIHJlZGlyZWN0LFxuICAgICAgICB1cmxQYXRoXG4gICAgICB9KVxuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyICYmIGVyci51cmwpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBlcnIudXJsXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zb2xlLmVycm9yKCdbUXVhc2FyXSBib290IGVycm9yOicsIGVycilcbiAgICAgIHJldHVyblxuICAgIH1cbiAgfVxuXG4gIGlmIChyb3V0ZVVuY2hhbmdlZCA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm5cbiAgfVxuICBcblxuICBcblxuICAgIFxuXG4gICAgXG5cbiAgICBuZXcgVnVlKGFwcClcblxuICAgIFxuXG4gIFxuXG59XG5cbnN0YXJ0KClcbiIsImV4cG9ydCBjb25zdCBTSUdOX0lOID0gJ1NJR04gSU4nO1xuZXhwb3J0IGNvbnN0IExPR19PRkYgPSAnTE9HIE9GRic7XG5leHBvcnQgY29uc3QgU0VUX1VQX0dPT0dMRV9DTElFTlRfSUQgPSAnU0VUX1VQX0dPT0dMRV9DTElFTlRfSUQnO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==