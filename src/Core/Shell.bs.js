'use strict';

var List = require("bs-platform/lib/js/list.js");
var ReactDOMRe = require("reason-react/src/ReactDOMRe.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Utils$ReasonmlCodeSplit = require("./Utils.bs.js");

function parseUrl(url) {
  return List.fold_left((function (prev, next) {
                return prev + ("/" + next);
              }), "", url[/* path */0]);
}

function redirect(path, $$event) {
  $$event.preventDefault();
  return ReasonReact.Router[/* push */0](path);
}

function MakeBrowserApplication(App) {
  var bootstrap = function (node) {
    var render = function (param) {
      return param.then((function (html) {
                    ReactDOMRe.renderToElementWithId(html, node);
                    return Promise.resolve(/* () */0);
                  }));
    };
    var partial_arg = App[/* make */0];
    var partial_arg$1 = Utils$ReasonmlCodeSplit.Infix[/* ||> */1];
    var partial_arg$2 = function (param) {
      return partial_arg$1(partial_arg, render, param);
    };
    var partial_arg$3 = Utils$ReasonmlCodeSplit.Fn[/* vtap */1];
    var handler = function (param) {
      return partial_arg$3(partial_arg$2, param);
    };
    var watcher = ReasonReact.Router[/* watchUrl */1](handler);
    ReasonReact.Router[/* push */0](parseUrl(ReasonReact.Router[/* dangerouslyGetInitialUrl */3](/* () */0)));
    return watcher;
  };
  return /* module */[/* bootstrap */bootstrap];
}

exports.parseUrl = parseUrl;
exports.redirect = redirect;
exports.MakeBrowserApplication = MakeBrowserApplication;
/* ReactDOMRe Not a pure module */
