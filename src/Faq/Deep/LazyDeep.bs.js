

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as ReasonReact from "reason-react/src/ReasonReact.js";
import * as Badaboom$ReasonmlCodeSplit from "../../Theme/Badaboom.bs.js";
import * as Loadable$ReasonmlCodeSplit from "../../Core/Loadable.bs.js";
import * as Placeholder$ReasonmlCodeSplit from "../../Theme/Placeholder.bs.js";

var Component = Loadable$ReasonmlCodeSplit.Create(/* module */[]);

function make(page, isDeepPage, _) {
  return Curry._5(Component[/* make */1], (function () {
                return import("./ImportableDeep");
              }), (function (err) {
                return ReasonReact.element(/* None */0, /* None */0, Badaboom$ReasonmlCodeSplit.make(err, /* array */[]));
              }), (function () {
                return ReasonReact.element(/* None */0, /* None */0, Placeholder$ReasonmlCodeSplit.make(/* array */[]));
              }), (function (Component) {
                return ReasonReact.element(/* None */0, /* None */0, Curry._3(Component[/* make */1], page, isDeepPage, /* array */[]));
              }), /* array */[]);
}

export {
  Component ,
  make ,
  
}
/* Component Not a pure module */
