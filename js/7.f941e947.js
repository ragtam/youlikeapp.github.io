(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "8b24":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Index.vue?vue&type=template&id=72f199a4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('main-content')}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/Index.vue?vue&type=template&id=72f199a4&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MainContent.vue?vue&type=template&id=78edc6c2&
var MainContentvue_type_template_id_78edc6c2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('button',{on:{"click":function($event){return _vm.addVideo()}}},[_vm._v("test add")]),_c('v-main-content-video-list-input',{attrs:{"videos":_vm.videos},on:{"check-videos":function($event){return _vm.checkVideos($event)},"save-list":function($event){return _vm.saveList()},"load-list":function($event){return _vm.loadList()}}}),_c('v-main-content-recovery-summary',{attrs:{"checkedVideos":_vm.checkedVideos}}),_c('v-main-content-video-errors')],1)}
var MainContentvue_type_template_id_78edc6c2_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/MainContent.vue?vue&type=template&id=78edc6c2&

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__("4db1");
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VMainContentVideoListInput.vue?vue&type=template&id=bc372808&
var VMainContentVideoListInputvue_type_template_id_bc372808_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',[_c('h1',[_vm._v("Восстановление лайков")]),_c('div',[_c('label',[_vm._v("Список видео (идентификаторы или полные ссылки)")]),_c('q-input',{attrs:{"filled":"","autogrow":"","placeholder":"placeholder to be filled in"},model:{value:(_vm.videosString),callback:function ($$v) {_vm.videosString=$$v},expression:"videosString"}})],1),_c('div',{staticClass:"q-pa-md q-gutter-sm"},[_c('q-btn',{attrs:{"disabled":_vm.isListEmpty,"icon":"fas fa-tasks","label":"Проверить","color":"primary"},on:{"click":function($event){return _vm.checkVideos()}}}),_c('q-btn',{attrs:{"disabled":_vm.isListEmpty,"icon":"fas fa-save","label":"Сохранить","color":"secondary"},on:{"click":function($event){return _vm.saveList()}}}),(!_vm.isListEmpty)?_c('q-btn',{attrs:{"icon":"fas fa-file-download","label":"Загрузить","color":"red"},on:{"click":function($event){return _vm.loadList()}}}):_vm._e(),(!_vm.isListEmpty)?_c('q-btn',{attrs:{"icon":"fas fa-trash-alt","label":"Удалить","color":"purple"},on:{"click":function($event){return _vm.showDeleteConfirmationModal()}}}):_vm._e()],1)]),_vm._m(0),_vm._v("\n    a href with $ctrl.bottomId dynamic id\n    "),_c('input',{attrs:{"id":"forceUpdate","type":"hidden","placeholder":"on click $ctrl.forceUpdate()"}}),_c('v-main-content-video-list-input-modal-delete-confirmation',{attrs:{"modal-visible":_vm.isDeleteModalVisible},on:{"close":_vm.deleteVideos}})],1)}
var VMainContentVideoListInputvue_type_template_id_bc372808_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('h3',[_vm._v("Результат выставления лайков")]),_c('p',[_vm._v("Проставлено: $ctrl.lastSuccessedVideos.length")]),_c('p',[_vm._v("Не проставлено: $ctrl.lastFailedVideos.length")]),_c('p',[_c('strong',[_vm._v("Лайки могут появиться с задержкой.")])]),_c('div',[_vm._v("\n            ng-if=\"$ctrl.lastFailedVideos.length > 0\"\n            "),_c('button',[_vm._v("\n                ng-click=\"$ctrl.showDialog('failedVideosDialog')\"\n                "),_c('span',[_vm._v("Показать ошибки")])])])])}]


