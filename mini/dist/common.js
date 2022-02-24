(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["common"],{

/***/ "./.linaria-cache/src/components/nav/index.linaria.css":
/*!*************************************************************!*\
  !*** ./.linaria-cache/src/components/nav/index.linaria.css ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/assets/copy.svg":
/*!*****************************!*\
  !*** ./src/assets/copy.svg ***!
  \*****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "assets/copy.svg");

/***/ }),

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "assets/logo.png");

/***/ }),

/***/ "./src/components/nav/index.tsx":
/*!**************************************!*\
  !*** ./src/components/nav/index.tsx ***!
  \**************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nav; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var linaria_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! linaria/react */ "./node_modules/linaria/esm/react/index.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/logo.png */ "./src/assets/logo.png");





var StatusBar = /*#__PURE__*/Object(linaria_react__WEBPACK_IMPORTED_MODULE_2__[/* styled */ "a"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"])({
  name: "StatusBar",
  class: "sebrpe1",
  vars: {
    "sebrpe1-0": [function (props) {
      return props.height;
    }, "px"]
  }
});
var NavBar = /*#__PURE__*/Object(linaria_react__WEBPACK_IMPORTED_MODULE_2__[/* styled */ "a"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"])({
  name: "NavBar",
  class: "n1belqs1",
  vars: {
    "n1belqs1-0": [function (props) {
      return props.height;
    }, "px"]
  }
});
var Logo = /*#__PURE__*/Object(linaria_react__WEBPACK_IMPORTED_MODULE_2__[/* styled */ "a"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Image */ "a"])({
  name: "Logo",
  class: "ld8hask"
});
var Title = /*#__PURE__*/Object(linaria_react__WEBPACK_IMPORTED_MODULE_2__[/* styled */ "a"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "e"])({
  name: "Title",
  class: "ti8ftgk"
});
var BackBtn = /*#__PURE__*/Object(linaria_react__WEBPACK_IMPORTED_MODULE_2__[/* styled */ "a"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"])({
  name: "BackBtn",
  class: "b4u3by4"
});
var Contanter = /*#__PURE__*/Object(linaria_react__WEBPACK_IMPORTED_MODULE_2__[/* styled */ "a"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"])({
  name: "Contanter",
  class: "c1tq8vxh"
});
function Nav(props) {
  var _Taro$getSystemInfoSy = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.getSystemInfoSync(),
      statusBarHeight = _Taro$getSystemInfoSy.statusBarHeight;

  var back = props.back,
      style = props.style,
      title = props.title;

  var backBtn = function backBtn() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("van-sticky", {
      offsetTop: statusBarHeight + 8
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](BackBtn, {
      onClick: function onClick() {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.navigateBack();
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("van-button", {
      customStyle: "min-width:30px;",
      icon: "arrow-left",
      type: "default",
      size: "small"
    })));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Contanter, {
    style: style
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](StatusBar, {
    height: statusBarHeight
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](NavBar, {
    height: 44
  }, !back && !title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Logo, {
    mode: "heightFix",
    src: _assets_logo_png__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]
  }), back && !title && backBtn(), back && title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](BackBtn, {
    onClick: function onClick() {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.navigateBack();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("van-icon", {
    name: "arrow-left",
    size: "24PX"
  })), title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Title, null, title)));
}

__webpack_require__(/*! ../../../.linaria-cache/src/components/nav/index.linaria.css */ "./.linaria-cache/src/components/nav/index.linaria.css");

/***/ }),

/***/ "./src/components/tabbar/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/tabbar/index.tsx ***!
  \*****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tabbar; });
/* harmony import */ var C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useBag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useBag */ "./src/hooks/useBag.ts");




