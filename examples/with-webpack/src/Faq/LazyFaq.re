module Component =
  ReLoadable.Create(
    {
      module type t = ImportableFaq.t;
    }
  );

let make = _children =>
  Component.make(
    ~fetch=() => DynamicImport.import("./ImportableFaq"),
    ~render=((module LoadedComponent)) => <LoadedComponent />,
    [||]
  );
