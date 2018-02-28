Utils.requireCSS("./index.css");

module App = Shell.MakeBrowserApplication({
  let home = () =>
    LazyHome.Importable.import()
      |> Js.Promise.then_(((module Home: ImportableHome.HomeIntf)) => Js.Promise.resolve(<Home />));

  let faq = () =>
    LazyFaq.Importable.import()
      |> Js.Promise.then_(((module Faq: ImportableFaq.FaqIntf)) => Js.Promise.resolve(<Faq />));

  let make = (url: ReasonReact.Router.url) => {
    switch (url.path) {
        | ["test", "deep"]
        | ["faq"]         => faq()
        | []
        | _               => home()
    }
  };
});

let _ = App.bootstrap("root");
