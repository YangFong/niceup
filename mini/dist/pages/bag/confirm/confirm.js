(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/bag/confirm/confirm"],{

/***/ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./node_modules/linaria/loader.js?!./src/pages/bag/confirm/confirm.tsx":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./node_modules/linaria/loader.js??ref--9-1!./src/pages/bag/confirm/confirm.tsx ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Confirm; });
/* harmony import */ var C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash.reduce */ "./node_modules/lodash.reduce/index.js");
/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_reduce__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/nav */ "./src/components/nav/index.tsx");
/* harmony import */ var _components_vant_weapp_toast_toast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/vant-weapp/toast/toast */ "./src/components/vant-weapp/toast/toast.js");
/* harmony import */ var _hooks_useConfirm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../hooks/useConfirm */ "./src/hooks/useConfirm.ts");
/* harmony import */ var _hooks_useFreights__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../hooks/useFreights */ "./src/hooks/useFreights.ts");
/* harmony import */ var _hooks_useNotice__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../hooks/useNotice */ "./src/hooks/useNotice.ts");
/* harmony import */ var _hooks_useUser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../hooks/useUser */ "./src/hooks/useUser.ts");
/* harmony import */ var _hooks_useBag__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../hooks/useBag */ "./src/hooks/useBag.ts");
/* harmony import */ var _hooks_useOrder__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../hooks/useOrder */ "./src/hooks/useOrder.ts");
/* harmony import */ var _confirm_less__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./confirm.less */ "./src/pages/bag/confirm/confirm.less");
/* harmony import */ var _confirm_less__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_confirm_less__WEBPACK_IMPORTED_MODULE_15__);

















function ProductCard(props) {
  var data = props.data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "f"], {
    className: "product-card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("van-card", {
    price: data.spec_price,
    title: data.product_title,
    thumb: data.product_thumb,
    thumbMode: "aspectFill",
    num: data.num
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* Slot */ "b"], {
    name: "desc"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "f"], {
    className: "tags"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("van-tag", {
    plain: true,
    color: "#0e9a9c",
    size: "medium"
  }, data.spec_title)))));
}

