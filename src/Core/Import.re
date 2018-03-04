open Utils.Infix;

module type Lazy = {
  /** Equal to (module type of X). */
  module type firstClassType;
  /** Pass untyped payload. */
  let doImport:
    unit => Js.Promise.t({. "importable": (module firstClassType)});
};

module Create = (Module: Lazy) => {
  /** Module type.  */
  type t = (module Module.firstClassType);

  /** Resolve untyped payload and enforce type resolution.  */
  let resolver = untypedPayload => {
    let forcedType: t = Obj.magic(untypedPayload##importable);
    Js.Promise.resolve(forcedType);
  };

  /** Do import and resolve. */
  let import = Module.doImport ||> Js.Promise.then_(resolver);
};