function Tabbar(props) {
  var active = props.active,
      info = props.info;

  var _useBag = Object(_hooks_useBag__WEBPACK_IMPORTED_MODULE_3__[/* useBag */ "a"])(),
      _useBag2 = Object(C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useBag, 2),
      bag = _useBag2[0],
      reGetBag = _useBag2[1].reGetBag;

  Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__["useDidShow"])(function () {
    reGetBag();
  });
  var count = bag.length > 0 ? bag.length : null;

  if (info != undefined) {
    count = info > 0 ? info : null;
  }

  var handleChange = function handleChange(e) {
    var pages = [{
      url: '/pages/index/index'
    }, {
      url: '/pages/bag/bag'
    }, {
      url: '/pages/profile/profile'
    }];
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.switchTab(pages[e.detail]);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("van-tabbar", {
    active: active,
    activeColor: "#0e9a9c",
    onChange: handleChange
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("van-tabbar-item", {
    icon: "home-o"
  }, "\u9996\u9875"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("van-tabbar-item", {
    icon: "shopping-cart-o",
    info: count
  }, "\u8D2D\u7269\u8F66"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("van-tabbar-item", {
    icon: "user-o"
  }, "\u4E2A\u4EBA\u4E2D\u5FC3"));
}

/***/ }),

/***/ "./src/components/vant-weapp/common/component.js":
/*!*******************************************************!*\
  !*** ./src/components/vant-weapp/common/component.js ***!
  \*******************************************************/
/*! exports provided: VantComponent */
/*! exports used: VantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VantComponent; });
/* harmony import */ var C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _mixins_basic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mixins/basic */ "./src/components/vant-weapp/mixins/basic.js");


var relationFunctions = {
  ancestor: {
    linked: function linked(parent) {
      this.parent = parent;
    },
    unlinked: function unlinked() {
      this.parent = null;
    }
  },
  descendant: {
    linked: function linked(child) {
      this.children = this.children || [];
      this.children.push(child);
    },
    unlinked: function unlinked(child) {
      this.children = (this.children || []).filter(function (it) {
        return it !== child;
      });
    }
  }
};

function mapKeys(source, target, map) {
  Object.keys(map).forEach(function (key) {
    if (source[key]) {
      target[map[key]] = source[key];
    }
  });
}

function makeRelation(options, vantOptions, relation) {
  var type = relation.type,
      name = relation.name,
      _linked = relation.linked,
      _unlinked = relation.unlinked,
      _linkChanged = relation.linkChanged;
  var beforeCreate = vantOptions.beforeCreate,
      destroyed = vantOptions.destroyed;

  if (type === 'descendant') {
    options.created = function () {
      beforeCreate && beforeCreate.bind(this)();
      this.children = this.children || [];
    };

    options.detached = function () {
      this.children = [];
      destroyed && destroyed.bind(this)();
    };
  }

  options.relations = Object.assign(options.relations || {}, Object(C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, "../".concat(name, "/index"), {
    type: type,
    linked: function linked(node) {
      relationFunctions[type].linked.bind(this)(node);
      _linked && _linked.bind(this)(node);
    },
    linkChanged: function linkChanged(node) {
      _linkChanged && _linkChanged.bind(this)(node);
    },
    unlinked: function unlinked(node) {
      relationFunctions[type].unlinked.bind(this)(node);
      _unlinked && _unlinked.bind(this)(node);
    }
  }));
}

function VantComponent() {
  var vantOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var options = {};
  mapKeys(vantOptions, options, {
    data: 'data',
    props: 'properties',
    mixins: 'behaviors',
    methods: 'methods',
    beforeCreate: 'created',
    created: 'attached',
    mounted: 'ready',
    relations: 'relations',
    destroyed: 'detached',
    classes: 'externalClasses'
  });
  var relation = vantOptions.relation;

  if (relation) {
    makeRelation(options, vantOptions, relation);
  } // add default externalClasses


  options.externalClasses = options.externalClasses || [];
  options.externalClasses.push('custom-class'); // add default behaviors

  options.behaviors = options.behaviors || [];
  options.behaviors.push(_mixins_basic__WEBPACK_IMPORTED_MODULE_1__[/* basic */ "a"]); // map field to form-field behavior

  if (vantOptions.field) {
    options.behaviors.push('wx://form-field');
  }

  if (options.properties) {
    Object.keys(options.properties).forEach(function (name) {
      if (Array.isArray(options.properties[name])) {
        // miniprogram do not allow multi type
        options.properties[name] = null;
      }
    });
  } // add default options


  options.options = {
    multipleSlots: true,
    addGlobalClass: true
  };
  Component(options);
}



/***/ }),

/***/ "./src/components/vant-weapp/common/utils.js":
/*!***************************************************!*\
  !*** ./src/components/vant-weapp/common/utils.js ***!
  \***************************************************/
