(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "8b24":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Index.vue?vue&type=template&id=72f199a4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('main-content')}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/Index.vue?vue&type=template&id=72f199a4&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MainContent.vue?vue&type=template&id=119269f2&
var MainContentvue_type_template_id_119269f2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('v-main-content-video-list-input',{on:{"check-videos":function($event){return _vm.checkVideos()},"save-list":function($event){return _vm.saveList()},"load-list":function($event){return _vm.loadList()}}}),_c('v-main-content-recovery-summary'),_c('v-main-content-video-errors')],1)}
var MainContentvue_type_template_id_119269f2_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/MainContent.vue?vue&type=template&id=119269f2&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VMainContentVideoListInput.vue?vue&type=template&id=19c76657&
var VMainContentVideoListInputvue_type_template_id_19c76657_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('h1',[_vm._v("Восстановление лайков")]),_c('div',[_c('div',[_c('div',[_vm._m(0),_c('div',[_c('button',{on:{"click":function($event){return _vm.checkVideos()}}},[_c('span',[_vm._v("checkVideos() Проверить")])]),_c('button',{on:{"click":function($event){return _vm.saveList()}}},[_c('span',[_vm._v("saveList() Сохранить")])]),_c('button',{on:{"click":function($event){return _vm.loadList()}}},[_c('span',[_vm._v("loadList() Загрузить")])]),_c('button',{on:{"click":function($event){return _vm.deleteVideos()}}},[_c('span',[_vm._v("showDialog('confirmDeleteDialog') Удалить")])])])]),_vm._m(1),_vm._v("\n            a href with $ctrl.bottomId dynamic id\n        ")])]),_c('input',{attrs:{"id":"forceUpdate","type":"hidden","placeholder":"on click $ctrl.forceUpdate()"}}),_c('hr'),_c('v-main-content-video-list-input-delete'),_c('hr')],1)}
var VMainContentVideoListInputvue_type_template_id_19c76657_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('label',[_vm._v("Список видео (идентификаторы или полные ссылки)")]),_c('textarea',{attrs:{"name":"videosListTextArea","id":"","cols":"30","rows":"10"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('h3',[_vm._v("Результат выставления лайков")]),_c('p',[_vm._v("Проставлено: $ctrl.lastSuccessedVideos.length")]),_c('p',[_vm._v("Не проставлено: $ctrl.lastFailedVideos.length")]),_c('p',[_c('strong',[_vm._v("Лайки могут появиться с задержкой.")])]),_c('div',[_vm._v("\n                    ng-if=\"$ctrl.lastFailedVideos.length > 0\"\n                    "),_c('button',[_vm._v("\n                        ng-click=\"$ctrl.showDialog('failedVideosDialog')\"\n                        "),_c('span',[_vm._v("Показать ошибки")])])])])}]


// CONCATENATED MODULE: ./src/components/VMainContentVideoListInput.vue?vue&type=template&id=19c76657&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VMainContentVideoListInputDelete.vue?vue&type=template&id=7869a2b0&
var VMainContentVideoListInputDeletevue_type_template_id_7869a2b0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var VMainContentVideoListInputDeletevue_type_template_id_7869a2b0_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"dialog-container",staticStyle:{"background-color":"lightgrey"}},[_c('div',{attrs:{"id":"confirmDeleteDialog"}},[_c('div',[_c('div',[_c('h2',[_vm._v("Подтверждение действия")]),_c('div',[_c('p',[_vm._v("Вы уверены, что хотите удалить список видео?")])])]),_c('div',[_c('button',{staticClass:"md-primary md-cancel-button"},[_vm._v("\n                    ng-click=\"$ctrl.closeDialog()\"\n                    "),_c('span',[_vm._v("Нет")])]),_c('button',[_vm._v("\n                    ng-click=\"$ctrl.clearList()\"\n                    "),_c('span',[_vm._v("Да")])])])])])])}]


