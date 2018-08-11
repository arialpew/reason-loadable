let component = ReasonReact.statelessComponent("WithPure");

let make = _children => {
  ...component,
  render: _self => <p> (ReasonReact.string("Hello world")) </p>,
};
