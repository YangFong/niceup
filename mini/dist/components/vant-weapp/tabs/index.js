(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["components/vant-weapp/tabs/index"],{

/***/ "./src/components/vant-weapp/mixins/touch.js":
/*!***************************************************!*\
  !*** ./src/components/vant-weapp/mixins/touch.js ***!
  \***************************************************/
/*! exports provided: touch */
/*! exports used: touch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return touch; });
var MIN_DISTANCE = 10;

function getDirection(x, y) {
  if (x > y && x > MIN_DISTANCE) {
    return 'horizontal';
  }

  if (y > x && y > MIN_DISTANCE) {
    return 'vertical';
  }

  return '';
}

var touch = Behavior({
  methods: {
    resetTouchStatus: function resetTouchStatus() {
      this.direction = '';
      this.deltaX = 0;
      this.deltaY = 0;
      this.offsetX = 0;
      this.offsetY = 0;
    },
    touchStart: function touchStart(event) {
      this.resetTouchStatus();
      var touch = event.touches[0];
      this.startX = touch.clientX;
      this.startY = touch.clientY;
    },
    touchMove: function touchMove(event) {
      var touch = event.touches[0];
      this.deltaX = touch.clientX - this.startX;
      this.deltaY = touch.clientY - this.startY;
      this.offsetX = Math.abs(this.deltaX);
      this.offsetY = Math.abs(this.deltaY);
      this.direction = this.direction || getDirection(this.offsetX, this.offsetY);
    }
  }
});

/***/ }),

/***/ "./src/components/vant-weapp/tabs/index.js":
/*!*************************************************!*\
  !*** ./src/components/vant-weapp/tabs/index.js ***!
  \*************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/component */ "./src/components/vant-weapp/common/component.js");
/* harmony import */ var _mixins_touch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mixins/touch */ "./src/components/vant-weapp/mixins/touch.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/utils */ "./src/components/vant-weapp/common/utils.js");




