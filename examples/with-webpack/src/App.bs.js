

import * as React from "react";
import * as Home$WithParcel from "./Home/Home.bs.js";
import * as Layout$WithParcel from "./Theme/Layout.bs.js";
import * as ReasonReactRouter from "reason-react/src/ReasonReactRouter.js";
import * as LazyFaq$WithParcel from "./Faq/LazyFaq.bs.js";
import * as NotFound$WithParcel from "./Theme/NotFound.bs.js";

function App(Props) {
  var url = ReasonReactRouter.useUrl(undefined, undefined);
  var match = url.path;
  var content = match ? (
      match[0] === "faq" ? (
          match[1] ? React.createElement(NotFound$WithParcel.make, { }) : React.createElement(React.Suspense, {
                  children: React.createElement(LazyFaq$WithParcel.make, LazyFaq$WithParcel.makeProps(undefined, undefined)),
                  fallback: React.createElement("div", undefined)
                })
        ) : React.createElement(NotFound$WithParcel.make, { })
    ) : React.createElement(Home$WithParcel.make, { });
  return React.createElement(Layout$WithParcel.make, {
              children: content
            });
}

var make = App;

export {
  make ,
  
}
/* react Not a pure module */
