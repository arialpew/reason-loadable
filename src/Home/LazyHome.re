module LazyModule = {
  module type firstClassType = (module type of Home);

  let doImport = () => Utils.import("./ImportableHome");
};

module Importable = Import.Create(LazyModule);
