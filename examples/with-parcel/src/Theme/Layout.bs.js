

import * as React from "react";
import * as ReasonReactRouter from "reason-react/src/ReasonReactRouter.js";

function goHome($$event) {
  $$event.preventDefault();
  return ReasonReactRouter.push("/");
}

function goFaq($$event) {
  $$event.preventDefault();
  return ReasonReactRouter.push("/faq");
}

function Layout(Props) {
  var children = Props.children;
  return React.createElement("div", {
              className: "layout"
            }, React.createElement("div", {
                  className: "nav"
                }, React.createElement("a", {
                      onClick: goHome
                    }, "Home"), React.createElement("a", {
                      onClick: goFaq
                    }, "FAQ")), React.createElement("div", {
                  className: "view"
                }, children));
}

var make = Layout;

export {
  goHome ,
  goFaq ,
  make ,
  
}
/* react Not a pure module */
