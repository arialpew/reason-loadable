open Jest;

open Expect;

describe("App", () =>
  test("render", () =>
    <App />
    |> ReactShallowRenderer.renderWithRenderer
    |> expect
    |> toMatchSnapshot
  )
);
