module type Application = {
  type context = {
    redirect: (History.path, ReactEventRe.Mouse.t) => unit,
    history: History.t,
  };

  let make: context => UniversalRouter.handlers;
};

module MakeBrowserApplication: (App: Application) => {
  let bootstrap: string => History.subscription;
};
