module LazyModule = {
  module type firstClassType = (module type of Faq);

  let doImport = () => Utils.import("./ImportableFaq");
};

module Importable = Import.Create(LazyModule);
