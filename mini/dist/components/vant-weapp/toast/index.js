(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["components/vant-weapp/toast/index"],{

/***/ "./src/components/vant-weapp/toast/index.js":
/*!**************************************************!*\
  !*** ./src/components/vant-weapp/toast/index.js ***!
  \**************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/component */ "./src/components/vant-weapp/common/component.js");

Object(_common_component__WEBPACK_IMPORTED_MODULE_0__[/* VantComponent */ "a"])({
  props: {
    show: Boolean,
    mask: Boolean,
    message: String,
    forbidClick: Boolean,
    zIndex: {
      type: Number,
      value: 1000
    },
    type: {
      type: String,
      value: 'text'
    },
    loadingType: {
      type: String,
      value: 'circular'
    },
    position: {
      type: String,
      value: 'middle'
    }
  },
  methods: {
    // for prevent touchmove
    noop: function noop() {}
  }
});

/***/ })

},[["./src/components/vant-weapp/toast/index.js","runtime","vendors","common"]]]);
//# sourceMappingURL=index.js.map