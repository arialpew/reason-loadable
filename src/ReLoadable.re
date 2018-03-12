open DynamicImport;

module Create = (Config: {module type t;}) => {
  /** State shape is 3 variant who represent each case :
    *
    * Loading : component is loading and should be resolved later.
    * Failed(string) : component can't be loaded and failed for some reason.
    * Loaded(module) : component has loaded successfully.
  **/
  type state =
    | Loading
    | Failed(string)
    | Loaded((module Config.t));
  /* Create a reducer component with state. */
  let component = ReasonReact.reducerComponent("Loadable");
  /** Our component accept different parameters :
    *
    * fetch :
    * onFail :
    * onLoading :
    * delay :
    * render :
    *
    * As you can see, some of them have default value.
  **/
  let make =
      (
        ~fetch,
        ~onFail=_error => ReasonReact.nullElement,
        ~onLoading=() => ReasonReact.nullElement,
        ~delay=200,
        ~render,
        _children
      ) => {
    ...component,
    initialState: () => Loading,
    reducer: (action, _state) =>
      switch action {
      | Loading => ReasonReact.Update(Loading)
      | Failed(err) => ReasonReact.Update(Failed(err))
      | Loaded(component) => ReasonReact.Update(Loaded(component))
      },
    subscriptions: self => [
      Sub(
        () =>
          Js.Global.setTimeout(
            () =>
              /* Call fetch who return a Promise of importable module. */
              fetch()
              /* Load module. */
              |> load
              /* Don't refine module now, just resolve new state, user should refine module himself on render. */
              >>= (data => self.send(Loaded(data)))
              /* Forward error if some trouble happen. */
              >>=! (err => self.send(Failed(Js.String.make(err))))
              |> ignore,
            delay
          ),
        Js.Global.clearTimeout
      )
    ],
    render: ({state}) =>
      switch state {
      | Loading => onLoading()
      | Failed(err) => onFail(err)
      | Loaded(component) => render(component)
      }
  };
};