/*! exports provided: isDef, isObj, isNumber, range, nextTick, getSystemInfoSync, addUnit, requestAnimationFrame, getRect, getAllRect */
/*! exports used: addUnit, getAllRect, getRect, getSystemInfoSync, isDef, isObj, requestAnimationFrame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return isDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return isObj; });
/* unused harmony export isNumber */
/* unused harmony export range */
/* unused harmony export nextTick */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getSystemInfoSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addUnit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return requestAnimationFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getRect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getAllRect; });
/* harmony import */ var C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");

function isDef(value) {
  return value !== undefined && value !== null;
}
function isObj(x) {
  var type = Object(C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(x);

  return x !== null && (type === 'object' || type === 'function');
}
function isNumber(value) {
  return /^\d+(\.\d+)?$/.test(value);
}
function range(num, min, max) {
  return Math.min(Math.max(num, min), max);
}
function nextTick(fn) {
  setTimeout(function () {
    fn();
  }, 1000 / 30);
}
var systemInfo;
function getSystemInfoSync() {
  if (systemInfo == null) {
    systemInfo = wx.getSystemInfoSync();
  }

  return systemInfo;
}
function addUnit(value) {
  if (!isDef(value)) {
    return undefined;
  }

  value = String(value);
  return isNumber(value) ? "".concat(value, "px") : value;
}
function requestAnimationFrame(cb) {
  var systemInfo = getSystemInfoSync();

  if (systemInfo.platform === 'devtools') {
    return nextTick(cb);
  }

  return wx.createSelectorQuery().selectViewport().boundingClientRect().exec(function () {
    cb();
  });
}
function getRect(selector) {
  var _this = this;

  return new Promise(function (resolve) {
    wx.createSelectorQuery().in(_this).select(selector).boundingClientRect().exec(function () {
      var rect = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      return resolve(rect[0]);
    });
  });
}
function getAllRect(selector) {
  var _this2 = this;

  return new Promise(function (resolve) {
    wx.createSelectorQuery().in(_this2).selectAll(selector).boundingClientRect().exec(function () {
      var rect = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      return resolve(rect[0]);
    });
  });
}

/***/ }),

/***/ "./src/components/vant-weapp/mixins/basic.js":
/*!***************************************************!*\
  !*** ./src/components/vant-weapp/mixins/basic.js ***!
  \***************************************************/
/*! exports provided: basic */
/*! exports used: basic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return basic; });
var basic = Behavior({
  methods: {
    $emit: function $emit() {
      this.triggerEvent.apply(this, arguments);
    },
    set: function set(data, callback) {
      this.setData(data, callback);
      return new Promise(function (resolve) {
        return wx.nextTick(resolve);
      });
    },
    getRect: function getRect(selector, all) {
      var _this = this;

      return new Promise(function (resolve) {
        wx.createSelectorQuery().in(_this)[all ? 'selectAll' : 'select'](selector).boundingClientRect(function (rect) {
          if (all && Array.isArray(rect) && rect.length) {
            resolve(rect);
          }

          if (!all && rect) {
            resolve(rect);
          }
        }).exec();
      });
    }
  }
});

/***/ }),

/***/ "./src/components/vant-weapp/mixins/button.js":
/*!****************************************************!*\
  !*** ./src/components/vant-weapp/mixins/button.js ***!
  \****************************************************/
/*! exports provided: button */
/*! exports used: button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return button; });
var button = Behavior({
  externalClasses: ['hover-class'],
  properties: {
    id: String,
    lang: String,
    businessId: Number,
    sessionFrom: String,
    sendMessageTitle: String,
    sendMessagePath: String,
    sendMessageImg: String,
    showMessageCard: Boolean,
    appParameter: String,
    ariaLabel: String
  }
});

/***/ }),

/***/ "./src/components/vant-weapp/mixins/link.js":
/*!**************************************************!*\
  !*** ./src/components/vant-weapp/mixins/link.js ***!
  \**************************************************/
/*! exports provided: link */
/*! exports used: link */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return link; });
var link = Behavior({
  properties: {
    url: String,
    linkType: {
      type: String,
      value: 'navigateTo'
    }
  },
  methods: {
    jumpLink: function jumpLink() {
      var urlKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'url';
      var url = this.data[urlKey];

      if (url) {
        wx[this.data.linkType]({
          url: url
        });
      }
    }
  }
});

/***/ }),

