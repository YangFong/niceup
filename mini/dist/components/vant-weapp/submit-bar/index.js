(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["components/vant-weapp/submit-bar/index"],{

/***/ "./src/components/vant-weapp/submit-bar/index.js":
/*!*******************************************************!*\
  !*** ./src/components/vant-weapp/submit-bar/index.js ***!
  \*******************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/component */ "./src/components/vant-weapp/common/component.js");

Object(_common_component__WEBPACK_IMPORTED_MODULE_0__[/* VantComponent */ "a"])({
  classes: ['bar-class', 'price-class', 'button-class'],
  props: {
    tip: {
      type: null,
      observer: 'updateTip'
    },
    tipIcon: String,
    type: Number,
    price: {
      type: null,
      observer: 'updatePrice'
    },
    label: String,
    loading: Boolean,
    disabled: Boolean,
    buttonText: String,
    currency: {
      type: String,
      value: '¥'
    },
    buttonType: {
      type: String,
      value: 'danger'
    },
    decimalLength: {
      type: Number,
      value: 2,
      observer: 'updatePrice'
    },
    suffixLabel: String,
    safeAreaInsetBottom: {
      type: Boolean,
      value: true
    }
  },
  methods: {
    updatePrice: function updatePrice() {
      var _this$data = this.data,
          price = _this$data.price,
          decimalLength = _this$data.decimalLength;
      var priceStrArr = typeof price === 'number' && (price / 100).toFixed(decimalLength).split('.');
      this.setData({
        hasPrice: typeof price === 'number',
        integerStr: priceStrArr && priceStrArr[0],
        decimalStr: decimalLength && priceStrArr ? ".".concat(priceStrArr[1]) : ''
      });
    },
    updateTip: function updateTip() {
      this.setData({
        hasTip: typeof this.data.tip === 'string'
      });
    },
    onSubmit: function onSubmit(event) {
      this.$emit('submit', event.detail);
    }
  }
});

/***/ })

},[["./src/components/vant-weapp/submit-bar/index.js","runtime","vendors","common"]]]);
//# sourceMappingURL=index.js.map