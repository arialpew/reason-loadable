'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Shell$ReasonmlCodeSplit = require("./Core/Shell.bs.js");
var LazyFaq$ReasonmlCodeSplit = require("./Faq/LazyFaq.bs.js");
var LazyHome$ReasonmlCodeSplit = require("./Home/LazyHome.bs.js");

require("./index.css");

function home() {
  return Curry._1(LazyHome$ReasonmlCodeSplit.Importable[/* import */1], /* () */0).then((function (Home) {
                return Promise.resolve(ReasonReact.element(/* None */0, /* None */0, Curry._1(Home[/* make */1], /* array */[])));
              }));
}

function faq() {
  return Curry._1(LazyFaq$ReasonmlCodeSplit.Importable[/* import */1], /* () */0).then((function (Faq) {
                return Promise.resolve(ReasonReact.element(/* None */0, /* None */0, Curry._1(Faq[/* make */1], /* array */[])));
              }));
}

function make(url) {
  var match = url[/* path */0];
  if (match) {
    switch (match[0]) {
      case "faq" : 
          if (match[1]) {
            return home(/* () */0);
          } else {
            return faq(/* () */0);
          }
      case "test" : 
          var match$1 = match[1];
          if (match$1 && match$1[0] === "deep" && !match$1[1]) {
            return faq(/* () */0);
          } else {
            return home(/* () */0);
          }
          break;
      default:
        return home(/* () */0);
    }
  } else {
    return home(/* () */0);
  }
}

var App = Shell$ReasonmlCodeSplit.MakeBrowserApplication(/* module */[/* make */make]);

Curry._1(App[/* bootstrap */0], "root");

exports.App = App;
/*  Not a pure module */
