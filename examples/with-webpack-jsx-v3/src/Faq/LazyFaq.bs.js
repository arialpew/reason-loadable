

import * as React from "react";

var make = React.lazy((function (param) {
        return import("./Faq");
      }));

var Lazy = /* module */[
  /* make */make,
  /* default */make
];

export {
  Lazy ,
  
}
/*  Not a pure module */
