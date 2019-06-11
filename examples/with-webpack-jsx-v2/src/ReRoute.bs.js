

import * as Block from "bs-platform/lib/es6/block.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as ReasonReact from "reason-react/src/ReasonReact.js";
import * as ReasonReactRouter from "reason-react/src/ReasonReactRouter.js";

function CreateRouter(Config) {
  var component = ReasonReact.reducerComponent("CallstackRerouteRouter");
  var make = function (children) {
    return /* record */[
            /* debugName */component[/* debugName */0],
            /* reactClassInternal */component[/* reactClassInternal */1],
            /* handedOffState */component[/* handedOffState */2],
            /* willReceiveProps */component[/* willReceiveProps */3],
            /* didMount */(function (self) {
                var watcherID = ReasonReactRouter.watchUrl((function (url) {
                        return Curry._1(self[/* send */3], /* ChangeRoute */[Curry._1(Config[/* routeFromUrl */0], url)]);
                      }));
                return Curry._1(self[/* onUnmount */4], (function (param) {
                              return ReasonReactRouter.unwatchUrl(watcherID);
                            }));
              }),
            /* didUpdate */component[/* didUpdate */5],
            /* willUnmount */component[/* willUnmount */6],
            /* willUpdate */component[/* willUpdate */7],
            /* shouldUpdate */component[/* shouldUpdate */8],
            /* render */(function (self) {
                return Curry._1(children, self[/* state */1]);
              }),
            /* initialState */(function (param) {
                return Curry._1(Config[/* routeFromUrl */0], ReasonReactRouter.dangerouslyGetInitialUrl(/* () */0));
              }),
            /* retainedProps */component[/* retainedProps */11],
            /* reducer */(function (action, _state) {
                return /* Update */Block.__(0, [action[0]]);
              }),
            /* jsElementWrapped */component[/* jsElementWrapped */13]
          ];
  };
  var Container = /* module */[
    /* component */component,
    /* make */make
  ];
  var component$1 = ReasonReact.statelessComponent("CallstackRerouteLink");
  var make$1 = function (route, children) {
    return /* record */[
            /* debugName */component$1[/* debugName */0],
            /* reactClassInternal */component$1[/* reactClassInternal */1],
            /* handedOffState */component$1[/* handedOffState */2],
            /* willReceiveProps */component$1[/* willReceiveProps */3],
            /* didMount */component$1[/* didMount */4],
            /* didUpdate */component$1[/* didUpdate */5],
            /* willUnmount */component$1[/* willUnmount */6],
            /* willUpdate */component$1[/* willUpdate */7],
            /* shouldUpdate */component$1[/* shouldUpdate */8],
            /* render */(function (_self) {
                var href = Curry._1(Config[/* routeToUrl */1], route);
                return React.createElement("a", {
                            href: href,
                            onClick: (function ($$event) {
                                $$event.preventDefault();
                                return ReasonReactRouter.push(href);
                              })
                          }, children);
              }),
            /* initialState */component$1[/* initialState */10],
            /* retainedProps */component$1[/* retainedProps */11],
            /* reducer */component$1[/* reducer */12],
            /* jsElementWrapped */component$1[/* jsElementWrapped */13]
          ];
  };
  var Link = /* module */[
    /* component */component$1,
    /* make */make$1
  ];
  return /* module */[
          /* Container */Container,
          /* Link */Link
        ];
}

export {
  CreateRouter ,
  
}
/* react Not a pure module */
