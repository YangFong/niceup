(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["components/vant-weapp/empty/index"],{

/***/ "./src/components/vant-weapp/empty/index.js":
/*!**************************************************!*\
  !*** ./src/components/vant-weapp/empty/index.js ***!
  \**************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/component */ "./src/components/vant-weapp/common/component.js");

var PRESETS = ['error', 'search', 'default', 'network'];
Object(_common_component__WEBPACK_IMPORTED_MODULE_0__[/* VantComponent */ "a"])({
  props: {
    description: String,
    image: {
      type: String,
      value: 'default'
    }
  },
  created: function created() {
    if (PRESETS.indexOf(this.data.image) !== -1) {
      this.setData({
        imageUrl: "https://img.yzcdn.cn/vant/empty-image-".concat(this.data.image, ".png")
      });
    } else {
      this.setData({
        imageUrl: this.data.image
      });
    }
  }
});

/***/ })

},[["./src/components/vant-weapp/empty/index.js","runtime","vendors","common"]]]);
//# sourceMappingURL=index.js.map