function Confirm(props) {
  var _useConfirm = Object(_hooks_useConfirm__WEBPACK_IMPORTED_MODULE_9__[/* useConfirm */ "a"])(),
      psns = _useConfirm.psns;

  var _useBag = Object(_hooks_useBag__WEBPACK_IMPORTED_MODULE_13__[/* useBag */ "a"])(),
      _useBag2 = Object(C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useBag, 2),
      bag = _useBag2[0],
      removeProdcts = _useBag2[1].removeProdcts;

  var _useFreights = Object(_hooks_useFreights__WEBPACK_IMPORTED_MODULE_10__[/* useFreights */ "a"])(),
      freights = _useFreights.data;

  var _useNotice = Object(_hooks_useNotice__WEBPACK_IMPORTED_MODULE_11__[/* useNotice */ "a"])('confirm'),
      notices = _useNotice.data;

  var _useUser = Object(_hooks_useUser__WEBPACK_IMPORTED_MODULE_12__[/* useUser */ "a"])(),
      user = _useUser.data,
      reGetUser = _useUser.mutate;

  var _submitOrder = Object(_hooks_useOrder__WEBPACK_IMPORTED_MODULE_14__[/* submitOrder */ "a"])(),
      _submitOrder2 = Object(C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_submitOrder, 2),
      submit = _submitOrder2[0],
      isLoading = _submitOrder2[1].isLoading;

  Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_4__["useDidShow"])(function () {
    reGetUser();
  }); // console.log('-------user', user);

  Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_4__["usePullDownRefresh"])(function () {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.stopPullDownRefresh();
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      _useState2 = Object(C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState, 2),
      address = _useState2[0],
      setAddress = _useState2[1];

  var addressInfo = '请选择收货地址';

  if (address) {
    addressInfo = "".concat(address.userName, " ").concat(address.telNumber, " ").concat(address.provinceName).concat(address.cityName).concat(address.countyName).concat(address.detailInfo);
  }

  var totalPrice = lodash_reduce__WEBPACK_IMPORTED_MODULE_6___default()(psns, function (sum, psn) {
    return sum + psn.spec_price * psn.num;
  }, 0);
  var freight_type = 'normal';
  var freight_fee = null;

  if (freights && address) {
    freight_fee = 0;
    freights.map(function (freight) {
      if (freight.type == freight_type && freight.provinceName == address.provinceName) {
        freight_fee = freight.fee;
      }
    });
  }

  var price = totalPrice + (freight_fee ? freight_fee : 0);

  var handleSubmit = /*#__PURE__*/function () {
    var _ref = Object(C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var openid, nickName, result, orderRes, errorMessage, order_id, spec_ids;
      return C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              openid = user.openid;
              nickName = user.nickName;
              _context.next = 4;
              return submit({
                openid: openid,
                nickName: nickName,
                address: address,
                psns: psns,
                freight_type: freight_type
              });

            case 4:
              result = _context.sent;
              orderRes = result.orderRes, errorMessage = result.errorMessage;

              if (orderRes) {
                order_id = orderRes._id;
                _components_vant_weapp_toast_toast__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].success('提交成功~');
                _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.redirectTo({
                  url: "/pages/order/detail/detail?id=".concat(order_id)
                });
                spec_ids = psns.map(function (psn) {
                  return psn.spec_id;
                });
                removeProdcts(spec_ids);
              } else if (errorMessage) {
                Object(_components_vant_weapp_toast_toast__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(errorMessage);
              }

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSubmit() {
      return _ref.apply(this, arguments);
    };
  }();

  var disable = false;

  if (!address || isLoading) {
    disable = true;
  }

  react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect(function () {
    if (!user || !user.openid) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.redirectTo({
        url: '/pages/login/login'
      });
    }
  }, []);

  if (!user || !user.openid) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "f"], null);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "f"], {
    className: "confirm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("van-sticky", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_nav__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    back: true,
    title: "\u786E\u8BA4\u8BA2\u5355",
    style: {
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "f"], {
    className: "detail"
  }, notices && (notices === null || notices === void 0 ? void 0 : notices.length) > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("van-notice-bar", {
    "left-icon": notices[0].icon,
    color: notices[0].color,
    background: notices[0].background,
    scrollable: true,
    text: notices[0].message,
    onClick: function onClick() {
      if (notices[0].needFeedback) {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.navigateToMiniProgram({
          appId: 'wx8abaf00ee8c3202e',
          extraData: {
            id: '296232'
          }
        });
      }
    }
  }) : '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("van-cell-group", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "f"], {
    className: "border__bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("van-cell", {
    center: true,
    title: "\u6536\u8D27\u5730\u5740",
    isLink: true,
    label: addressInfo,
    onClick: function onClick() {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.authorize({
        scope: 'scope.address'
      }).then(function () {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.chooseAddress().then(function (res) {
          setAddress(res);
        });
      });
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "f"], {
    className: "card-wapper_van-cell_last"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("van-cell", {
    center: true,
    title: "\u914D\u9001\u65B9\u5F0F",
    value: "\u666E\u901A\u5FEB\u9012"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "f"], {
    className: "list"
  }, psns.map(function (psn) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(ProductCard, {
      data: psn
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("van-cell-group", {
    title: " "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("van-cell", {
    title: "\u5546\u54C1\u603B\u4EF7",
    value: "\uFFE5".concat(totalPrice)
  }), freight_fee != null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("van-cell", {
    title: "\u8FD0\u8D39",
    value: "\uFFE5".concat(freight_fee)
  }) : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("van-toast", {
    id: "van-toast"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("van-submit-bar", {
    disabled: disable,
    loading: isLoading,
    tip: address ? false : '请选择收货地址',
    price: price * 100,
    buttonText: "\u63D0\u4EA4\u8BA2\u5355",
    buttonClass: "settle",
    priceClass: "settle-txt",
    onSubmit: handleSubmit
  }));
}

/***/ }),

/***/ "./src/hooks/useFreights.ts":
/*!**********************************!*\
  !*** ./src/hooks/useFreights.ts ***!
  \**********************************/
/*! exports provided: useFreights */
/*! exports used: useFreights */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useFreights; });
/* harmony import */ var C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__);




var db = _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.cloud.database();
var cmd = db.command;
var MAX_LIMIT = 100;

function useFreights() {
  return Object(react_query__WEBPACK_IMPORTED_MODULE_2__[/* useQuery */ "d"])("freights", /*#__PURE__*/function () {
    var _ref = Object(C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(key) {
      var result;
      return C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return db.collection('Freight').where({
                state: 1
              }).limit(MAX_LIMIT).get();

            case 2:
              result = _context.sent;
              return _context.abrupt("return", result.data);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
}



/***/ }),

/***/ "./src/pages/bag/confirm/confirm.less":
/*!********************************************!*\
  !*** ./src/pages/bag/confirm/confirm.less ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/bag/confirm/confirm.tsx":
/*!*******************************************!*\
  !*** ./src/pages/bag/confirm/confirm.tsx ***!
  \*******************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/mini-runner/node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_node_modules_linaria_loader_js_ref_9_1_confirm_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!../../../../node_modules/linaria/loader.js??ref--9-1!./confirm.tsx */ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./node_modules/linaria/loader.js?!./src/pages/bag/confirm/confirm.tsx");


var config = {"navigationBarTitleText":"确认订单","enablePullDownRefresh":true,"usingComponents":{}};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_node_modules_linaria_loader_js_ref_9_1_confirm_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/bag/confirm/confirm', {}, config || {}))



/***/ })

},[["./src/pages/bag/confirm/confirm.tsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=confirm.js.map