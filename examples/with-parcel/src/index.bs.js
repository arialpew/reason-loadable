

import * as React from "react";
import * as ReactDOMRe from "reason-react/src/ReactDOMRe.js";
import * as App$WithParcel from "./App.bs.js";

require("./index.css");

ReactDOMRe.renderToElementWithId(React.createElement(App$WithParcel.make, { }), "root");

export {
  
}
/*  Not a pure module */
