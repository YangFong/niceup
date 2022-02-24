(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["components/vant-weapp/button/index"],{

/***/ "./src/components/vant-weapp/button/index.js":
/*!***************************************************!*\
  !*** ./src/components/vant-weapp/button/index.js ***!
  \***************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/component */ "./src/components/vant-weapp/common/component.js");
/* harmony import */ var _mixins_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mixins/button */ "./src/components/vant-weapp/mixins/button.js");
/* harmony import */ var _mixins_open_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mixins/open-type */ "./src/components/vant-weapp/mixins/open-type.js");
/* harmony import */ var _common_version__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/version */ "./src/components/vant-weapp/common/version.js");




var mixins = [_mixins_button__WEBPACK_IMPORTED_MODULE_1__[/* button */ "a"], _mixins_open_type__WEBPACK_IMPORTED_MODULE_2__[/* openType */ "a"]];

if (Object(_common_version__WEBPACK_IMPORTED_MODULE_3__[/* canIUseFormFieldButton */ "a"])()) {
  mixins.push('wx://form-field-button');
}

Object(_common_component__WEBPACK_IMPORTED_MODULE_0__[/* VantComponent */ "a"])({
  mixins: mixins,
  classes: ['hover-class', 'loading-class'],
  data: {
    baseStyle: ''
  },
  props: {
    formType: String,
    icon: String,
    classPrefix: {
      type: String,
      value: 'van-icon'
    },
    plain: Boolean,
    block: Boolean,
    round: Boolean,
    square: Boolean,
    loading: Boolean,
    hairline: Boolean,
    disabled: Boolean,
    loadingText: String,
    customStyle: String,
    loadingType: {
      type: String,
      value: 'circular'
    },
    type: {
      type: String,
      value: 'default'
    },
    dataset: null,
    size: {
      type: String,
      value: 'normal'
    },
    loadingSize: {
      type: String,
      value: '20px'
    },
    color: {
      type: String,
      observer: function observer(color) {
        var style = '';

        if (color) {
          style += "color: ".concat(this.data.plain ? color : 'white', ";");

          if (!this.data.plain) {
            // Use background instead of backgroundColor to make linear-gradient work
            style += "background: ".concat(color, ";");
          } // hide border when color is linear-gradient


          if (color.indexOf('gradient') !== -1) {
            style += 'border: 0;';
          } else {
            style += "border-color: ".concat(color, ";");
          }
        }

        if (style !== this.data.baseStyle) {
          this.setData({
            baseStyle: style
          });
        }
      }
    }
  },
  methods: {
    onClick: function onClick() {
      if (!this.data.loading) {
        this.$emit('click');
      }
    },
    noop: function noop() {}
  }
});

/***/ }),

/***/ "./src/components/vant-weapp/common/version.js":
/*!*****************************************************!*\
  !*** ./src/components/vant-weapp/common/version.js ***!
  \*****************************************************/
/*! exports provided: canIUseModel, canIUseFormFieldButton */
/*! exports used: canIUseFormFieldButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export canIUseModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return canIUseFormFieldButton; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/components/vant-weapp/common/utils.js");


function compareVersion(v1, v2) {
  v1 = v1.split('.');
  v2 = v2.split('.');
  var len = Math.max(v1.length, v2.length);

  while (v1.length < len) {
    v1.push('0');
  }

  while (v2.length < len) {
    v2.push('0');
  }

  for (var i = 0; i < len; i++) {
    var num1 = parseInt(v1[i], 10);
    var num2 = parseInt(v2[i], 10);

    if (num1 > num2) {
      return 1;
    }

    if (num1 < num2) {
      return -1;
    }
  }

  return 0;
}

function canIUseModel() {
  var system = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* getSystemInfoSync */ "d"])();
  return compareVersion(system.SDKVersion, '2.9.3') >= 0;
}
function canIUseFormFieldButton() {
  var system = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* getSystemInfoSync */ "d"])();
  return compareVersion(system.SDKVersion, '2.10.3') >= 0;
}

/***/ })

},[["./src/components/vant-weapp/button/index.js","runtime","vendors","common"]]]);
//# sourceMappingURL=index.js.map