(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "42b6":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "713b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/MainLayout.vue?vue&type=template&id=0f379bfa&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('google-sign-in'),_c('router-view')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/layouts/MainLayout.vue?vue&type=template&id=0f379bfa&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/GoogleSignIn.vue?vue&type=template&id=277cad2c&scoped=true&
var GoogleSignInvue_type_template_id_277cad2c_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('q-card',{staticClass:"my-card",staticStyle:{"width":"120px"}},[_c('q-avatar',{class:{ blur: _vm.isLoading },attrs:{"size":'120px',"color":'primary'}},[_c('q-icon',{staticClass:"icon--size",attrs:{"name":_vm.user.image}})],1),_c('div',{class:{ blur: _vm.isLoading }},[_c('div',{staticClass:"text-subtitle2"},[_vm._v(_vm._s(_vm.user.name))])]),_c('q-card-actions',[(!_vm.isSignedIn)?_c('q-btn',{attrs:{"flat":"","disabled":_vm.isLoading},on:{"click":_vm.signIn}},[_vm._v("Sign In")]):_vm._e(),(_vm.isSignedIn)?_c('q-btn',{attrs:{"flat":"","disabled":_vm.isLoading},on:{"click":_vm.logOff}},[_vm._v("Log Off")]):_vm._e()],1)],1)],1)}
var GoogleSignInvue_type_template_id_277cad2c_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/GoogleSignIn.vue?vue&type=template&id=277cad2c&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7f7f");

// EXTERNAL MODULE: ./src/store/mutation-types.js
var mutation_types = __webpack_require__("9fb0");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/GoogleSignIn.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


function appendPrefixIfImage(image) {
  return /jpg|jpeg|png&/gi.test(image) ? 'img:' + image : image;
}

/* harmony default export */ var GoogleSignInvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      isLoading: false,
      isSignedIn: false
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$store.subscribe(function (_ref) {
      var type = _ref.type;

      if (type === mutation_types["d" /* SIGN_IN */]) {
        _this.isSignedIn = true;
      } else if (type === mutation_types["b" /* LOG_OFF */]) {
        _this.isSignedIn = false;
      }

      _this.isLoading = false;
    });
  },
  computed: {
    user: function user() {
      var _this$$store$state$us = this.$store.state.user,
          name = _this$$store$state$us.name,
          image = _this$$store$state$us.image;
      var i = appendPrefixIfImage(image);
      console.log('name: ', name);
      return {
        name: name,
        image: i
      };
    }
  },
  methods: {
    signIn: function signIn() {
      this.isLoading = true;
      this.$store.dispatch(mutation_types["d" /* SIGN_IN */]);
    },
    logOff: function logOff() {
      this.isLoading = true;
      this.$store.dispatch(mutation_types["b" /* LOG_OFF */]);
    }
  }
});
// CONCATENATED MODULE: ./src/components/GoogleSignIn.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_GoogleSignInvue_type_script_lang_js_ = (GoogleSignInvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/GoogleSignIn.vue?vue&type=style&index=0&id=277cad2c&scoped=true&lang=css&
var GoogleSignInvue_type_style_index_0_id_277cad2c_scoped_true_lang_css_ = __webpack_require__("d8a8");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__("f09f");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/avatar/QAvatar.js
var QAvatar = __webpack_require__("cb32");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__("0016");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardActions.js
var QCardActions = __webpack_require__("4b7e");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js + 1 modules
var QBtn = __webpack_require__("9c40");

// CONCATENATED MODULE: ./src/components/GoogleSignIn.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_GoogleSignInvue_type_script_lang_js_,
  GoogleSignInvue_type_template_id_277cad2c_scoped_true_render,
  GoogleSignInvue_type_template_id_277cad2c_scoped_true_staticRenderFns,
  false,
  null,
  "277cad2c",
  null
  
)

/* harmony default export */ var GoogleSignIn = (component.exports);






runtime_auto_import_default()(component, 'components', {QCard: QCard["a" /* default */],QAvatar: QAvatar["a" /* default */],QIcon: QIcon["a" /* default */],QCardActions: QCardActions["a" /* default */],QBtn: QBtn["a" /* default */]})

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/MainLayout.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var MainLayoutvue_type_script_lang_js_ = ({
  components: {
    GoogleSignIn: GoogleSignIn
  }
});
// CONCATENATED MODULE: ./src/layouts/MainLayout.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_MainLayoutvue_type_script_lang_js_ = (MainLayoutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/bar/QBar.js
var QBar = __webpack_require__("d847");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/tabs/QTabs.js
var QTabs = __webpack_require__("429b");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/tabs/QRouteTab.js + 4 modules
var QRouteTab = __webpack_require__("7867");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/scroll-area/QScrollArea.js + 4 modules
var QScrollArea = __webpack_require__("4983");

// CONCATENATED MODULE: ./src/layouts/MainLayout.vue





/* normalize component */

var MainLayout_component = Object(componentNormalizer["a" /* default */])(
  layouts_MainLayoutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var MainLayout = __webpack_exports__["default"] = (MainLayout_component.exports);







runtime_auto_import_default()(MainLayout_component, 'components', {QBar: QBar["a" /* default */],QBtn: QBtn["a" /* default */],QIcon: QIcon["a" /* default */],QTabs: QTabs["a" /* default */],QRouteTab: QRouteTab["a" /* default */],QScrollArea: QScrollArea["a" /* default */]})


/***/ }),

/***/ "d8a8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_quasar_app_lib_webpack_loader_auto_import_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_GoogleSignIn_vue_vue_type_style_index_0_id_277cad2c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("42b6");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_quasar_app_lib_webpack_loader_auto_import_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_GoogleSignIn_vue_vue_type_style_index_0_id_277cad2c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_quasar_app_lib_webpack_loader_auto_import_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_GoogleSignIn_vue_vue_type_style_index_0_id_277cad2c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_quasar_app_lib_webpack_loader_auto_import_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_GoogleSignIn_vue_vue_type_style_index_0_id_277cad2c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);
//# sourceMappingURL=1.3d40c2e2.js.map