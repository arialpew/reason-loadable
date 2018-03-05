module Component =
  Loadable.Create(
    {
      module type data = ImportableDeep.Interface;
    }
  );

let make = (~page, ~isDeepPage, _children) =>
  Component.make(
    ~fetch=() => Loadable.import("./ImportableDeep"),
    ~onLoading=() => <Placeholder />,
    ~onFail=err => <Badaboom err />,
    ~render=((module Component)) => <Component page isDeepPage />,
    [||]
  );
