'use strict';

var Case = require("./Mocks/Case.bs.js");
var Jest = require("@glennsl/bs-jest/src/jest.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Utils = require("./Utils.bs.js");
var WithProps = require("./Mocks/WithProps.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var DynamicImport = require("bs-dynamic-import/src/DynamicImport.bs.js");
var ReactTestRenderer = require("react-test-renderer");

describe("ReLoadable.WithRender pure Loading -> Loaded state transition", (function () {
        var component = ReactTestRenderer.create(ReasonReact.element(/* None */0, /* None */0, Curry._2(Case.Pure[/* WithRender */0][/* make */1], /* array */[], (function (LoadedComponent) {
                        return ReasonReact.element(/* None */0, /* None */0, Curry._1(LoadedComponent[/* make */1], /* array */[]));
                      }))));
        var initial = component.toJSON();
        Jest.test("should render loading component", (function () {
                return Jest.Expect[/* toMatchSnapshot */16](Jest.Expect[/* expect */0](initial));
              }));
        return Jest.testPromise(/* None */0, "should render loaded component", (function () {
                      return DynamicImport.$less$$great(Utils.stdTimer(/* () */0), (function () {
                                    return Jest.Expect[/* toMatchSnapshot */16](Jest.Expect[/* expect */0](component.toJSON()));
                                  }));
                    }));
      }));

describe("ReLoadable.WithChildren pure Loading -> Loaded state transition", (function () {
        var component = ReactTestRenderer.create(ReasonReact.element(/* None */0, /* None */0, Curry._1(Case.Pure[/* WithChildren */1][/* make */1], (function (LoadedComponent) {
                        return ReasonReact.element(/* None */0, /* None */0, Curry._1(LoadedComponent[/* make */1], /* array */[]));
                      }))));
        var initial = component.toJSON();
        Jest.test("should render loading component", (function () {
                return Jest.Expect[/* toMatchSnapshot */16](Jest.Expect[/* expect */0](initial));
              }));
        return Jest.testPromise(/* None */0, "should render loaded component", (function () {
                      return DynamicImport.$less$$great(Utils.stdTimer(/* () */0), (function () {
                                    return Jest.Expect[/* toMatchSnapshot */16](Jest.Expect[/* expect */0](component.toJSON()));
                                  }));
                    }));
      }));

describe("ReLoadable.WithRender pure Loading -> Failed state transition", (function () {
        var component = ReactTestRenderer.create(ReasonReact.element(/* None */0, /* None */0, Curry._2(Case.Bad[/* WithRender */0][/* make */1], /* array */[], (function (LoadedComponent) {
                        return ReasonReact.element(/* None */0, /* None */0, Curry._1(LoadedComponent[/* make */1], /* array */[]));
                      }))));
        var initial = component.toJSON();
        Jest.test("should render loading component", (function () {
                return Jest.Expect[/* toMatchSnapshot */16](Jest.Expect[/* expect */0](initial));
              }));
        return Jest.testPromise(/* None */0, "should render failed component", (function () {
                      return DynamicImport.$less$$great(Utils.stdTimer(/* () */0), (function () {
                                    return Jest.Expect[/* toMatchSnapshot */16](Jest.Expect[/* expect */0](component.toJSON()));
                                  }));
                    }));
      }));

describe("ReLoadable.WithChildren pure Loading -> Failed state transition", (function () {
        var component = ReactTestRenderer.create(ReasonReact.element(/* None */0, /* None */0, Curry._1(Case.Bad[/* WithChildren */1][/* make */1], (function (LoadedComponent) {
                        return ReasonReact.element(/* None */0, /* None */0, Curry._1(LoadedComponent[/* make */1], /* array */[]));
                      }))));
        var initial = component.toJSON();
        Jest.test("should render loading component", (function () {
                return Jest.Expect[/* toMatchSnapshot */16](Jest.Expect[/* expect */0](initial));
              }));
        return Jest.testPromise(/* None */0, "should render failed component", (function () {
                      return DynamicImport.$less$$great(Utils.stdTimer(/* () */0), (function () {
                                    return Jest.Expect[/* toMatchSnapshot */16](Jest.Expect[/* expect */0](component.toJSON()));
                                  }));
                    }));
      }));

describe("ReLoadable.WithRender props", (function () {
        var component = ReactTestRenderer.create(ReasonReact.element(/* None */0, /* None */0, Curry._2(Case.Props[/* WithRender */0][/* make */1], /* array */[], (function (LoadedComponent) {
                        return ReasonReact.element(/* None */0, /* None */0, Curry._2(LoadedComponent[/* make */1], "WithProps", /* array */[]));
                      }))));
        var initial = component.toJSON();
        Jest.test("should render loading component", (function () {
                return Jest.Expect[/* toMatchSnapshot */16](Jest.Expect[/* expect */0](initial));
              }));
        return Jest.testPromise(/* None */0, "should render loaded component", (function () {
                      return DynamicImport.$less$$great(Utils.stdTimer(/* () */0), (function () {
                                    return Jest.Expect[/* toMatchSnapshot */16](Jest.Expect[/* expect */0](component.toJSON()));
                                  }));
                    }));
      }));

describe("ReLoadable.WithChildren props", (function () {
        var component = ReactTestRenderer.create(ReasonReact.element(/* None */0, /* None */0, Curry._1(Case.Props[/* WithChildren */1][/* make */1], (function (LoadedComponent) {
                        return ReasonReact.element(/* None */0, /* None */0, Curry._2(LoadedComponent[/* make */1], "WithProps", /* array */[]));
                      }))));
        var initial = component.toJSON();
        Jest.test("should render loading component", (function () {
                return Jest.Expect[/* toMatchSnapshot */16](Jest.Expect[/* expect */0](initial));
              }));
        return Jest.testPromise(/* None */0, "should render loaded component", (function () {
                      return DynamicImport.$less$$great(Utils.stdTimer(/* () */0), (function () {
                                    return Jest.Expect[/* toMatchSnapshot */16](Jest.Expect[/* expect */0](component.toJSON()));
                                  }));
                    }));
      }));

describe("ReLoadable.WithRender children component", (function () {
        var component = ReactTestRenderer.create(ReasonReact.element(/* None */0, /* None */0, Curry._2(Case.Children[/* WithRender */0][/* make */1], /* array */[], (function (LoadedComponent) {
                        return ReasonReact.element(/* None */0, /* None */0, Curry._1(LoadedComponent[/* make */1], /* array */[ReasonReact.element(/* None */0, /* None */0, WithProps.make("WithChildren", /* array */[]))]));
                      }))));
        var initial = component.toJSON();
        Jest.test("should render loading component", (function () {
                return Jest.Expect[/* toMatchSnapshot */16](Jest.Expect[/* expect */0](initial));
              }));
        return Jest.testPromise(/* None */0, "should render loaded component", (function () {
                      return DynamicImport.$less$$great(Utils.stdTimer(/* () */0), (function () {
                                    return Jest.Expect[/* toMatchSnapshot */16](Jest.Expect[/* expect */0](component.toJSON()));
                                  }));
                    }));
      }));

describe("ReLoadable.WithChildren children component", (function () {
        var component = ReactTestRenderer.create(ReasonReact.element(/* None */0, /* None */0, Curry._1(Case.Children[/* WithChildren */1][/* make */1], (function (LoadedComponent) {
                        return ReasonReact.element(/* None */0, /* None */0, Curry._1(LoadedComponent[/* make */1], /* array */[ReasonReact.element(/* None */0, /* None */0, WithProps.make("WithChildren", /* array */[]))]));
                      }))));
        var initial = component.toJSON();
        Jest.test("should render loading component", (function () {
                return Jest.Expect[/* toMatchSnapshot */16](Jest.Expect[/* expect */0](initial));
              }));
        return Jest.testPromise(/* None */0, "should render loaded component", (function () {
                      return DynamicImport.$less$$great(Utils.stdTimer(/* () */0), (function () {
                                    return Jest.Expect[/* toMatchSnapshot */16](Jest.Expect[/* expect */0](component.toJSON()));
                                  }));
                    }));
      }));

describe("ReLoadable.WithRender children function", (function () {
        var component = ReactTestRenderer.create(ReasonReact.element(/* None */0, /* None */0, Curry._2(Case.ChildrenFunc[/* WithRender */0][/* make */1], /* array */[], (function (LoadedComponent) {
                        return ReasonReact.element(/* None */0, /* None */0, Curry._2(LoadedComponent[/* make */1], "WithChildrenFunc", (function (text) {
                                          return ReasonReact.element(/* None */0, /* None */0, WithProps.make(text, /* array */[]));
                                        })));
                      }))));
        var initial = component.toJSON();
        Jest.test("should render loading component", (function () {
                return Jest.Expect[/* toMatchSnapshot */16](Jest.Expect[/* expect */0](initial));
              }));
        return Jest.testPromise(/* None */0, "should render loaded component", (function () {
                      return DynamicImport.$less$$great(Utils.stdTimer(/* () */0), (function () {
                                    return Jest.Expect[/* toMatchSnapshot */16](Jest.Expect[/* expect */0](component.toJSON()));
                                  }));
                    }));
      }));

describe("Reloadable.WithChildren children function", (function () {
        var component = ReactTestRenderer.create(ReasonReact.element(/* None */0, /* None */0, Curry._1(Case.ChildrenFunc[/* WithChildren */1][/* make */1], (function (LoadedComponent) {
                        return ReasonReact.element(/* None */0, /* None */0, Curry._2(LoadedComponent[/* make */1], "WithChildrenFunc", (function (text) {
                                          return ReasonReact.element(/* None */0, /* None */0, WithProps.make(text, /* array */[]));
                                        })));
                      }))));
        var initial = component.toJSON();
        Jest.test("should render loading component", (function () {
                return Jest.Expect[/* toMatchSnapshot */16](Jest.Expect[/* expect */0](initial));
              }));
        return Jest.testPromise(/* None */0, "should render loaded component", (function () {
                      return DynamicImport.$less$$great(Utils.stdTimer(/* () */0), (function () {
                                    return Jest.Expect[/* toMatchSnapshot */16](Jest.Expect[/* expect */0](component.toJSON()));
                                  }));
                    }));
      }));

/*  Not a pure module */
