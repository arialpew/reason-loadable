

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as ReLoadable from "re-loadable/src/ReLoadable.bs.js";
import * as ReasonReact from "reason-react/src/ReasonReact.js";

var Component = ReLoadable.Create(/* module */[]);

function make() {
  return Curry._6(Component[/* make */1], (function () {
                return import("./ImportableFaq");
              }), /* None */0, /* None */0, /* None */0, (function (LoadedComponent) {
                return ReasonReact.element(/* None */0, /* None */0, Curry._1(LoadedComponent[/* make */1], /* array */[]));
              }), /* array */[]);
}

export {
  Component ,
  make ,
  
}
/* Component Not a pure module */