// CONCATENATED MODULE: ./src/components/VMainContentVideoListInputDelete.vue?vue&type=template&id=7869a2b0&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VMainContentVideoListInputDelete.vue?vue&type=script&lang=js&
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
/* harmony default export */ var VMainContentVideoListInputDeletevue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./src/components/VMainContentVideoListInputDelete.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_VMainContentVideoListInputDeletevue_type_script_lang_js_ = (VMainContentVideoListInputDeletevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/VMainContentVideoListInputDelete.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_VMainContentVideoListInputDeletevue_type_script_lang_js_,
  VMainContentVideoListInputDeletevue_type_template_id_7869a2b0_render,
  VMainContentVideoListInputDeletevue_type_template_id_7869a2b0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var VMainContentVideoListInputDelete = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VMainContentVideoListInput.vue?vue&type=script&lang=js&
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

/* harmony default export */ var VMainContentVideoListInputvue_type_script_lang_js_ = ({
  components: {
    VMainContentVideoListInputDelete: VMainContentVideoListInputDelete
  },
  methods: {
    checkVideos: function checkVideos() {
      this.$emit('check-videos');
    },
    saveList: function saveList() {
      this.$emit('save-list');
    },
    loadList: function loadList() {
      this.$emit('load-list');
    },
    deleteVideos: function deleteVideos() {
      console.log('show confirmation dialog');
    }
  }
});
// CONCATENATED MODULE: ./src/components/VMainContentVideoListInput.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_VMainContentVideoListInputvue_type_script_lang_js_ = (VMainContentVideoListInputvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/VMainContentVideoListInput.vue





/* normalize component */

var VMainContentVideoListInput_component = Object(componentNormalizer["a" /* default */])(
  components_VMainContentVideoListInputvue_type_script_lang_js_,
  VMainContentVideoListInputvue_type_template_id_19c76657_render,
  VMainContentVideoListInputvue_type_template_id_19c76657_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var VMainContentVideoListInput = (VMainContentVideoListInput_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VMainContentRecoverySummary.vue?vue&type=template&id=fc77bda6&
var VMainContentRecoverySummaryvue_type_template_id_fc77bda6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('h3',[_vm._v("Результат проверки")]),_c('p',[_vm._v("Всего проверено: $ctrl.lastCheckingResult.withLikes.length + $ctrl.lastCheckingResult.withoutLikes.length")]),_c('p',[_vm._v("С лайками: $ctrl.lastCheckingResult.withLikes.length")]),_c('p',[_vm._v("Без лайков: $ctrl.lastCheckingResult.withoutLikes.length")]),_vm._m(0),_c('v-main-content-recovery-summary-withoutLikes')],1)}
var VMainContentRecoverySummaryvue_type_template_id_fc77bda6_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('button',[_vm._v("\n            $ctrl.showDialog('videosWithoutLikesDialog')\n            "),_c('span',[_vm._v("Показать видео без лайков")])]),_c('button',[_vm._v("\n            $ctrl.setLikes()\n            "),_c('span',[_vm._v("Поставить лайки")])])])}]


// CONCATENATED MODULE: ./src/components/VMainContentRecoverySummary.vue?vue&type=template&id=fc77bda6&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VMainContentRecoverySummaryWithoutLikes.vue?vue&type=template&id=60659cb4&
var VMainContentRecoverySummaryWithoutLikesvue_type_template_id_60659cb4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var VMainContentRecoverySummaryWithoutLikesvue_type_template_id_60659cb4_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"dialog-container"},[_c('div',{staticClass:"md-dialog-container",attrs:{"id":"videosWithoutLikesDialog"}},[_c('div',[_c('div',[_c('h2',[_vm._v("Список видео без лайков")]),_c('span'),_c('button',[_vm._v("\n                    ng-click=\"$ctrl.closeDialog()\"\n                    "),_vm._v("\n                    icon\n                ")])]),_c('div',[_c('div',[_c('div',[_vm._v("list of items: lastCheckingResult.withoutLikesShown")])]),_c('span',[_vm._v("pagination")])])])])])}]


