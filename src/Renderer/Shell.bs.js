'use strict';

var Curry                                 = require("bs-platform/lib/js/curry.js");
var ReactDOMRe                            = require("reason-react/src/ReactDOMRe.js");
var ReasonReact                           = require("reason-react/src/ReasonReact.js");
var Main                                  = require("universal-router/main");
var CodeSplitting$ParcelReasonmlCodeSplit = require("./CodeSplitting.bs.js");

function handlers(redirect) {
  return /* array */[
          {
            path: "/faq",
            action: (function () {
                var handleFaqCallback = function (Faq) {
                  console.log("Faq module imported & resolved");
                  return Promise.resolve(ReasonReact.element(/* None */0, /* None */0, Curry._2(Faq[/* make */1], redirect, /* array */[])));
                };
                return Curry._1(CodeSplitting$ParcelReasonmlCodeSplit.ImportableFaq[/* import */1], /* () */0).then(handleFaqCallback);
              })
          },
          {
            path: "(.*)",
            action: (function () {
                var handleHomeCallback = function (Home) {
                  console.log("Home module imported & resolved");
                  return Promise.resolve(ReasonReact.element(/* None */0, /* None */0, Curry._2(Home[/* make */1], redirect, /* array */[])));
                };
                return Curry._1(CodeSplitting$ParcelReasonmlCodeSplit.ImportableHome[/* import */1], /* () */0).then(handleHomeCallback);
              })
          }
        ];
}

function render($$location, router) {
  return router.resolve({
                pathname: $$location.pathname
              }).then((function (html) {
                console.log("Rendering route : " + $$location.pathname);
                ReactDOMRe.renderToElementWithId(html, "root");
                return Promise.resolve(/* () */0);
              }));
}

function bootstrap(story) {
  var dispatcher = function (target, $$event) {
    console.log("Redirect to " + target);
    $$event.preventDefault();
    return story.push(target);
  };
  var router = new Main(handlers(dispatcher));
  story.listen((function ($$location) {
          return render($$location, router);
        }));
  return router;
}

exports.handlers  = handlers;
exports.render    = render;
exports.bootstrap = bootstrap;
/* ReactDOMRe Not a pure module */
