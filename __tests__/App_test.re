open Jest;

open Expect;

describe("test", () =>
  test("test", () =>
    1 + 1 |> expect |> toMatchSnapshot
  )
);
