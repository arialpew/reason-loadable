

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as ReactDOMRe from "reason-react/src/ReactDOMRe.js";
import * as ReasonReact from "reason-react/src/ReasonReact.js";
import * as Core$ReasonmlCodeSplit from "./Core/Core.bs.js";
import * as Layout$ReasonmlCodeSplit from "./Layout.bs.js";
import * as Routes$ReasonmlCodeSplit from "./Routes.bs.js";
import * as LazyFaq$ReasonmlCodeSplit from "./Faq/LazyFaq.bs.js";
import * as LazyHome$ReasonmlCodeSplit from "./Home/LazyHome.bs.js";
import * as NotFound$ReasonmlCodeSplit from "./NotFound/NotFound.bs.js";
import * as Placeholder$ReasonmlCodeSplit from "./Placeholder.bs.js";
import * as LazyDeepLink$ReasonmlCodeSplit from "./DeepLink/LazyDeepLink.bs.js";

require("./index.css");

function resolver(param) {
  if (typeof param === "number") {
    if (param !== 3502774) {
      if (param !== 803993151) {
        return Promise.resolve(ReasonReact.element(/* None */0, /* None */0, NotFound$ReasonmlCodeSplit.make(/* array */[])));
      } else {
        return LazyHome$ReasonmlCodeSplit.load(/* () */0);
      }
    } else {
      return LazyFaq$ReasonmlCodeSplit.load(/* () */0);
    }
  } else if (param[0] !== 718723174) {
    return Promise.resolve(ReasonReact.element(/* None */0, /* None */0, NotFound$ReasonmlCodeSplit.make(/* array */[])));
  } else {
    return LazyDeepLink$ReasonmlCodeSplit.load(/* () */0);
  }
}

var Shell = Core$ReasonmlCodeSplit.Create(/* module */[
      /* delay */0,
      /* matcher */Routes$ReasonmlCodeSplit.matcher,
      /* resolver */resolver
    ]);

var app = ReasonReact.element(/* None */0, /* None */0, Curry._1(Shell[/* make */1], (function (isLoading, view) {
            return ReasonReact.element(/* None */0, /* None */0, Layout$ReasonmlCodeSplit.make(/* array */[isLoading !== 0 ? ReasonReact.element(/* None */0, /* None */0, Placeholder$ReasonmlCodeSplit.make(/* array */[])) : view]));
          })));

ReactDOMRe.renderToElementWithId(app, "root");

export {
  Shell ,
  app ,
  
}
/*  Not a pure module */
