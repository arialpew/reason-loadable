

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Caml_array from "bs-platform/lib/es6/caml_array.js";
import * as ReasonReact from "reason-react/src/ReasonReact.js";
import * as Routes$WithParcel from "../Routes.bs.js";

var component = ReasonReact.statelessComponent("Layout");

function make(children) {
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
              return React.createElement("div", {
                          className: "layout"
                        }, React.createElement("div", {
                              className: "nav"
                            }, ReasonReact.element(undefined, undefined, Curry._2(Routes$WithParcel.Link[/* make */1], /* Home */1, /* array */["Home"])), ReasonReact.element(undefined, undefined, Curry._2(Routes$WithParcel.Link[/* make */1], /* Faq */2, /* array */["FAQ"]))), React.createElement("div", {
                              className: "view"
                            }, Caml_array.caml_array_get(children, 0)));
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