/***/ "./src/components/vant-weapp/mixins/open-type.js":
/*!*******************************************************!*\
  !*** ./src/components/vant-weapp/mixins/open-type.js ***!
  \*******************************************************/
/*! exports provided: openType */
/*! exports used: openType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return openType; });
var openType = Behavior({
  properties: {
    openType: String
  },
  methods: {
    bindGetUserInfo: function bindGetUserInfo(event) {
      this.$emit('getuserinfo', event.detail);
    },
    bindContact: function bindContact(event) {
      this.$emit('contact', event.detail);
    },
    bindGetPhoneNumber: function bindGetPhoneNumber(event) {
      this.$emit('getphonenumber', event.detail);
    },
    bindError: function bindError(event) {
      this.$emit('error', event.detail);
    },
    bindLaunchApp: function bindLaunchApp(event) {
      this.$emit('launchapp', event.detail);
    },
    bindOpenSetting: function bindOpenSetting(event) {
      this.$emit('opensetting', event.detail);
    }
  }
});

/***/ }),

/***/ "./src/components/vant-weapp/mixins/transition.js":
/*!********************************************************!*\
  !*** ./src/components/vant-weapp/mixins/transition.js ***!
  \********************************************************/
/*! exports provided: transition */
/*! exports used: transition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return transition; });
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/utils */ "./src/components/vant-weapp/common/utils.js");


var getClassNames = function getClassNames(name) {
  return {
    enter: "van-".concat(name, "-enter van-").concat(name, "-enter-active enter-class enter-active-class"),
    'enter-to': "van-".concat(name, "-enter-to van-").concat(name, "-enter-active enter-to-class enter-active-class"),
    leave: "van-".concat(name, "-leave van-").concat(name, "-leave-active leave-class leave-active-class"),
    'leave-to': "van-".concat(name, "-leave-to van-").concat(name, "-leave-active leave-to-class leave-active-class")
  };
};

var transition = function transition(showDefaultValue) {
  return Behavior({
    properties: {
      customStyle: String,
      // @ts-ignore
      show: {
        type: Boolean,
        value: showDefaultValue,
        observer: 'observeShow'
      },
      // @ts-ignore
      duration: {
        type: null,
        value: 300,
        observer: 'observeDuration'
      },
      name: {
        type: String,
        value: 'fade'
      }
    },
    data: {
      type: '',
      inited: false,
      display: false
    },
    methods: {
      observeShow: function observeShow(value, old) {
        if (value === old) {
          return;
        }

        value ? this.enter() : this.leave();
      },
      enter: function enter() {
        var _this = this;

        var _this$data = this.data,
            duration = _this$data.duration,
            name = _this$data.name;
        var classNames = getClassNames(name);
        var currentDuration = Object(_common_utils__WEBPACK_IMPORTED_MODULE_0__[/* isObj */ "f"])(duration) ? duration.enter : duration;
        this.status = 'enter';
        this.$emit('before-enter');
        Object(_common_utils__WEBPACK_IMPORTED_MODULE_0__[/* requestAnimationFrame */ "g"])(function () {
          _this.checkStatus('enter');

          _this.$emit('enter');

          _this.setData({
            inited: true,
            display: true,
            classes: classNames.enter,
            currentDuration: currentDuration
          });

          Object(_common_utils__WEBPACK_IMPORTED_MODULE_0__[/* requestAnimationFrame */ "g"])(function () {
            _this.checkStatus('enter');

            _this.transitionEnded = false;

            _this.setData({
              classes: classNames['enter-to']
            });
          });
        });
      },
      leave: function leave() {
        var _this2 = this;

        if (!this.data.display) {
          return;
        }

        var _this$data2 = this.data,
            duration = _this$data2.duration,
            name = _this$data2.name;
        var classNames = getClassNames(name);
        var currentDuration = Object(_common_utils__WEBPACK_IMPORTED_MODULE_0__[/* isObj */ "f"])(duration) ? duration.leave : duration;
        this.status = 'leave';
        this.$emit('before-leave');
        Object(_common_utils__WEBPACK_IMPORTED_MODULE_0__[/* requestAnimationFrame */ "g"])(function () {
          _this2.checkStatus('leave');

          _this2.$emit('leave');

          _this2.setData({
            classes: classNames.leave,
            currentDuration: currentDuration
          });

          Object(_common_utils__WEBPACK_IMPORTED_MODULE_0__[/* requestAnimationFrame */ "g"])(function () {
            _this2.checkStatus('leave');

            _this2.transitionEnded = false;
            setTimeout(function () {
              return _this2.onTransitionEnd();
            }, currentDuration);

            _this2.setData({
              classes: classNames['leave-to']
            });
          });
        });
      },
      checkStatus: function checkStatus(status) {
        if (status !== this.status) {
          throw new Error("incongruent status: ".concat(status));
        }
      },
      onTransitionEnd: function onTransitionEnd() {
        if (this.transitionEnded) {
          return;
        }

        this.transitionEnded = true;
        this.$emit("after-".concat(this.status));
        var _this$data3 = this.data,
            show = _this$data3.show,
            display = _this$data3.display;

        if (!show && display) {
          this.setData({
            display: false
          });
        }
      }
    }
  });
};

