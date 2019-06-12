module Config = {
  /* Declare routes. */
  type route =
    | NotFound
    | Home
    | Faq;
  /* URL -> Route. */
  let routeFromUrl = (url: ReasonReactRouter.url) =>
    switch (url.path) {
    | ["faq"] => Faq
    | [] => Home
    | _ => NotFound
    };
  /* Route -> URL. */
  let routeToUrl = (route: route) =>
    switch (route) {
    | Faq => "/faq"
    | Home => "/"
    | NotFound => ""
    };
};

include ReRoute.CreateRouter(Config);
