

import * as React from "react";
import * as ReasonReact from "reason-react/src/ReasonReact.js";

require("./faq.css");

var component = ReasonReact.statelessComponent("Faq");

function make() {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function () {
      return React.createElement("h1", {
                  className: "faq"
                }, "FAQ");
    });
  return newrecord;
}

export {
  component ,
  make ,
  
}
/*  Not a pure module */
