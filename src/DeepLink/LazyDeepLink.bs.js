

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as ReasonReact from "reason-react/src/ReasonReact.js";
import * as Utils$ReasonmlCodeSplit from "../Core/Utils.bs.js";
import * as Import$ReasonmlCodeSplit from "../Core/Import.bs.js";

function doImport() {
  return import("./ImportableDeepLink");
}

var LazyModule = /* module */[/* doImport */doImport];

var Importable = Import$ReasonmlCodeSplit.Create(LazyModule);

function make(param) {
  return param.then((function (DeepLink) {
                return Promise.resolve(ReasonReact.element(/* None */0, /* None */0, Curry._1(DeepLink[/* make */1], /* array */[])));
              }));
}

var partial_arg = Importable[/* import */1];

var partial_arg$1 = Utils$ReasonmlCodeSplit.Infix[/* ||> */1];

function load(param) {
  return partial_arg$1(partial_arg, make, param);
}

export {
  LazyModule ,
  Importable ,
  make ,
  load ,
  
}
/* Importable Not a pure module */
