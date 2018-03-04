module type Config = {
  /** Application routes. */
  type routes;
  /** Delay between view component resolution (0 for instant). */
  let delay: int;
  /** Match route through path. */
  let matcher: Router.path => routes;
  /** Resolve view component through route. */
  let resolver: routes => Js.Promise.t(ReasonReact.reactElement);
};

module Create = (X: Config) => {
  /** Application core action. */
  type action =
    | Request((X.routes, ReasonReact.Router.url))
    | Load
    | Loaded((ReasonReact.Router.url, ReasonReact.reactElement));
  /** Application base state. */
  type state = {
    route: ReasonReact.Router.url,
    view: ReasonReact.reactElement,
    isLoading: bool
  };
  /** Component name. */
  let component = ReasonReact.reducerComponent("App");
  /** Component creation. */
  let make = children => {
    ...component,
    initialState: () => {
      route: Router.initialState(),
      view: ReasonReact.nullElement,
      isLoading: false
    },
    reducer: (action, state) =>
      switch action {
      | Request((route, url)) =>
        ReasonReact.SideEffects(
          (
            self => {
              Js.log2("[REQUEST]", self.state.isLoading);
              (
                self.state.isLoading ?
                  Js.Promise.resolve() :
                  {
                    self.send(Load);
                    route
                    |> X.resolver
                    |> Js.Promise.then_(component => {
                         Js.Global.setTimeout(
                           () => self.send(Loaded((url, component))),
                           X.delay
                         )
                         |> ignore;
                         Js.Promise.resolve();
                       });
                  }
              )
              |> ignore;
              ();
            }
          )
        )
      | Load =>
        ReasonReact.UpdateWithSideEffects(
          {...state, isLoading: true},
          (self => Js.log2("[LOAD]", self.state.isLoading))
        )
      | Loaded((route, view)) =>
        ReasonReact.UpdateWithSideEffects(
          {isLoading: false, route, view},
          (self => Js.log2("[LOADED]", self.state.isLoading))
        )
      },
    subscriptions: self => [
      Sub(
        () => {
          let handler =
            Utils.Fn.vtap((url: Router.url) =>
              self.send(Request((X.matcher(url.path), url)))
            );
          handler(self.state.route);
          Router.watchUrl(handler);
        },
        Router.unwatchUrl
      )
    ],
    render: ({state}) =>
      <Router.Context.Provider value=state.route>
        (children(~isLoading=state.isLoading, ~view=state.view))
      </Router.Context.Provider>
  };
};
