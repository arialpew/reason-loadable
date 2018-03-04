'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Pervasives = require("bs-platform/lib/js/pervasives.js");
var Caml_format = require("bs-platform/lib/js/caml_format.js");

function flip(f, a, b) {
  return Curry._2(f, b, a);
}

function vtap(f, x) {
  Curry._1(f, x);
  return /* () */0;
}

function tap(f, x) {
  Curry._1(f, x);
  return x;
}

function compose(f, g, x) {
  return Curry._1(f, Curry._1(g, x));
}

function pipe(f, g, x) {
  return Curry._1(g, Curry._1(f, x));
}

function id(x) {
  return x;
}

var intOfString = Caml_format.caml_int_of_string;

var Fn = /* module */[
  /* flip */flip,
  /* vtap */vtap,
  /* tap */tap,
  /* compose */compose,
  /* pipe */pipe,
  /* id */id,
  /* stringOfInt */Pervasives.string_of_int,
  /* intOfString */intOfString
];

function $great$great$eq(x, f) {
  if (x) {
    return Curry._1(f, x[0]);
  } else {
    return /* None */0;
  }
}

var Infix = /* module */[
  /* <|| */compose,
  /* ||> */pipe,
  /* >>= */$great$great$eq
];

exports.Fn = Fn;
exports.Infix = Infix;
/* No side effect */
