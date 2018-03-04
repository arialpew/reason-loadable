'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Import$ReasonmlCodeSplit = require("../Core/Import.bs.js");

function doImport() {
  return import("./ImportableHome");
}

var LazyModule = /* module */[/* doImport */doImport];

var Importable = Import$ReasonmlCodeSplit.Create(LazyModule);

function make(param) {
  return param.then((function (Home) {
                return Promise.resolve(ReasonReact.element(/* None */0, /* None */0, Curry._1(Home[/* make */1], /* array */[])));
              }));
}

function load() {
  return make(Curry._1(Importable[/* import */1], /* () */0));
}

exports.LazyModule = LazyModule;
exports.Importable = Importable;
exports.make = make;
exports.load = load;
/* Importable Not a pure module */
