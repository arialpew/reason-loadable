

import * as ReactDOMRe from "reason-react/src/ReactDOMRe.js";
import * as ReasonReact from "reason-react/src/ReasonReact.js";
import * as App$WithWebpack from "./App.bs.js";

require("./index.css");

ReactDOMRe.renderToElementWithId(ReasonReact.element(undefined, undefined, App$WithWebpack.make(/* array */[])), "root");

export {
  
}
/*  Not a pure module */
