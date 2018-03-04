'use strict';

var ReasonReact = require("reason-react/src/ReasonReact.js");
var ReasonReactContext = require("reason-react-context/src/reasonReactContext.bs.js");

function redirect(path, $$event) {
  $$event.preventDefault();
  return ReasonReact.Router[/* push */0](path);
}

function initialState() {
  return ReasonReact.Router[/* dangerouslyGetInitialUrl */3](/* () */0);
}

var defaultValue = ReasonReact.Router[/* dangerouslyGetInitialUrl */3](/* () */0);

var Context = ReasonReactContext.CreateContext(/* module */[
      /* name */"Router",
      /* defaultValue */defaultValue
    ]);

var push = ReasonReact.Router[0];

var watchUrl = ReasonReact.Router[1];

var unwatchUrl = ReasonReact.Router[2];

var dangerouslyGetInitialUrl = ReasonReact.Router[3];

exports.push = push;
exports.watchUrl = watchUrl;
exports.unwatchUrl = unwatchUrl;
exports.dangerouslyGetInitialUrl = dangerouslyGetInitialUrl;
exports.redirect = redirect;
exports.initialState = initialState;
exports.Context = Context;
/* Context Not a pure module */
