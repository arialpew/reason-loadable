'use strict';

var Caml_array = require("bs-platform/lib/js/caml_array.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");

var component = ReasonReact.statelessComponent("WithChildren");

function make(children) {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function () {
      return Caml_array.caml_array_get(children, 0);
    });
  return newrecord;
}

exports.component = component;
exports.make = make;
/* component Not a pure module */
