'use strict';

var React = require("react");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Text$ReasonmlCodeSplit = require("../Core/Text.bs.js");

var component = ReasonReact.statelessComponent("NotFound");

function make() {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function () {
      return React.createElement("h1", undefined, ReasonReact.element(/* None */0, /* None */0, Text$ReasonmlCodeSplit.make("Not found !", /* array */[])));
    });
  return newrecord;
}

exports.component = component;
exports.make = make;
/* component Not a pure module */