/***/ }),

/***/ "./src/components/vant-weapp/toast/toast.js":
/*!**************************************************!*\
  !*** ./src/components/vant-weapp/toast/toast.js ***!
  \**************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/utils */ "./src/components/vant-weapp/common/utils.js");

var defaultOptions = {
  type: 'text',
  mask: false,
  message: '',
  show: true,
  zIndex: 1000,
  duration: 2000,
  position: 'middle',
  forbidClick: false,
  loadingType: 'circular',
  selector: '#van-toast'
};
var queue = [];
var currentOptions = Object.assign({}, defaultOptions);

function parseOptions(message) {
  return Object(_common_utils__WEBPACK_IMPORTED_MODULE_0__[/* isObj */ "f"])(message) ? message : {
    message: message
  };
}

function getContext() {
  var pages = getCurrentPages();
  return pages[pages.length - 1];
}

function Toast(toastOptions) {
  var options = Object.assign(Object.assign({}, currentOptions), parseOptions(toastOptions));
  var context = options.context || getContext();
  var toast = context.selectComponent(options.selector);

  if (!toast) {
    console.warn('未找到 van-toast 节点，请确认 selector 及 context 是否正确');
    return;
  }

  delete options.context;
  delete options.selector;

  toast.clear = function () {
    toast.setData({
      show: false
    });

    if (options.onClose) {
      options.onClose();
    }
  };

  queue.push(toast);
  toast.setData(options);
  clearTimeout(toast.timer);

  if (options.duration > 0) {
    toast.timer = setTimeout(function () {
      toast.clear();
      queue = queue.filter(function (item) {
        return item !== toast;
      });
    }, options.duration);
  }

  return toast;
}

var createMethod = function createMethod(type) {
  return function (options) {
    return Toast(Object.assign({
      type: type
    }, parseOptions(options)));
  };
};

Toast.loading = createMethod('loading');
Toast.success = createMethod('success');
Toast.fail = createMethod('fail');

Toast.clear = function () {
  queue.forEach(function (toast) {
    toast.clear();
  });
  queue = [];
};

Toast.setDefaultOptions = function (options) {
  Object.assign(currentOptions, options);
};

Toast.resetDefaultOptions = function () {
  currentOptions = Object.assign({}, defaultOptions);
};

/* harmony default export */ __webpack_exports__["a"] = (Toast);

/***/ }),

/***/ "./src/hooks/useBag.ts":
/*!*****************************!*\
  !*** ./src/hooks/useBag.ts ***!
  \*****************************/
/*! exports provided: useBag */
/*! exports used: useBag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useBag; });
/* harmony import */ var C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash.concat */ "./node_modules/lodash.concat/index.js");
/* harmony import */ var lodash_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_remove__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash.remove */ "./node_modules/lodash.remove/index.js");
/* harmony import */ var lodash_remove__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_remove__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash.map */ "./node_modules/lodash.map/index.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_5__);

// import { useEffect, useState } from "react";






