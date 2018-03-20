let timer = (delay, xs) =>
  Js.Promise.make((~resolve, ~reject as _) => {
    Js.Global.setTimeout(() => [@bs] resolve(xs), delay) |> ignore;
    ();
  });

let __STD_DELAY__ = 200;

let __HEAVY_DELAY__ = 2500;

let __TIMEOUT_DELAY__ = 4500;

let __STD_ONLOADING__ = () =>
  <p> (ReasonReact.stringToElement("Loading ...")) </p>;

let __STD_ONFAIL__ = err => <p> (ReasonReact.stringToElement(err)) </p>;

let __CHILDLESS__ = [||];

let stdTimer = () => timer(__STD_DELAY__, ());

let heavyTimer = () => timer(__HEAVY_DELAY__, ());

let timeoutTimer = () => timer(__TIMEOUT_DELAY__, ());
