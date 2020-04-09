(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "afad":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Recovery.vue?vue&type=template&id=51db707e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"q-pa-xl"},[_c('v-main-content-video-list-input',{attrs:{"videos":_vm.videos},on:{"check-videos":function($event){return _vm.checkVideos($event)},"save-list":_vm.saveList,"load-list":function($event){return _vm.loadList()},"remove-videos":_vm.removeVideos}}),_c('v-main-content-checking-summary',{attrs:{"checkedVideos":_vm.checkedVideos}}),_c('v-recovery-page-recovery-summary',{attrs:{"recoveredVideos":_vm.recoveredVideos}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/Recovery.vue?vue&type=template&id=51db707e&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VMainContentVideoListInput.vue?vue&type=template&id=66776d75&
var VMainContentVideoListInputvue_type_template_id_66776d75_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',[_c('h1',[_vm._v("Восстановление лайков")]),_c('div',[_c('label',[_vm._v("Список видео (идентификаторы или полные ссылки)")]),_c('q-input',{attrs:{"filled":"","autogrow":"","placeholder":"placeholder to be filled in"},model:{value:(_vm.$v.videosString.$model),callback:function ($$v) {_vm.$set(_vm.$v.videosString, "$model", (typeof $$v === 'string'? $$v.trim(): $$v))},expression:"$v.videosString.$model"}}),(!_vm.$v.videosString.required)?_c('div',{staticClass:"error"},[_vm._v("Field is required")]):_vm._e(),(_vm.$v.videosString.required && !_vm.$v.videosString.commaSeparatedListOfUrlsOrVideoIds)?_c('div',{staticClass:"error"},[_vm._v("YouTube url or video id invalid")]):_vm._e()],1),_c('div',{staticClass:"q-pa-md q-gutter-sm"},[_c('q-btn',{attrs:{"disabled":_vm.$v.$invalid,"icon":"fas fa-tasks","label":"Проверить","color":"primary"},on:{"click":function($event){return _vm.checkVideos()}}}),_c('q-btn',{attrs:{"disabled":_vm.$v.$invalid,"icon":"fas fa-save","label":"Сохранить","color":"secondary"},on:{"click":function($event){return _vm.saveList()}}}),(!_vm.isListEmpty)?_c('q-btn',{attrs:{"icon":"fas fa-file-download","label":"Загрузить","color":"red"},on:{"click":function($event){return _vm.loadList()}}}):_vm._e(),(!_vm.isListEmpty)?_c('q-btn',{attrs:{"icon":"fas fa-trash-alt","label":"Удалить","color":"purple"},on:{"click":function($event){return _vm.showDeleteConfirmationModal()}}}):_vm._e()],1)]),_c('v-main-content-video-list-input-modal-delete-confirmation',{attrs:{"modal-visible":_vm.isDeleteModalVisible},on:{"close":_vm.closeModal}})],1)}
var VMainContentVideoListInputvue_type_template_id_66776d75_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/VMainContentVideoListInput.vue?vue&type=template&id=66776d75&

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

// EXTERNAL MODULE: ./node_modules/quasar/src/components/dialog/QDialog.js + 2 modules
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
// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 2 modules
var QInput = __webpack_require__("27f9");

// CONCATENATED MODULE: ./src/components/VMainContentVideoListInput.vue





/* normalize component */

var VMainContentVideoListInput_component = Object(componentNormalizer["a" /* default */])(
  components_VMainContentVideoListInputvue_type_script_lang_js_,
  VMainContentVideoListInputvue_type_template_id_66776d75_render,
  VMainContentVideoListInputvue_type_template_id_66776d75_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var VMainContentVideoListInput = (VMainContentVideoListInput_component.exports);



runtime_auto_import_default()(VMainContentVideoListInput_component, 'components', {QInput: QInput["a" /* default */],QBtn: QBtn["a" /* default */]})

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VMainContentCheckingSummary.vue?vue&type=template&id=c2750b90&
var VMainContentCheckingSummaryvue_type_template_id_c2750b90_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('h3',[_vm._v("Результат проверки")]),_c('div',{staticClass:"q-mb-md"},[_c('q-chip',[_c('q-avatar',{attrs:{"color":"red","text-color":"white"}},[_vm._v(_vm._s(_vm.numberOfCheckedVideos))]),_vm._v("Всего проверено\n        ")],1),_c('q-chip',[_c('q-avatar',{attrs:{"color":"red","text-color":"white"}},[_vm._v(_vm._s(_vm.numberOfVideosWithoutLikes))]),_vm._v("Без лайков\n        ")],1),_c('q-chip',[_c('q-avatar',{attrs:{"color":"teal","text-color":"white"}},[_vm._v(_vm._s(_vm.numberOfVideosWithLikes))]),_vm._v("С лайками\n        ")],1),_c('q-btn',{attrs:{"icon":"fas fa-recycle","label":"Поставить лайки","color":"red"},on:{"click":function($event){return _vm.recoverLikes()}}})],1),_c('q-table',{attrs:{"title":"List of videos without likes","dense":"","data":_vm.videosWithoutLikes,"columns":_vm.columns,"row-key":"name"}})],1)}
var VMainContentCheckingSummaryvue_type_template_id_c2750b90_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/VMainContentCheckingSummary.vue?vue&type=template&id=c2750b90&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VMainContentCheckingSummaryWithoutLikes.vue?vue&type=template&id=6b81588a&
var VMainContentCheckingSummaryWithoutLikesvue_type_template_id_6b81588a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var VMainContentCheckingSummaryWithoutLikesvue_type_template_id_6b81588a_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',[_c('div',[_c('div',[_c('h2',[_vm._v("Список видео без лайков")]),_c('span'),_c('button',[_vm._v("\n                    ng-click=\"$ctrl.closeDialog()\"\n                    "),_vm._v("\n                    icon\n                ")])]),_c('div',[_c('div',[_c('div',[_vm._v("list of items: lastCheckingResult.withoutLikesShown")])]),_c('span',[_vm._v("pagination")])])])])])}]


// CONCATENATED MODULE: ./src/components/VMainContentCheckingSummaryWithoutLikes.vue?vue&type=template&id=6b81588a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VMainContentCheckingSummaryWithoutLikes.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var VMainContentCheckingSummaryWithoutLikesvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./src/components/VMainContentCheckingSummaryWithoutLikes.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_VMainContentCheckingSummaryWithoutLikesvue_type_script_lang_js_ = (VMainContentCheckingSummaryWithoutLikesvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/VMainContentCheckingSummaryWithoutLikes.vue





/* normalize component */

var VMainContentCheckingSummaryWithoutLikes_component = Object(componentNormalizer["a" /* default */])(
  components_VMainContentCheckingSummaryWithoutLikesvue_type_script_lang_js_,
  VMainContentCheckingSummaryWithoutLikesvue_type_template_id_6b81588a_render,
  VMainContentCheckingSummaryWithoutLikesvue_type_template_id_6b81588a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var VMainContentCheckingSummaryWithoutLikes = (VMainContentCheckingSummaryWithoutLikes_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VMainContentCheckingSummary.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var VMainContentCheckingSummaryvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      columns: [{
        name: 'url',
        required: true,
        label: 'Video URL',
        align: 'left',
        field: function field(row) {
          return row.url;
        },
        format: function format(val) {
          return "".concat(val);
        },
        sortable: false
      }],
      data: [{
        url: 'abcde'
      }, {
        url: 'xyz'
      }, {
        url: '1234'
      }]
    };
  },
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
    },
    videosWithoutLikes: function videosWithoutLikes() {
      return this.checkedVideos.withoutLikes.map(function (url) {
        return {
          url: url
        };
      });
    }
  },
  componentst: {
    VMainContentCheckingSummaryWithoutLikes: VMainContentCheckingSummaryWithoutLikes
  },
  methods: {
    recoverLikes: function recoverLikes() {
      console.log('recover likes btn');
    }
  }
});
// CONCATENATED MODULE: ./src/components/VMainContentCheckingSummary.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_VMainContentCheckingSummaryvue_type_script_lang_js_ = (VMainContentCheckingSummaryvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/chip/QChip.js
var QChip = __webpack_require__("b047");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/table/QTable.js + 27 modules
var QTable = __webpack_require__("eaac");

