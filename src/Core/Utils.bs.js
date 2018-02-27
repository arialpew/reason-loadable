'use strict';

var Curry = require("bs-platform/lib/js/curry.js");

function compose(f, g, x) {
  return Curry._1(f, Curry._1(g, x));
}

function pipe(f, g, x) {
  return Curry._1(g, Curry._1(f, x));
}

var Infix = /* module */[
  /* <|| */compose,
  /* ||> */pipe
];

exports.compose = compose;
exports.pipe = pipe;
exports.Infix = Infix;
/* No side effect */
