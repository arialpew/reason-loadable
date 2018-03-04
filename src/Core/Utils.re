[@bs.val] external require : string => unit = "require";

[@bs.val] external import : string => Js.Promise.t('a) = "";

module Fn = {
  /** Flip function argument. */
  let flip = (f, a, b) => f(b, a);
  /** Apply function on value and return unit. */
  let vtap = (f, x) => {
    f(x);
    ();
  };
  /** Apply function on value and return value. */
  let tap = (f, x) => {
    f(x);
    x;
  };
  /** Compose. */
  let compose = (f, g, x) => f(g(x));
  /** Pipe. */
  let pipe = (f, g, x) => g(f(x));
  /** Identity. */
  let id = x => x;
  /** String of int. */
  let stringOfInt = string_of_int;
  /** Int of string. */
  let intOfString = int_of_string;
};

module Infix = {
  /** Compose. */
  let (<||) = Fn.compose;
  /** Pipe. */
  let (||>) = Fn.pipe;
  /** Option chain. */
  let (>>=) = (x, f) =>
    switch x {
    | None => None
    | Some(x) => f(x)
    };
};
