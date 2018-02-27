module type Lazy = {
  module type firstClassType;

  let doImport: unit => Js.Promise.t({. "importable": (module firstClassType) });
};

module Create = (Module: Lazy) => {
  let resolver = (untypedPayload) => {
     let forcedType: (module Module.firstClassType) = Obj.magic(untypedPayload##importable);
     Js.Promise.resolve(forcedType);
  };

  let import = () => Module.doImport() |> Js.Promise.then_(resolver);
};
