(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/profile/profile"],{

/***/ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./node_modules/linaria/loader.js?!./src/pages/profile/profile.tsx":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./node_modules/linaria/loader.js??ref--9-1!./src/pages/profile/profile.tsx ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Profile; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var _components_tabbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/tabbar */ "./src/components/tabbar/index.tsx");
/* harmony import */ var _hooks_useUser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useUser */ "./src/hooks/useUser.ts");
/* harmony import */ var _profile_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile.less */ "./src/pages/profile/profile.less");
/* harmony import */ var _profile_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_profile_less__WEBPACK_IMPORTED_MODULE_5__);






function Profile(props) {
  var _useUser = Object(_hooks_useUser__WEBPACK_IMPORTED_MODULE_4__[/* useUser */ "a"])(),
      user = _useUser.data,
      reGetUser = _useUser.mutate;

  var _Taro$getSystemInfoSy = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.getSystemInfoSync(),
      statusBarHeight = _Taro$getSystemInfoSy.statusBarHeight;

  Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__["useDidShow"])(function () {
    reGetUser();
  });
  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
    if (!user || !user.openid) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.redirectTo({
        url: '/pages/login/login'
      });
    }
  }, []);

  if (!user || !user.openid) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "f"], null);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "f"], {
    className: "profile"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "f"], {
    className: "profile-header",
    style: {
      paddingTop: "".concat(statusBarHeight + 44, "px"),
      height: _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.pxTransform(440 - statusBarHeight - 44)
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("van-image", {
    round: true,
    width: _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.pxTransform(160),
    height: _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.pxTransform(160),
    src: user.avatarUrl
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "e"], null, user.nickName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "f"], {
    className: "card-wapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("van-cell-group", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("van-cell", {
    title: "\u6211\u7684\u8BA2\u5355",
    icon: "orders-o",
    isLink: true,
    onClick: function onClick() {
      return _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.navigateTo({
        url: '/pages/order/list/list'
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "f"], {
    className: "card-wapper_van-cell_last"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("van-cell", {
    title: "\u5730\u5740\u7BA1\u7406",
    icon: "logistics",
    isLink: true,
    onClick: function onClick() {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.authorize({
        scope: 'scope.address'
      }).then(function () {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.chooseAddress();
      });
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "f"], {
    className: "card-wapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("van-cell-group", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "f"], {
    className: "card-wapper_van-cell_last"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("van-cell", {
    title: "\u610F\u89C1\u53CD\u9988",
    icon: "smile-comment-o",
    isLink: true,
    onClick: function onClick() {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.navigateToMiniProgram({
        appId: 'wx8abaf00ee8c3202e',
        extraData: {
          id: '296232'
        }
      });
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_tabbar__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    active: 2
  }));
}

/***/ }),

/***/ "./src/pages/profile/profile.less":
/*!****************************************!*\
  !*** ./src/pages/profile/profile.less ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/profile/profile.tsx":
/*!***************************************!*\
  !*** ./src/pages/profile/profile.tsx ***!
  \***************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/mini-runner/node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_node_modules_linaria_loader_js_ref_9_1_profile_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!../../../node_modules/linaria/loader.js??ref--9-1!./profile.tsx */ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./node_modules/linaria/loader.js?!./src/pages/profile/profile.tsx");


var config = {"navigationBarTitleText":"账户","enablePullDownRefresh":false,"usingComponents":{"van-cell":"../../components/vant-weapp/cell/index","van-cell-group":"../../components/vant-weapp/cell-group/index","van-image":"../../components/vant-weapp/image/index"}};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_node_modules_linaria_loader_js_ref_9_1_profile_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/profile/profile', {}, config || {}))



/***/ })

},[["./src/pages/profile/profile.tsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=profile.js.map