function useBag() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.getStorageSync('bag')),
      _useState2 = Object(C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState, 2),
      bag = _useState2[0],
      setBag = _useState2[1];

  var addProdct = function addProdct(product, spec, num) {
    // product_id product_title thumb
    // spec_id spec_title price
    // num
    // console.log('-----addProdct');
    // console.log(product, spec, num);
    var psns = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.getStorageSync('bag') || [];
    var canAdd = true;
    psns = lodash_map__WEBPACK_IMPORTED_MODULE_5___default()(psns, function (psn) {
      if (psn.product_id == product._id && psn.spec_id == spec._id) {
        psn.num = num;
        canAdd = false;
      }

      return psn;
    });

    if (canAdd) {
      var psn = {
        product_id: product._id,
        product_title: product.title,
        product_thumb: product.thumb,
        spec_id: spec._id,
        spec_title: spec.title,
        spec_price: spec.price,
        spec_weight: spec.weight,
        spec_three: spec.three,
        num: num
      };
      psns = lodash_concat__WEBPACK_IMPORTED_MODULE_3___default()([psn], psns);
    }

    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.setStorage({
      key: 'bag',
      data: psns
    });
    setBag(psns);
  };

  var updateProdct = function updateProdct(product_id, spec_id, num) {
    var psns = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.getStorageSync('bag') || [];
    psns = lodash_map__WEBPACK_IMPORTED_MODULE_5___default()(psns, function (psn) {
      if (psn.product_id == product_id && psn.spec_id == spec_id) {
        psn.num = num;
      }

      return psn;
    });
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.setStorage({
      key: 'bag',
      data: psns
    });
    setBag(psns);
  };

  var removeProdct = function removeProdct(product_id, spec_id) {
    var psns = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.getStorageSync('bag') || [];
    lodash_remove__WEBPACK_IMPORTED_MODULE_4___default()(psns, function (psn) {
      return psn.product_id == product_id && psn.spec_id == spec_id;
    });
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.setStorage({
      key: 'bag',
      data: psns
    });
    setBag(psns);
  };

  var removeProdcts = function removeProdcts(spec_ids) {
    var psns = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.getStorageSync('bag') || [];
    lodash_remove__WEBPACK_IMPORTED_MODULE_4___default()(psns, function (psn) {
      return spec_ids.indexOf(psn.spec_id) > -1;
    });
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.setStorage({
      key: 'bag',
      data: psns
    });
    setBag(psns);
  };

  var reGetBag = function reGetBag() {
    setBag(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.getStorageSync('bag'));
  };

  return [bag, {
    reGetBag: reGetBag,
    addProdct: addProdct,
    removeProdct: removeProdct,
    removeProdcts: removeProdcts,
    updateProdct: updateProdct
  }];
}



/***/ }),

/***/ "./src/hooks/useConfirm.ts":
/*!*********************************!*\
  !*** ./src/hooks/useConfirm.ts ***!
  \*********************************/
/*! exports provided: useConfirm */
/*! exports used: useConfirm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useConfirm; });
/* harmony import */ var C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




function useConfirm() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.getStorageSync('psns')),
      _useState2 = Object(C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState, 2),
      psns = _useState2[0],
      setPsns = _useState2[1];

  var addConfirm = function addConfirm(psns) {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.setStorage({
      key: 'psns',
      data: psns
    });
    setPsns(psns);
  };

  return {
    psns: psns,
    addConfirm: addConfirm
  };
}



/***/ }),

/***/ "./src/hooks/useNotice.ts":
/*!********************************!*\
  !*** ./src/hooks/useNotice.ts ***!
  \********************************/
/*! exports provided: useNotice */
/*! exports used: useNotice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useNotice; });
/* harmony import */ var C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__);




var db = _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.cloud.database();

