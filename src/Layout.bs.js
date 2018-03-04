'use strict';

var React = require("react");
var Caml_array = require("bs-platform/lib/js/caml_array.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Link$ReasonmlCodeSplit = require("./Core/Link.bs.js");

var component = ReasonReact.statelessComponent("Layout");

function make(children) {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function () {
      return React.createElement("div", undefined, React.createElement("div", undefined, ReasonReact.element(/* None */0, /* None */0, Link$ReasonmlCodeSplit.make("/", "Home", /* array */[])), ReasonReact.element(/* None */0, /* None */0, Link$ReasonmlCodeSplit.make("/faq", "Faq", /* array */[])), ReasonReact.element(/* None */0, /* None */0, Link$ReasonmlCodeSplit.make("/deep/link", "DeepLink", /* array */[])), ReasonReact.element(/* None */0, /* None */0, Link$ReasonmlCodeSplit.make("/deep/link/40", "DeepLink (40)", /* array */[])), ReasonReact.element(/* None */0, /* None */0, Link$ReasonmlCodeSplit.make("/deep/link/42", "DeepLink (42)", /* array */[]))), React.createElement("div", undefined, Caml_array.caml_array_get(children, 0)));
    });
  return newrecord;
}

exports.component = component;
exports.make = make;
/* component Not a pure module */
