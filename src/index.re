Utils.requireCSS("./index.css");

module App = Shell.MakeBrowserApplication({
  type context = {
    redirect: (History.path, ReactEventRe.Mouse.t) => unit,
    history: History.t,
  };

  let make = ({ redirect }) => [|
    {
      "path": "/faq",
      "action": () => {
        LazyFaq.Importable.import()
          |> Js.Promise.then_(((module Faq: ImportableFaq.FaqIntf)) => Js.Promise.resolve(<Faq redirect />));
      }
    },
    {
      "path": "(.*)",
      "action": () => {
        LazyHome.Importable.import()
          |> Js.Promise.then_(((module Home: ImportableHome.HomeIntf)) => Js.Promise.resolve(<Home redirect />));
      }
    }
  |];
});

let _ = App.bootstrap("root");
