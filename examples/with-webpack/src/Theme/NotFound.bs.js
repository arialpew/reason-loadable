

import * as React from "react";
import * as ReasonReact from "reason-react/src/ReasonReact.js";

var component = ReasonReact.statelessComponent("NotFound");

function make() {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function () {
      return React.createElement("h1", undefined, "Not Found !");
    });
  return newrecord;
}

export {
  component ,
  make ,
  
}
/* component Not a pure module */
