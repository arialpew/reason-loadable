'use strict';

var Curry       = require("bs-platform/lib/js/curry.js");
var React       = require("react");
var ReasonReact = require("reason-react/src/ReasonReact.js");

var component = ReasonReact.statelessComponent("Home");

function make(redirect, _) {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function () {
      return React.createElement("div", undefined, React.createElement("a", {
                      onClick: Curry._1(redirect, "/")
                    }, "Home"), React.createElement("a", {
                      onClick: Curry._1(redirect, "/faq")
                    }, "FAQ"), React.createElement("h1", undefined, "Home"));
    });
  return newrecord;
}

exports.component = component;
exports.make      = make;
/* component Not a pure module */
