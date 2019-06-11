

import * as React from "react";
import * as ReactDOMRe from "reason-react/src/ReactDOMRe.js";
import * as App$WithWebpack from "./App.bs.js";

require("./index.css");

ReactDOMRe.renderToElementWithId(React.createElement(App$WithWebpack.make, { }), "root");

export {
  
}
/*  Not a pure module */
