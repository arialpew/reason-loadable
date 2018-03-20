

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as ReLoadable from "reason-loadable/src/ReLoadable.bs.js";
import * as ReasonReact from "reason-react/src/ReasonReact.js";

var Config = /* module */[];

var Loadable = ReLoadable.WithRender(Config);

function make() {
  return Curry._6(Loadable[/* make */1], (function () {
                return import("./Faq");
              }), /* None */0, /* None */0, /* None */0, (function (LoadedComponent) {
                return ReasonReact.element(/* None */0, /* None */0, Curry._1(LoadedComponent[/* make */1], /* array */[]));
              }), /* array */[]);
}

export {
  Config ,
  Loadable ,
  make ,
  
}
/* Loadable Not a pure module */
