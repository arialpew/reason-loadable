

import * as React from "react";
import * as ReasonReact from "reason-react/src/ReasonReact.js";
import * as ReasonReactContext from "reason-react-context/src/reasonReactContext.bs.js";
import * as Text$ReasonmlCodeSplit from "./Text.bs.js";

function redirect(path, $$event) {
  $$event.preventDefault();
  return ReasonReact.Router[/* push */0](path);
}

function initialState() {
  return ReasonReact.Router[/* dangerouslyGetInitialUrl */3](/* () */0);
}

var defaultValue = ReasonReact.Router[/* dangerouslyGetInitialUrl */3](/* () */0);

var Context = ReasonReactContext.CreateContext(/* module */[
      /* name */"Router",
      /* defaultValue */defaultValue
    ]);

var component = ReasonReact.statelessComponent("Link");

function make(href, label, _) {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function () {
      return React.createElement("a", {
                  onClick: (function (param) {
                      return redirect(href, param);
                    })
                }, ReasonReact.element(/* None */0, /* None */0, Text$ReasonmlCodeSplit.make(label, /* array */[])));
    });
  return newrecord;
}

var Link = /* module */[
  /* component */component,
  /* make */make
];

var push = ReasonReact.Router[0];

var watchUrl = ReasonReact.Router[1];

var unwatchUrl = ReasonReact.Router[2];

var dangerouslyGetInitialUrl = ReasonReact.Router[3];

export {
  push ,
  watchUrl ,
  unwatchUrl ,
  dangerouslyGetInitialUrl ,
  redirect ,
  initialState ,
  Context ,
  Link ,
  
}
/* Context Not a pure module */
