'use strict';

var React = require("react");
var Caml_array = require("bs-platform/lib/js/caml_array.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Router$ReasonmlCodeSplit = require("./Core/Router.bs.js");

var component = ReasonReact.statelessComponent("Layout");

function make(children) {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function () {
      return React.createElement("div", undefined, React.createElement("div", undefined, ReasonReact.element(/* None */0, /* None */0, Router$ReasonmlCodeSplit.Link[/* make */1]("/", "Home", /* array */[])), ReasonReact.element(/* None */0, /* None */0, Router$ReasonmlCodeSplit.Link[/* make */1]("/faq", "Faq", /* array */[])), ReasonReact.element(/* None */0, /* None */0, Router$ReasonmlCodeSplit.Link[/* make */1]("/deep/link", "DeepLink", /* array */[])), ReasonReact.element(/* None */0, /* None */0, Router$ReasonmlCodeSplit.Link[/* make */1]("/deep/link/40", "DeepLink (40)", /* array */[])), ReasonReact.element(/* None */0, /* None */0, Router$ReasonmlCodeSplit.Link[/* make */1]("/deep/link/42", "DeepLink (42)", /* array */[]))), React.createElement("div", undefined, Caml_array.caml_array_get(children, 0)));
    });
  return newrecord;
}

exports.component = component;
exports.make = make;
/* component Not a pure module */
