'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var ReactDOMRe = require("reason-react/src/ReactDOMRe.js");
var Index = require("universal-router/index");
var Utils$ReasonmlCodeSplit = require("./Utils.bs.js");
var CreateBrowserHistory = require("history/createBrowserHistory");

function MakeBrowserApplication(App) {
  var bootstrap = function (node) {
    var history = CreateBrowserHistory.default();
    var redirect = function (pathname, $$event) {
      $$event.preventDefault();
      console.log("Redirect to ---> " + pathname);
      history.push(pathname);
      return /* () */0;
    };
    var partial_arg = new Index(Curry._1(App[/* make */0], /* record */[
              /* redirect */redirect,
              /* history */history
            ]));
    var partial_arg$1 = function (param) {
      var router = partial_arg;
      var pathname = param;
      console.log("Rendering route ---> " + pathname);
      router.resolve({
              pathname: pathname
            }).then((function (html) {
              ReactDOMRe.renderToElementWithId(html, node);
              return Promise.resolve(/* () */0);
            }));
      return history;
    };
    var partial_arg$2 = Utils$ReasonmlCodeSplit.Infix[/* <|| */0];
    var render = function (param) {
      return partial_arg$2(partial_arg$1, (function (prim) {
                    return prim.pathname;
                  }), param);
    };
    return Curry._1(render, history.location).listen(render);
  };
  return /* module */[/* bootstrap */bootstrap];
}

exports.MakeBrowserApplication = MakeBrowserApplication;
/* ReactDOMRe Not a pure module */
