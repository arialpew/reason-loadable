'use strict';

var React = require("react");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Router$ReasonmlCodeSplit = require("./Router.bs.js");
var String$ReasonmlCodeSplit = require("./String.bs.js");

var component = ReasonReact.statelessComponent("Link");

function make(href, label, _) {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function () {
      return React.createElement("a", {
                  onClick: (function (param) {
                      return Router$ReasonmlCodeSplit.redirect(href, param);
                    })
                }, ReasonReact.element(/* None */0, /* None */0, String$ReasonmlCodeSplit.make(label, /* array */[])));
    });
  return newrecord;
}

exports.component = component;
exports.make = make;
/* component Not a pure module */
