'use strict';

var Curry = require("bs-platform/lib/js/curry.js");

function Create(Module) {
  var resolver = function (untypedPayload) {
    return Promise.resolve(untypedPayload.importable);
  };
  var $$import = function () {
    return Curry._1(Module[/* doImport */0], /* () */0).then(resolver);
  };
  return /* module */[
          /* resolver */resolver,
          /* import */$$import
        ];
}

exports.Create = Create;
/* No side effect */
