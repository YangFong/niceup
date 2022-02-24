(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["components/vant-weapp/card/index"],{

/***/ "./src/components/vant-weapp/card/index.js":
/*!*************************************************!*\
  !*** ./src/components/vant-weapp/card/index.js ***!
  \*************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mixins/link */ "./src/components/vant-weapp/mixins/link.js");
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/component */ "./src/components/vant-weapp/common/component.js");


Object(_common_component__WEBPACK_IMPORTED_MODULE_1__[/* VantComponent */ "a"])({
  classes: ['num-class', 'desc-class', 'thumb-class', 'title-class', 'price-class', 'origin-price-class'],
  mixins: [_mixins_link__WEBPACK_IMPORTED_MODULE_0__[/* link */ "a"]],
  props: {
    tag: String,
    num: String,
    desc: String,
    thumb: String,
    title: String,
    price: {
      type: String,
      observer: 'updatePrice'
    },
    centered: Boolean,
    lazyLoad: Boolean,
    thumbLink: String,
    originPrice: String,
    thumbMode: {
      type: String,
      value: 'aspectFit'
    },
    currency: {
      type: String,
      value: '¥'
    }
  },
  methods: {
    updatePrice: function updatePrice() {
      var price = this.data.price;
      var priceArr = price.toString().split('.');
      this.setData({
        integerStr: priceArr[0],
        decimalStr: priceArr[1] ? ".".concat(priceArr[1]) : ''
      });
    },
    onClickThumb: function onClickThumb() {
      this.jumpLink('thumbLink');
    }
  }
});

/***/ })

},[["./src/components/vant-weapp/card/index.js","runtime","vendors","common"]]]);
//# sourceMappingURL=index.js.map