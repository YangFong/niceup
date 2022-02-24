(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/login/login"],{

/***/ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./node_modules/linaria/loader.js?!./src/pages/login/login.tsx":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./node_modules/linaria/loader.js??ref--9-1!./src/pages/login/login.tsx ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
/* harmony import */ var C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_vant_weapp_toast_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/vant-weapp/toast/toast */ "./src/components/vant-weapp/toast/toast.js");
/* harmony import */ var _hooks_useLogin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/useLogin */ "./src/hooks/useLogin.ts");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../variables */ "./src/variables.js");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_variables__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/nav */ "./src/components/nav/index.tsx");
/* harmony import */ var _hooks_useUser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../hooks/useUser */ "./src/hooks/useUser.ts");
/* harmony import */ var _login_less__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login.less */ "./src/pages/login/login.less");
/* harmony import */ var _login_less__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_login_less__WEBPACK_IMPORTED_MODULE_11__);












function Login(props) {
  var _useUser = Object(_hooks_useUser__WEBPACK_IMPORTED_MODULE_10__[/* useUser */ "a"])(),
      reGetUser = _useUser.mutate;

  var _useLogin = Object(_hooks_useLogin__WEBPACK_IMPORTED_MODULE_7__[/* useLogin */ "a"])(),
      _useLogin2 = Object(C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useLogin, 2),
      login = _useLogin2[0],
      isLoading = _useLogin2[1].isLoading;

  var handleGetUserInfo = /*#__PURE__*/function () {
    var _ref = Object(C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
      var userInfo;
      return C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              userInfo = e.detail.userInfo;
              _context.prev = 1;
              _context.next = 4;
              return login(userInfo);

            case 4:
              _components_vant_weapp_toast_toast__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].success('授权成功~');
              reGetUser();
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.switchTab({
                url: '/pages/index/index'
              });
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](1);
              _components_vant_weapp_toast_toast__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].fail(_context.t0.message);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 9]]);
    }));

    return function handleGetUserInfo(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "f"], {
    className: "login"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("van-sticky", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_components_nav__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
    back: false,
    title: "\u767B\u5F55",
    style: {
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "f"], {
    className: "wapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "f"], {
    className: "title"
  }, "\u5C31\u5DEE\u4E00\u6B65\u5566"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "f"], {
    className: "sub-title"
  }, "\u83B7\u53D6\u60A8\u7684\u516C\u5F00\u4FE1\u606F\uFF08\u6635\u79F0\u3001\u5934\u50CF\u7B49\uFF09"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "f"], {
    className: "desc"
  }, "\u9700\u83B7\u53D6\u516C\u5F00\u4FE1\u606F\uFF0C\u65B9\u4FBF\u60A8\u4F7F\u7528", _variables__WEBPACK_IMPORTED_MODULE_8__["miniTitle"], "\u7684\u5168\u90E8\u529F\u80FD"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "f"], {
    className: "btn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("van-button", {
    loading: isLoading,
    loadingText: "\u767B\u5F55\u4E2D...",
    block: true,
    type: "primary",
    openType: "getUserInfo",
    onGetUserInfo: handleGetUserInfo
  }, "\u6388\u6743\u516C\u5F00\u4FE1\u606F")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "f"], {
    className: "btn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("van-button", {
    block: true,
    type: "default",
    onClick: function onClick() {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.switchTab({
        url: '/pages/index/index'
      });
    }
  }, "\u6682\u4E0D\u767B\u5F55")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "f"], {
    className: "link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("van-button", {
    customClass: "contact",
    type: "default",
    openType: "contact"
  }, "\u767B\u5F55\u4E0D\u4E0A\uFF1F\u70B9\u51FB\u8054\u7CFB\u5BA2\u670D\uFF01"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("van-toast", {
    id: "van-toast"
  }));
}

/***/ }),

/***/ "./src/hooks/useLogin.ts":
/*!*******************************!*\
  !*** ./src/hooks/useLogin.ts ***!
  \*******************************/
/*! exports provided: useLogin */
/*! exports used: useLogin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useLogin; });
/* harmony import */ var C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__);





function useLogin() {
  return Object(react_query__WEBPACK_IMPORTED_MODULE_2__[/* useMutation */ "c"])( /*#__PURE__*/function () {
    var _ref = Object(C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(userInfo) {
      var db, userCollection, _yield$Taro$cloud$cal, result, openid;

      return C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              db = _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.cloud.database();
              userCollection = db.collection('User');
              _context2.next = 4;
              return _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.cloud.callFunction({
                name: 'openid',
                data: {}
              });

            case 4:
              _yield$Taro$cloud$cal = _context2.sent;
              result = _yield$Taro$cloud$cal.result;
              openid = result.openid;
              userInfo.openid = openid;
              return _context2.abrupt("return", new Promise( /*#__PURE__*/function () {
                var _ref2 = Object(C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(resolve, reject) {
                  var users, currU;
                  return C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.prev = 0;
                          _context.next = 3;
                          return userCollection.where({
                            openid: userInfo.openid
                          }).orderBy('openid', 'asc').get();

                        case 3:
                          users = _context.sent;

                          if (!(users.data.length === 0)) {
                            _context.next = 12;
                            break;
                          }

                          userInfo.createdAt = new Date().getTime();
                          userInfo.updatedAt = new Date().getTime();
                          _context.next = 9;
                          return userCollection.add({
                            data: userInfo
                          });

                        case 9:
                          currU = _context.sent;
                          _context.next = 13;
                          break;

                        case 12:
                          // TODO update user info
                          currU = users.data[0];

                        case 13:
                          _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.setStorage({
                            key: 'userInfo',
                            data: currU
                          });
                          resolve(currU);
                          _context.next = 20;
                          break;

                        case 17:
                          _context.prev = 17;
                          _context.t0 = _context["catch"](0);
                          reject(_context.t0);

                        case 20:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee, null, [[0, 17]]);
                }));

                return function (_x2, _x3) {
                  return _ref2.apply(this, arguments);
                };
              }()));

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
}



/***/ }),

/***/ "./src/pages/login/login.less":
/*!************************************!*\
  !*** ./src/pages/login/login.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/login/login.tsx":
/*!***********************************!*\
  !*** ./src/pages/login/login.tsx ***!
  \***********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/mini-runner/node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_node_modules_linaria_loader_js_ref_9_1_login_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!../../../node_modules/linaria/loader.js??ref--9-1!./login.tsx */ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./node_modules/linaria/loader.js?!./src/pages/login/login.tsx");


var config = {"navigationBarTitleText":"登录"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_node_modules_linaria_loader_js_ref_9_1_login_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/login/login', {}, config || {}))



/***/ })

},[["./src/pages/login/login.tsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=login.js.map