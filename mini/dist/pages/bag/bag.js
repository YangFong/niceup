(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/bag/bag"],{

/***/ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./node_modules/linaria/loader.js?!./src/pages/bag/bag.tsx":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./node_modules/linaria/loader.js??ref--9-1!./src/pages/bag/bag.tsx ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Bag; });
/* harmony import */ var C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash.reduce */ "./node_modules/lodash.reduce/index.js");
/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_reduce__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_useBag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useBag */ "./src/hooks/useBag.ts");
/* harmony import */ var _hooks_useConfirm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useConfirm */ "./src/hooks/useConfirm.ts");
/* harmony import */ var _components_tabbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/tabbar */ "./src/components/tabbar/index.tsx");
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/nav */ "./src/components/nav/index.tsx");
/* harmony import */ var _bag_less__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bag.less */ "./src/pages/bag/bag.less");
/* harmony import */ var _bag_less__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_bag_less__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _hooks_useNotice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../hooks/useNotice */ "./src/hooks/useNotice.ts");












function ProductCard(props) {
  var data = props.data,
      removeProdct = props.removeProdct,
      updateProdct = props.updateProdct;

  var handleChangeNum = function handleChangeNum(e) {
    updateProdct(data.product_id, data.spec_id, e.detail);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
    className: "product-card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("van-card", {
    price: data.spec_price,
    title: data.product_title,
    thumb: data.product_thumb,
    thumbMode: "aspectFill",
    thumbLink: "/pages/detail/detail?id=".concat(data.product_id)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Slot */ "b"], {
    name: "num"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
    className: "stepper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("van-stepper", {
    value: data.num,
    onChange: handleChangeNum
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("van-button", {
    icon: "delete",
    onClick: function onClick() {
      removeProdct(data.product_id, data.spec_id);
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Slot */ "b"], {
    name: "desc"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
    className: "tags"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("van-tag", {
    plain: true,
    color: "#0e9a9c",
    size: "medium"
  }, data.spec_title)))));
}

function Bag() {
  var _useNotice = Object(_hooks_useNotice__WEBPACK_IMPORTED_MODULE_10__[/* useNotice */ "a"])('bag'),
      notices = _useNotice.data;

  var _useBag = Object(_hooks_useBag__WEBPACK_IMPORTED_MODULE_5__[/* useBag */ "a"])(),
      _useBag2 = Object(C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useBag, 2),
      bag = _useBag2[0],
      _useBag2$ = _useBag2[1],
      reGetBag = _useBag2$.reGetBag,
      addProdct = _useBag2$.addProdct,
      removeProdct = _useBag2$.removeProdct,
      updateProdct = _useBag2$.updateProdct;

  var _useConfirm = Object(_hooks_useConfirm__WEBPACK_IMPORTED_MODULE_6__[/* useConfirm */ "a"])(),
      addConfirm = _useConfirm.addConfirm;

  Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__["usePullDownRefresh"])(function () {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.stopPullDownRefresh();
  });
  var psns = bag;
  var totalPrice = lodash_reduce__WEBPACK_IMPORTED_MODULE_4___default()(psns, function (sum, psn) {
    return sum + psn.spec_price * psn.num;
  }, 0);
  Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__["useDidShow"])(function () {
    reGetBag();
  });

  var handleSumbit = function handleSumbit() {
    addConfirm(bag);
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.navigateTo({
      url: '/pages/bag/confirm/confirm'
    });
  };

  var renderList = function renderList() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
      className: "list"
    }, psns.map(function (psn) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ProductCard, {
        data: psn,
        removeProdct: removeProdct,
        updateProdct: updateProdct
      });
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
      className: "bar-wapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("van-submit-bar", {
      price: totalPrice * 100,
      buttonText: "\u7ED3\u7B97",
      buttonClass: "settle",
      priceClass: "settle-txt",
      onSubmit: handleSumbit
    })));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
    className: "bag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("van-sticky", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_nav__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
    title: "\u8D2D\u7269\u8F66",
    style: {
      backgroundColor: 'white'
    }
  })), notices && (notices === null || notices === void 0 ? void 0 : notices.length) > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("van-notice-bar", {
    "left-icon": notices[0].icon,
    color: notices[0].color,
    background: notices[0].background,
    scrollable: true,
    text: notices[0].message,
    onClick: function onClick() {
      if (notices[0].needFeedback) {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.navigateToMiniProgram({
          appId: 'wx8abaf00ee8c3202e',
          extraData: {
            id: '296232'
          }
        });
      }
    }
  }) : '', psns.length > 0 ? renderList() : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("van-empty", {
    description: "\u60A8\u7684\u8D2D\u7269\u8F66\u5185\u6CA1\u6709\u5546\u54C1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("van-button", {
    round: true,
    type: "default",
    className: "btn-more",
    onClick: function onClick() {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.switchTab({
        url: '/pages/index/index'
      });
    }
  }, "\u53BB\u901B\u901B")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_tabbar__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    active: 1,
    info: bag.length
  }));
}

/***/ }),

/***/ "./src/pages/bag/bag.less":
/*!********************************!*\
  !*** ./src/pages/bag/bag.less ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/bag/bag.tsx":
/*!*******************************!*\
  !*** ./src/pages/bag/bag.tsx ***!
  \*******************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/mini-runner/node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_node_modules_linaria_loader_js_ref_9_1_bag_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!../../../node_modules/linaria/loader.js??ref--9-1!./bag.tsx */ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./node_modules/linaria/loader.js?!./src/pages/bag/bag.tsx");


var config = {"navigationBarTitleText":"购物车","enablePullDownRefresh":true,"usingComponents":{}};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_node_modules_linaria_loader_js_ref_9_1_bag_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/bag/bag', {}, config || {}))



/***/ })

},[["./src/pages/bag/bag.tsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=bag.js.map