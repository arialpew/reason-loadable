

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Caml_array from "bs-platform/lib/es6/caml_array.js";
import * as ReasonReact from "reason-react/src/ReasonReact.js";
import * as Routes$WithWebpack from "../Routes.bs.js";

var component = ReasonReact.statelessComponent("Layout");

function make(children) {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function () {
      return React.createElement("div", {
                  className: "layout"
                }, React.createElement("div", {
                      className: "nav"
                    }, ReasonReact.element(/* None */0, /* None */0, Curry._2(Routes$WithWebpack.Link[/* make */1], /* Home */1, /* array */["Home"])), ReasonReact.element(/* None */0, /* None */0, Curry._2(Routes$WithWebpack.Link[/* make */1], /* Faq */2, /* array */["FAQ"]))), React.createElement("div", {
                      className: "view"
                    }, Caml_array.caml_array_get(children, 0)));
    });
  return newrecord;
}

export {
  component ,
  make ,
  
}
/* component Not a pure module */
