'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var DynamicImport = require("bs-dynamic-import/src/DynamicImport.bs.js");

function WithRender(Config) {
  var component = ReasonReact.reducerComponent("Loadable.WithRender");
  var make = function ($$fetch, $staropt$star, $staropt$star$1, $staropt$star$2, render, _children) {
    var onFail = $staropt$star !== undefined ? $staropt$star : (function (_error) {
          return null;
        });
    var onLoading = $staropt$star$1 !== undefined ? $staropt$star$1 : (function (param) {
          return null;
        });
    var delay = $staropt$star$2 !== undefined ? $staropt$star$2 : 200;
    return /* record */[
            /* debugName */component[/* debugName */0],
            /* reactClassInternal */component[/* reactClassInternal */1],
            /* handedOffState */component[/* handedOffState */2],
            /* willReceiveProps */component[/* willReceiveProps */3],
            /* didMount */(function (self) {
                var timeoutId = setTimeout((function (param) {
                        DynamicImport.$less$$bang$great(DynamicImport.$less$$great(DynamicImport.resolve(Curry._1($$fetch, /* () */0)), (function (data) {
                                    return Curry._1(self[/* send */3], /* Loaded */Block.__(1, [data]));
                                  })), (function (err) {
                                return Curry._1(self[/* send */3], /* Failed */Block.__(0, [String(err)]));
                              }));
                        return /* () */0;
                      }), delay);
                return Curry._1(self[/* onUnmount */4], (function (param) {
                              clearTimeout(timeoutId);
                              return /* () */0;
                            }));
              }),
            /* didUpdate */component[/* didUpdate */5],
            /* willUnmount */component[/* willUnmount */6],
            /* willUpdate */component[/* willUpdate */7],
            /* shouldUpdate */component[/* shouldUpdate */8],
            /* render */(function (param) {
                var state = param[/* state */1];
                if (typeof state === "number") {
                  return Curry._1(onLoading, /* () */0);
                } else if (state.tag) {
                  return Curry._1(render, state[0]);
                } else {
                  return Curry._1(onFail, state[0]);
                }
              }),
            /* initialState */(function (param) {
                return /* Loading */0;
              }),
            /* retainedProps */component[/* retainedProps */11],
            /* reducer */(function (action, _state) {
                if (typeof action === "number") {
                  return /* Update */Block.__(0, [/* Loading */0]);
                } else if (action.tag) {
                  return /* Update */Block.__(0, [/* Loaded */Block.__(1, [action[0]])]);
                } else {
                  return /* Update */Block.__(0, [/* Failed */Block.__(0, [action[0]])]);
                }
              }),
            /* jsElementWrapped */component[/* jsElementWrapped */13]
          ];
  };
  return /* module */[
          /* component */component,
          /* make */make
        ];
}

function WithChildren(Config) {
  var component = ReasonReact.reducerComponent("Loadable.WithChildren");
  var make = function ($$fetch, $staropt$star, $staropt$star$1, $staropt$star$2, children) {
    var onFail = $staropt$star !== undefined ? $staropt$star : (function (_error) {
          return null;
        });
    var onLoading = $staropt$star$1 !== undefined ? $staropt$star$1 : (function (param) {
          return null;
        });
    var delay = $staropt$star$2 !== undefined ? $staropt$star$2 : 200;
    return /* record */[
            /* debugName */component[/* debugName */0],
            /* reactClassInternal */component[/* reactClassInternal */1],
            /* handedOffState */component[/* handedOffState */2],
            /* willReceiveProps */component[/* willReceiveProps */3],
            /* didMount */(function (self) {
                var timeoutId = setTimeout((function (param) {
                        DynamicImport.$less$$bang$great(DynamicImport.$less$$great(DynamicImport.resolve(Curry._1($$fetch, /* () */0)), (function (data) {
                                    return Curry._1(self[/* send */3], /* Loaded */Block.__(1, [data]));
                                  })), (function (err) {
                                return Curry._1(self[/* send */3], /* Failed */Block.__(0, [String(err)]));
                              }));
                        return /* () */0;
                      }), delay);
                return Curry._1(self[/* onUnmount */4], (function (param) {
                              clearTimeout(timeoutId);
                              return /* () */0;
                            }));
              }),
            /* didUpdate */component[/* didUpdate */5],
            /* willUnmount */component[/* willUnmount */6],
            /* willUpdate */component[/* willUpdate */7],
            /* shouldUpdate */component[/* shouldUpdate */8],
            /* render */(function (param) {
                var state = param[/* state */1];
                if (typeof state === "number") {
                  return Curry._1(onLoading, /* () */0);
                } else if (state.tag) {
                  return Curry._1(children, state[0]);
                } else {
                  return Curry._1(onFail, state[0]);
                }
              }),
            /* initialState */(function (param) {
                return /* Loading */0;
              }),
            /* retainedProps */component[/* retainedProps */11],
            /* reducer */(function (action, _state) {
                if (typeof action === "number") {
                  return /* Update */Block.__(0, [/* Loading */0]);
                } else if (action.tag) {
                  return /* Update */Block.__(0, [/* Loaded */Block.__(1, [action[0]])]);
                } else {
                  return /* Update */Block.__(0, [/* Failed */Block.__(0, [action[0]])]);
                }
              }),
            /* jsElementWrapped */component[/* jsElementWrapped */13]
          ];
  };
  return /* module */[
          /* component */component,
          /* make */make
        ];
}

exports.WithRender = WithRender;
exports.WithChildren = WithChildren;
/* ReasonReact Not a pure module */