function useNotice(page) {
  return Object(swr__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(["notice", page], /*#__PURE__*/Object(C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var result;
    return C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return db.collection('Notice').where({
              _id: page,
              state: 1
            }).limit(1).get();

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

/***/ "./src/hooks/useOrder.ts":
/*!*******************************!*\
  !*** ./src/hooks/useOrder.ts ***!
  \*******************************/
/*! exports provided: submitOrder, useOrder, subscribeOrder, getOrder, useOrders */
/*! exports used: submitOrder, subscribeOrder, useOrder, useOrders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return submitOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return useOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return subscribeOrder; });
/* unused harmony export getOrder */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return useOrders; });
/* harmony import */ var C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_4__);





var db = _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.cloud.database();
var cmd = db.command;
var MAX_LIMIT = 6;

function submitOrder() {
  return Object(react_query__WEBPACK_IMPORTED_MODULE_2__[/* useMutation */ "c"])( /*#__PURE__*/function () {
    var _ref = Object(C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(params) {
      return C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", new Promise( /*#__PURE__*/function () {
                var _ref2 = Object(C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(resolve, reject) {
                  var _yield$Taro$cloud$cal, result;

                  return C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.prev = 0;
                          _context.next = 3;
                          return _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.cloud.callFunction({
                            name: 'submit_order',
                            data: params
                          });

                        case 3:
                          _yield$Taro$cloud$cal = _context.sent;
                          result = _yield$Taro$cloud$cal.result;
                          resolve(result);
                          _context.next = 11;
                          break;

                        case 8:
                          _context.prev = 8;
                          _context.t0 = _context["catch"](0);
                          reject(_context.t0);

                        case 11:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee, null, [[0, 8]]);
                }));

                return function (_x2, _x3) {
                  return _ref2.apply(this, arguments);
                };
              }()));

            case 1:
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

function useOrder(id) {
  return Object(swr__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(["order", id], /*#__PURE__*/Object(C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
    var result, order;
    return C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return db.collection('Order').doc(id).get({});

          case 2:
            result = _context3.sent;
            order = result.data;
            return _context3.abrupt("return", order);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })));
}

function getOrder(id) {
  return new Promise( /*#__PURE__*/function () {
    var _ref4 = Object(C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(resolve) {
      var result, order;
      return C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return db.collection('Order').doc(id).get({});

            case 2:
              result = _context4.sent;
              order = result.data;
              resolve(order);

            case 5:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function (_x4) {
      return _ref4.apply(this, arguments);
    };
  }());
}

function subscribeOrder(_x5, _x6) {
  return _subscribeOrder.apply(this, arguments);
}

function _subscribeOrder() {
  _subscribeOrder = Object(C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(id, cb) {
    return C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return db.collection('Order').doc(id).update({
              data: {
                subscribe: true
              }
            });

          case 2:
            cb();

          case 3:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _subscribeOrder.apply(this, arguments);
}

function useOrders(page, state, openid) {
  return Object(swr__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(['products', page, state], /*#__PURE__*/Object(C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
    var where, result, hasMore;
    return C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            where = {
              _openid: openid
            };

            if (state != 99) {
              where['state'] = state;
            }

            _context5.next = 4;
            return db.collection('Order').field({
              _profit: false
            }).where(where).orderBy('createdAt', 'desc').skip(page * MAX_LIMIT).limit(MAX_LIMIT).get();

          case 4:
            result = _context5.sent;
            hasMore = result.data.length == MAX_LIMIT;
            return _context5.abrupt("return", {
              data: result.data,
              hasMore: hasMore
            });

          case 7:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  })));
}



/***/ }),

/***/ "./src/hooks/useProducts.ts":
/*!**********************************!*\
  !*** ./src/hooks/useProducts.ts ***!
  \**********************************/
/*! exports provided: useProducts, useProduct */
/*! exports used: useProduct, useProducts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useProduct; });
/* harmony import */ var C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_b64__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/b64 */ "./src/lib/b64.ts");





var db = _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.cloud.database();
var cmd = db.command;
var MAX_LIMIT = 10;

