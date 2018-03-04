'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Utils$ReasonmlCodeSplit = require("../Core/Utils.bs.js");
var Import$ReasonmlCodeSplit = require("../Core/Import.bs.js");

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

exports.LazyModule = LazyModule;
exports.Importable = Importable;
exports.make = make;
exports.load = load;
/* Importable Not a pure module */
