'use strict';

var Case = require("./Mocks/Case.bs.js");
var Jest = require("@glennsl/bs-jest/src/jest.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Utils = require("./Utils.bs.js");
var WithProps = require("./Mocks/WithProps.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var DynamicImport = require("bs-dynamic-import/src/DynamicImport.bs.js");
var ReactTestRenderer = require("react-test-renderer");

Jest.describe("ReLoadable.WithRender pure Loading -> Loaded state transition", (function (param) {
        var component = ReactTestRenderer.create(ReasonReact.element(undefined, undefined, Curry._2(Case.Pure[/* WithRender */0][/* make */1], /* array */[], (function (LoadedComponent) {
                        return ReasonReact.element(undefined, undefined, Curry._1(LoadedComponent[/* make */1], /* array */[]));
                      }))));
        var initial = component.toJSON();
        Jest.test("should render loading component", (function (param) {
                return Jest.Expect[/* toMatchSnapshot */16](Jest.Expect[/* expect */0](initial));
              }));
        return Jest.testPromise("should render loaded component", undefined, (function (param) {
                      return DynamicImport.$less$$great(Utils.stdTimer(/* () */0), (function (param) {
                                    return Jest.Expect[/* toMatchSnapshot */16](Jest.Expect[/* expect */0](component.toJSON()));
                                  }));
                    }));
      }));

Jest.describe("ReLoadable.WithChildren pure Loading -> Loaded state transition", (function (param) {
        var component = ReactTestRenderer.create(ReasonReact.element(undefined, undefined, Curry._1(Case.Pure[/* WithChildren */1][/* make */1], (function (LoadedComponent) {
                        return ReasonReact.element(undefined, undefined, Curry._1(LoadedComponent[/* make */1], /* array */[]));
                      }))));
        var initial = component.toJSON();
        Jest.test("should render loading component", (function (param) {
                return Jest.Expect[/* toMatchSnapshot */16](Jest.Expect[/* expect */0](initial));
              }));
        return Jest.testPromise("should render loaded component", undefined, (function (param) {
                      return DynamicImport.$less$$great(Utils.stdTimer(/* () */0), (function (param) {
                                    return Jest.Expect[/* toMatchSnapshot */16](Jest.Expect[/* expect */0](component.toJSON()));
                                  }));
                    }));
      }));

Jest.describe("ReLoadable.WithRender pure Loading -> Failed state transition", (function (param) {
        var component = ReactTestRenderer.create(ReasonReact.element(undefined, undefined, Curry._2(Case.Bad[/* WithRender */0][/* make */1], /* array */[], (function (LoadedComponent) {
                        return ReasonReact.element(undefined, undefined, Curry._1(LoadedComponent[/* make */1], /* array */[]));
                      }))));
        var initial = component.toJSON();
        Jest.test("should render loading component", (function (param) {
                return Jest.Expect[/* toMatchSnapshot */16](Jest.Expect[/* expect */0](initial));
              }));
        return Jest.testPromise("should render failed component", undefined, (function (param) {
                      return DynamicImport.$less$$great(Utils.stdTimer(/* () */0), (function (param) {
                                    return Jest.Expect[/* toMatchSnapshot */16](Jest.Expect[/* expect */0](component.toJSON()));
                                  }));
                    }));
      }));

Jest.describe("ReLoadable.WithChildren pure Loading -> Failed state transition", (function (param) {
        var component = ReactTestRenderer.create(ReasonReact.element(undefined, undefined, Curry._1(Case.Bad[/* WithChildren */1][/* make */1], (function (LoadedComponent) {
                        return ReasonReact.element(undefined, undefined, Curry._1(LoadedComponent[/* make */1], /* array */[]));
                      }))));
        var initial = component.toJSON();
        Jest.test("should render loading component", (function (param) {
                return Jest.Expect[/* toMatchSnapshot */16](Jest.Expect[/* expect */0](initial));
              }));
        return Jest.testPromise("should render failed component", undefined, (function (param) {
                      return DynamicImport.$less$$great(Utils.stdTimer(/* () */0), (function (param) {
                                    return Jest.Expect[/* toMatchSnapshot */16](Jest.Expect[/* expect */0](component.toJSON()));
                                  }));
                    }));
      }));

Jest.describe("ReLoadable.WithRender props", (function (param) {
        var component = ReactTestRenderer.create(ReasonReact.element(undefined, undefined, Curry._2(Case.Props[/* WithRender */0][/* make */1], /* array */[], (function (LoadedComponent) {
                        return ReasonReact.element(undefined, undefined, Curry._2(LoadedComponent[/* make */1], "WithProps", /* array */[]));
                      }))));
        var initial = component.toJSON();
        Jest.test("should render loading component", (function (param) {
                return Jest.Expect[/* toMatchSnapshot */16](Jest.Expect[/* expect */0](initial));
              }));
        return Jest.testPromise("should render loaded component", undefined, (function (param) {
                      return DynamicImport.$less$$great(Utils.stdTimer(/* () */0), (function (param) {
                                    return Jest.Expect[/* toMatchSnapshot */16](Jest.Expect[/* expect */0](component.toJSON()));
                                  }));
                    }));
      }));

Jest.describe("ReLoadable.WithChildren props", (function (param) {
        var component = ReactTestRenderer.create(ReasonReact.element(undefined, undefined, Curry._1(Case.Props[/* WithChildren */1][/* make */1], (function (LoadedComponent) {
                        return ReasonReact.element(undefined, undefined, Curry._2(LoadedComponent[/* make */1], "WithProps", /* array */[]));
                      }))));
        var initial = component.toJSON();
        Jest.test("should render loading component", (function (param) {
                return Jest.Expect[/* toMatchSnapshot */16](Jest.Expect[/* expect */0](initial));
              }));
        return Jest.testPromise("should render loaded component", undefined, (function (param) {
                      return DynamicImport.$less$$great(Utils.stdTimer(/* () */0), (function (param) {
                                    return Jest.Expect[/* toMatchSnapshot */16](Jest.Expect[/* expect */0](component.toJSON()));
                                  }));
                    }));
      }));

Jest.describe("ReLoadable.WithRender children component", (function (param) {
        var component = ReactTestRenderer.create(ReasonReact.element(undefined, undefined, Curry._2(Case.Children[/* WithRender */0][/* make */1], /* array */[], (function (LoadedComponent) {
                        return ReasonReact.element(undefined, undefined, Curry._1(LoadedComponent[/* make */1], /* array */[ReasonReact.element(undefined, undefined, WithProps.make("WithChildren", /* array */[]))]));
                      }))));
        var initial = component.toJSON();
        Jest.test("should render loading component", (function (param) {
                return Jest.Expect[/* toMatchSnapshot */16](Jest.Expect[/* expect */0](initial));
              }));
        return Jest.testPromise("should render loaded component", undefined, (function (param) {
                      return DynamicImport.$less$$great(Utils.stdTimer(/* () */0), (function (param) {
                                    return Jest.Expect[/* toMatchSnapshot */16](Jest.Expect[/* expect */0](component.toJSON()));
                                  }));
                    }));
      }));

Jest.describe("ReLoadable.WithChildren children component", (function (param) {
        var component = ReactTestRenderer.create(ReasonReact.element(undefined, undefined, Curry._1(Case.Children[/* WithChildren */1][/* make */1], (function (LoadedComponent) {
                        return ReasonReact.element(undefined, undefined, Curry._1(LoadedComponent[/* make */1], /* array */[ReasonReact.element(undefined, undefined, WithProps.make("WithChildren", /* array */[]))]));
                      }))));
        var initial = component.toJSON();
        Jest.test("should render loading component", (function (param) {
                return Jest.Expect[/* toMatchSnapshot */16](Jest.Expect[/* expect */0](initial));
              }));
        return Jest.testPromise("should render loaded component", undefined, (function (param) {
                      return DynamicImport.$less$$great(Utils.stdTimer(/* () */0), (function (param) {
                                    return Jest.Expect[/* toMatchSnapshot */16](Jest.Expect[/* expect */0](component.toJSON()));
                                  }));
                    }));
      }));

Jest.describe("ReLoadable.WithRender children function", (function (param) {
        var component = ReactTestRenderer.create(ReasonReact.element(undefined, undefined, Curry._2(Case.ChildrenFunc[/* WithRender */0][/* make */1], /* array */[], (function (LoadedComponent) {
                        return ReasonReact.element(undefined, undefined, Curry._2(LoadedComponent[/* make */1], "WithChildrenFunc", (function (text) {
                                          return ReasonReact.element(undefined, undefined, WithProps.make(text, /* array */[]));
                                        })));
                      }))));
        var initial = component.toJSON();
        Jest.test("should render loading component", (function (param) {
                return Jest.Expect[/* toMatchSnapshot */16](Jest.Expect[/* expect */0](initial));
              }));
        return Jest.testPromise("should render loaded component", undefined, (function (param) {
                      return DynamicImport.$less$$great(Utils.stdTimer(/* () */0), (function (param) {
                                    return Jest.Expect[/* toMatchSnapshot */16](Jest.Expect[/* expect */0](component.toJSON()));
                                  }));
                    }));
      }));

Jest.describe("Reloadable.WithChildren children function", (function (param) {
        var component = ReactTestRenderer.create(ReasonReact.element(undefined, undefined, Curry._1(Case.ChildrenFunc[/* WithChildren */1][/* make */1], (function (LoadedComponent) {
                        return ReasonReact.element(undefined, undefined, Curry._2(LoadedComponent[/* make */1], "WithChildrenFunc", (function (text) {
                                          return ReasonReact.element(undefined, undefined, WithProps.make(text, /* array */[]));
                                        })));
                      }))));
        var initial = component.toJSON();
        Jest.test("should render loading component", (function (param) {
                return Jest.Expect[/* toMatchSnapshot */16](Jest.Expect[/* expect */0](initial));
              }));
        return Jest.testPromise("should render loaded component", undefined, (function (param) {
                      return DynamicImport.$less$$great(Utils.stdTimer(/* () */0), (function (param) {
                                    return Jest.Expect[/* toMatchSnapshot */16](Jest.Expect[/* expect */0](component.toJSON()));
                                  }));
                    }));
      }));

/*  Not a pure module */
