'use strict';

var React = require("react");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Shell$ReasonmlCodeSplit = require("../Core/Shell.bs.js");

var component = ReasonReact.statelessComponent("Faq");

function make() {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function () {
      return React.createElement("div", undefined, React.createElement("a", {
                      onClick: (function (param) {
                          return Shell$ReasonmlCodeSplit.redirect("/", param);
                        })
                    }, "Home"), React.createElement("a", {
                      onClick: (function (param) {
                          return Shell$ReasonmlCodeSplit.redirect("/faq", param);
                        })
                    }, "FAQ"), React.createElement("a", {
                      onClick: (function (param) {
                          return Shell$ReasonmlCodeSplit.redirect("/test/deep", param);
                        })
                    }, "Deep link"), React.createElement("h1", undefined, "FAQ"));
    });
  return newrecord;
}

exports.component = component;
exports.make = make;
/* component Not a pure module */
