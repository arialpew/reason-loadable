

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as ReasonReact from "reason-react/src/ReasonReact.js";
import * as Utils$ReasonmlCodeSplit from "../../Core/Utils.bs.js";

var component = ReasonReact.statelessComponent("Deep");

function make(page, isDeepPage, _) {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function () {
      if (isDeepPage !== 0) {
        return React.createElement("h1", undefined, Utils$ReasonmlCodeSplit.Fn[/* ste */8]("D-E-E-P Current page : " + Curry._1(Utils$ReasonmlCodeSplit.Fn[/* stringOfInt */6], page)));
      } else {
        return React.createElement("h1", undefined, Utils$ReasonmlCodeSplit.Fn[/* ste */8]("Current page : " + Curry._1(Utils$ReasonmlCodeSplit.Fn[/* stringOfInt */6], page)));
      }
    });
  return newrecord;
}

export {
  component ,
  make ,
  
}
/* component Not a pure module */
