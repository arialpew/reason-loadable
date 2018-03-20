'use strict';

var React = require("react");
var ReasonReact = require("reason-react/src/ReasonReact.js");

var component = ReasonReact.statelessComponent("WithPure");

function make() {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function () {
      return React.createElement("p", undefined, "Hello world");
    });
  return newrecord;
}

exports.component = component;
exports.make = make;
/* component Not a pure module */
