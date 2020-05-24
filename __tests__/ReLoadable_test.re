open Jest;
open Expect;
open ReactTestingLibrary;

testPromise("PlainJsExternal", () =>
  <React.Suspense fallback={<div> "Loading..."->React.string </div>}>
    <PlainJsExternalLazy />
  </React.Suspense>
  |> render
  |> findByText(~matcher=`Str("Hello World"))
  |> Js.Promise.then_(result =>
       result |> expect |> toMatchSnapshot |> Js.Promise.resolve
     )
);

testPromise("PlainJsInternal", () =>
  <React.Suspense fallback={<div> "Loading..."->React.string </div>}>
    <PlainJsInternalLazy test="test" />
  </React.Suspense>
  |> render
  |> findByText(~matcher=`Str("Hello World : test"))
  |> Js.Promise.then_(result =>
       result |> expect |> toMatchSnapshot |> Js.Promise.resolve
     )
);

testPromise("SimpleReasonReact", () =>
  <React.Suspense fallback={<div> "Loading..."->React.string </div>}>
    <SimpleReasonReactLazy test="test" />
  </React.Suspense>
  |> render
  |> findByText(~matcher=`Str("Hello World : test"))
  |> Js.Promise.then_(result =>
       result |> expect |> toMatchSnapshot |> Js.Promise.resolve
     )
);