// CONCATENATED MODULE: ./src/components/VMainContentVideoListInput.vue?vue&type=template&id=bc372808&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.split.js
var es6_regexp_split = __webpack_require__("28a5");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VMainContentVideoListInputModalDeleteConfirmation.vue?vue&type=template&id=3a312748&
var VMainContentVideoListInputModalDeleteConfirmationvue_type_template_id_3a312748_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-dialog',{attrs:{"persistent":""},model:{value:(_vm.visible),callback:function ($$v) {_vm.visible=$$v},expression:"visible"}},[_c('q-card',[_c('q-card-section',{staticClass:"row items-center"},[_c('q-avatar',{attrs:{"icon":"fas fa-trash-alt","color":"primary","text-color":"white"}}),_c('span',{staticClass:"q-ml-sm"},[_vm._v("Вы уверены, что хотите удалить список видео?")])],1),_c('q-card-actions',{attrs:{"align":"right"}},[_c('q-btn',{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{"flat":"","label":"Нет","color":"primary"},on:{"click":function($event){_vm.accepted = false}}}),_c('q-btn',{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{"flat":"","label":"Да","color":"primary"},on:{"click":function($event){_vm.accepted = true}}})],1)],1)],1)}
var VMainContentVideoListInputModalDeleteConfirmationvue_type_template_id_3a312748_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/VMainContentVideoListInputModalDeleteConfirmation.vue?vue&type=template&id=3a312748&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VMainContentVideoListInputModalDeleteConfirmation.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var events = {
  close: 'close'
};
/* harmony default export */ var VMainContentVideoListInputModalDeleteConfirmationvue_type_script_lang_js_ = ({
  props: {
    modalVisible: Boolean
  },
  data: function data() {
    return {
      accepted: Boolean
    };
  },
  methods: {
    close: function close() {
      this.$emit(this.events.close, {
        accepted: this.accepted
      });
    }
  },
  computed: {
    visible: {
      get: function get() {
        return this.modalVisible;
      },
      set: function set() {
        this.close();
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/VMainContentVideoListInputModalDeleteConfirmation.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_VMainContentVideoListInputModalDeleteConfirmationvue_type_script_lang_js_ = (VMainContentVideoListInputModalDeleteConfirmationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// EXTERNAL MODULE: ./node_modules/quasar/src/components/dialog/QDialog.js + 4 modules
var QDialog = __webpack_require__("24e8");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__("f09f");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardSection.js
var QCardSection = __webpack_require__("a370");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/avatar/QAvatar.js
var QAvatar = __webpack_require__("cb32");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardActions.js
var QCardActions = __webpack_require__("4b7e");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js + 1 modules
var QBtn = __webpack_require__("9c40");

// EXTERNAL MODULE: ./node_modules/quasar/src/directives/ClosePopup.js
var ClosePopup = __webpack_require__("7f67");

// CONCATENATED MODULE: ./src/components/VMainContentVideoListInputModalDeleteConfirmation.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_VMainContentVideoListInputModalDeleteConfirmationvue_type_script_lang_js_,
  VMainContentVideoListInputModalDeleteConfirmationvue_type_template_id_3a312748_render,
  VMainContentVideoListInputModalDeleteConfirmationvue_type_template_id_3a312748_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var VMainContentVideoListInputModalDeleteConfirmation = (component.exports);







runtime_auto_import_default()(component, 'components', {QDialog: QDialog["a" /* default */],QCard: QCard["a" /* default */],QCardSection: QCardSection["a" /* default */],QAvatar: QAvatar["a" /* default */],QCardActions: QCardActions["a" /* default */],QBtn: QBtn["a" /* default */]})


runtime_auto_import_default()(component, 'directives', {ClosePopup: ClosePopup["a" /* default */]})

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

var VMainContentVideoListInputvue_type_script_lang_js_events = {
  checkVideos: 'check-videos',
  saveList: 'save-list',
  loadList: 'load-list'
};
/* harmony default export */ var VMainContentVideoListInputvue_type_script_lang_js_ = ({
  props: {
    videos: Array
  },
  watch: {
    videos: {
      immediate: true,
      handler: function handler(newVideos) {
        this.videosString = newVideos.join(', ');
      }
    }
  },
  data: function data() {
    return {
      videosString: '',
      isDeleteModalVisible: false
    };
  },
  components: {
    VMainContentVideoListInputModalDeleteConfirmation: VMainContentVideoListInputModalDeleteConfirmation
  },
  methods: {
    checkVideos: function checkVideos() {
      var videos = this.videosString.split(',').map(function (video) {
        return video.trim();
      });
      this.$emit(VMainContentVideoListInputvue_type_script_lang_js_events.checkVideos, videos);
    },
    saveList: function saveList() {
      this.$emit(VMainContentVideoListInputvue_type_script_lang_js_events.saveList);
    },
    loadList: function loadList() {
      this.$emit(VMainContentVideoListInputvue_type_script_lang_js_events.loadList);
    },
    showDeleteConfirmationModal: function showDeleteConfirmationModal() {
      this.isDeleteModalVisible = true;
    },
    deleteVideos: function deleteVideos(isOpened) {
      this.isDeleteModalVisible = false;
    }
  },
  computed: {
    isListEmpty: function isListEmpty() {
      return this.videosString == null || this.videosString == '';
    }
  }
});
// CONCATENATED MODULE: ./src/components/VMainContentVideoListInput.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_VMainContentVideoListInputvue_type_script_lang_js_ = (VMainContentVideoListInputvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 8 modules
var QInput = __webpack_require__("27f9");

// CONCATENATED MODULE: ./src/components/VMainContentVideoListInput.vue





/* normalize component */

var VMainContentVideoListInput_component = Object(componentNormalizer["a" /* default */])(
  components_VMainContentVideoListInputvue_type_script_lang_js_,
  VMainContentVideoListInputvue_type_template_id_bc372808_render,
  VMainContentVideoListInputvue_type_template_id_bc372808_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var VMainContentVideoListInput = (VMainContentVideoListInput_component.exports);



runtime_auto_import_default()(VMainContentVideoListInput_component, 'components', {QInput: QInput["a" /* default */],QBtn: QBtn["a" /* default */]})

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VMainContentRecoverySummary.vue?vue&type=template&id=6337860e&
var VMainContentRecoverySummaryvue_type_template_id_6337860e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"background-color":"lightgrey"}},[_c('h3',[_vm._v("Результат проверки")]),_c('p',[_vm._v("Всего проверено: "+_vm._s(_vm.numberOfCheckedVideos))]),_c('p',[_vm._v("С лайками: "+_vm._s(_vm.numberOfVideosWithLikes))]),_c('p',[_vm._v("Без лайков: "+_vm._s(_vm.numberOfVideosWithoutLikes))]),_vm._m(0),_c('v-main-content-recovery-summary-without-likes')],1)}
var VMainContentRecoverySummaryvue_type_template_id_6337860e_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('button',[_vm._v("\n            $ctrl.showDialog('videosWithoutLikesDialog')\n            "),_c('span',[_vm._v("Показать видео без лайков")])]),_c('button',[_vm._v("\n            $ctrl.setLikes()\n            "),_c('span',[_vm._v("Поставить лайки")])])])}]