// CONCATENATED MODULE: ./src/components/VMainContentCheckingSummary.vue





/* normalize component */

var VMainContentCheckingSummary_component = Object(componentNormalizer["a" /* default */])(
  components_VMainContentCheckingSummaryvue_type_script_lang_js_,
  VMainContentCheckingSummaryvue_type_template_id_c2750b90_render,
  VMainContentCheckingSummaryvue_type_template_id_c2750b90_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var VMainContentCheckingSummary = (VMainContentCheckingSummary_component.exports);





runtime_auto_import_default()(VMainContentCheckingSummary_component, 'components', {QChip: QChip["a" /* default */],QAvatar: QAvatar["a" /* default */],QBtn: QBtn["a" /* default */],QTable: QTable["a" /* default */]})

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VRecoveryPageRecoverySummary.vue?vue&type=template&id=99b72990&
var VRecoveryPageRecoverySummaryvue_type_template_id_99b72990_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('h3',[_vm._v("Результат выставления лайков")]),_c('strong',[_vm._v("Лайки могут появиться с задержкой.")]),_c('div',{staticClass:"q-pa-md"},[_c('div',{staticClass:"q-mb-md"},[_c('q-chip',[_c('q-avatar',{attrs:{"color":"teal","text-color":"white"}},[_vm._v(_vm._s(_vm.numberOfSuccessfullVideos))]),_vm._v("Проставлено\n            ")],1)],1),_c('q-table',{attrs:{"title":"List of recovered videos","dense":"","data":_vm.recoveredVideosTableList,"columns":_vm.columns,"row-key":"name"}})],1),_c('div',{staticClass:"q-pa-md"},[_c('div',{staticClass:"q-mb-md"},[_c('q-chip',[_c('q-avatar',{attrs:{"color":"red","text-color":"white"}},[_vm._v(_vm._s(_vm.numberOfFailedVideos))]),_vm._v("Не проставлено\n            ")],1)],1),_c('q-table',{attrs:{"title":"List of unrecovered videos","dense":"","data":_vm.failedVideosTableList,"columns":_vm.columns,"row-key":"name"}})],1)])}
var VRecoveryPageRecoverySummaryvue_type_template_id_99b72990_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/VRecoveryPageRecoverySummary.vue?vue&type=template&id=99b72990&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VRecoveryPageRecoverySummary.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var VRecoveryPageRecoverySummaryvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      columns: [{
        name: 'url',
        required: true,
        label: 'Video URL',
        align: 'left',
        field: function field(row) {
          return row.url;
        },
        format: function format(val) {
          return "".concat(val);
        },
        sortable: false
      }],
      data: [{
        url: 'abcde'
      }, {
        url: 'xyz'
      }, {
        url: '1234'
      }]
    };
  },
  props: {
    recoveredVideos: {
      type: Object,
      default: function _default() {
        return {
          successfull: [],
          failed: []
        };
      }
    }
  },
  computed: {
    numberOfSuccessfullVideos: function numberOfSuccessfullVideos() {
      return this.recoveredVideos.successfull.length;
    },
    numberOfFailedVideos: function numberOfFailedVideos() {
      return this.recoveredVideos.failed.length;
    },
    recoveredVideosTableList: function recoveredVideosTableList() {
      return this.recoveredVideos.successfull.map(function (url) {
        return {
          url: url
        };
      });
    },
    failedVideosTableList: function failedVideosTableList() {
      return this.recoveredVideos.failed.map(function (url) {
        return {
          url: url
        };
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/VRecoveryPageRecoverySummary.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_VRecoveryPageRecoverySummaryvue_type_script_lang_js_ = (VRecoveryPageRecoverySummaryvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/VRecoveryPageRecoverySummary.vue





/* normalize component */

var VRecoveryPageRecoverySummary_component = Object(componentNormalizer["a" /* default */])(
  components_VRecoveryPageRecoverySummaryvue_type_script_lang_js_,
  VRecoveryPageRecoverySummaryvue_type_template_id_99b72990_render,
  VRecoveryPageRecoverySummaryvue_type_template_id_99b72990_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var VRecoveryPageRecoverySummary = (VRecoveryPageRecoverySummary_component.exports);




runtime_auto_import_default()(VRecoveryPageRecoverySummary_component, 'components', {QChip: QChip["a" /* default */],QAvatar: QAvatar["a" /* default */],QTable: QTable["a" /* default */]})

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
//
//
//
//
//
//
//

 // import VMainContentVideoErrors from '../components/VMainContentVideoErrors';



/* harmony default export */ var Recoveryvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      videos: [],
      checkedVideos: {
        withLikes: [],
        withoutLikes: []
      },
      recoveredVideos: {
        successfull: ['youtube.com.pl/1234', 'youtube.com.pl/acded', 'youtube.com.pl/vbsj'],
        failed: ['youtube.com.pl/1234', 'youtube.com.pl/xyzas']
      }
    };
  },
  components: {
    VMainContentVideoListInput: VMainContentVideoListInput,
    VMainContentCheckingSummary: VMainContentCheckingSummary,
    // VMainContentVideoErrors,
    VRecoveryPageRecoverySummary: VRecoveryPageRecoverySummary
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
//# sourceMappingURL=8.cb5abfa1.js.map