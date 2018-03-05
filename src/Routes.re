module Config = {
  /** Declare routes. */
  type route =
    | NotFound
    | Home
    | Faq(option(int));
  /** URL -> Route. */
  let routeFromUrl = (url: ReasonReact.Router.url) =>
    switch url.path {
    | ["faq", "deep", page] => Faq(Some(Utils.Fn.intOfString(page)))
    | ["faq"] => Faq(None)
    | [] => Home
    | _ => NotFound
    };
  /** Route -> URL. */
  let routeToUrl = (route: route) =>
    switch route {
    | Faq(Some(page)) => "/faq/deep/" ++ Utils.Fn.stringOfInt(page)
    | Faq(None) => "/faq"
    | Home => "/"
    | NotFound => ""
    };
};

include ReRoute.CreateRouter(Config);
