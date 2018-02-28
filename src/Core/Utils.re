/* Require CSS file (side effect). */
[@bs.val] external requireCSS: string => unit = "require";

/* Require an asset (eg. an image) and return exported string value (base64). */
[@bs.val] external requireAssetURI: string => string = "require";

/* Require a module at runtime (code-splitting import). */
[@bs.val] external import: string => Js.Promise.t('a) = "";

module Fn = {
  let flip = (f, a, b) => f(b, a);

  let vtap = (f, x) => {
    f(x);
    ();
  };

  let tap = (f, x) => {
    f(x);
    x;
  };

  let compose = (f, g, x) => f(g(x));

  let pipe = (f, g, x) => g(f(x));
};

module Infix = {
  let (<||) = Fn.compose;

  let (||>) = Fn.pipe;

  let (>>=) = (x, f) =>
    switch x {
      | None => None
      | Some(x) => f(x)
    };
};