Object(_common_component__WEBPACK_IMPORTED_MODULE_1__[/* VantComponent */ "a"])({
  mixins: [_mixins_touch__WEBPACK_IMPORTED_MODULE_2__[/* touch */ "a"]],
  classes: ['nav-class', 'tab-class', 'tab-active-class', 'line-class'],
  relation: {
    name: 'tab',
    type: 'descendant',
    current: 'tabs',
    linked: function linked(target) {
      target.index = this.children.length - 1;
      this.updateTabs();
    },
    unlinked: function unlinked() {
      this.children = this.children.map(function (child, index) {
        child.index = index;
        return child;
      });
      this.updateTabs();
    }
  },
  props: {
    sticky: Boolean,
    border: Boolean,
    swipeable: Boolean,
    titleActiveColor: String,
    titleInactiveColor: String,
    color: String,
    animated: {
      type: Boolean,
      observer: function observer() {
        var _this = this;

        this.children.forEach(function (child, index) {
          return child.updateRender(index === _this.data.currentIndex, _this);
        });
      }
    },
    lineWidth: {
      type: [String, Number],
      value: 40,
      observer: 'setLine'
    },
    lineHeight: {
      type: [String, Number],
      value: -1
    },
    active: {
      type: [String, Number],
      value: 0,
      observer: function observer(name) {
        if (name !== this.getCurrentName()) {
          this.setCurrentIndexByName(name);
        }
      }
    },
    type: {
      type: String,
      value: 'line'
    },
    ellipsis: {
      type: Boolean,
      value: true
    },
    duration: {
      type: Number,
      value: 0.3
    },
    zIndex: {
      type: Number,
      value: 1
    },
    swipeThreshold: {
      type: Number,
      value: 5,
      observer: function observer(value) {
        this.setData({
          scrollable: this.children.length > value || !this.data.ellipsis
        });
      }
    },
    offsetTop: {
      type: Number,
      value: 0
    },
    lazyRender: {
      type: Boolean,
      value: true
    }
  },
  data: {
    tabs: [],
    lineStyle: '',
    scrollLeft: 0,
    scrollable: false,
    trackStyle: '',
    currentIndex: 0,
    container: null,
    skipTransition: true,
    lineOffsetLeft: 0
  },
  mounted: function mounted() {
    var _this2 = this;

    wx.nextTick(function () {
      _this2.setLine(true);

      _this2.scrollIntoView();
    });
  },
  methods: {
    updateContainer: function updateContainer() {
      var _this3 = this;

      this.setData({
        container: function container() {
          return _this3.createSelectorQuery().select('.van-tabs');
        }
      });
    },
    updateTabs: function updateTabs() {
      var _this$children = this.children,
          children = _this$children === void 0 ? [] : _this$children,
          data = this.data;
      this.setData({
        tabs: children.map(function (child) {
          return child.data;
        }),
        scrollable: this.children.length > data.swipeThreshold || !data.ellipsis
      });
      this.setCurrentIndexByName(this.getCurrentName() || data.active);
    },
    trigger: function trigger(eventName, child) {
      var currentIndex = this.data.currentIndex;
      var currentChild = child || this.children[currentIndex];

      if (!Object(_common_utils__WEBPACK_IMPORTED_MODULE_3__[/* isDef */ "e"])(currentChild)) {
        return;
      }

      this.$emit(eventName, {
        index: currentChild.index,
        name: currentChild.getComputedName(),
        title: currentChild.data.title
      });
    },
    onTap: function onTap(event) {
      var _this4 = this;

      var index = event.currentTarget.dataset.index;
      var child = this.children[index];

      if (child.data.disabled) {
        this.trigger('disabled', child);
      } else {
        this.setCurrentIndex(index);
        wx.nextTick(function () {
          _this4.trigger('click');
        });
      }
    },
    // correct the index of active tab
    setCurrentIndexByName: function setCurrentIndexByName(name) {
      var _this$children2 = this.children,
          children = _this$children2 === void 0 ? [] : _this$children2;
      var matched = children.filter(function (child) {
        return child.getComputedName() === name;
      });

      if (matched.length) {
        this.setCurrentIndex(matched[0].index);
      }
    },
    setCurrentIndex: function setCurrentIndex(currentIndex) {
      var _this5 = this;

      var data = this.data,
          _this$children3 = this.children,
          children = _this$children3 === void 0 ? [] : _this$children3;

      if (!Object(_common_utils__WEBPACK_IMPORTED_MODULE_3__[/* isDef */ "e"])(currentIndex) || currentIndex >= children.length || currentIndex < 0) {
        return;
      }

      children.forEach(function (item, index) {
        var active = index === currentIndex;

        if (active !== item.data.active || !item.inited) {
          item.updateRender(active, _this5);
        }
      });

      if (currentIndex === data.currentIndex) {
        return;
      }

      var shouldEmitChange = data.currentIndex !== null;
      this.setData({
        currentIndex: currentIndex
      });
      wx.nextTick(function () {
        _this5.setLine();

        _this5.scrollIntoView();

        _this5.updateContainer();

        _this5.trigger('input');

        if (shouldEmitChange) {
          _this5.trigger('change');
        }
      });
    },
    getCurrentName: function getCurrentName() {
      var activeTab = this.children[this.data.currentIndex];

      if (activeTab) {
        return activeTab.getComputedName();
      }
    },
    setLine: function setLine() {
      var _this6 = this;

      var skipTransition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (this.data.type !== 'line') {
        return;
      }

      var currentIndex = this.data.currentIndex;
      Promise.all([_common_utils__WEBPACK_IMPORTED_MODULE_3__[/* getAllRect */ "b"].call(this, '.van-tab'), _common_utils__WEBPACK_IMPORTED_MODULE_3__[/* getRect */ "c"].call(this, '.van-tabs__line')]).then(function (_ref) {
        var _ref2 = Object(C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_ref, 2),
            _ref2$ = _ref2[0],
            rects = _ref2$ === void 0 ? [] : _ref2$,
            lineRect = _ref2[1];

        var rect = rects[currentIndex];

        if (rect == null) {
          return;
        }

        var lineOffsetLeft = rects.slice(0, currentIndex).reduce(function (prev, curr) {
          return prev + curr.width;
        }, 0);
        lineOffsetLeft += (rect.width - lineRect.width) / 2;

        _this6.setData({
          lineOffsetLeft: lineOffsetLeft,
          skipTransition: skipTransition
        });
      });
    },
    // scroll active tab into view
    scrollIntoView: function scrollIntoView() {
      var _this7 = this;

      var _this$data = this.data,
          currentIndex = _this$data.currentIndex,
          scrollable = _this$data.scrollable;

      if (!scrollable) {
        return;
      }

      Promise.all([_common_utils__WEBPACK_IMPORTED_MODULE_3__[/* getAllRect */ "b"].call(this, '.van-tab'), _common_utils__WEBPACK_IMPORTED_MODULE_3__[/* getRect */ "c"].call(this, '.van-tabs__nav')]).then(function (_ref3) {
        var _ref4 = Object(C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_ref3, 2),
            tabRects = _ref4[0],
            navRect = _ref4[1];

        var tabRect = tabRects[currentIndex];
        var offsetLeft = tabRects.slice(0, currentIndex).reduce(function (prev, curr) {
          return prev + curr.width;
        }, 0);

        _this7.setData({
          scrollLeft: offsetLeft - (navRect.width - tabRect.width) / 2
        });
      });
    },
    onTouchScroll: function onTouchScroll(event) {
      this.$emit('scroll', event.detail);
    },
    onTouchStart: function onTouchStart(event) {
      if (!this.data.swipeable) return;
      this.touchStart(event);
    },
    onTouchMove: function onTouchMove(event) {
      if (!this.data.swipeable) return;
      this.touchMove(event);
    },
    // watch swipe touch end
    onTouchEnd: function onTouchEnd() {
      if (!this.data.swipeable) return;
      var direction = this.direction,
          deltaX = this.deltaX,
          offsetX = this.offsetX;
      var minSwipeDistance = 50;

      if (direction === 'horizontal' && offsetX >= minSwipeDistance) {
        var index = this.getAvaiableTab(deltaX);

        if (index !== -1) {
          this.setCurrentIndex(index);
        }
      }
    },
    getAvaiableTab: function getAvaiableTab(direction) {
      var _this$data2 = this.data,
          tabs = _this$data2.tabs,
          currentIndex = _this$data2.currentIndex;
      var step = direction > 0 ? -1 : 1;

      for (var i = step; currentIndex + i < tabs.length && currentIndex + i >= 0; i += step) {
        var index = currentIndex + i;

        if (index >= 0 && index < tabs.length && tabs[index] && !tabs[index].disabled) {
          return index;
        }
      }

      return -1;
    }
  }
});

/***/ })

},[["./src/components/vant-weapp/tabs/index.js","runtime","vendors","common"]]]);
//# sourceMappingURL=index.js.map