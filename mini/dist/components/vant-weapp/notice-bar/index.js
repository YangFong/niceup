(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["components/vant-weapp/notice-bar/index"],{

/***/ "./src/components/vant-weapp/notice-bar/index.js":
/*!*******************************************************!*\
  !*** ./src/components/vant-weapp/notice-bar/index.js ***!
  \*******************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/component */ "./src/components/vant-weapp/common/component.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/utils */ "./src/components/vant-weapp/common/utils.js");



Object(_common_component__WEBPACK_IMPORTED_MODULE_1__[/* VantComponent */ "a"])({
  props: {
    text: {
      type: String,
      value: '',
      observer: function observer() {
        var _this = this;

        wx.nextTick(function () {
          _this.init();
        });
      }
    },
    mode: {
      type: String,
      value: ''
    },
    url: {
      type: String,
      value: ''
    },
    openType: {
      type: String,
      value: 'navigate'
    },
    delay: {
      type: Number,
      value: 1
    },
    speed: {
      type: Number,
      value: 50,
      observer: function observer() {
        var _this2 = this;

        wx.nextTick(function () {
          _this2.init();
        });
      }
    },
    scrollable: {
      type: Boolean,
      value: true
    },
    leftIcon: {
      type: String,
      value: ''
    },
    color: String,
    backgroundColor: String,
    background: String,
    wrapable: Boolean
  },
  data: {
    show: true
  },
  created: function created() {
    this.resetAnimation = wx.createAnimation({
      duration: 0,
      timingFunction: 'linear'
    });
  },
  destroyed: function destroyed() {
    this.timer && clearTimeout(this.timer);
  },
  methods: {
    init: function init() {
      var _this3 = this;

      Promise.all([this.getRect('.van-notice-bar__content'), this.getRect('.van-notice-bar__wrap')]).then(function (rects) {
        var _rects = Object(C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(rects, 2),
            contentRect = _rects[0],
            wrapRect = _rects[1];

        if (contentRect == null || wrapRect == null || !contentRect.width || !wrapRect.width) {
          return;
        }

        var _this3$data = _this3.data,
            speed = _this3$data.speed,
            scrollable = _this3$data.scrollable,
            delay = _this3$data.delay;

        if (scrollable && wrapRect.width < contentRect.width) {
          var duration = contentRect.width / speed * 1000;
          _this3.wrapWidth = wrapRect.width;
          _this3.contentWidth = contentRect.width;
          _this3.duration = duration;
          _this3.animation = wx.createAnimation({
            duration: duration,
            timingFunction: 'linear',
            delay: delay
          });

          _this3.scroll();
        }
      });
    },
    scroll: function scroll() {
      var _this4 = this;

      this.timer && clearTimeout(this.timer);
      this.timer = null;
      this.setData({
        animationData: this.resetAnimation.translateX(this.wrapWidth).step().export()
      });
      Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__[/* requestAnimationFrame */ "g"])(function () {
        _this4.setData({
          animationData: _this4.animation.translateX(-_this4.contentWidth).step().export()
        });
      });
      this.timer = setTimeout(function () {
        _this4.scroll();
      }, this.duration);
    },
    onClickIcon: function onClickIcon(event) {
      if (this.data.mode === 'closeable') {
        this.timer && clearTimeout(this.timer);
        this.timer = null;
        this.setData({
          show: false
        });
        this.$emit('close', event.detail);
      }
    },
    onClick: function onClick(event) {
      this.$emit('click', event);
    }
  }
});

/***/ })

},[["./src/components/vant-weapp/notice-bar/index.js","runtime","vendors","common"]]]);
//# sourceMappingURL=index.js.map