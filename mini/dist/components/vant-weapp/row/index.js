(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["components/vant-weapp/row/index"],{

/***/ "./src/components/vant-weapp/row/index.js":
/*!************************************************!*\
  !*** ./src/components/vant-weapp/row/index.js ***!
  \************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/component */ "./src/components/vant-weapp/common/component.js");

Object(_common_component__WEBPACK_IMPORTED_MODULE_0__[/* VantComponent */ "a"])({
  relation: {
    name: 'col',
    type: 'descendant',
    current: 'row',
    linked: function linked(target) {
      if (this.data.gutter) {
        target.setGutter(this.data.gutter);
      }
    }
  },
  props: {
    gutter: {
      type: Number,
      observer: 'setGutter'
    }
  },
  data: {
    viewStyle: ''
  },
  mounted: function mounted() {
    if (this.data.gutter) {
      this.setGutter();
    }
  },
  methods: {
    setGutter: function setGutter() {
      var _this = this;

      var gutter = this.data.gutter;
      var margin = "-".concat(Number(gutter) / 2, "px");
      var viewStyle = gutter ? "margin-right: ".concat(margin, "; margin-left: ").concat(margin, ";") : '';
      this.setData({
        viewStyle: viewStyle
      });
      this.getRelationNodes('../col/index').forEach(function (col) {
        col.setGutter(_this.data.gutter);
      });
    }
  }
});

/***/ })

},[["./src/components/vant-weapp/row/index.js","runtime","vendors","common"]]]);
//# sourceMappingURL=index.js.map