// CONCATENATED MODULE: ./src/components/VMainContentRecoverySummaryWithoutLikes.vue?vue&type=template&id=60659cb4&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VMainContentRecoverySummaryWithoutLikes.vue?vue&type=script&lang=js&
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
/* harmony default export */ var VMainContentRecoverySummaryWithoutLikesvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./src/components/VMainContentRecoverySummaryWithoutLikes.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_VMainContentRecoverySummaryWithoutLikesvue_type_script_lang_js_ = (VMainContentRecoverySummaryWithoutLikesvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/VMainContentRecoverySummaryWithoutLikes.vue





/* normalize component */

var VMainContentRecoverySummaryWithoutLikes_component = Object(componentNormalizer["a" /* default */])(
  components_VMainContentRecoverySummaryWithoutLikesvue_type_script_lang_js_,
  VMainContentRecoverySummaryWithoutLikesvue_type_template_id_60659cb4_render,
  VMainContentRecoverySummaryWithoutLikesvue_type_template_id_60659cb4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var VMainContentRecoverySummaryWithoutLikes = (VMainContentRecoverySummaryWithoutLikes_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VMainContentRecoverySummary.vue?vue&type=script&lang=js&
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

/* harmony default export */ var VMainContentRecoverySummaryvue_type_script_lang_js_ = ({
  componentst: {
    VMainContentRecoverySummaryWithoutLikes: VMainContentRecoverySummaryWithoutLikes
  }
});
// CONCATENATED MODULE: ./src/components/VMainContentRecoverySummary.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_VMainContentRecoverySummaryvue_type_script_lang_js_ = (VMainContentRecoverySummaryvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/VMainContentRecoverySummary.vue





/* normalize component */

var VMainContentRecoverySummary_component = Object(componentNormalizer["a" /* default */])(
  components_VMainContentRecoverySummaryvue_type_script_lang_js_,
  VMainContentRecoverySummaryvue_type_template_id_fc77bda6_render,
  VMainContentRecoverySummaryvue_type_template_id_fc77bda6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var VMainContentRecoverySummary = (VMainContentRecoverySummary_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VMainContentVideoErrors.vue?vue&type=template&id=104fb5a5&
var VMainContentVideoErrorsvue_type_template_id_104fb5a5_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var VMainContentVideoErrorsvue_type_template_id_104fb5a5_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"dialog-container"},[_c('div',{staticClass:"md-dialog-container",attrs:{"id":"failedVideosDialog"}},[_c('div',[_c('div',[_c('h2',[_vm._v("Ошибки")]),_c('span'),_c('button',[_vm._v("\n                    ng-click=\"$ctrl.closeDialog()\"\n                    "),_vm._v("\n                    icon\n                ")])]),_c('div',[_c('ul',[_c('li',[_c('p',[_vm._v("\n                            failed videos list\n                            ")])])]),_c('span',[_vm._v("pagination for failed videos")])])])])])}]


// CONCATENATED MODULE: ./src/components/VMainContentVideoErrors.vue?vue&type=template&id=104fb5a5&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VMainContentVideoErrors.vue?vue&type=script&lang=js&
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
/* harmony default export */ var VMainContentVideoErrorsvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./src/components/VMainContentVideoErrors.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_VMainContentVideoErrorsvue_type_script_lang_js_ = (VMainContentVideoErrorsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/VMainContentVideoErrors.vue





/* normalize component */

var VMainContentVideoErrors_component = Object(componentNormalizer["a" /* default */])(
  components_VMainContentVideoErrorsvue_type_script_lang_js_,
  VMainContentVideoErrorsvue_type_template_id_104fb5a5_render,
  VMainContentVideoErrorsvue_type_template_id_104fb5a5_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var VMainContentVideoErrors = (VMainContentVideoErrors_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MainContent.vue?vue&type=script&lang=js&
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



/* harmony default export */ var MainContentvue_type_script_lang_js_ = ({
  components: {
    VMainContentVideoListInput: VMainContentVideoListInput,
    VMainContentRecoverySummary: VMainContentRecoverySummary,
    VMainContentVideoErrors: VMainContentVideoErrors
  },
  methods: {
    checkVideos: function checkVideos() {
      console.log('@check-videos');
    },
    saveList: function saveList() {
      console.log('@save-list');
    },
    loadList: function loadList() {
      console.log('@load-list');
    }
  }
});
// CONCATENATED MODULE: ./src/components/MainContent.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MainContentvue_type_script_lang_js_ = (MainContentvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/MainContent.vue





/* normalize component */

var MainContent_component = Object(componentNormalizer["a" /* default */])(
  components_MainContentvue_type_script_lang_js_,
  MainContentvue_type_template_id_119269f2_render,
  MainContentvue_type_template_id_119269f2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var MainContent = (MainContent_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Index.vue?vue&type=script&lang=js&
//
//
//
//

/* harmony default export */ var Indexvue_type_script_lang_js_ = ({
  components: {
    MainContent: MainContent
  },
  name: 'PageIndex'
});
// CONCATENATED MODULE: ./src/pages/Index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_Indexvue_type_script_lang_js_ = (Indexvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/pages/Index.vue





/* normalize component */

var Index_component = Object(componentNormalizer["a" /* default */])(
  pages_Indexvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Index = __webpack_exports__["default"] = (Index_component.exports);

/***/ })

}]);
//# sourceMappingURL=7.d4f385ee.js.map