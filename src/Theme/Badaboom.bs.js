

import * as React from "react";
import * as ReasonReact from "reason-react/src/ReasonReact.js";
import * as Utils$ReasonmlCodeSplit from "../Core/Utils.bs.js";

var component = ReasonReact.statelessComponent("Badaboom");

function make(err, _) {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function () {
      return React.createElement("h1", undefined, Utils$ReasonmlCodeSplit.Fn[/* ste */8]("Oops, an error happened : " + err));
    });
  return newrecord;
}

export {
  component ,
  make ,
  
}
/* component Not a pure module */
