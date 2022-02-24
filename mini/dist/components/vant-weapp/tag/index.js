(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["components/vant-weapp/tag/index"],{

/***/ "./src/components/vant-weapp/tag/index.js":
/*!************************************************!*\
  !*** ./src/components/vant-weapp/tag/index.js ***!
  \************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/component */ "./src/components/vant-weapp/common/component.js");

Object(_common_component__WEBPACK_IMPORTED_MODULE_0__[/* VantComponent */ "a"])({
  props: {
    size: String,
    mark: Boolean,
    color: String,
    plain: Boolean,
    round: Boolean,
    textColor: String,
    type: {
      type: String,
      value: 'default'
    },
    closeable: Boolean
  },
  methods: {
    onClose: function onClose() {
      this.$emit('close');
    }
  }
});

/***/ })

},[["./src/components/vant-weapp/tag/index.js","runtime","vendors","common"]]]);
//# sourceMappingURL=index.js.map