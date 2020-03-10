(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "17b4":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "713b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/MainLayout.vue?vue&type=template&id=1ab4185d&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('google-sign-in'),_c('router-view')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/layouts/MainLayout.vue?vue&type=template&id=1ab4185d&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/google-sign-in.vue?vue&type=template&id=57dbc452&scoped=true&
var google_sign_invue_type_template_id_57dbc452_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('q-card',{staticClass:"my-card",staticStyle:{"width":"120px"}},[_c('q-avatar',{class:{ blur: _vm.isLoading },attrs:{"size":'120px',"color":'primary'}},[_c('q-icon',{staticClass:"icon--size",attrs:{"name":_vm.user.image}})],1),_c('div',{class:{ blur: _vm.isLoading }},[_c('div',{staticClass:"text-subtitle2"},[_vm._v(_vm._s(_vm.user.name))])]),_c('q-card-actions',[(!_vm.isSignedIn)?_c('q-btn',{attrs:{"flat":"","disabled":_vm.isLoading},on:{"click":_vm.signIn}},[_vm._v("Sign In")]):_vm._e(),(_vm.isSignedIn)?_c('q-btn',{attrs:{"flat":"","disabled":_vm.isLoading},on:{"click":_vm.logOff}},[_vm._v("Log Off")]):_vm._e()],1)],1)],1)}
var google_sign_invue_type_template_id_57dbc452_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/google-sign-in.vue?vue&type=template&id=57dbc452&scoped=true&

// EXTERNAL MODULE: ./src/store/mutation-types.js
var mutation_types = __webpack_require__("9fb0");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/google-sign-in.vue?vue&type=script&lang=js&
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

/* harmony default export */ var google_sign_invue_type_script_lang_js_ = ({
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

      if (type === mutation_types["c" /* SIGN_IN */]) {
        _this.isSignedIn = true;
      } else if (type === mutation_types["a" /* LOG_OFF */]) {
        _this.isSignedIn = false;
      }

      _this.isLoading = false;
    });
  },
  computed: {
    user: function user() {
      return this.$store.state.user;
    }
  },
  methods: {
    signIn: function signIn() {
      this.isLoading = true;
      this.$store.dispatch(mutation_types["c" /* SIGN_IN */]);
    },
    logOff: function logOff() {
      this.isLoading = true;
      this.$store.dispatch(mutation_types["a" /* LOG_OFF */]);
    }
  }
});
// CONCATENATED MODULE: ./src/components/google-sign-in.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_google_sign_invue_type_script_lang_js_ = (google_sign_invue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/google-sign-in.vue?vue&type=style&index=0&id=57dbc452&scoped=true&lang=css&
var google_sign_invue_type_style_index_0_id_57dbc452_scoped_true_lang_css_ = __webpack_require__("c21a");

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

// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js + 3 modules
var QBtn = __webpack_require__("9c40");

// CONCATENATED MODULE: ./src/components/google-sign-in.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_google_sign_invue_type_script_lang_js_,
  google_sign_invue_type_template_id_57dbc452_scoped_true_render,
  google_sign_invue_type_template_id_57dbc452_scoped_true_staticRenderFns,
  false,
  null,
  "57dbc452",
  null
  
)

/* harmony default export */ var google_sign_in = (component.exports);






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
    GoogleSignIn: google_sign_in
  }
});
// CONCATENATED MODULE: ./src/layouts/MainLayout.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_MainLayoutvue_type_script_lang_js_ = (MainLayoutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/bar/QBar.js
var QBar = __webpack_require__("d847");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/tabs/QTabs.js + 1 modules
var QTabs = __webpack_require__("429b");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/tabs/QRouteTab.js + 4 modules
var QRouteTab = __webpack_require__("7867");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/scroll-area/QScrollArea.js + 5 modules
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

