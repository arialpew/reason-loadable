module Create:
  (Config: {module type t;}) =>
  {
    type state =
      | Loading
      | Failed(string)
      | Loaded((module Config.t));
    let component:
      ReasonReact.componentSpec(
        state,
        ReasonReact.stateless,
        ReasonReact.noRetainedProps,
        ReasonReact.noRetainedProps,
        state
      );
    let make:
      (
        ~fetch: unit =>
                Js.Promise.t(DynamicImport.importable((module Config.t))),
        ~onFail: string => ReasonReact.reactElement=?,
        ~onLoading: unit => ReasonReact.reactElement=?,
        ~delay: int=?,
        ~render: (module Config.t) => ReasonReact.reactElement,
        'a
      ) =>
      ReasonReact.componentSpec(
        state,
        state,
        ReasonReact.noRetainedProps,
        ReasonReact.noRetainedProps,
        state
      );
  };
