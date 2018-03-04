'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Utils$ReasonmlCodeSplit = require("./Utils.bs.js");
var Router$ReasonmlCodeSplit = require("./Router.bs.js");

function Create(X) {
  var component = ReasonReact.reducerComponent("App");
  var make = function (children) {
    var newrecord = component.slice();
    newrecord[/* render */9] = (function (param) {
        var state = param[/* state */2];
        return ReasonReact.element(/* None */0, /* None */0, Curry._2(Router$ReasonmlCodeSplit.Context[/* Provider */4][/* make */1], /* Some */[state[/* route */0]], /* array */[Curry._2(children, state[/* isLoading */2], state[/* view */1])]));
      });
    newrecord[/* initialState */10] = (function () {
        return /* record */[
                /* route */Router$ReasonmlCodeSplit.initialState(/* () */0),
                /* view */null,
                /* isLoading : false */0
              ];
      });
    newrecord[/* reducer */12] = (function (action, state) {
        if (typeof action === "number") {
          return /* UpdateWithSideEffects */Block.__(3, [
                    /* record */[
                      /* route */state[/* route */0],
                      /* view */state[/* view */1],
                      /* isLoading : true */1
                    ],
                    (function (self) {
                        console.log("[LOAD]", self[/* state */2][/* isLoading */2]);
                        return /* () */0;
                      })
                  ]);
        } else if (action.tag) {
          var match = action[0];
          return /* UpdateWithSideEffects */Block.__(3, [
                    /* record */[
                      /* route */match[0],
                      /* view */match[1],
                      /* isLoading : false */0
                    ],
                    (function (self) {
                        console.log("[LOADED]", self[/* state */2][/* isLoading */2]);
                        return /* () */0;
                      })
                  ]);
        } else {
          var match$1 = action[0];
          var url = match$1[1];
          var route = match$1[0];
          return /* SideEffects */Block.__(2, [(function (self) {
                        console.log("[REQUEST]", self[/* state */2][/* isLoading */2]);
                        var match = self[/* state */2][/* isLoading */2];
                        if (match !== 0) {
                          Promise.resolve(/* () */0);
                        } else {
                          Curry._1(self[/* send */4], /* Load */0);
                          Curry._1(X[/* resolver */2], route).then((function (component) {
                                  setTimeout((function () {
                                          return Curry._1(self[/* send */4], /* Loaded */Block.__(1, [/* tuple */[
                                                          url,
                                                          component
                                                        ]]));
                                        }), X[/* delay */0]);
                                  return Promise.resolve(/* () */0);
                                }));
                        }
                        return /* () */0;
                      })]);
        }
      });
    newrecord[/* subscriptions */13] = (function (self) {
        return /* :: */[
                /* Sub */[
                  (function () {
                      var partial_arg = Utils$ReasonmlCodeSplit.Fn[/* vtap */1];
                      var handler = function (param) {
                        return partial_arg((function (url) {
                                      return Curry._1(self[/* send */4], /* Request */Block.__(0, [/* tuple */[
                                                      Curry._1(X[/* matcher */1], url[/* path */0]),
                                                      url
                                                    ]]));
                                    }), param);
                      };
                      Curry._1(handler, self[/* state */2][/* route */0]);
                      return Router$ReasonmlCodeSplit.watchUrl(handler);
                    }),
                  Router$ReasonmlCodeSplit.unwatchUrl
                ],
                /* [] */0
              ];
      });
    return newrecord;
  };
  return /* module */[
          /* component */component,
          /* make */make
        ];
}

exports.Create = Create;
/* ReasonReact Not a pure module */
