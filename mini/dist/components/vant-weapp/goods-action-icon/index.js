(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["components/vant-weapp/goods-action-icon/index"],{

/***/ "./src/components/vant-weapp/goods-action-icon/index.js":
/*!**************************************************************!*\
  !*** ./src/components/vant-weapp/goods-action-icon/index.js ***!
  \**************************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/component */ "./src/components/vant-weapp/common/component.js");
/* harmony import */ var _mixins_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mixins/link */ "./src/components/vant-weapp/mixins/link.js");
/* harmony import */ var _mixins_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mixins/button */ "./src/components/vant-weapp/mixins/button.js");
/* harmony import */ var _mixins_open_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mixins/open-type */ "./src/components/vant-weapp/mixins/open-type.js");




Object(_common_component__WEBPACK_IMPORTED_MODULE_0__[/* VantComponent */ "a"])({
  classes: ['icon-class', 'text-class'],
  mixins: [_mixins_link__WEBPACK_IMPORTED_MODULE_1__[/* link */ "a"], _mixins_button__WEBPACK_IMPORTED_MODULE_2__[/* button */ "a"], _mixins_open_type__WEBPACK_IMPORTED_MODULE_3__[/* openType */ "a"]],
  props: {
    text: String,
    dot: Boolean,
    info: String,
    icon: String,
    disabled: Boolean,
    loading: Boolean
  },
  methods: {
    onClick: function onClick(event) {
      this.$emit('click', event.detail);
      this.jumpLink();
    }
  }
});

/***/ })

},[["./src/components/vant-weapp/goods-action-icon/index.js","runtime","vendors","common"]]]);
//# sourceMappingURL=index.js.map