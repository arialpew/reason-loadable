

import * as React from "react";
import * as ReasonReact from "reason-react/src/ReasonReact.js";
import * as Text$ReasonmlCodeSplit from "./Core/Text.bs.js";

var component = ReasonReact.statelessComponent("Placeholder");

function make() {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function () {
      return React.createElement("h1", undefined, ReasonReact.element(/* None */0, /* None */0, Text$ReasonmlCodeSplit.make("Loading ...", /* array */[])));
    });
  return newrecord;
}

export {
  component ,
  make ,
  
}
/* component Not a pure module */