function useProducts(page, tag) {
  return Object(swr__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(['products', page, tag], /*#__PURE__*/Object(C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var where, result, hasMore;
    return C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            where = {
              state: 1,
              verify: true
            };

            if (tag != 'all') {
              where['tags'] = {
                value: tag
              };
            }

            _context.next = 4;
            return db.collection('Product').field({
              info: false,
              kv: false
            }).where(where).orderBy('sort', 'desc').skip(page * MAX_LIMIT).limit(MAX_LIMIT).get();

          case 4:
            result = _context.sent;
            hasMore = result.data.length == MAX_LIMIT;
            return _context.abrupt("return", {
              data: result.data,
              hasMore: hasMore
            });

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
}

function useProduct(id) {
  return Object(swr__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(['products', id], /*#__PURE__*/Object(C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
    var result, specs, product;
    return C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return db.collection('Product').doc(id).get({});

          case 2:
            result = _context2.sent;
            _context2.next = 5;
            return db.collection('Spec').where({
              product_id: id
            }).orderBy('sort', 'desc').get();

          case 5:
            specs = _context2.sent;
            product = result.data;
            product.info = decodeURIComponent(Object(_lib_b64__WEBPACK_IMPORTED_MODULE_4__[/* weAtob */ "a"])(product.info));
            product.specs = specs.data;
            return _context2.abrupt("return", product);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
}



/***/ }),

/***/ "./src/hooks/useUser.ts":
/*!******************************!*\
  !*** ./src/hooks/useUser.ts ***!
  \******************************/
/*! exports provided: useUser */
/*! exports used: useUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useUser; });
/* harmony import */ var C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");


// import { useEffect, useState } from "react";
 // import { useState } from 'react';



function useUser() {
  return Object(swr__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(['user'], /*#__PURE__*/Object(C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var u;
    return C_Users_YuanQi_Documents_GitHub_niceup_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            u = _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.getStorageSync('userInfo');
            return _context.abrupt("return", typeof u === 'string' ? undefined : u);

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), {
    initialData: _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.getStorageSync('userInfo')
  });
}



/***/ }),

/***/ "./src/lib/b64.ts":
/*!************************!*\
  !*** ./src/lib/b64.ts ***!
  \************************/
/*! exports provided: weBtoa, weAtob, default */
/*! exports used: weAtob */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export weBtoa */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return weAtob; });
/* unused harmony export default */
// weapp jwt-decode
var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
var b64re = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/; // btoa

var weBtoa = function weBtoa(string) {
  string = String(string);
  var bitmap,
      a,
      b,
      c,
      result = '',
      i = 0,
      rest = string.length % 3;

  for (; i < string.length;) {
    if ((a = string.charCodeAt(i++)) > 255 || (b = string.charCodeAt(i++)) > 255 || (c = string.charCodeAt(i++)) > 255) throw new TypeError("Failed to execute 'btoa' on 'Window': The string to be encoded contains characters outside of the Latin1 range.");
    bitmap = a << 16 | b << 8 | c;
    result += b64.charAt(bitmap >> 18 & 63) + b64.charAt(bitmap >> 12 & 63) + b64.charAt(bitmap >> 6 & 63) + b64.charAt(bitmap & 63);
  }

  return rest ? result.slice(0, rest - 3) + '==='.substring(rest) : result;
}; // atob

var weAtob = function weAtob(string) {
  string = String(string).replace(/[\t\n\f\r ]+/g, '');
  if (!b64re.test(string)) throw new TypeError("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
  string += '=='.slice(2 - (string.length & 3));
  var bitmap,
      result = '',
      r1,
      r2,
      i = 0;

  for (; i < string.length;) {
    bitmap = b64.indexOf(string.charAt(i++)) << 18 | b64.indexOf(string.charAt(i++)) << 12 | (r1 = b64.indexOf(string.charAt(i++))) << 6 | (r2 = b64.indexOf(string.charAt(i++)));
    result += r1 === 64 ? String.fromCharCode(bitmap >> 16 & 255) : r2 === 64 ? String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255) : String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255, bitmap & 255);
  }

  return result;
}; // @quote https://github.com/auth0/jwt-decode

function b64DecodeUnicode(str) {
  return decodeURIComponent(weAtob(str).replace(/(.)/g, function (p) {
    var code = p.charCodeAt(0).toString(16).toUpperCase();

    if (code.length < 2) {
      code = '0' + code;
    }

    return '%' + code;
  }));
}

function base64_url_decode(str) {
  var output = str.replace(/-/g, '+').replace(/_/g, '/');

  switch (output.length % 4) {
    case 0:
      break;

    case 2:
      output += '==';
      break;

    case 3:
      output += '=';
      break;

    default:
      throw 'Illegal base64url string!';
  }

  try {
    return b64DecodeUnicode(output);
  } catch (err) {
    return weAtob(output);
  }
}

function weappJwtDecode(token, options) {
  if (typeof token !== 'string') {
    throw 'Invalid token specified';
  }

  options = options || {};
  var pos = options.header === true ? 0 : 1;

  try {
    return JSON.parse(base64_url_decode(token.split('.')[pos]));
  } catch (e) {
    throw 'Invalid token specified: ' + e.message;
  }
}

/***/ }),

/***/ "./src/variables.js":
/*!**************************!*\
  !*** ./src/variables.js ***!
  \**************************/
/*! no static exports found */
/*! exports used: miniTitle */
/***/ (function(module, exports) {

module.exports = {
  miniTitle: '海诚纬业'
};

/***/ })

}]);
//# sourceMappingURL=common.js.map