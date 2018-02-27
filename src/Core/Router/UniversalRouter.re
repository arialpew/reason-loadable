type t;

type handler = Js.t({.
  action: (unit) => Js.Promise.t(ReasonReact.reactElement),
  path: string,
});

type handlers = array(handler);

type resolver = Js.t({.
  pathname: string,
});

[@bs.module] [@bs.new]
external makeRouter: handlers => t = "universal-router/index";

[@bs.send.pipe: 't]
external resolve: (resolver) => Js.Promise.t(ReasonReact.reactElement) = "resolve";
