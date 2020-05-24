'use strict';

var React = require("react");

function SimpleReasonReact(Props) {
  var test = Props.test;
  return React.createElement("div", undefined, React.createElement("h1", undefined, "Hello World : " + test));
}

var variable = "Hello world";

var make = SimpleReasonReact;

var $$default = SimpleReasonReact;

exports.variable = variable;
exports.make = make;
exports.$$default = $$default;
exports.default = $$default;
exports.__esModule = true;
/* react Not a pure module */
