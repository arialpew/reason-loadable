

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as ReasonReact from "reason-react/src/ReasonReact.js";
import * as Deep$ReasonmlCodeSplit from "./Deep/Deep.bs.js";
import * as Routes$ReasonmlCodeSplit from "../Routes.bs.js";
import * as LazyDeep$ReasonmlCodeSplit from "./Deep/LazyDeep.bs.js";

var component = ReasonReact.statelessComponent("Faq");

function make() {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function () {
      return ReasonReact.element(/* None */0, /* None */0, Curry._1(Routes$ReasonmlCodeSplit.Container[/* make */1], (function (currentRoute) {
                        var exit = 0;
                        if (typeof currentRoute === "number") {
                          exit = 1;
                        } else {
                          var match = currentRoute[0];
                          if (match) {
                            var page = match[0];
                            if (page >= 42) {
                              return ReasonReact.element(/* None */0, /* None */0, LazyDeep$ReasonmlCodeSplit.make(page, /* true */1, /* array */[]));
                            } else {
                              return ReasonReact.element(/* None */0, /* None */0, Deep$ReasonmlCodeSplit.make(page, /* false */0, /* array */[]));
                            }
                          } else {
                            exit = 1;
                          }
                        }
                        if (exit === 1) {
                          return ReasonReact.element(/* None */0, /* None */0, Deep$ReasonmlCodeSplit.make(0, /* false */0, /* array */[]));
                        }
                        
                      })));
    });
  return newrecord;
}

export {
  component ,
  make ,
  
}
/* component Not a pure module */
