module LazyModule = {
  module type firstClassType = (module type of Home);
  let doImport = () => Utils.import("./ImportableHome");
};

module Importable = Import.Create(LazyModule);

let make =
  Js.Promise.then_(((module Home): (module ImportableHome.HomeIntf)) =>
    Js.Promise.resolve(<Home />)
  );

let load = () => Importable.import() |> make;
