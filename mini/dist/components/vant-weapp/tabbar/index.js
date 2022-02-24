(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["components/vant-weapp/tabbar/index"],{

/***/ "./src/components/vant-weapp/tabbar/index.js":
/*!***************************************************!*\
  !*** ./src/components/vant-weapp/tabbar/index.js ***!
  \***************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/component */ "./src/components/vant-weapp/common/component.js");

Object(_common_component__WEBPACK_IMPORTED_MODULE_0__[/* VantComponent */ "a"])({
  relation: {
    name: 'tabbar-item',
    type: 'descendant',
    current: 'tabbar',
    linked: function linked(target) {
      target.parent = this;
      target.updateFromParent();
    },
    unlinked: function unlinked() {
      this.updateChildren();
    }
  },
  props: {
    active: {
      type: null,
      observer: 'updateChildren'
    },
    activeColor: {
      type: String,
      observer: 'updateChildren'
    },
    inactiveColor: {
      type: String,
      observer: 'updateChildren'
    },
    fixed: {
      type: Boolean,
      value: true
    },
    border: {
      type: Boolean,
      value: true
    },
    zIndex: {
      type: Number,
      value: 1
    },
    safeAreaInsetBottom: {
      type: Boolean,
      value: true
    }
  },
  methods: {
    updateChildren: function updateChildren() {
      var children = this.children;

      if (!Array.isArray(children) || !children.length) {
        return Promise.resolve();
      }

      return Promise.all(children.map(function (child) {
        return child.updateFromParent();
      }));
    },
    onChange: function onChange(child) {
      var index = this.children.indexOf(child);
      var active = child.data.name || index;

      if (active !== this.data.active) {
        this.$emit('change', active);
      }
    }
  }
});

/***/ })

},[["./src/components/vant-weapp/tabbar/index.js","runtime","vendors","common"]]]);
//# sourceMappingURL=index.js.map