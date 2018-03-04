

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as ReasonReact from "reason-react/src/ReasonReact.js";
import * as Text$ReasonmlCodeSplit from "../Core/Text.bs.js";
import * as Utils$ReasonmlCodeSplit from "../Core/Utils.bs.js";
import * as Router$ReasonmlCodeSplit from "../Core/Router.bs.js";
import * as Routes$ReasonmlCodeSplit from "../Routes.bs.js";

var component = ReasonReact.statelessComponent("DeepLink");

function make() {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function () {
      return ReasonReact.element(/* None */0, /* None */0, Curry._1(Router$ReasonmlCodeSplit.Context[/* Consumer */5][/* make */1], (function (route) {
                        var match = Routes$ReasonmlCodeSplit.matcher(route[/* path */0]);
                        var tmp;
                        var exit = 0;
                        if (typeof match === "number") {
                          exit = 1;
                        } else if (match[0] !== 718723174) {
                          exit = 1;
                        } else {
                          var match$1 = match[1];
                          if (match$1) {
                            var page = match$1[0];
                            tmp = Utils$ReasonmlCodeSplit.Fn[/* intOfString */7](page) >= 42 ? ReasonReact.element(/* None */0, /* None */0, Text$ReasonmlCodeSplit.make("Super Deep Link : " + page, /* array */[])) : ReasonReact.element(/* None */0, /* None */0, Text$ReasonmlCodeSplit.make("Deep Link : " + page, /* array */[]));
                          } else {
                            exit = 1;
                          }
                        }
                        if (exit === 1) {
                          tmp = ReasonReact.element(/* None */0, /* None */0, Text$ReasonmlCodeSplit.make("Deep Link : 0", /* array */[]));
                        }
                        return React.createElement("h1", undefined, tmp);
                      })));
    });
  return newrecord;
}

export {
  component ,
  make ,
  
}
/* component Not a pure module */
