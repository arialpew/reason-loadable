[@bs.val] external import : string => Js.Promise.t('a) = "";

module Create = (Config: {module type data;}) => {
  type state =
    | Loading
    | Failed(Js.Promise.error)
    | Loaded((module Config.data));
  let component = ReasonReact.reducerComponent("Loadable");
  let make = (~fetch, ~onFail, ~onLoading, ~render, _children) => {
    ...component,
    initialState: () => Loading,
    reducer: (action, _state) =>
      switch action {
      | Loading =>
        ReasonReact.UpdateWithSideEffects(
          Loading,
          (_self => Js.log("[LOADING]"))
        )
      | Failed(err) =>
        ReasonReact.UpdateWithSideEffects(
          Failed(err),
          (_self => Js.log("[FAILED]"))
        )
      | Loaded(x) =>
        ReasonReact.UpdateWithSideEffects(
          Loaded(x),
          (_self => Js.log("[LOADED]"))
        )
      },
    didMount: self => {
      self.send(Loading);
      fetch()
      |> Js.Promise.then_(data => {
           Js.Global.setTimeout(
             () => self.send(Loaded(data##importable)),
             2000
           )
           |> ignore;
           Js.Promise.resolve();
         })
      |> Js.Promise.catch(error => {
           self.send(Failed(error));
           Js.Promise.resolve();
         })
      |> ignore;
      ReasonReact.NoUpdate;
    },
    render: ({state}) =>
      switch state {
      | Loading => onLoading()
      | Failed(_) => onFail("Failed")
      | Loaded(data) => render(data)
      }
  };
};
