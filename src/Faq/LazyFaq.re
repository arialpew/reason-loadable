open Utils.Infix;

module LazyModule = {
  module type firstClassType = (module type of Faq);
  let doImport = () => Utils.import("./ImportableFaq");
};

module Importable = Import.Create(LazyModule);

let make =
  Js.Promise.then_(((module Faq): (module ImportableFaq.FaqIntf)) =>
    Js.Promise.resolve(<Faq />)
  );

let load = Importable.import ||> make;