/***/ "c21a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_quasar_app_lib_webpack_loader_auto_import_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_google_sign_in_vue_vue_type_style_index_0_id_57dbc452_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("17b4");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_quasar_app_lib_webpack_loader_auto_import_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_google_sign_in_vue_vue_type_style_index_0_id_57dbc452_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_quasar_app_lib_webpack_loader_auto_import_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_google_sign_in_vue_vue_type_style_index_0_id_57dbc452_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_quasar_app_lib_webpack_loader_auto_import_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_google_sign_in_vue_vue_type_style_index_0_id_57dbc452_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9nb29nbGUtc2lnbi1pbi52dWU/N2RjOSIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0cy9NYWluTGF5b3V0LnZ1ZT82NWJjIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2dvb2dsZS1zaWduLWluLnZ1ZT81ZDNmIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2dvb2dsZS1zaWduLWluLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9nb29nbGUtc2lnbi1pbi52dWU/ZmI1OCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9nb29nbGUtc2lnbi1pbi52dWU/MGVlNSIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0cy9NYWluTGF5b3V0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0cy9NYWluTGF5b3V0LnZ1ZT8zYTRhIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXRzL01haW5MYXlvdXQudnVlP2E4YWMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZ29vZ2xlLXNpZ24taW4udnVlPzljOGQiXSwibmFtZXMiOlsiZGF0YSIsImlzTG9hZGluZyIsImlzU2lnbmVkSW4iLCJtb3VudGVkIiwiJHN0b3JlIiwic3Vic2NyaWJlIiwidHlwZSIsIlNJR05fSU4iLCJMT0dfT0ZGIiwiY29tcHV0ZWQiLCJ1c2VyIiwic3RhdGUiLCJtZXRob2RzIiwic2lnbkluIiwiZGlzcGF0Y2giLCJsb2dPZmYiLCJjb21wb25lbnRzIiwiR29vZ2xlU2lnbkluIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHVDOzs7Ozs7Ozs7OztBQ0FBLDBCQUEwQixhQUFhLDBCQUEwQix3QkFBd0I7QUFDekY7Ozs7OztBQ0RBLElBQUksOERBQU0sZ0JBQWdCLGFBQWEsMEJBQTBCLHdCQUF3Qiw4QkFBOEIsbUNBQW1DLGlCQUFpQixpQkFBaUIsT0FBTyxzQkFBc0IsUUFBUSxrQ0FBa0MsZUFBZSxnQ0FB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O0FBQ1IsRUFBRSxNQUFNO0FBQ1IsRUFBRSxlQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVlLG9HQUFTLFFBQVE7QUFDd0Q7QUFDcEM7QUFDQTtBQUNHO0FBQ0E7QUFDUTtBQUNXO0FBQzFFLDZCQUFRLENBQUMsb0JBQVMsaUJBQWlCLDZCQUFJLENBQUMsNkJBQUksQ0FBQywrQkFBSyxDQUFDLCtCQUFLLENBQUMsdUNBQVMsQ0FBQywyQ0FBVyxDQUFDOzs7Ozs7Ozs7QUMxQi9FO0FBQUE7QUFBQTtBQUE4ZSxDQUFnQiw2aEJBQUcsRUFBQyxDIiwiZmlsZSI6ImpzLzEuODc2ZmNmYmIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygnZGl2JyxbX2MoJ2dvb2dsZS1zaWduLWluJyksX2MoJ3JvdXRlci12aWV3JyldLDEpfVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygnZGl2JyxbX2MoJ3EtY2FyZCcse3N0YXRpY0NsYXNzOlwibXktY2FyZFwiLHN0YXRpY1N0eWxlOntcIndpZHRoXCI6XCIxMjBweFwifX0sW19jKCdxLWF2YXRhcicse2NsYXNzOnsgYmx1cjogX3ZtLmlzTG9hZGluZyB9LGF0dHJzOntcInNpemVcIjonMTIwcHgnLFwiY29sb3JcIjoncHJpbWFyeSd9fSxbX2MoJ3EtaWNvbicse3N0YXRpY0NsYXNzOlwiaWNvbi0tc2l6ZVwiLGF0dHJzOntcIm5hbWVcIjpfdm0udXNlci5pbWFnZX19KV0sMSksX2MoJ2Rpdicse2NsYXNzOnsgYmx1cjogX3ZtLmlzTG9hZGluZyB9fSxbX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwidGV4dC1zdWJ0aXRsZTJcIn0sW192bS5fdihfdm0uX3MoX3ZtLnVzZXIubmFtZSkpXSldKSxfYygncS1jYXJkLWFjdGlvbnMnLFsoIV92bS5pc1NpZ25lZEluKT9fYygncS1idG4nLHthdHRyczp7XCJmbGF0XCI6XCJcIixcImRpc2FibGVkXCI6X3ZtLmlzTG9hZGluZ30sb246e1wiY2xpY2tcIjpfdm0uc2lnbklufX0sW192bS5fdihcIlNpZ24gSW5cIildKTpfdm0uX2UoKSwoX3ZtLmlzU2lnbmVkSW4pP19jKCdxLWJ0bicse2F0dHJzOntcImZsYXRcIjpcIlwiLFwiZGlzYWJsZWRcIjpfdm0uaXNMb2FkaW5nfSxvbjp7XCJjbGlja1wiOl92bS5sb2dPZmZ9fSxbX3ZtLl92KFwiTG9nIE9mZlwiKV0pOl92bS5fZSgpXSwxKV0sMSldLDEpfVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG5cbmltcG9ydCB7IFNJR05fSU4sIExPR19PRkYgfSBmcm9tICcuLi9zdG9yZS9tdXRhdGlvbi10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlzTG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICBpc1NpZ25lZEluOiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIHRoaXMuJHN0b3JlLnN1YnNjcmliZSgoeyB0eXBlIH0pID0+IHtcbiAgICAgICAgICAgIGlmICh0eXBlID09PSBTSUdOX0lOKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1NpZ25lZEluID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gTE9HX09GRikge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNTaWduZWRJbiA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgICB1c2VyKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLnVzZXI7XG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHNpZ25JbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaChTSUdOX0lOKTtcbiAgICAgICAgfSxcbiAgICAgICAgbG9nT2ZmOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKExPR19PRkYpO1xuICAgICAgICB9LFxuICAgIH0sXG59O1xuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0xLTAhLi4vLi4vbm9kZV9tb2R1bGVzL0BxdWFzYXIvYXBwL2xpYi93ZWJwYWNrL2xvYWRlci5hdXRvLWltcG9ydC5qcz9rZWJhYiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2dvb2dsZS1zaWduLWluLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0xLTAhLi4vLi4vbm9kZV9tb2R1bGVzL0BxdWFzYXIvYXBwL2xpYi93ZWJwYWNrL2xvYWRlci5hdXRvLWltcG9ydC5qcz9rZWJhYiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2dvb2dsZS1zaWduLWluLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vZ29vZ2xlLXNpZ24taW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU3ZGJjNDUyJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2dvb2dsZS1zaWduLWluLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vZ29vZ2xlLXNpZ24taW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2dvb2dsZS1zaWduLWluLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTU3ZGJjNDUyJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI1N2RiYzQ1MlwiLFxuICBudWxsXG4gIFxuKVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0c1xuaW1wb3J0IHFJbnN0YWxsIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvQHF1YXNhci9hcHAvbGliL3dlYnBhY2svcnVudGltZS5hdXRvLWltcG9ydC5qc1wiXG5pbXBvcnQgUUNhcmQgZnJvbSAncXVhc2FyL3NyYy9jb21wb25lbnRzL2NhcmQvUUNhcmQuanMnXG5pbXBvcnQgUUF2YXRhciBmcm9tICdxdWFzYXIvc3JjL2NvbXBvbmVudHMvYXZhdGFyL1FBdmF0YXIuanMnXG5pbXBvcnQgUUljb24gZnJvbSAncXVhc2FyL3NyYy9jb21wb25lbnRzL2ljb24vUUljb24uanMnXG5pbXBvcnQgUUNhcmRBY3Rpb25zIGZyb20gJ3F1YXNhci9zcmMvY29tcG9uZW50cy9jYXJkL1FDYXJkQWN0aW9ucy5qcydcbmltcG9ydCBRQnRuIGZyb20gJ3F1YXNhci9zcmMvY29tcG9uZW50cy9idG4vUUJ0bi5qcydcbnFJbnN0YWxsKGNvbXBvbmVudCwgJ2NvbXBvbmVudHMnLCB7UUNhcmQsUUF2YXRhcixRSWNvbixRQ2FyZEFjdGlvbnMsUUJ0bn0pXG4iLCIvL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuXG5pbXBvcnQgR29vZ2xlU2lnbkluIGZyb20gJy4uL2NvbXBvbmVudHMvZ29vZ2xlLXNpZ24taW4nO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBHb29nbGVTaWduSW4sXG4gICAgfSxcbn07XG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTEtMCEuLi8uLi9ub2RlX21vZHVsZXMvQHF1YXNhci9hcHAvbGliL3dlYnBhY2svbG9hZGVyLmF1dG8taW1wb3J0LmpzP2tlYmFiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWFpbkxheW91dC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMS0wIS4uLy4uL25vZGVfbW9kdWxlcy9AcXVhc2FyL2FwcC9saWIvd2VicGFjay9sb2FkZXIuYXV0by1pbXBvcnQuanM/a2ViYWIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NYWluTGF5b3V0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTWFpbkxheW91dC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWFiNDE4NWQmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTWFpbkxheW91dC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL01haW5MYXlvdXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHNcbmltcG9ydCBxSW5zdGFsbCBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL0BxdWFzYXIvYXBwL2xpYi93ZWJwYWNrL3J1bnRpbWUuYXV0by1pbXBvcnQuanNcIlxuaW1wb3J0IFFCYXIgZnJvbSAncXVhc2FyL3NyYy9jb21wb25lbnRzL2Jhci9RQmFyLmpzJ1xuaW1wb3J0IFFCdG4gZnJvbSAncXVhc2FyL3NyYy9jb21wb25lbnRzL2J0bi9RQnRuLmpzJ1xuaW1wb3J0IFFJY29uIGZyb20gJ3F1YXNhci9zcmMvY29tcG9uZW50cy9pY29uL1FJY29uLmpzJ1xuaW1wb3J0IFFUYWJzIGZyb20gJ3F1YXNhci9zcmMvY29tcG9uZW50cy90YWJzL1FUYWJzLmpzJ1xuaW1wb3J0IFFSb3V0ZVRhYiBmcm9tICdxdWFzYXIvc3JjL2NvbXBvbmVudHMvdGFicy9RUm91dGVUYWIuanMnXG5pbXBvcnQgUVNjcm9sbEFyZWEgZnJvbSAncXVhc2FyL3NyYy9jb21wb25lbnRzL3Njcm9sbC1hcmVhL1FTY3JvbGxBcmVhLmpzJ1xucUluc3RhbGwoY29tcG9uZW50LCAnY29tcG9uZW50cycsIHtRQmFyLFFCdG4sUUljb24sUVRhYnMsUVJvdXRlVGFiLFFTY3JvbGxBcmVhfSlcbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTUtb25lT2YtMi0wIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0xIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMi0yIS4uLy4uL25vZGVfbW9kdWxlcy9AcXVhc2FyL2FwcC9saWIvd2VicGFjay9sb2FkZXIuYXV0by1pbXBvcnQuanM/a2ViYWIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9nb29nbGUtc2lnbi1pbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01N2RiYzQ1MiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tNS1vbmVPZi0yLTAhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNS1vbmVPZi0yLTIhLi4vLi4vbm9kZV9tb2R1bGVzL0BxdWFzYXIvYXBwL2xpYi93ZWJwYWNrL2xvYWRlci5hdXRvLWltcG9ydC5qcz9rZWJhYiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2dvb2dsZS1zaWduLWluLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTU3ZGJjNDUyJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==