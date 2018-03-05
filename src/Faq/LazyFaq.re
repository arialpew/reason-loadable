module Component =
  Loadable.Create(
    {
      module type data = ImportableFaq.Interface;
    }
  );

let make = _children =>
  Component.make(
    ~fetch=() => Loadable.import("./ImportableFaq"),
    ~onLoading=() => <Placeholder />,
    ~onFail=err => <Badaboom err />,
    ~render=
      ((module Component)) => <Component />,
    [||]
  );
