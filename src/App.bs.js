

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as ReasonReact from "reason-react/src/ReasonReact.js";
import * as Faq$ReasonmlCodeSplit from "./Faq/Faq.bs.js";
import * as Home$ReasonmlCodeSplit from "./Home/Home.bs.js";
import * as Layout$ReasonmlCodeSplit from "./Theme/Layout.bs.js";
import * as Routes$ReasonmlCodeSplit from "./Routes.bs.js";
import * as LazyFaq$ReasonmlCodeSplit from "./Faq/LazyFaq.bs.js";
import * as NotFound$ReasonmlCodeSplit from "./NotFound/NotFound.bs.js";

var component = ReasonReact.statelessComponent("App");

function make() {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function () {
      return ReasonReact.element(/* None */0, /* None */0, Layout$ReasonmlCodeSplit.make(/* array */[ReasonReact.element(/* None */0, /* None */0, Curry._1(Routes$ReasonmlCodeSplit.Container[/* make */1], (function (currentRoute) {
                                  if (typeof currentRoute === "number") {
                                    if (currentRoute !== 0) {
                                      return ReasonReact.element(/* None */0, /* None */0, Home$ReasonmlCodeSplit.make(/* array */[]));
                                    } else {
                                      return ReasonReact.element(/* None */0, /* None */0, NotFound$ReasonmlCodeSplit.make(/* array */[]));
                                    }
                                  } else if (currentRoute[0]) {
                                    return ReasonReact.element(/* None */0, /* None */0, LazyFaq$ReasonmlCodeSplit.make(/* array */[]));
                                  } else {
                                    return ReasonReact.element(/* None */0, /* None */0, Faq$ReasonmlCodeSplit.make(/* array */[]));
                                  }
                                })))]));
    });
  return newrecord;
}

export {
  component ,
  make ,
  
}
/* component Not a pure module */
