(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "afad":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Recovery.vue?vue&type=template&id=0b270cfc&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('v-main-content-video-list-input',{attrs:{"videos":_vm.videos},on:{"check-videos":function($event){return _vm.checkVideos($event)},"save-list":_vm.saveList,"load-list":function($event){return _vm.loadList()},"remove-videos":_vm.removeVideos}}),_c('v-main-content-recovery-summary',{attrs:{"checkedVideos":_vm.checkedVideos}}),_c('v-main-content-video-errors')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/Recovery.vue?vue&type=template&id=0b270cfc&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VMainContentVideoListInput.vue?vue&type=template&id=559e2d07&
var VMainContentVideoListInputvue_type_template_id_559e2d07_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',[_c('h1',[_vm._v("Восстановление лайков")]),_c('div',[_c('label',[_vm._v("Список видео (идентификаторы или полные ссылки)")]),_c('q-input',{attrs:{"filled":"","autogrow":"","placeholder":"placeholder to be filled in"},model:{value:(_vm.$v.videosString.$model),callback:function ($$v) {_vm.$set(_vm.$v.videosString, "$model", (typeof $$v === 'string'? $$v.trim(): $$v))},expression:"$v.videosString.$model"}}),(!_vm.$v.videosString.required)?_c('div',{staticClass:"error"},[_vm._v("Field is required")]):_vm._e(),(_vm.$v.videosString.required && !_vm.$v.videosString.commaSeparatedListOfUrlsOrVideoIds)?_c('div',{staticClass:"error"},[_vm._v("YouTube url or video id invalid")]):_vm._e()],1),_c('div',{staticClass:"q-pa-md q-gutter-sm"},[_c('q-btn',{attrs:{"disabled":_vm.$v.$invalid,"icon":"fas fa-tasks","label":"Проверить","color":"primary"},on:{"click":function($event){return _vm.checkVideos()}}}),_c('q-btn',{attrs:{"disabled":_vm.$v.$invalid,"icon":"fas fa-save","label":"Сохранить","color":"secondary"},on:{"click":function($event){return _vm.saveList()}}}),(!_vm.isListEmpty)?_c('q-btn',{attrs:{"icon":"fas fa-file-download","label":"Загрузить","color":"red"},on:{"click":function($event){return _vm.loadList()}}}):_vm._e(),(!_vm.isListEmpty)?_c('q-btn',{attrs:{"icon":"fas fa-trash-alt","label":"Удалить","color":"purple"},on:{"click":function($event){return _vm.showDeleteConfirmationModal()}}}):_vm._e()],1)]),_vm._m(0),_vm._v("\n    a href with $ctrl.bottomId dynamic id\n    "),_c('input',{attrs:{"id":"forceUpdate","type":"hidden","placeholder":"on click $ctrl.forceUpdate()"}}),_c('v-main-content-video-list-input-modal-delete-confirmation',{attrs:{"modal-visible":_vm.isDeleteModalVisible},on:{"close":_vm.closeModal}})],1)}
var VMainContentVideoListInputvue_type_template_id_559e2d07_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('h3',[_vm._v("Результат выставления лайков")]),_c('p',[_vm._v("Проставлено: $ctrl.lastSuccessedVideos.length")]),_c('p',[_vm._v("Не проставлено: $ctrl.lastFailedVideos.length")]),_c('p',[_c('strong',[_vm._v("Лайки могут появиться с задержкой.")])]),_c('div',[_vm._v("\n            ng-if=\"$ctrl.lastFailedVideos.length > 0\"\n            "),_c('button',[_vm._v("\n                ng-click=\"$ctrl.showDialog('failedVideosDialog')\"\n                "),_c('span',[_vm._v("Показать ошибки")])])])])}]


