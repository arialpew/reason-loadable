'use strict';

var Import$ReasonmlCodeSplit = require("../Core/Import.bs.js");

function doImport() {
  return import("./ImportableHome");
}

var LazyModule = /* module */[/* doImport */doImport];

var Importable = Import$ReasonmlCodeSplit.Create(LazyModule);

exports.LazyModule = LazyModule;
exports.Importable = Importable;
/* Importable Not a pure module */
