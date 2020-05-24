'use strict';

var React = require("react");
var Caml_option = require("bs-platform/lib/js/caml_option.js");

var unsafePlaceholder = ({});

function makeProps(prim, prim$1, prim$2) {
  var tmp = {
    test: prim
  };
  if (prim$1 !== undefined) {
    tmp.key = Caml_option.valFromOption(prim$1);
  }
  return tmp;
}

var make = React.lazy((function (param) {
        unsafePlaceholder.make;
        return import("./fn-component.js");
      }));

var UnsafePlaceholder = unsafePlaceholder;

exports.unsafePlaceholder = unsafePlaceholder;
exports.UnsafePlaceholder = UnsafePlaceholder;
exports.makeProps = makeProps;
exports.make = make;
/* unsafePlaceholder Not a pure module */
