(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/order/list/list"],{

/***/ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./node_modules/linaria/loader.js?!./src/pages/order/list/list.tsx":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./node_modules/linaria/loader.js??ref--9-1!./src/pages/order/list/list.tsx ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return List; });
/* harmony import */ var C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/nav */ "./src/components/nav/index.tsx");
/* harmony import */ var _list_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list.less */ "./src/pages/order/list/list.less");
/* harmony import */ var _list_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_list_less__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_order_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/order-list */ "./src/components/order-list/index.tsx");








function List(props) {
  var _Taro$getSystemInfoSy = _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.getSystemInfoSync(),
      statusBarHeight = _Taro$getSystemInfoSy.statusBarHeight;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(99),
      _useState2 = Object(C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState, 2),
      active = _useState2[0],
      setActive = _useState2[1]; // useReachBottom(() => {
  //   console.log('onReachBottom')
  // })


  Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__["usePullDownRefresh"])(function () {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.stopPullDownRefresh();
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
    className: "order-list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("van-sticky", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_nav__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    back: true,
    title: "\u6211\u7684\u8BA2\u5355",
    style: {
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("van-tabs", {
    active: active,
    onChange: function onChange(e) {
      return setActive(e.detail.name);
    },
    sticky: true,
    offsetTop: statusBarHeight + 44
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("van-tab", {
    title: "\u5168\u90E8",
    name: "99"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_order_list__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    key: "s99",
    state: 99,
    curr: active
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("van-tab", {
    title: "\u5F85\u4ED8\u6B3E",
    name: "0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_order_list__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    key: "s0",
    state: 0,
    curr: active
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("van-tab", {
    title: "\u5F85\u53D1\u8D27",
    name: "2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_order_list__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    key: "s2",
    state: 2,
    curr: active
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("van-tab", {
    title: "\u5DF2\u53D1\u8D27",
    name: "4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_order_list__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    key: "s4",
    state: 4,
    curr: active
  }))));
}

/***/ }),

/***/ "./src/components/order-card/index.less":
/*!**********************************************!*\
  !*** ./src/components/order-card/index.less ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/order-card/index.tsx":
/*!*********************************************!*\
  !*** ./src/components/order-card/index.tsx ***!
  \*********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var _assets_copy_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/copy.svg */ "./src/assets/copy.svg");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.less */ "./src/components/order-card/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_4__);



 // import tmpPath from '../../assets/tmp01.jpg'

var tmpPath = '';

function OrderCard(props) {
  var data = props.data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "f"], {
    className: "order-card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "f"], {
    className: "order-card__title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "f"], {
    className: "num"
  }, "\u8BA2\u5355\u7F16\u53F7: ", data.outTradeNo), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "f"], {
    className: "act"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("van-icon", {
    name: _assets_copy_svg__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],
    size: "14PX",
    onClick: function onClick() {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.setClipboardData({
        data: data.outTradeNo,
        success: function success(res) {// Toast.success("复制成功！")
        }
      });
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "f"], {
    className: "order-card__body",
    onClick: function onClick() {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.navigateTo({
        url: "/pages/order/detail/detail?id=".concat(data._id)
      });
    }
  }, data.psns.map(function (psn) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "f"], {
      key: psn.spec_id,
      className: "product-card"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("van-card", {
      thumb: psn.product_thumb,
      thumbMode: "aspectFill"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Slot */ "b"], {
      name: "title"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "f"], {
      className: "header"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "f"], {
      className: "title"
    }, psn.product_title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "f"], {
      className: "price"
    }, "\uFFE5", psn.spec_price, "\u5143"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Slot */ "b"], {
      name: "desc"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "f"], {
      className: "desc"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "f"], {
      className: "title"
    }, psn.spec_title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "f"], {
      className: "num"
    }, "x ", psn.num)))));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "f"], {
    className: "order-card__foot"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "f"], {
    className: "desc"
  }, "\u4EF7\u683C: \uFFE5", data.price, "\u5143", ' ', data.freight_fee > 0 && "\u542B\u8FD0\u8D39: ".concat(data.freight_fee, "\u5143")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "f"], {
    className: "act"
  }, data.state === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("van-tag", {
    color: "#909192"
  }, "\u672A\u4ED8\u6B3E"), data.state === -1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("van-tag", {
    color: "#909192"
  }, "\u5DF2\u5173\u95ED"), data.state === -2 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("van-tag", {
    color: "#909192"
  }, "\u5DF2\u9000\u6B3E"), data.state === 2 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("van-tag", {
    type: "warning"
  }, "\u5F85\u53D1\u8D27"), data.state === 4 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("van-tag", {
    type: "success"
  }, "\u5DF2\u53D1\u8D27"))));
}

