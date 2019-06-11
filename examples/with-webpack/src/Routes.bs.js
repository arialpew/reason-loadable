

import * as ReRoute$WithWebpack from "./ReRoute.bs.js";

function routeFromUrl(url) {
  var match = url[/* path */0];
  if (match) {
    if (match[0] === "faq" && !match[1]) {
      return /* Faq */2;
    } else {
      return /* NotFound */0;
    }
  } else {
    return /* Home */1;
  }
}

function routeToUrl(route) {
  switch (route) {
    case 0 : 
        return "";
    case 1 : 
        return "/";
    case 2 : 
        return "/faq";
    
  }
}

var Config = /* module */[
  /* routeFromUrl */routeFromUrl,
  /* routeToUrl */routeToUrl
];

var include = ReRoute$WithWebpack.CreateRouter(Config);

var Container = include[0];

var Link = include[1];

export {
  Config ,
  Container ,
  Link ,
  
}
/* include Not a pure module */
