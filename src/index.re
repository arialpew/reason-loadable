Utils.requireCSS("./index.css");

let story = History.createBrowserHistory();

Shell.bootstrap(story)
     |> Shell.render(story##location);
