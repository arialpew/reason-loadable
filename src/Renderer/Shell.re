let handlers = (redirect) => [|
  {
    "path": "/faq",
    "action": () => {
      let handleFaqCallback: CodeSplitting.ImportableFaq.callback(ReasonReact.reactElement) =
        ((module Faq)) => {
          Js.log("Faq module imported & resolved");
          Js.Promise.resolve(<Faq redirect />);
        };

      CodeSplitting.ImportableFaq.import()
        |> Js.Promise.then_(handleFaqCallback);
    }
  },
  {
    "path": "(.*)",
    "action": () => {
      let handleHomeCallback: CodeSplitting.ImportableHome.callback(ReasonReact.reactElement) =
        ((module Home)) => {
          Js.log("Home module imported & resolved");
          Js.Promise.resolve(<Home redirect />);
        };

      CodeSplitting.ImportableHome.import()
        |> Js.Promise.then_(handleHomeCallback);
    }
  }
|];

let render = (location, router) => {
  router
    |> UniversalRouter.resolve({ "pathname": location##pathname })
    |> Js.Promise.then_((html: ReasonReact.reactElement) => {
      Js.log("Rendering route : " ++ location##pathname);
      ReactDOMRe.renderToElementWithId(html, "root");
      Js.Promise.resolve();
    });
};

let bootstrap = (story) => {
  let dispatcher = (target, event) => {
    Js.log("Redirect to " ++ target);
    ReactEventRe.Mouse.preventDefault(event);
    story##push(target);
  };

  let router = UniversalRouter.makeRouter(handlers(dispatcher));

  story##listen((location) => render(location, router));

  router;
};
