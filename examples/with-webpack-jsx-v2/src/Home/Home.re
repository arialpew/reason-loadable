let component = ReasonReact.statelessComponent("Home");

let make = _children => {
  ...component,
  render: _self => <h1> {ReasonReact.string("Home")} </h1>,
};
