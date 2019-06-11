

import * as React from "react";
import * as Home$WithWebpack from "./Home/Home.bs.js";
import * as ReasonReactRouter from "reason-react/src/ReasonReactRouter.js";
import * as Layout$WithWebpack from "./Theme/Layout.bs.js";
import * as LazyFaq$WithWebpack from "./Faq/LazyFaq.bs.js";
import * as NotFound$WithWebpack from "./Theme/NotFound.bs.js";

function App(Props) {
  var url = ReasonReactRouter.useUrl(undefined, /* () */0);
  var match = url[/* path */0];
  var content = match ? (
      match[0] === "faq" ? (
          match[1] ? React.createElement(NotFound$WithWebpack.make, { }) : React.createElement(React.Suspense, {
                  children: React.createElement(LazyFaq$WithWebpack.Lazy[/* make */0], { }),
                  fallback: React.createElement("div", undefined)
                })
        ) : React.createElement(NotFound$WithWebpack.make, { })
    ) : React.createElement(Home$WithWebpack.make, { });
  return React.createElement(Layout$WithWebpack.make, {
              children: content
            });
}

var make = App;

export {
  make ,
  
}
/* react Not a pure module */
