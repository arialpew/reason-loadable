'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Utils = require("../Utils.bs.js");
var ReLoadable = require("../../src/ReLoadable.bs.js");

var WithPure = /* module */[];

var WithProps = /* module */[];

var WithChildren = /* module */[];

var WithChildrenFunc = /* module */[];

var Types = /* module */[
  /* WithPure */WithPure,
  /* WithProps */WithProps,
  /* WithChildren */WithChildren,
  /* WithChildrenFunc */WithChildrenFunc
];

var Loadable = ReLoadable.WithRender(WithPure);

function make() {
  var func = Curry._4(Loadable[/* make */1], (function () {
          return import("./WithPure.bs.js");
        }), /* Some */[Utils.__STD_ONFAIL__], /* Some */[Utils.__STD_ONLOADING__], /* Some */[Utils.__STD_DELAY__]);
  return (function (param) {
      return Curry._2(func, param, Utils.__CHILDLESS__);
    });
}

var WithRender = /* module */[
  /* Loadable */Loadable,
  /* make */make
];

var Loadable$1 = ReLoadable.WithChildren(WithPure);

function make$1(children) {
  return Curry._5(Loadable$1[/* make */1], (function () {
                return import("./WithPure.bs.js");
              }), /* Some */[Utils.__STD_ONFAIL__], /* Some */[Utils.__STD_ONLOADING__], /* Some */[Utils.__STD_DELAY__], children);
}

var WithChildren$1 = /* module */[
  /* Loadable */Loadable$1,
  /* make */make$1
];

var Pure = /* module */[
  /* WithRender */WithRender,
  /* WithChildren */WithChildren$1
];

var Loadable$2 = ReLoadable.WithRender(WithPure);

function make$2() {
  var func = Curry._4(Loadable$2[/* make */1], (function () {
          return import("./???.bs.js");
        }), /* Some */[Utils.__STD_ONFAIL__], /* Some */[Utils.__STD_ONLOADING__], /* Some */[Utils.__STD_DELAY__]);
  return (function (param) {
      return Curry._2(func, param, Utils.__CHILDLESS__);
    });
}

var WithRender$1 = /* module */[
  /* Loadable */Loadable$2,
  /* make */make$2
];

var Loadable$3 = ReLoadable.WithChildren(WithPure);

function make$3(children) {
  return Curry._5(Loadable$3[/* make */1], (function () {
                return import("./???.bs.js");
              }), /* Some */[Utils.__STD_ONFAIL__], /* Some */[Utils.__STD_ONLOADING__], /* Some */[Utils.__STD_DELAY__], children);
}

var WithChildren$2 = /* module */[
  /* Loadable */Loadable$3,
  /* make */make$3
];

var Bad = /* module */[
  /* WithRender */WithRender$1,
  /* WithChildren */WithChildren$2
];

var Loadable$4 = ReLoadable.WithRender(WithProps);

function make$4() {
  var func = Curry._4(Loadable$4[/* make */1], (function () {
          return import("./WithProps.bs.js");
        }), /* Some */[Utils.__STD_ONFAIL__], /* Some */[Utils.__STD_ONLOADING__], /* Some */[Utils.__STD_DELAY__]);
  return (function (param) {
      return Curry._2(func, param, Utils.__CHILDLESS__);
    });
}

var WithRender$2 = /* module */[
  /* Loadable */Loadable$4,
  /* make */make$4
];

var Loadable$5 = ReLoadable.WithChildren(WithProps);

function make$5(children) {
  return Curry._5(Loadable$5[/* make */1], (function () {
                return import("./WithProps.bs.js");
              }), /* Some */[Utils.__STD_ONFAIL__], /* Some */[Utils.__STD_ONLOADING__], /* Some */[Utils.__STD_DELAY__], children);
}

var WithChildren$3 = /* module */[
  /* Loadable */Loadable$5,
  /* make */make$5
];

var Props = /* module */[
  /* WithRender */WithRender$2,
  /* WithChildren */WithChildren$3
];

var Loadable$6 = ReLoadable.WithRender(WithChildren);

function make$6() {
  var func = Curry._4(Loadable$6[/* make */1], (function () {
          return import("./WithChildren.bs.js");
        }), /* Some */[Utils.__STD_ONFAIL__], /* Some */[Utils.__STD_ONLOADING__], /* Some */[Utils.__STD_DELAY__]);
  return (function (param) {
      return Curry._2(func, param, Utils.__CHILDLESS__);
    });
}

var WithRender$3 = /* module */[
  /* Loadable */Loadable$6,
  /* make */make$6
];

var Loadable$7 = ReLoadable.WithChildren(WithChildren);

function make$7(children) {
  return Curry._5(Loadable$7[/* make */1], (function () {
                return import("./WithChildren.bs.js");
              }), /* Some */[Utils.__STD_ONFAIL__], /* Some */[Utils.__STD_ONLOADING__], /* Some */[Utils.__STD_DELAY__], children);
}

var WithChildren$4 = /* module */[
  /* Loadable */Loadable$7,
  /* make */make$7
];

var Children = /* module */[
  /* WithRender */WithRender$3,
  /* WithChildren */WithChildren$4
];

var Loadable$8 = ReLoadable.WithRender(WithChildrenFunc);

function make$8() {
  var func = Curry._4(Loadable$8[/* make */1], (function () {
          return import("./WithChildrenFunc.bs.js");
        }), /* Some */[Utils.__STD_ONFAIL__], /* Some */[Utils.__STD_ONLOADING__], /* Some */[Utils.__STD_DELAY__]);
  return (function (param) {
      return Curry._2(func, param, Utils.__CHILDLESS__);
    });
}

var WithRender$4 = /* module */[
  /* Loadable */Loadable$8,
  /* make */make$8
];

var Loadable$9 = ReLoadable.WithChildren(WithChildrenFunc);

function make$9(children) {
  return Curry._5(Loadable$9[/* make */1], (function () {
                return import("./WithChildrenFunc.bs.js");
              }), /* Some */[Utils.__STD_ONFAIL__], /* Some */[Utils.__STD_ONLOADING__], /* Some */[Utils.__STD_DELAY__], children);
}

var WithChildren$5 = /* module */[
  /* Loadable */Loadable$9,
  /* make */make$9
];

var ChildrenFunc = /* module */[
  /* WithRender */WithRender$4,
  /* WithChildren */WithChildren$5
];

exports.Types = Types;
exports.Pure = Pure;
exports.Bad = Bad;
exports.Props = Props;
exports.Children = Children;
exports.ChildrenFunc = ChildrenFunc;
/* Loadable Not a pure module */
