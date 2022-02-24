(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/index/index"],{

/***/ "./.linaria-cache/src/components/kv/index.linaria.css":
/*!************************************************************!*\
  !*** ./.linaria-cache/src/components/kv/index.linaria.css ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./.linaria-cache/src/components/product-list/index.linaria.css":
/*!**********************************************************************!*\
  !*** ./.linaria-cache/src/components/product-list/index.linaria.css ***!
  \**********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./node_modules/linaria/loader.js?!./src/pages/index/index.tsx":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./node_modules/linaria/loader.js??ref--9-1!./src/pages/index/index.tsx ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Index; });
/* harmony import */ var C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var _components_kv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/kv */ "./src/components/kv/index.tsx");
/* harmony import */ var _components_product_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/product-list */ "./src/components/product-list/index.tsx");
/* harmony import */ var _components_tabbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/tabbar */ "./src/components/tabbar/index.tsx");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.less */ "./src/pages/index/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _hooks_useTag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/useTag */ "./src/hooks/useTag.ts");



 // import { Editor, Frame } from '@craftjs-taro/core';
// import Login from '../../components/login/login';
// import Swiper from '../../components/swiper'



 // import { styled } from 'linaria/react'


 // const Title = styled(View) <{ color: string }>`
//   background-color: ${props => props.color};
//   -webkit-transition: background-color 2s, -webkit-transform 2s;
//   transition: background-color 2s, transform 2s;
// `;
// const HW = () => {
//   return (
//     <Title color='red'>
//       Hello World!
//     </Title>
//   )
// }

function Index() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('all'),
      _useState2 = Object(C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState, 2),
      active = _useState2[0],
      setActive = _useState2[1];

  var _useTag = Object(_hooks_useTag__WEBPACK_IMPORTED_MODULE_8__[/* useTag */ "a"])(),
      tags = _useTag.data; // https://www.json.cn/
  // let json: any = { "ROOT": { "type": { "resolvedName": "View" }, "isCanvas": true, "props": {}, "displayName": "View", "custom": {}, "hidden": false, "nodes": ["6bfC-WFws", "FBHCwfJlq"], "linkedNodes": {} }, "6bfC-WFws": { "type": { "resolvedName": "Swiper" }, "isCanvas": false, "props": {}, "displayName": "Swiper", "custom": {}, "hidden": false, "nodes": [], "linkedNodes": {}, "parent": "ROOT" }, "FBHCwfJlq": { "type": { "resolvedName": "Swiper" }, "isCanvas": false, "props": {}, "displayName": "Swiper", "custom": {}, "hidden": false, "nodes": [], "linkedNodes": {}, "parent": "ROOT" } }


  Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__["showShareMenu"])({
    withShareTicket: true
  });
  Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__["useShareAppMessage"])(function () {
    return {
      title: '海诚纬业'
    };
  });
  if (!tags) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], null);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
    className: "index"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_kv__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("van-tabs", {
    active: active,
    onChange: function onChange(e) {
      return setActive(e.detail.name);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("van-tab", {
    title: "\u5168\u90E8",
    name: "all"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_product_list__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    key: "all",
    tag: "all",
    curr: active
  })), tags === null || tags === void 0 ? void 0 : tags.map(function (tag) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("van-tab", {
      title: tag.label,
      name: tag._id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_product_list__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
      key: tag._id,
      tag: tag._id,
      curr: active
    }));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_tabbar__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    active: 0
  }));
}

/***/ }),

/***/ "./src/components/kv/index.tsx":
/*!*************************************!*\
  !*** ./src/components/kv/index.tsx ***!
  \*************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Kv; });
/* harmony import */ var C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var linaria_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! linaria/react */ "./node_modules/linaria/esm/react/index.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../nav */ "./src/components/nav/index.tsx");
/* harmony import */ var _hooks_useKv__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useKv */ "./src/hooks/useKv.ts");








var Header = /*#__PURE__*/Object(linaria_react__WEBPACK_IMPORTED_MODULE_3__[/* styled */ "a"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "f"])({
  name: "Header",
  class: "hz12nvq"
});
var KvContainer = /*#__PURE__*/Object(linaria_react__WEBPACK_IMPORTED_MODULE_3__[/* styled */ "a"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "f"])({
  name: "KvContainer",
  class: "kcnuqnk"
});
var KvCard = /*#__PURE__*/Object(linaria_react__WEBPACK_IMPORTED_MODULE_3__[/* styled */ "a"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Image */ "a"])({
  name: "KvCard",
  class: "kpjqm5u"
});
function Kv(props) {
  var _useKv = Object(_hooks_useKv__WEBPACK_IMPORTED_MODULE_6__[/* useKv */ "a"])(),
      data = _useKv.data;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState2 = Object(C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState, 2),
      bgColor = _useState2[0],
      setBgColor = _useState2[1];

  react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
    if (data && (data === null || data === void 0 ? void 0 : data.length) > 0) {
      setBgColor(data[0].color);
    }
  }, [data]);

  var handleChange = function handleChange(e) {
    var current = e.detail.current;

    if (data) {
      var color = data[current].color;
      setBgColor(color);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "f"], {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Header, {
    style: {
      backgroundColor: bgColor
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("van-sticky", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_nav__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    style: {
      backgroundColor: bgColor
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "f"], {
    style: {
      height: "".concat(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.pxTransform(226))
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "f"], {
    style: {
      height: _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.pxTransform(72),
      backgroundColor: 'white'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](KvContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Swiper */ "c"], {
    autoplay: true,
    onChange: handleChange
  }, data === null || data === void 0 ? void 0 : data.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* SwiperItem */ "d"], {
      onClick: function onClick() {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.navigateTo({
          url: "/pages/detail/detail?id=".concat(item.jump)
        });
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](KvCard, {
      src: item.url
    }));
  }))));
}

