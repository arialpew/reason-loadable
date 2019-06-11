type nothing;

[@bs.module "react"]
external lazy_: (unit => Js.Promise.t(DynamicImport.importable('a))) => 'a = "lazy";

module type Configuration = {module type t;};

module WithRender:
  (Config: Configuration) =>
  {
    type childless = array(nothing);
    type renderProp = (module Config.t) => ReasonReact.reactElement;
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
        ~render: renderProp,
        childless
      ) =>
      ReasonReact.componentSpec(
        state,
        state,
        ReasonReact.noRetainedProps,
        ReasonReact.noRetainedProps,
        state
      );
  };

module WithChildren:
  (Config: Configuration) =>
  {
    type renderChild = (module Config.t) => ReasonReact.reactElement;
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
        renderChild
      ) =>
      ReasonReact.componentSpec(
        state,
        state,
        ReasonReact.noRetainedProps,
        ReasonReact.noRetainedProps,
        state
      );
  };
