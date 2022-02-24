(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["components/vant-weapp/sticky/index"],{

/***/ "./src/components/vant-weapp/mixins/page-scroll.js":
/*!*********************************************************!*\
  !*** ./src/components/vant-weapp/mixins/page-scroll.js ***!
  \*********************************************************/
/*! exports provided: pageScrollMixin */
/*! exports used: pageScrollMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pageScrollMixin; });
function getCurrentPage() {
  var pages = getCurrentPages();
  return pages[pages.length - 1] || {};
}

function onPageScroll(event) {
  var _getCurrentPage = getCurrentPage(),
      _getCurrentPage$vanPa = _getCurrentPage.vanPageScroller,
      vanPageScroller = _getCurrentPage$vanPa === void 0 ? [] : _getCurrentPage$vanPa;

  vanPageScroller.forEach(function (scroller) {
    if (typeof scroller === 'function') {
      scroller(event);
    }
  });
}

var pageScrollMixin = function pageScrollMixin(scroller) {
  return Behavior({
    attached: function attached() {
      var page = getCurrentPage();

      if (Array.isArray(page.vanPageScroller)) {
        page.vanPageScroller.push(scroller.bind(this));
      } else {
        page.vanPageScroller = typeof page.onPageScroll === 'function' ? [page.onPageScroll.bind(page), scroller.bind(this)] : [scroller.bind(this)];
      }

      page.onPageScroll = onPageScroll;
    },
    detached: function detached() {
      var page = getCurrentPage();
      page.vanPageScroller = (page.vanPageScroller || []).filter(function (item) {
        return item !== scroller;
      });
    }
  });
};

/***/ }),

/***/ "./src/components/vant-weapp/sticky/index.js":
/*!***************************************************!*\
  !*** ./src/components/vant-weapp/sticky/index.js ***!
  \***************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/component */ "./src/components/vant-weapp/common/component.js");
/* harmony import */ var _mixins_page_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mixins/page-scroll */ "./src/components/vant-weapp/mixins/page-scroll.js");



var ROOT_ELEMENT = '.van-sticky';
Object(_common_component__WEBPACK_IMPORTED_MODULE_1__[/* VantComponent */ "a"])({
  props: {
    zIndex: {
      type: Number,
      value: 99
    },
    offsetTop: {
      type: Number,
      value: 0,
      observer: 'onScroll'
    },
    disabled: {
      type: Boolean,
      observer: 'onScroll'
    },
    container: {
      type: null,
      observer: 'onScroll'
    },
    scrollTop: {
      type: null,
      observer: function observer(val) {
        this.onScroll({
          scrollTop: val
        });
      }
    }
  },
  mixins: [Object(_mixins_page_scroll__WEBPACK_IMPORTED_MODULE_2__[/* pageScrollMixin */ "a"])(function (event) {
    if (this.data.scrollTop != null) {
      return;
    }

    this.onScroll(event);
  })],
  data: {
    height: 0,
    fixed: false,
    transform: 0
  },
  mounted: function mounted() {
    this.onScroll();
  },
  methods: {
    onScroll: function onScroll() {
      var _this = this;

      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          scrollTop = _ref.scrollTop;

      var _this$data = this.data,
          container = _this$data.container,
          offsetTop = _this$data.offsetTop,
          disabled = _this$data.disabled;

      if (disabled) {
        this.setDataAfterDiff({
          fixed: false,
          transform: 0
        });
        return;
      }

      this.scrollTop = scrollTop || this.scrollTop;

      if (typeof container === 'function') {
        Promise.all([this.getRect(ROOT_ELEMENT), this.getContainerRect()]).then(function (_ref2) {
          var _ref3 = Object(C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_ref2, 2),
              root = _ref3[0],
              container = _ref3[1];

          if (offsetTop + root.height > container.height + container.top) {
            _this.setDataAfterDiff({
              fixed: false,
              transform: container.height - root.height
            });
          } else if (offsetTop >= root.top) {
            _this.setDataAfterDiff({
              fixed: true,
              height: root.height,
              transform: 0
            });
          } else {
            _this.setDataAfterDiff({
              fixed: false,
              transform: 0
            });
          }
        });
        return;
      }

      this.getRect(ROOT_ELEMENT).then(function (root) {
        if (offsetTop >= root.top) {
          _this.setDataAfterDiff({
            fixed: true,
            height: root.height
          });

          _this.transform = 0;
        } else {
          _this.setDataAfterDiff({
            fixed: false
          });
        }
      });
    },
    setDataAfterDiff: function setDataAfterDiff(data) {
      var _this2 = this;

      wx.nextTick(function () {
        var diff = Object.keys(data).reduce(function (prev, key) {
          if (data[key] !== _this2.data[key]) {
            prev[key] = data[key];
          }

          return prev;
        }, {});

        _this2.setData(diff);

        _this2.$emit('scroll', {
          scrollTop: _this2.scrollTop,
          isFixed: data.fixed || _this2.data.fixed
        });
      });
    },
    getContainerRect: function getContainerRect() {
      var nodesRef = this.data.container();
      return new Promise(function (resolve) {
        return nodesRef.boundingClientRect(resolve).exec();
      });
    }
  }
});

/***/ })

},[["./src/components/vant-weapp/sticky/index.js","runtime","vendors","common"]]]);
//# sourceMappingURL=index.js.map