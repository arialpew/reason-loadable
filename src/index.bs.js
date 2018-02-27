'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Shell$ReasonmlCodeSplit = require("./Core/Shell.bs.js");
var LazyFaq$ReasonmlCodeSplit = require("./Faq/LazyFaq.bs.js");
var LazyHome$ReasonmlCodeSplit = require("./Home/LazyHome.bs.js");

require("./index.css");

function make(param) {
  var redirect = param[/* redirect */0];
  return /* array */[
          {
            path: "/faq",
            action: (function () {
                return Curry._1(LazyFaq$ReasonmlCodeSplit.Importable[/* import */1], /* () */0).then((function (Faq) {
                              return Promise.resolve(ReasonReact.element(/* None */0, /* None */0, Curry._2(Faq[/* make */1], redirect, /* array */[])));
                            }));
              })
          },
          {
            path: "(.*)",
            action: (function () {
                return Curry._1(LazyHome$ReasonmlCodeSplit.Importable[/* import */1], /* () */0).then((function (Home) {
                              return Promise.resolve(ReasonReact.element(/* None */0, /* None */0, Curry._2(Home[/* make */1], redirect, /* array */[])));
                            }));
              })
          }
        ];
}

var App = Shell$ReasonmlCodeSplit.MakeBrowserApplication(/* module */[/* make */make]);

Curry._1(App[/* bootstrap */0], "root");

exports.App = App;
/*  Not a pure module */
