open Utils.Infix;

module type Application = {
  type context = {
    redirect: (History.path, ReactEventRe.Mouse.t) => unit,
    history: History.t,
  };

  let make: context => UniversalRouter.handlers;
};

module MakeBrowserApplication = (App: Application) => {
  let bootstrap = node => {
    /* Create browser history context. */
    let history = History.createBrowserHistory();

    /* Redirect context. */
    let redirect = (pathname, event) => {
      ReactEventRe.Mouse.preventDefault(event);

      Js.log("Redirect to ---> " ++ pathname);
      History.push(pathname, history) |> ignore;
    };

    /* Resolver, need a router and route path name then resolve route and render compiled JSX. */
    let resolver = (router, pathname) => {
      Js.log("Rendering route ---> " ++ pathname);

      router
        |> UniversalRouter.resolve({ "pathname": pathname })
        |> Js.Promise.then_(html => {
          ReactDOMRe.renderToElementWithId(html, node);
          Js.Promise.resolve();
        }) |> ignore;

      history;
    };

    /* Render function :
        - Take history location path object.
        - Get route path name.
        - Resolve, render route with application context and return history.
    */
    let render = App.make({ redirect, history }) 
                  |> UniversalRouter.makeRouter
                  |> resolver <|| History.getPath;

    /* First render. */
    /* Subscribe to route change and return subscription. */
    history
      |> History.getLocation
      |> render
      |> History.listen(render);
  };
};
