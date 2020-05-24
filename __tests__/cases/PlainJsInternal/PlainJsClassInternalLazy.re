module type T = {
  [@react.component]
  let make: (~test: string) => React.element;
};

let unsafePlaceholder: module T = [%raw {|{}|}];

module UnsafePlaceholder = (val unsafePlaceholder);

let makeProps = UnsafePlaceholder.makeProps;

let make =
  ReLoadable.lazy_(() =>
    ReLoadable.import(UnsafePlaceholder.make, "./class-component.js")
  );
