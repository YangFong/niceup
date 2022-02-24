(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["components/vant-weapp/overlay/index"],{

/***/ "./src/components/vant-weapp/overlay/index.js":
/*!****************************************************!*\
  !*** ./src/components/vant-weapp/overlay/index.js ***!
  \****************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/component */ "./src/components/vant-weapp/common/component.js");

Object(_common_component__WEBPACK_IMPORTED_MODULE_0__[/* VantComponent */ "a"])({
  props: {
    show: Boolean,
    customStyle: String,
    duration: {
      type: null,
      value: 300
    },
    zIndex: {
      type: Number,
      value: 1
    }
  },
  methods: {
    onClick: function onClick() {
      this.$emit('click');
    },
    // for prevent touchmove
    noop: function noop() {}
  }
});

/***/ })

},[["./src/components/vant-weapp/overlay/index.js","runtime","vendors","common"]]]);
//# sourceMappingURL=index.js.map