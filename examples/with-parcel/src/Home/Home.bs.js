

import * as React from "react";
import * as ReasonReact from "reason-react/src/ReasonReact.js";

var component = ReasonReact.statelessComponent("Home");

function make() {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function () {
      return React.createElement("h1", undefined, "Home");
    });
  return newrecord;
}

export {
  component ,
  make ,
  
}
/* component Not a pure module */
