

import * as React from "react";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";

var unsafePlaceholder = ({});

function makeProps(prim, prim$1) {
  var tmp = { };
  if (prim !== undefined) {
    tmp.key = Caml_option.valFromOption(prim);
  }
  return tmp;
}

var make = React.lazy((function (param) {
        unsafePlaceholder.make;
        return import("./Faq.bs.js");
      }));

var UnsafePlaceholder = unsafePlaceholder;

export {
  unsafePlaceholder ,
  UnsafePlaceholder ,
  makeProps ,
  make ,
  
}
/* unsafePlaceholder Not a pure module */
