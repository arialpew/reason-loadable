module type T = {
  [@react.component]
  let make: unit => React.element;
};

/*
   Needed for BuckleScript to not import the original component :
   See https://github.com/BuckleScript/bucklescript/issues/3543
 */
let unsafePlaceholder: module T = [%raw {|{}|}];

module UnsafePlaceholder = (val unsafePlaceholder);

/* Because makeProps is defined as external, it doesn't lead to `require`
      statements as BuckleScript is able to inline it in the generated code.
      Note this won't work for other exported functions or values though !
   */
let makeProps = UnsafePlaceholder.makeProps;

let make =
  ReLoadable.lazy_(() =>
    ReLoadable.import(UnsafePlaceholder.make, "@komponente/react-hello-world")
  );
