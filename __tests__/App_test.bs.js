

import * as Jest from "bs-jest/src/jest.js";
import * as ReasonReact from "reason-react/src/ReasonReact.js";
import * as ReactShallowRenderer from "bs-react-test-renderer/src/ReactShallowRenderer.bs.js";
import * as App$ReasonmlCodeSplit from "../src/App.bs.js";

describe("App", (function () {
        return Jest.test("render", (function () {
                      return Jest.Expect[/* toMatchSnapshot */16](Jest.Expect[/* expect */0](ReactShallowRenderer.renderWithRenderer(ReasonReact.element(/* None */0, /* None */0, App$ReasonmlCodeSplit.make(/* array */[])))));
                    }));
      }));

export {
  
}
/*  Not a pure module */
