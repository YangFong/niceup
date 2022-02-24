(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["components/vant-weapp/count-down/index"],{

/***/ "./src/components/vant-weapp/count-down/index.js":
/*!*******************************************************!*\
  !*** ./src/components/vant-weapp/count-down/index.js ***!
  \*******************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/component */ "./src/components/vant-weapp/common/component.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/components/vant-weapp/count-down/utils.js");



function simpleTick(fn) {
  return setTimeout(fn, 30);
}

Object(_common_component__WEBPACK_IMPORTED_MODULE_0__[/* VantComponent */ "a"])({
  props: {
    useSlot: Boolean,
    millisecond: Boolean,
    time: {
      type: Number,
      observer: 'reset'
    },
    format: {
      type: String,
      value: 'HH:mm:ss'
    },
    autoStart: {
      type: Boolean,
      value: true
    }
  },
  data: {
    timeData: Object(_utils__WEBPACK_IMPORTED_MODULE_1__[/* parseTimeData */ "c"])(0),
    formattedTime: '0'
  },
  destroyed: function destroyed() {
    clearTimeout(this.tid);
    this.tid = null;
  },
  methods: {
    // 开始
    start: function start() {
      if (this.counting) {
        return;
      }

      this.counting = true;
      this.endTime = Date.now() + this.remain;
      this.tick();
    },
    // 暂停
    pause: function pause() {
      this.counting = false;
      clearTimeout(this.tid);
    },
    // 重置
    reset: function reset() {
      this.pause();
      this.remain = this.data.time;
      this.setRemain(this.remain);

      if (this.data.autoStart) {
        this.start();
      }
    },
    tick: function tick() {
      if (this.data.millisecond) {
        this.microTick();
      } else {
        this.macroTick();
      }
    },
    microTick: function microTick() {
      var _this = this;

      this.tid = simpleTick(function () {
        _this.setRemain(_this.getRemain());

        if (_this.remain !== 0) {
          _this.microTick();
        }
      });
    },
    macroTick: function macroTick() {
      var _this2 = this;

      this.tid = simpleTick(function () {
        var remain = _this2.getRemain();

        if (!Object(_utils__WEBPACK_IMPORTED_MODULE_1__[/* isSameSecond */ "a"])(remain, _this2.remain) || remain === 0) {
          _this2.setRemain(remain);
        }

        if (_this2.remain !== 0) {
          _this2.macroTick();
        }
      });
    },
    getRemain: function getRemain() {
      return Math.max(this.endTime - Date.now(), 0);
    },
    setRemain: function setRemain(remain) {
      this.remain = remain;
      var timeData = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[/* parseTimeData */ "c"])(remain);

      if (this.data.useSlot) {
        this.$emit('change', timeData);
      }

      this.setData({
        formattedTime: Object(_utils__WEBPACK_IMPORTED_MODULE_1__[/* parseFormat */ "b"])(this.data.format, timeData)
      });

      if (remain === 0) {
        this.pause();
        this.$emit('finish');
      }
    }
  }
});

/***/ }),

/***/ "./src/components/vant-weapp/count-down/utils.js":
/*!*******************************************************!*\
  !*** ./src/components/vant-weapp/count-down/utils.js ***!
  \*******************************************************/
/*! exports provided: parseTimeData, parseFormat, isSameSecond */
/*! exports used: isSameSecond, parseFormat, parseTimeData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return parseTimeData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return parseFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isSameSecond; });
function padZero(num) {
  var targetLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var str = num + '';

  while (str.length < targetLength) {
    str = '0' + str;
  }

  return str;
}

var SECOND = 1000;
var MINUTE = 60 * SECOND;
var HOUR = 60 * MINUTE;
var DAY = 24 * HOUR;
function parseTimeData(time) {
  var days = Math.floor(time / DAY);
  var hours = Math.floor(time % DAY / HOUR);
  var minutes = Math.floor(time % HOUR / MINUTE);
  var seconds = Math.floor(time % MINUTE / SECOND);
  var milliseconds = Math.floor(time % SECOND);
  return {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
    milliseconds: milliseconds
  };
}
function parseFormat(format, timeData) {
  var days = timeData.days;
  var hours = timeData.hours,
      minutes = timeData.minutes,
      seconds = timeData.seconds,
      milliseconds = timeData.milliseconds;

  if (format.indexOf('DD') === -1) {
    hours += days * 24;
  } else {
    format = format.replace('DD', padZero(days));
  }

  if (format.indexOf('HH') === -1) {
    minutes += hours * 60;
  } else {
    format = format.replace('HH', padZero(hours));
  }

  if (format.indexOf('mm') === -1) {
    seconds += minutes * 60;
  } else {
    format = format.replace('mm', padZero(minutes));
  }

  if (format.indexOf('ss') === -1) {
    milliseconds += seconds * 1000;
  } else {
    format = format.replace('ss', padZero(seconds));
  }

  return format.replace('SSS', padZero(milliseconds, 3));
}
function isSameSecond(time1, time2) {
  return Math.floor(time1 / 1000) === Math.floor(time2 / 1000);
}

/***/ })

},[["./src/components/vant-weapp/count-down/index.js","runtime","vendors","common"]]]);
//# sourceMappingURL=index.js.map