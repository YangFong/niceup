(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["components/vant-weapp/icon/index"],{

/***/ "./src/components/vant-weapp/icon/index.js":
/*!*************************************************!*\
  !*** ./src/components/vant-weapp/icon/index.js ***!
  \*************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/component */ "./src/components/vant-weapp/common/component.js");

Object(_common_component__WEBPACK_IMPORTED_MODULE_0__[/* VantComponent */ "a"])({
  props: {
    dot: Boolean,
    info: null,
    size: null,
    color: String,
    customStyle: String,
    classPrefix: {
      type: String,
      value: 'van-icon'
    },
    name: {
      type: String,
      observer: function observer(val) {
        this.setData({
          isImageName: val.indexOf('/') !== -1
        });
      }
    }
  },
  methods: {
    onClick: function onClick() {
      this.$emit('click');
    }
  }
});

/***/ })

},[["./src/components/vant-weapp/icon/index.js","runtime","vendors","common"]]]);
//# sourceMappingURL=index.js.map