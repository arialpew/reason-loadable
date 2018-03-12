

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as ReasonReact from "reason-react/src/ReasonReact.js";
import * as Home$WithWebpack from "./Home/Home.bs.js";
import * as Layout$WithWebpack from "./Theme/Layout.bs.js";
import * as Routes$WithWebpack from "./Routes.bs.js";
import * as LazyFaq$WithWebpack from "./Faq/LazyFaq.bs.js";
import * as NotFound$WithWebpack from "./Theme/NotFound.bs.js";

var component = ReasonReact.statelessComponent("App");

function make() {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function () {
      return ReasonReact.element(/* None */0, /* None */0, Layout$WithWebpack.make(/* array */[ReasonReact.element(/* None */0, /* None */0, Curry._1(Routes$WithWebpack.Container[/* make */1], (function (currentRoute) {
                                  switch (currentRoute) {
                                    case 0 : 
                                        return ReasonReact.element(/* None */0, /* None */0, NotFound$WithWebpack.make(/* array */[]));
                                    case 1 : 
                                        return ReasonReact.element(/* None */0, /* None */0, Home$WithWebpack.make(/* array */[]));
                                    case 2 : 
                                        return ReasonReact.element(/* None */0, /* None */0, LazyFaq$WithWebpack.make(/* array */[]));
                                    
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
