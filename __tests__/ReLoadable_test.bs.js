'use strict';

var Jest = require("@glennsl/bs-jest/src/jest.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var PlainJsExternalLazy = require("./cases/PlainJsExternal/PlainJsExternalLazy.bs.js");
var ReactTestingLibrary = require("bs-react-testing-library/src/ReactTestingLibrary.bs.js");
var PlainJsFnInternalLazy = require("./cases/PlainJsInternal/PlainJsFnInternalLazy.bs.js");
var SimpleReasonReactLazy = require("./cases/SimpleReasonReact/SimpleReasonReactLazy.bs.js");

Jest.testPromise("PlainJsExternal", undefined, (function (param) {
        var partial_arg = /* `Str */[
          4153489,
          "Hello World"
        ];
        var arg = function (param, param$1) {
          return ReactTestingLibrary.findByText(partial_arg, param, param$1);
        };
        return Curry._2(arg, undefined, ReactTestingLibrary.render(undefined, undefined, undefined, undefined, undefined, React.createElement(React.Suspense, {
                              children: React.createElement(PlainJsExternalLazy.make, PlainJsExternalLazy.makeProps(undefined, undefined)),
                              fallback: React.createElement("div", undefined, "Loading...")
                            }))).then((function (result) {
                      return Promise.resolve(Jest.Expect.toMatchSnapshot(Jest.Expect.expect(result)));
                    }));
      }));

Jest.testPromise("PlainJsFnInternal", undefined, (function (param) {
        var partial_arg = /* `Str */[
          4153489,
          "Hello World : test"
        ];
        var arg = function (param, param$1) {
          return ReactTestingLibrary.findByText(partial_arg, param, param$1);
        };
        return Curry._2(arg, undefined, ReactTestingLibrary.render(undefined, undefined, undefined, undefined, undefined, React.createElement(React.Suspense, {
                              children: React.createElement(PlainJsFnInternalLazy.make, PlainJsFnInternalLazy.makeProps("test", undefined, undefined)),
                              fallback: React.createElement("div", undefined, "Loading...")
                            }))).then((function (result) {
                      return Promise.resolve(Jest.Expect.toMatchSnapshot(Jest.Expect.expect(result)));
                    }));
      }));

Jest.testPromise("PlainJsClassInternal", undefined, (function (param) {
        var partial_arg = /* `Str */[
          4153489,
          "Hello World : test"
        ];
        var arg = function (param, param$1) {
          return ReactTestingLibrary.findByText(partial_arg, param, param$1);
        };
        return Curry._2(arg, undefined, ReactTestingLibrary.render(undefined, undefined, undefined, undefined, undefined, React.createElement(React.Suspense, {
                              children: React.createElement(PlainJsFnInternalLazy.make, PlainJsFnInternalLazy.makeProps("test", undefined, undefined)),
                              fallback: React.createElement("div", undefined, "Loading...")
                            }))).then((function (result) {
                      return Promise.resolve(Jest.Expect.toMatchSnapshot(Jest.Expect.expect(result)));
                    }));
      }));

Jest.testPromise("SimpleReasonReact", undefined, (function (param) {
        var partial_arg = /* `Str */[
          4153489,
          "Hello World : test"
        ];
        var arg = function (param, param$1) {
          return ReactTestingLibrary.findByText(partial_arg, param, param$1);
        };
        return Curry._2(arg, undefined, ReactTestingLibrary.render(undefined, undefined, undefined, undefined, undefined, React.createElement(React.Suspense, {
                              children: React.createElement(SimpleReasonReactLazy.make, SimpleReasonReactLazy.makeProps("test", undefined, undefined)),
                              fallback: React.createElement("div", undefined, "Loading...")
                            }))).then((function (result) {
                      return Promise.resolve(Jest.Expect.toMatchSnapshot(Jest.Expect.expect(result)));
                    }));
      }));

/*  Not a pure module */
