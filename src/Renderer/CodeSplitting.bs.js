'use strict';

var Import$ParcelReasonmlCodeSplit = require("./Import.bs.js");

function doImport() {
  return import("../Home/ImportableHome");
}

var ImportableHomeModule = /* module */[/* doImport */doImport];

var ImportableHome = Import$ParcelReasonmlCodeSplit.Create(ImportableHomeModule);

function doImport$1() {
  return import("../Faq/ImportableFaq");
}

var ImportableFaqModule = /* module */[/* doImport */doImport$1];

var ImportableFaq = Import$ParcelReasonmlCodeSplit.Create(ImportableFaqModule);

exports.ImportableHomeModule = ImportableHomeModule;
exports.ImportableHome = ImportableHome;
exports.ImportableFaqModule = ImportableFaqModule;
exports.ImportableFaq = ImportableFaq;
/* ImportableHome Not a pure module */