// CONCATENATED MODULE: ./src/components/VMainContentRecoverySummary.vue?vue&type=template&id=6337860e&

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
  props: {
    checkedVideos: {
      type: Object,
      default: function _default() {
        return {
          withLikes: [],
          withoutLikes: []
        };
      }
    }
  },
  computed: {
    numberOfVideosWithLikes: function numberOfVideosWithLikes() {
      return this.checkedVideos.withLikes.length;
    },
    numberOfVideosWithoutLikes: function numberOfVideosWithoutLikes() {
      return this.checkedVideos.withoutLikes.length;
    },
    numberOfCheckedVideos: function numberOfCheckedVideos() {
      return this.numberOfVideosWithLikes + this.numberOfVideosWithoutLikes;
    }
  },
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
  VMainContentRecoverySummaryvue_type_template_id_6337860e_render,
  VMainContentRecoverySummaryvue_type_template_id_6337860e_staticRenderFns,
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
// EXTERNAL MODULE: ./src/store/mutation-types.js
var mutation_types = __webpack_require__("9fb0");

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
//
//




/* harmony default export */ var MainContentvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      videos: ['https://www.youtube.com/watch?v=T4Df5_cojAs', 'https://www.youtube.com/watch?v=b5xlL-C53f8'],
      checkedVideos: {
        withLikes: [],
        withoutLikes: []
      }
    };
  },
  components: {
    VMainContentVideoListInput: VMainContentVideoListInput,
    VMainContentRecoverySummary: VMainContentRecoverySummary,
    VMainContentVideoErrors: VMainContentVideoErrors
  },
  mounted: function mounted() {
    var _this = this;

    this.$store.subscribe(function (_ref) {
      var type = _ref.type,
          payload = _ref.payload;

      if (type === mutation_types["a" /* CHECK_VIDEOS */]) {
        _this.checkedVideos = payload;
      }
    });
  },
  methods: {
    checkVideos: function checkVideos(videosToCheck) {
      console.log('@check-videos', videosToCheck);
      this.$store.dispatch({
        type: mutation_types["a" /* CHECK_VIDEOS */],
        videosToCheck: videosToCheck
      });
    },
    saveList: function saveList() {
      console.log('@save-list');
    },
    loadList: function loadList() {
      console.log('@load-list');
    },
    addVideo: function addVideo() {
      this.videos = [].concat(toConsumableArray_default()(this.videos), ['www.youtube.pl/xyz']);
    }
  }
});
// CONCATENATED MODULE: ./src/components/MainContent.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MainContentvue_type_script_lang_js_ = (MainContentvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/MainContent.vue





/* normalize component */

var MainContent_component = Object(componentNormalizer["a" /* default */])(
  components_MainContentvue_type_script_lang_js_,
  MainContentvue_type_template_id_78edc6c2_render,
  MainContentvue_type_template_id_78edc6c2_staticRenderFns,
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
//# sourceMappingURL=7.f941e947.js.map