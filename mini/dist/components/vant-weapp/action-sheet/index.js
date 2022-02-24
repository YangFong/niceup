(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["components/vant-weapp/action-sheet/index"],{

/***/ "./src/components/vant-weapp/action-sheet/index.js":
/*!*********************************************************!*\
  !*** ./src/components/vant-weapp/action-sheet/index.js ***!
  \*********************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/component */ "./src/components/vant-weapp/common/component.js");
/* harmony import */ var _mixins_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mixins/button */ "./src/components/vant-weapp/mixins/button.js");
/* harmony import */ var _mixins_open_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mixins/open-type */ "./src/components/vant-weapp/mixins/open-type.js");



Object(_common_component__WEBPACK_IMPORTED_MODULE_0__[/* VantComponent */ "a"])({
  mixins: [_mixins_button__WEBPACK_IMPORTED_MODULE_1__[/* button */ "a"], _mixins_open_type__WEBPACK_IMPORTED_MODULE_2__[/* openType */ "a"]],
  props: {
    show: Boolean,
    title: String,
    cancelText: String,
    description: String,
    round: {
      type: Boolean,
      value: true
    },
    zIndex: {
      type: Number,
      value: 100
    },
    actions: {
      type: Array,
      value: []
    },
    overlay: {
      type: Boolean,
      value: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      value: true
    },
    closeOnClickAction: {
      type: Boolean,
      value: true
    },
    safeAreaInsetBottom: {
      type: Boolean,
      value: true
    }
  },
  methods: {
    onSelect: function onSelect(event) {
      var index = event.currentTarget.dataset.index;
      var item = this.data.actions[index];

      if (item && !item.disabled && !item.loading) {
        this.$emit('select', item);

        if (this.data.closeOnClickAction) {
          this.onClose();
        }
      }
    },
    onCancel: function onCancel() {
      this.$emit('cancel');
    },
    onClose: function onClose() {
      this.$emit('close');
    },
    onClickOverlay: function onClickOverlay() {
      this.$emit('click-overlay');
      this.onClose();
    }
  }
});

/***/ })

},[["./src/components/vant-weapp/action-sheet/index.js","runtime","vendors","common"]]]);
//# sourceMappingURL=index.js.map