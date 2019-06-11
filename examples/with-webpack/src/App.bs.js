

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as ReasonReact from "reason-react/src/ReasonReact.js";
import * as Home$WithWebpack from "./Home/Home.bs.js";
import * as Layout$WithWebpack from "./Theme/Layout.bs.js";
import * as Routes$WithWebpack from "./Routes.bs.js";
import * as LazyFaq$WithWebpack from "./Faq/LazyFaq.bs.js";
import * as NotFound$WithWebpack from "./Theme/NotFound.bs.js";

var component = ReasonReact.statelessComponent("App");

function make(_children) {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function (_self) {
              return ReasonReact.element(undefined, undefined, Layout$WithWebpack.make(/* array */[ReasonReact.element(undefined, undefined, Curry._1(Routes$WithWebpack.Container[/* make */1], (function (currentRoute) {
                                          switch (currentRoute) {
                                            case 0 : 
                                                return ReasonReact.element(undefined, undefined, NotFound$WithWebpack.make(/* array */[]));
                                            case 1 : 
                                                return ReasonReact.element(undefined, undefined, Home$WithWebpack.make(/* array */[]));
                                            case 2 : 
                                                return ReasonReact.element(undefined, undefined, LazyFaq$WithWebpack.make(/* array */[]));
                                            
                                          }
                                        })))]));
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

export {
  component ,
  make ,
  
}
/* component Not a pure module */
