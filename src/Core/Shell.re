open Utils.Fn;
open Utils.Infix;

let parseUrl = (url: ReasonReact.Router.url) => List.fold_left((prev, next) => prev ++ "/" ++ next, "", url.path);

let redirect = (path, event) => {
  ReactEventRe.Mouse.preventDefault(event);
  ReasonReact.Router.push(path);
};

module type Configuration = {
  let make: ReasonReact.Router.url => Js.Promise.t(ReasonReact.reactElement);
};

module type BrowserApplication = (App: Configuration) => {
  let bootstrap: string => ReasonReact.Router.watcherID;
};

module MakeBrowserApplication: BrowserApplication = (App: Configuration) => {
  let bootstrap = node => {
    let render = Js.Promise.then_(html => {
      ReactDOMRe.renderToElementWithId(html, node);
      Js.Promise.resolve();
    });

    let handler = vtap(App.make ||> render);
    let watcher = ReasonReact.Router.watchUrl(handler);

    ReasonReact.Router.(
      dangerouslyGetInitialUrl()
        |> parseUrl
        |> push
    );

    watcher;
  };
};
