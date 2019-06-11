module type T = (module type of Faq);

/*
  Needed for BuckleScript to not import the original component:
  See https://github.com/BuckleScript/bucklescript/issues/3543
*/
[@bs.val] external component: (module T) = "undefined";

/* Module annotation needed to make sure `make` has the same type as
   the original component */
module Lazy: T = {
  /* Includes `makeProps` at the type level without adding `import` of the original component */
  include (val component);
  /* 100% unsafe due to `import` typedef :) but will be unified by the explicit type annotation above */
  let make = ReLazy.lazy_(() => DynamicImport.import("./Faq"));
  /* All bindings in the original component have to be added here (`makeProps`
     is external, so no need). Shallowing them here removes invalid access to
     undefined[1], undefined[n] in the resulting output */
  let default = make;
};
