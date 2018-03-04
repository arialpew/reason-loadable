

import * as React from "react";
import * as Caml_array from "bs-platform/lib/es6/caml_array.js";
import * as ReasonReact from "reason-react/src/ReasonReact.js";
import * as Router$ReasonmlCodeSplit from "./Core/Router.bs.js";

var component = ReasonReact.statelessComponent("Layout");

function make(children) {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function () {
      return React.createElement("div", undefined, React.createElement("div", undefined, ReasonReact.element(/* None */0, /* None */0, Router$ReasonmlCodeSplit.Link[/* make */1]("/", "Home", /* array */[])), ReasonReact.element(/* None */0, /* None */0, Router$ReasonmlCodeSplit.Link[/* make */1]("/faq", "Faq", /* array */[])), ReasonReact.element(/* None */0, /* None */0, Router$ReasonmlCodeSplit.Link[/* make */1]("/deep/link", "DeepLink", /* array */[])), ReasonReact.element(/* None */0, /* None */0, Router$ReasonmlCodeSplit.Link[/* make */1]("/deep/link/40", "DeepLink (40)", /* array */[])), ReasonReact.element(/* None */0, /* None */0, Router$ReasonmlCodeSplit.Link[/* make */1]("/deep/link/42", "DeepLink (42)", /* array */[]))), React.createElement("div", undefined, Caml_array.caml_array_get(children, 0)));
    });
  return newrecord;
}

export {
  component ,
  make ,
  
}
/* component Not a pure module */
