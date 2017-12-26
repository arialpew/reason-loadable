module type AbstractModule = {
  module type firstClassType;

  let doImport: unit => Js.Promise.t({. "importable": (module firstClassType) });
};

module Create = (Module: AbstractModule) => {
  type callback('a) = ((module Module.firstClassType)) => Js.Promise.t('a);

  let resolver = (untypedPayload) => {
     let forcedType: (module Module.firstClassType) = Obj.magic(untypedPayload##importable);
     Js.Promise.resolve(forcedType);
  };

  let import = (): Js.Promise.t((module Module.firstClassType)) =>
    Module.doImport()
    |> Js.Promise.then_(resolver);
};
