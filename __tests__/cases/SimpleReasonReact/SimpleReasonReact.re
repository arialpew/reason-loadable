let variable = "Hello world";

[@react.component]
let make = (~test) =>
  <div> <h1> {React.string("Hello World : " ++ test)} </h1> </div>;

/* Export default. */
let default = make;
