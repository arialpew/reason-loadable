

import * as Utils$ReasonmlCodeSplit from "./Utils.bs.js";

function Create(Module) {
  var resolver = function (untypedPayload) {
    return Promise.resolve(untypedPayload.importable);
  };
  var partial_arg = Module[/* doImport */0];
  var partial_arg$1 = Utils$ReasonmlCodeSplit.Infix[/* ||> */1];
  var $$import = function (param) {
    return partial_arg$1(partial_arg, (function (param) {
                  return param.then(resolver);
                }), param);
  };
  return /* module */[
          /* resolver */resolver,
          /* import */$$import
        ];
}

export {
  Create ,
  
}
/* No side effect */
