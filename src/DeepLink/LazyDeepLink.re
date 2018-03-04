open Utils.Infix;

module LazyModule = {
  module type firstClassType = (module type of DeepLink);
  let doImport = () => Utils.import("./ImportableDeepLink");
};

module Importable = Import.Create(LazyModule);

let make =
  Js.Promise.then_(
    ((module DeepLink): (module ImportableDeepLink.DeepLinkIntf)) =>
    Js.Promise.resolve(<DeepLink />)
  );

let load = Importable.import ||> make;
