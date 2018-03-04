'use strict';

var ReasonReact = require("reason-react/src/ReasonReact.js");

var component = ReasonReact.statelessComponent("String");

function make(label, _) {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function () {
      return label;
    });
  return newrecord;
}

exports.component = component;
exports.make = make;
/* component Not a pure module */
