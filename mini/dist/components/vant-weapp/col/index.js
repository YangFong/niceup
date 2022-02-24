(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["components/vant-weapp/col/index"],{

/***/ "./src/components/vant-weapp/col/index.js":
/*!************************************************!*\
  !*** ./src/components/vant-weapp/col/index.js ***!
  \************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/component */ "./src/components/vant-weapp/common/component.js");

Object(_common_component__WEBPACK_IMPORTED_MODULE_0__[/* VantComponent */ "a"])({
  relation: {
    name: 'row',
    type: 'ancestor',
    current: 'col'
  },
  props: {
    span: Number,
    offset: Number
  },
  data: {
    viewStyle: ''
  },
  methods: {
    setGutter: function setGutter(gutter) {
      var padding = "".concat(gutter / 2, "px");
      var viewStyle = gutter ? "padding-left: ".concat(padding, "; padding-right: ").concat(padding, ";") : '';

      if (viewStyle !== this.data.viewStyle) {
        this.setData({
          viewStyle: viewStyle
        });
      }
    }
  }
});

/***/ })

},[["./src/components/vant-weapp/col/index.js","runtime","vendors","common"]]]);
//# sourceMappingURL=index.js.map