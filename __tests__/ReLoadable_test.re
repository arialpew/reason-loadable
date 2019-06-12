open Jest;

open Expect;

open DynamicImport;

open Utils;

describe("ReLoadable.WithRender pure Loading -> Loaded state transition", () => {
  let component =
    ReactTestRenderer.create(
      <Case.Pure.WithRender
        render={((module LoadedComponent)) => <LoadedComponent />}
      />,
    );
  let initial = ReactTestRenderer.toJSON(component);
  test("should render loading component", () =>
    initial |> expect |> toMatchSnapshot
  );
  testPromise("should render loaded component", () =>
    stdTimer()
    <$> (_ => expect(ReactTestRenderer.toJSON(component)) |> toMatchSnapshot)
  );
});

describe("ReLoadable.WithChildren pure Loading -> Loaded state transition", () => {
  let component =
    ReactTestRenderer.create(
      <Case.Pure.WithChildren>
        ...{((module LoadedComponent)) => <LoadedComponent />}
      </Case.Pure.WithChildren>,
    );
  let initial = ReactTestRenderer.toJSON(component);
  test("should render loading component", () =>
    initial |> expect |> toMatchSnapshot
  );
  testPromise("should render loaded component", () =>
    stdTimer()
    <$> (_ => expect(ReactTestRenderer.toJSON(component)) |> toMatchSnapshot)
  );
});

describe("ReLoadable.WithRender pure Loading -> Failed state transition", () => {
  let component =
    ReactTestRenderer.create(
      <Case.Bad.WithRender
        render={((module LoadedComponent)) => <LoadedComponent />}
      />,
    );
  let initial = ReactTestRenderer.toJSON(component);
  test("should render loading component", () =>
    initial |> expect |> toMatchSnapshot
  );
  testPromise("should render failed component", () =>
    stdTimer()
    <$> (_ => expect(ReactTestRenderer.toJSON(component)) |> toMatchSnapshot)
  );
});

describe("ReLoadable.WithChildren pure Loading -> Failed state transition", () => {
  let component =
    ReactTestRenderer.create(
      <Case.Bad.WithChildren>
        ...{((module LoadedComponent)) => <LoadedComponent />}
      </Case.Bad.WithChildren>,
    );
  let initial = ReactTestRenderer.toJSON(component);
  test("should render loading component", () =>
    initial |> expect |> toMatchSnapshot
  );
  testPromise("should render failed component", () =>
    stdTimer()
    <$> (_ => expect(ReactTestRenderer.toJSON(component)) |> toMatchSnapshot)
  );
});

describe("ReLoadable.WithRender props", () => {
  let component =
    ReactTestRenderer.create(
      <Case.Props.WithRender
        render={
          ((module LoadedComponent)) => <LoadedComponent text="WithProps" />
        }
      />,
    );
  let initial = ReactTestRenderer.toJSON(component);
  test("should render loading component", () =>
    initial |> expect |> toMatchSnapshot
  );
  testPromise("should render loaded component", () =>
    stdTimer()
    <$> (_ => expect(ReactTestRenderer.toJSON(component)) |> toMatchSnapshot)
  );
});

describe("ReLoadable.WithChildren props", () => {
  let component =
    ReactTestRenderer.create(
      <Case.Props.WithChildren>
        ...{
             ((module LoadedComponent)) => <LoadedComponent text="WithProps" />
           }
      </Case.Props.WithChildren>,
    );
  let initial = ReactTestRenderer.toJSON(component);
  test("should render loading component", () =>
    initial |> expect |> toMatchSnapshot
  );
  testPromise("should render loaded component", () =>
    stdTimer()
    <$> (_ => expect(ReactTestRenderer.toJSON(component)) |> toMatchSnapshot)
  );
});

describe("ReLoadable.WithRender children component", () => {
  let component =
    ReactTestRenderer.create(
      <Case.Children.WithRender
        render={
          ((module LoadedComponent)) =>
            <LoadedComponent>
              <WithProps text="WithChildren" />
            </LoadedComponent>
        }
      />,
    );
  let initial = ReactTestRenderer.toJSON(component);
  test("should render loading component", () =>
    initial |> expect |> toMatchSnapshot
  );
  testPromise("should render loaded component", () =>
    stdTimer()
    <$> (_ => expect(ReactTestRenderer.toJSON(component)) |> toMatchSnapshot)
  );
});

describe("ReLoadable.WithChildren children component", () => {
  let component =
    ReactTestRenderer.create(
      <Case.Children.WithChildren>
        ...{
             ((module LoadedComponent)) =>
               <LoadedComponent>
                 <WithProps text="WithChildren" />
               </LoadedComponent>
           }
      </Case.Children.WithChildren>,
    );
  let initial = ReactTestRenderer.toJSON(component);
  test("should render loading component", () =>
    initial |> expect |> toMatchSnapshot
  );
  testPromise("should render loaded component", () =>
    stdTimer()
    <$> (_ => expect(ReactTestRenderer.toJSON(component)) |> toMatchSnapshot)
  );
});

describe("ReLoadable.WithRender children function", () => {
  let component =
    ReactTestRenderer.create(
      <Case.ChildrenFunc.WithRender
        render={
          ((module LoadedComponent)) =>
            <LoadedComponent text="WithChildrenFunc">
              ...{text => <WithProps text />}
            </LoadedComponent>
        }
      />,
    );
  let initial = ReactTestRenderer.toJSON(component);
  test("should render loading component", () =>
    initial |> expect |> toMatchSnapshot
  );
  testPromise("should render loaded component", () =>
    stdTimer()
    <$> (_ => expect(ReactTestRenderer.toJSON(component)) |> toMatchSnapshot)
  );
});

describe("Reloadable.WithChildren children function", () => {
  let component =
    ReactTestRenderer.create(
      <Case.ChildrenFunc.WithChildren>
        ...{
             ((module LoadedComponent)) =>
               <LoadedComponent text="WithChildrenFunc">
                 ...{text => <WithProps text />}
               </LoadedComponent>
           }
      </Case.ChildrenFunc.WithChildren>,
    );
  let initial = ReactTestRenderer.toJSON(component);
  test("should render loading component", () =>
    initial |> expect |> toMatchSnapshot
  );
  testPromise("should render loaded component", () =>
    stdTimer()
    <$> (_ => expect(ReactTestRenderer.toJSON(component)) |> toMatchSnapshot)
  );
});
