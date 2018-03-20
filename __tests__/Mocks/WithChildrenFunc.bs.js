'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");

var component = ReasonReact.statelessComponent("WithChildrenFunc");

function make(text, children) {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function () {
      return Curry._1(children, text);
    });
  return newrecord;
}

exports.component = component;
exports.make = make;
/* component Not a pure module */
