'use strict';

var React = require("react");

function timer(delay, xs) {
  return new Promise((function (resolve, param) {
                setTimeout((function (param) {
                        return resolve(xs);
                      }), delay);
                return /* () */0;
              }));
}

function __STD_ONLOADING__(param) {
  return React.createElement("p", undefined, "Loading ...");
}

function __STD_ONFAIL__(err) {
  return React.createElement("p", undefined, err);
}

var __CHILDLESS__ = /* array */[];

function stdTimer(param) {
  return timer(200, /* () */0);
}

function heavyTimer(param) {
  return timer(2500, /* () */0);
}

function timeoutTimer(param) {
  return timer(4500, /* () */0);
}

var __STD_DELAY__ = 200;

var __HEAVY_DELAY__ = 2500;

var __TIMEOUT_DELAY__ = 4500;

exports.timer = timer;
exports.__STD_DELAY__ = __STD_DELAY__;
exports.__HEAVY_DELAY__ = __HEAVY_DELAY__;
exports.__TIMEOUT_DELAY__ = __TIMEOUT_DELAY__;
exports.__STD_ONLOADING__ = __STD_ONLOADING__;
exports.__STD_ONFAIL__ = __STD_ONFAIL__;
exports.__CHILDLESS__ = __CHILDLESS__;
exports.stdTimer = stdTimer;
exports.heavyTimer = heavyTimer;
exports.timeoutTimer = timeoutTimer;
/* react Not a pure module */
