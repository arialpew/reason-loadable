type t;

[@bs.module] [@bs.new]
external makeRouter: array(Js.t({. action : (unit) => Js.Promise.t(ReasonReact.reactElement),
                                   path : string })) => t = "universal-router/main";

[@bs.send.pipe: 't]
external resolve: (Js.t({..})) => Js.Promise.t(ReasonReact.reactElement) = "resolve";