__webpack_require__(/*! ../../../.linaria-cache/src/components/kv/index.linaria.css */ "./.linaria-cache/src/components/kv/index.linaria.css");

/***/ }),

/***/ "./src/components/product-list/index.less":
/*!************************************************!*\
  !*** ./src/components/product-list/index.less ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/product-list/index.tsx":
/*!***********************************************!*\
  !*** ./src/components/product-list/index.tsx ***!
  \***********************************************/
/*! exports provided: ProductCard, default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ProductCard */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductList; });
/* harmony import */ var C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var linaria_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! linaria/react */ "./node_modules/linaria/esm/react/index.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var _hooks_useProducts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useProducts */ "./src/hooks/useProducts.ts");
/* harmony import */ var lodash_uniqby__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash.uniqby */ "./node_modules/lodash.uniqby/index.js");
/* harmony import */ var lodash_uniqby__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqby__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index.less */ "./src/components/product-list/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_8__);









var Slogan = /*#__PURE__*/Object(linaria_react__WEBPACK_IMPORTED_MODULE_4__[/* styled */ "a"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "f"])({
  name: "Slogan",
  class: "s1lu60a1",
  vars: {
    "s1lu60a1-0": [function (props) {
      return props.color;
    }]
  }
});
function ProductCard(props) {
  var data = props.data;

  var handleClick = function handleClick() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.navigateTo({
      url: "/pages/detail/detail?id=".concat(data._id)
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("van-col", {
    span: "12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "f"], {
    className: "product-wapper",
    onClick: handleClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "f"], {
    className: "image"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* Image */ "a"], {
    src: data.thumb,
    mode: "aspectFill"
  }), data.desc && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Slogan, {
    color: data.color
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "f"], {
    className: "txt"
  }, data.desc))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "f"], {
    className: "title"
  }, data.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "f"], {
    className: "price"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "f"], {
    className: "curr"
  }, "\uFFE5", data.price), data.price_o != 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "f"], {
    className: "ori"
  }, data.price_o))));
}
function ProductList(props) {
  var curr = props.curr,
      tag = props.tag;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__["useState"]([]),
      _React$useState2 = Object(C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_React$useState, 2),
      data = _React$useState2[0],
      setData = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2__["useState"](0),
      _React$useState4 = Object(C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_React$useState3, 2),
      page = _React$useState4[0],
      setPage = _React$useState4[1];

  var _useProducts = Object(_hooks_useProducts__WEBPACK_IMPORTED_MODULE_6__[/* useProducts */ "b"])(page, tag),
      resolvedData = _useProducts.data;

  Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__["useReachBottom"])(function () {
    if (curr == tag) {
      setPage(function (old) {
        return !resolvedData || !resolvedData['hasMore'] ? old : old + 1;
      });
    }
  });
  react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](function () {
    if (resolvedData === null || resolvedData === void 0 ? void 0 : resolvedData.data) {
      setData(function (old) {
        return lodash_uniqby__WEBPACK_IMPORTED_MODULE_7___default()([].concat(Object(C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(old), Object(C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(resolvedData.data)), '_id');
      });
    }
  }, [resolvedData]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "f"], {
    style: {
      padding: '9PX'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("van-row", {
    gutter: "10"
  }, data.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](ProductCard, {
      data: item
    });
  })));
}

__webpack_require__(/*! ../../../.linaria-cache/src/components/product-list/index.linaria.css */ "./.linaria-cache/src/components/product-list/index.linaria.css");

/***/ }),

/***/ "./src/hooks/useKv.ts":
/*!****************************!*\
  !*** ./src/hooks/useKv.ts ***!
  \****************************/
/*! exports provided: useKv */
/*! exports used: useKv */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useKv; });
/* harmony import */ var C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__);




var db = _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.cloud.database();
function useKv() {
  return Object(swr__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(['kv'], /*#__PURE__*/Object(C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var result;
    return C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return db.collection('Kv').where({
              state: 0
            }).orderBy('sort', 'desc').get();

          case 2:
            result = _context.sent;
            return _context.abrupt("return", result.data);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
}

/***/ }),

/***/ "./src/hooks/useTag.ts":
/*!*****************************!*\
  !*** ./src/hooks/useTag.ts ***!
  \*****************************/
/*! exports provided: useTag */
/*! exports used: useTag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useTag; });
/* harmony import */ var C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__);




var db = _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.cloud.database();
function useTag() {
  return Object(swr__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(['Tag'], /*#__PURE__*/Object(C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var result;
    return C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return db.collection('Tag').where({
              state: 1
            }).orderBy('sort', 'desc').get();

          case 2:
            result = _context.sent;
            return _context.abrupt("return", result.data);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
}

/***/ }),

/***/ "./src/pages/index/index.less":
/*!************************************!*\
  !*** ./src/pages/index/index.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/index/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/index/index.tsx ***!
  \***********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/mini-runner/node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_node_modules_linaria_loader_js_ref_9_1_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!../../../node_modules/linaria/loader.js??ref--9-1!./index.tsx */ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./node_modules/linaria/loader.js?!./src/pages/index/index.tsx");


var config = {"navigationBarTitleText":"NICEUP","enableShareAppMessage":true,"usingComponents":{}};

_node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_node_modules_linaria_loader_js_ref_9_1_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].enableShareAppMessage = true
var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_node_modules_linaria_loader_js_ref_9_1_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/index/index', {}, config || {}))



/***/ })

},[["./src/pages/index/index.tsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map