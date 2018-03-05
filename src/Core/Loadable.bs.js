

import * as Block from "bs-platform/lib/es6/block.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as ReasonReact from "reason-react/src/ReasonReact.js";

function Create() {
  var component = ReasonReact.reducerComponent("Loadable");
  var make = function (fetch, onFail, onLoading, render, _) {
    var newrecord = component.slice();
    newrecord[/* didMount */4] = (function (self) {
        Curry._1(self[/* send */4], /* Loading */0);
        Curry._1(fetch, /* () */0).then((function (data) {
                  setTimeout((function () {
                          return Curry._1(self[/* send */4], /* Loaded */Block.__(1, [data.importable]));
                        }), 2000);
                  return Promise.resolve(/* () */0);
                })).catch((function (error) {
                Curry._1(self[/* send */4], /* Failed */Block.__(0, [error]));
                return Promise.resolve(/* () */0);
              }));
        return /* NoUpdate */0;
      });
    newrecord[/* render */9] = (function (param) {
        var state = param[/* state */2];
        if (typeof state === "number") {
          return Curry._1(onLoading, /* () */0);
        } else if (state.tag) {
          return Curry._1(render, state[0]);
        } else {
          return Curry._1(onFail, "Failed");
        }
      });
    newrecord[/* initialState */10] = (function () {
        return /* Loading */0;
      });
    newrecord[/* reducer */12] = (function (action, _) {
        if (typeof action === "number") {
          return /* UpdateWithSideEffects */Block.__(3, [
                    /* Loading */0,
                    (function () {
                        console.log("[LOADING]");
                        return /* () */0;
                      })
                  ]);
        } else if (action.tag) {
          return /* UpdateWithSideEffects */Block.__(3, [
                    /* Loaded */Block.__(1, [action[0]]),
                    (function () {
                        console.log("[LOADED]");
                        return /* () */0;
                      })
                  ]);
        } else {
          return /* UpdateWithSideEffects */Block.__(3, [
                    /* Failed */Block.__(0, [action[0]]),
                    (function () {
                        console.log("[FAILED]");
                        return /* () */0;
                      })
                  ]);
        }
      });
    return newrecord;
  };
  return /* module */[
          /* component */component,
          /* make */make
        ];
}

export {
  Create ,
  
}
/* ReasonReact Not a pure module */
