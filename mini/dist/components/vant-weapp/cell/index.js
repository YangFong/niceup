(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["components/vant-weapp/cell/index"],{

/***/ "./src/components/vant-weapp/cell/index.js":
/*!*************************************************!*\
  !*** ./src/components/vant-weapp/cell/index.js ***!
  \*************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mixins/link */ "./src/components/vant-weapp/mixins/link.js");
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/component */ "./src/components/vant-weapp/common/component.js");


Object(_common_component__WEBPACK_IMPORTED_MODULE_1__[/* VantComponent */ "a"])({
  classes: ['title-class', 'label-class', 'value-class', 'right-icon-class', 'hover-class'],
  mixins: [_mixins_link__WEBPACK_IMPORTED_MODULE_0__[/* link */ "a"]],
  props: {
    title: null,
    value: null,
    icon: String,
    size: String,
    label: String,
    center: Boolean,
    isLink: Boolean,
    required: Boolean,
    clickable: Boolean,
    titleWidth: String,
    customStyle: String,
    arrowDirection: String,
    useLabelSlot: Boolean,
    border: {
      type: Boolean,
      value: true
    },
    titleStyle: String
  },
  methods: {
    onClick: function onClick(event) {
      this.$emit('click', event.detail);
      this.jumpLink();
    }
  }
});

/***/ })

},[["./src/components/vant-weapp/cell/index.js","runtime","vendors","common"]]]);
//# sourceMappingURL=index.js.map