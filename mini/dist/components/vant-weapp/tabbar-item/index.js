(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["components/vant-weapp/tabbar-item/index"],{

/***/ "./src/components/vant-weapp/tabbar-item/index.js":
/*!********************************************************!*\
  !*** ./src/components/vant-weapp/tabbar-item/index.js ***!
  \********************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/component */ "./src/components/vant-weapp/common/component.js");

Object(_common_component__WEBPACK_IMPORTED_MODULE_0__[/* VantComponent */ "a"])({
  props: {
    info: null,
    name: null,
    icon: String,
    dot: Boolean
  },
  relation: {
    name: 'tabbar',
    type: 'ancestor',
    current: 'tabbar-item'
  },
  data: {
    active: false
  },
  methods: {
    onClick: function onClick() {
      if (this.parent) {
        this.parent.onChange(this);
      }

      this.$emit('click');
    },
    updateFromParent: function updateFromParent() {
      var parent = this.parent;

      if (!parent) {
        return;
      }

      var index = parent.children.indexOf(this);
      var parentData = parent.data;
      var data = this.data;
      var active = (data.name || index) === parentData.active;
      var patch = {};

      if (active !== data.active) {
        patch.active = active;
      }

      if (parentData.activeColor !== data.activeColor) {
        patch.activeColor = parentData.activeColor;
      }

      if (parentData.inactiveColor !== data.inactiveColor) {
        patch.inactiveColor = parentData.inactiveColor;
      }

      return Object.keys(patch).length > 0 ? this.set(patch) : Promise.resolve();
    }
  }
});

/***/ })

},[["./src/components/vant-weapp/tabbar-item/index.js","runtime","vendors","common"]]]);
//# sourceMappingURL=index.js.map