/***/ }),

/***/ "./src/components/order-list/index.tsx":
/*!*********************************************!*\
  !*** ./src/components/order-list/index.tsx ***!
  \*********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderList; });
/* harmony import */ var C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_useUser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useUser */ "./src/hooks/useUser.ts");
/* harmony import */ var _hooks_useOrder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useOrder */ "./src/hooks/useOrder.ts");
/* harmony import */ var _order_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../order-card */ "./src/components/order-card/index.tsx");
/* harmony import */ var lodash_uniqby__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash.uniqby */ "./node_modules/lodash.uniqby/index.js");
/* harmony import */ var lodash_uniqby__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqby__WEBPACK_IMPORTED_MODULE_8__);









function OrderList(props) {
  var curr = props.curr,
      state = props.state;

  var _useUser = Object(_hooks_useUser__WEBPACK_IMPORTED_MODULE_5__[/* useUser */ "a"])(),
      user = _useUser.data;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4__["useState"]([]),
      _React$useState2 = Object(C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_React$useState, 2),
      data = _React$useState2[0],
      setData = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_4__["useState"](0),
      _React$useState4 = Object(C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_React$useState3, 2),
      page = _React$useState4[0],
      setPage = _React$useState4[1];

  var _useOrders = Object(_hooks_useOrder__WEBPACK_IMPORTED_MODULE_6__[/* useOrders */ "d"])(page, state, user.openid),
      resolvedData = _useOrders.data;

  Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__["useReachBottom"])(function () {
    if (parseInt(curr) == state) {
      setPage(function (old) {
        return !resolvedData || !resolvedData['hasMore'] ? old : old + 1;
      });
    }
  });
  react__WEBPACK_IMPORTED_MODULE_4__["useEffect"](function () {
    if (resolvedData === null || resolvedData === void 0 ? void 0 : resolvedData.data) {
      setData(function (old) {
        return lodash_uniqby__WEBPACK_IMPORTED_MODULE_8___default()([].concat(Object(C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(old), Object(C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(resolvedData.data)), '_id');
      });
    }
  }, [resolvedData]); // console.log(data);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "f"], {
    style: {
      padding: '9PX'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("van-row", {
    gutter: "10"
  }, data.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_order_card__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
      data: item
    });
  }), data && data.length == 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("van-empty", {
    description: "\u76EE\u524D\u6CA1\u6709\u8BA2\u5355\u54E6~"
  })));
}

/***/ }),

/***/ "./src/pages/order/list/list.less":
/*!****************************************!*\
  !*** ./src/pages/order/list/list.less ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/order/list/list.tsx":
/*!***************************************!*\
  !*** ./src/pages/order/list/list.tsx ***!
  \***************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/mini-runner/node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_node_modules_linaria_loader_js_ref_9_1_list_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!../../../../node_modules/linaria/loader.js??ref--9-1!./list.tsx */ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./node_modules/linaria/loader.js?!./src/pages/order/list/list.tsx");


var config = {"navigationBarTitleText":"订单列表","enablePullDownRefresh":true,"usingComponents":{}};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_node_modules_linaria_loader_js_ref_9_1_list_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/order/list/list', {}, config || {}))



/***/ })

},[["./src/pages/order/list/list.tsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=list.js.map