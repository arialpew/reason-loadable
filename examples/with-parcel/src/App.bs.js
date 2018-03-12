

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as ReasonReact from "reason-react/src/ReasonReact.js";
import * as Home$WithParcel from "./Home/Home.bs.js";
import * as Layout$WithParcel from "./Theme/Layout.bs.js";
import * as Routes$WithParcel from "./Routes.bs.js";
import * as LazyFaq$WithParcel from "./Faq/LazyFaq.bs.js";
import * as NotFound$WithParcel from "./Theme/NotFound.bs.js";

var component = ReasonReact.statelessComponent("App");

function make() {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function () {
      return ReasonReact.element(/* None */0, /* None */0, Layout$WithParcel.make(/* array */[ReasonReact.element(/* None */0, /* None */0, Curry._1(Routes$WithParcel.Container[/* make */1], (function (currentRoute) {
                                  switch (currentRoute) {
                                    case 0 : 
                                        return ReasonReact.element(/* None */0, /* None */0, NotFound$WithParcel.make(/* array */[]));
                                    case 1 : 
                                        return ReasonReact.element(/* None */0, /* None */0, Home$WithParcel.make(/* array */[]));
                                    case 2 : 
                                        return ReasonReact.element(/* None */0, /* None */0, LazyFaq$WithParcel.make(/* array */[]));
                                    
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