// CONCATENATED MODULE: ./src/components/VMainContentVideoListInput.vue?vue&type=template&id=559e2d07&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.split.js
var es6_regexp_split = __webpack_require__("28a5");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VMainContentVideoListInputModalDeleteConfirmation.vue?vue&type=template&id=879e780e&
var VMainContentVideoListInputModalDeleteConfirmationvue_type_template_id_879e780e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-dialog',{attrs:{"persistent":""},model:{value:(_vm.visible),callback:function ($$v) {_vm.visible=$$v},expression:"visible"}},[_c('q-card',[_c('q-card-section',{staticClass:"row items-center"},[_c('q-avatar',{attrs:{"icon":"fas fa-trash-alt","color":"primary","text-color":"white"}}),_c('span',{staticClass:"q-ml-sm"},[_vm._v("Вы уверены, что хотите удалить список видео?")])],1),_c('q-card-actions',{attrs:{"align":"right"}},[_c('q-btn',{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{"flat":"","label":"Нет","color":"primary"},on:{"click":function($event){_vm.deleteConfirmed = false}}}),_c('q-btn',{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{"flat":"","label":"Да","color":"primary"},on:{"click":function($event){_vm.deleteConfirmed = true}}})],1)],1)],1)}
var VMainContentVideoListInputModalDeleteConfirmationvue_type_template_id_879e780e_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/VMainContentVideoListInputModalDeleteConfirmation.vue?vue&type=template&id=879e780e&

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
//
//
//
//
//
//
//
//
//
//
//
//
var customEvents = {
  close: 'close'
};
/* harmony default export */ var VMainContentVideoListInputModalDeleteConfirmationvue_type_script_lang_js_ = ({
  props: {
    modalVisible: Boolean
  },
  data: function data() {
    return {
      deleteConfirmed: Boolean
    };
  },
  methods: {
    close: function close() {
      this.$emit(customEvents.close, {
        deleteConfirmed: this.deleteConfirmed
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

// EXTERNAL MODULE: ./node_modules/quasar/src/components/dialog/QDialog.js + 5 modules
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
  VMainContentVideoListInputModalDeleteConfirmationvue_type_template_id_879e780e_render,
  VMainContentVideoListInputModalDeleteConfirmationvue_type_template_id_879e780e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var VMainContentVideoListInputModalDeleteConfirmation = (component.exports);







runtime_auto_import_default()(component, 'components', {QDialog: QDialog["a" /* default */],QCard: QCard["a" /* default */],QCardSection: QCardSection["a" /* default */],QAvatar: QAvatar["a" /* default */],QCardActions: QCardActions["a" /* default */],QBtn: QBtn["a" /* default */]})


runtime_auto_import_default()(component, 'directives', {ClosePopup: ClosePopup["a" /* default */]})

// EXTERNAL MODULE: ./node_modules/vuelidate/lib/validators/index.js
var validators = __webpack_require__("b5ae");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__("a481");

// EXTERNAL MODULE: ./src/services/youtube-url-parser.service.js
var youtube_url_parser_service = __webpack_require__("c7ad");

// CONCATENATED MODULE: ./src/services/form-validator.service.js





function commaSeparatedListOfUrlsOrVideoIds(value) {
  return value.replace(/\s/g, '').split(',').map(toVideoId).every(idIsValid);
}

function toVideoId(youtubeUrl) {
  return Object(validators["url"])(youtubeUrl) ? youtube_url_parser_service["a" /* default */].getVideoId(youtubeUrl) : youtubeUrl;
}

function idIsValid(videoId) {
  return youtube_url_parser_service["a" /* default */].isIdValid(videoId);
}


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



var VMainContentVideoListInputvue_type_script_lang_js_customEvents = {
  checkVideos: 'check-videos',
  saveList: 'save-list',
  loadList: 'load-list',
  removeVideos: 'remove-videos'
};
/* harmony default export */ var VMainContentVideoListInputvue_type_script_lang_js_ = ({
  props: {
    videos: Array
  },
  data: function data() {
    return {
      videosString: '',
      isDeleteModalVisible: false
    };
  },
  validations: {
    videosString: {
      required: validators["required"],
      commaSeparatedListOfUrlsOrVideoIds: commaSeparatedListOfUrlsOrVideoIds
    }
  },
  watch: {
    videos: {
      immediate: true,
      handler: function handler(newVideos) {
        this.videosString = newVideos.join(', ');
      }
    }
  },
  components: {
    VMainContentVideoListInputModalDeleteConfirmation: VMainContentVideoListInputModalDeleteConfirmation
  },
  methods: {
    checkVideos: function checkVideos() {
      var videos = this.videosString.split(',').map(function (video) {
        return video.trim();
      });
      this.$emit(VMainContentVideoListInputvue_type_script_lang_js_customEvents.checkVideos, videos);
    },
    saveList: function saveList() {
      var videos = this.videosString.split(',').map(function (video) {
        return video.trim();
      });
      this.$emit(VMainContentVideoListInputvue_type_script_lang_js_customEvents.saveList, videos);
    },
    loadList: function loadList() {
      this.$emit(VMainContentVideoListInputvue_type_script_lang_js_customEvents.loadList);
    },
    showDeleteConfirmationModal: function showDeleteConfirmationModal() {
      this.isDeleteModalVisible = true;
    },
    closeModal: function closeModal(_ref) {
      var deleteConfirmed = _ref.deleteConfirmed;
      this.isDeleteModalVisible = false;

      if (deleteConfirmed) {
        this.$emit(VMainContentVideoListInputvue_type_script_lang_js_customEvents.removeVideos);
      }
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
  VMainContentVideoListInputvue_type_template_id_559e2d07_render,
  VMainContentVideoListInputvue_type_template_id_559e2d07_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var VMainContentVideoListInput = (VMainContentVideoListInput_component.exports);



runtime_auto_import_default()(VMainContentVideoListInput_component, 'components', {QInput: QInput["a" /* default */],QBtn: QBtn["a" /* default */]})

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VMainContentRecoverySummary.vue?vue&type=template&id=c811b46e&
var VMainContentRecoverySummaryvue_type_template_id_c811b46e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"background-color":"lightgrey"}},[_c('h3',[_vm._v("Результат проверки")]),_c('p',[_vm._v("Всего проверено: "+_vm._s(_vm.numberOfCheckedVideos))]),_c('p',[_vm._v("С лайками: "+_vm._s(_vm.numberOfVideosWithLikes))]),_c('p',[_vm._v("Без лайков: "+_vm._s(_vm.numberOfVideosWithoutLikes))]),_c('div',[_c('button',{on:{"click":function($event){return _vm.showVideosWithoutLikes()}}},[_vm._v("\n            $ctrl.showDialog('videosWithoutLikesDialog')\n            "),_c('span',[_vm._v("Показать видео без лайков")])]),_vm._m(0)])])}
var VMainContentRecoverySummaryvue_type_template_id_c811b46e_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',[_vm._v("\n            $ctrl.setLikes()\n            "),_c('span',[_vm._v("Поставить лайки")])])}]


// CONCATENATED MODULE: ./src/components/VMainContentRecoverySummary.vue?vue&type=template&id=c811b46e&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VMainContentRecoverySummaryWithoutLikes.vue?vue&type=template&id=c8be4ec0&
var VMainContentRecoverySummaryWithoutLikesvue_type_template_id_c8be4ec0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var VMainContentRecoverySummaryWithoutLikesvue_type_template_id_c8be4ec0_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',[_c('div',[_c('div',[_c('h2',[_vm._v("Список видео без лайков")]),_c('span'),_c('button',[_vm._v("\n                    ng-click=\"$ctrl.closeDialog()\"\n                    "),_vm._v("\n                    icon\n                ")])]),_c('div',[_c('div',[_c('div',[_vm._v("list of items: lastCheckingResult.withoutLikesShown")])]),_c('span',[_vm._v("pagination")])])])])])}]


// CONCATENATED MODULE: ./src/components/VMainContentRecoverySummaryWithoutLikes.vue?vue&type=template&id=c8be4ec0&

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
  VMainContentRecoverySummaryWithoutLikesvue_type_template_id_c8be4ec0_render,
  VMainContentRecoverySummaryWithoutLikesvue_type_template_id_c8be4ec0_staticRenderFns,
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
  methods: {
    showVideosWithoutLikes: function showVideosWithoutLikes() {
      console.log('showVideosWithoutLikes');
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
  VMainContentRecoverySummaryvue_type_template_id_c811b46e_render,
  VMainContentRecoverySummaryvue_type_template_id_c811b46e_staticRenderFns,
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

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Recovery.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//




/* harmony default export */ var Recoveryvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      videos: [],
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

      switch (type) {
        case mutation_types["a" /* CHECK_VIDEOS */]:
          _this.checkedVideos = payload;
          break;

        case mutation_types["b" /* GET_SAVED_VIDEOS */]:
        case mutation_types["d" /* REMOVE_VIDEOS */]:
        case mutation_types["e" /* SAVE_VIDEOS */]:
          _this.videos = payload;
          break;
      }
    });
    this.$store.dispatch(mutation_types["b" /* GET_SAVED_VIDEOS */]);
  },
  methods: {
    checkVideos: function checkVideos(videosToCheck) {
      this.$store.dispatch({
        type: mutation_types["a" /* CHECK_VIDEOS */],
        videosToCheck: videosToCheck
      });
    },
    saveList: function saveList(videosToSave) {
      this.$store.dispatch({
        type: mutation_types["e" /* SAVE_VIDEOS */],
        videosToSave: videosToSave
      });
    },
    loadList: function loadList() {
      this.$store.dispatch(mutation_types["b" /* GET_SAVED_VIDEOS */]);
    },
    removeVideos: function removeVideos() {
      this.$store.dispatch({
        type: mutation_types["d" /* REMOVE_VIDEOS */]
      });
    }
  }
});
// CONCATENATED MODULE: ./src/pages/Recovery.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_Recoveryvue_type_script_lang_js_ = (Recoveryvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/pages/Recovery.vue





/* normalize component */

var Recovery_component = Object(componentNormalizer["a" /* default */])(
  pages_Recoveryvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Recovery = __webpack_exports__["default"] = (Recovery_component.exports);

/***/ })

}]);
//# sourceMappingURL=7.458509d3.js.map