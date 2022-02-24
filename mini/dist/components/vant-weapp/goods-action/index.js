(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["components/vant-weapp/goods-action/index"],{

/***/ "./src/components/vant-weapp/goods-action/index.js":
/*!*********************************************************!*\
  !*** ./src/components/vant-weapp/goods-action/index.js ***!
  \*********************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/component */ "./src/components/vant-weapp/common/component.js");

Object(_common_component__WEBPACK_IMPORTED_MODULE_0__[/* VantComponent */ "a"])({
  relation: {
    type: 'descendant',
    name: 'goods-action-button',
    current: 'goods-action',
    linked: function linked() {
      this.updateStyle();
    },
    unlinked: function unlinked() {
      this.updateStyle();
    },
    linkChanged: function linkChanged() {
      this.updateStyle();
    }
  },
  props: {
    safeAreaInsetBottom: {
      type: Boolean,
      value: true
    }
  },
  methods: {
    updateStyle: function updateStyle() {
      var _this = this;

      wx.nextTick(function () {
        _this.children.forEach(function (child) {
          child.updateStyle();
        });
      });
    }
  }
});

/***/ })

},[["./src/components/vant-weapp/goods-action/index.js","runtime","vendors","common"]]]);
//# sourceMappingURL=index.js.map