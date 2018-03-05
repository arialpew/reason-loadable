

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as ReRoute from "reason-reroute/src/ReRoute.js";
import * as Utils$ReasonmlCodeSplit from "./Core/Utils.bs.js";

function routeFromUrl(url) {
  var match = url[/* path */0];
  if (match) {
    if (match[0] === "faq") {
      var match$1 = match[1];
      if (match$1) {
        if (match$1[0] === "deep") {
          var match$2 = match$1[1];
          if (match$2 && !match$2[1]) {
            return /* Faq */[/* Some */[Utils$ReasonmlCodeSplit.Fn[/* intOfString */7](match$2[0])]];
          } else {
            return /* NotFound */0;
          }
        } else {
          return /* NotFound */0;
        }
      } else {
        return /* Faq */[/* None */0];
      }
    } else {
      return /* NotFound */0;
    }
  } else {
    return /* Home */1;
  }
}

function routeToUrl(route) {
  if (typeof route === "number") {
    if (route !== 0) {
      return "/";
    } else {
      return "";
    }
  } else {
    var match = route[0];
    if (match) {
      return "/faq/deep/" + Curry._1(Utils$ReasonmlCodeSplit.Fn[/* stringOfInt */6], match[0]);
    } else {
      return "/faq";
    }
  }
}

var Config = /* module */[
  /* routeFromUrl */routeFromUrl,
  /* routeToUrl */routeToUrl
];

var include = ReRoute.CreateRouter(Config);

var Container = include[0];

var Link = include[1];

export {
  Config ,
  Container ,
  Link ,
  
}
/* include Not a pure module */
