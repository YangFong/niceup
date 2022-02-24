(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["components/vant-weapp/image/index"],{

/***/ "./src/components/vant-weapp/image/index.js":
/*!**************************************************!*\
  !*** ./src/components/vant-weapp/image/index.js ***!
  \**************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/utils */ "./src/components/vant-weapp/common/utils.js");
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/component */ "./src/components/vant-weapp/common/component.js");
/* harmony import */ var _mixins_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mixins/button */ "./src/components/vant-weapp/mixins/button.js");
/* harmony import */ var _mixins_open_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mixins/open-type */ "./src/components/vant-weapp/mixins/open-type.js");




var FIT_MODE_MAP = {
  none: 'center',
  fill: 'scaleToFill',
  cover: 'aspectFill',
  contain: 'aspectFit',
  widthFix: 'widthFix',
  heightFix: 'heightFix'
};
Object(_common_component__WEBPACK_IMPORTED_MODULE_1__[/* VantComponent */ "a"])({
  mixins: [_mixins_button__WEBPACK_IMPORTED_MODULE_2__[/* button */ "a"], _mixins_open_type__WEBPACK_IMPORTED_MODULE_3__[/* openType */ "a"]],
  classes: ['custom-class', 'loading-class', 'error-class', 'image-class'],
  props: {
    src: {
      type: String,
      observer: function observer() {
        this.setData({
          error: false,
          loading: true
        });
      }
    },
    round: Boolean,
    width: {
      type: null,
      observer: 'setStyle'
    },
    height: {
      type: null,
      observer: 'setStyle'
    },
    radius: null,
    lazyLoad: Boolean,
    useErrorSlot: Boolean,
    useLoadingSlot: Boolean,
    showMenuByLongpress: Boolean,
    fit: {
      type: String,
      value: 'fill',
      observer: 'setMode'
    },
    showError: {
      type: Boolean,
      value: true
    },
    showLoading: {
      type: Boolean,
      value: true
    }
  },
  data: {
    error: false,
    loading: true,
    viewStyle: ''
  },
  mounted: function mounted() {
    this.setMode();
    this.setStyle();
  },
  methods: {
    setMode: function setMode() {
      this.setData({
        mode: FIT_MODE_MAP[this.data.fit]
      });
    },
    setStyle: function setStyle() {
      var _this$data = this.data,
          width = _this$data.width,
          height = _this$data.height,
          radius = _this$data.radius;
      var style = '';

      if (Object(_common_utils__WEBPACK_IMPORTED_MODULE_0__[/* isDef */ "e"])(width)) {
        style += "width: ".concat(Object(_common_utils__WEBPACK_IMPORTED_MODULE_0__[/* addUnit */ "a"])(width), ";");
      }

      if (Object(_common_utils__WEBPACK_IMPORTED_MODULE_0__[/* isDef */ "e"])(height)) {
        style += "height: ".concat(Object(_common_utils__WEBPACK_IMPORTED_MODULE_0__[/* addUnit */ "a"])(height), ";");
      }

      if (Object(_common_utils__WEBPACK_IMPORTED_MODULE_0__[/* isDef */ "e"])(radius)) {
        style += 'overflow: hidden;';
        style += "border-radius: ".concat(Object(_common_utils__WEBPACK_IMPORTED_MODULE_0__[/* addUnit */ "a"])(radius), ";");
      }

      this.setData({
        viewStyle: style
      });
    },
    onLoad: function onLoad(event) {
      this.setData({
        loading: false
      });
      this.$emit('load', event.detail);
    },
    onError: function onError(event) {
      this.setData({
        loading: false,
        error: true
      });
      this.$emit('error', event.detail);
    },
    onClick: function onClick(event) {
      this.$emit('click', event.detail);
    }
  }
});

/***/ })

},[["./src/components/vant-weapp/image/index.js","runtime","vendors","common"]]]);
//# sourceMappingURL=index.js.map