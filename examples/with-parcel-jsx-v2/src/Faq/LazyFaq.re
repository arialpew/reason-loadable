module Config = {
  module type t = (module type of Faq);
};

module Loadable = ReLoadable.WithRender(Config);

let make = _children =>
  Loadable.make(
    ~fetch=() => DynamicImport.import("./Faq.bs.js"),
    ~render=((module LoadedComponent)) => <LoadedComponent />,
    [||],
  );
