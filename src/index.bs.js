'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var ReactDOMRe = require("reason-react/src/ReactDOMRe.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Core$ReasonmlCodeSplit = require("./Core/Core.bs.js");
var Layout$ReasonmlCodeSplit = require("./Layout.bs.js");
var Routes$ReasonmlCodeSplit = require("./Routes.bs.js");
var LazyFaq$ReasonmlCodeSplit = require("./Faq/LazyFaq.bs.js");
var LazyHome$ReasonmlCodeSplit = require("./Home/LazyHome.bs.js");
var NotFound$ReasonmlCodeSplit = require("./NotFound/NotFound.bs.js");
var Placeholder$ReasonmlCodeSplit = require("./Placeholder.bs.js");
var LazyDeepLink$ReasonmlCodeSplit = require("./DeepLink/LazyDeepLink.bs.js");

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

exports.Shell = Shell;
exports.app = app;
/*  Not a pure module */
