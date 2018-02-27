type action = POP | PUSH;

type path = string;

type state = Js.t({.

});

type location = Js.t({.
  hash: path,
  pathname: path,
  search: path,
  state: option(state),
});


type subscription = unit => unit;

type t = Js.t({.
  push: (string) => unit,
  listen:  (string) => Js.Promise.t(unit),
  length: int,
  location,
  action,
  /* 
    TODO :
    - reateHref:
    - replace,
    - go,
    - goBack,
    - goForward,
    - block,
  */
});

type listener = (location) => t;

[@bs.module "history/createBrowserHistory"]
external createBrowserHistory: unit => t = "default";

[@bs.send.pipe: t]
external push: (path) => t = "push";

[@bs.send.pipe: t]
external listen: (listener) => subscription = "listen";

[@bs.get]
external getLocation: (t) => location = "location";

[@bs.get]
external getPath: (location) => path = "pathname";
