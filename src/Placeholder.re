let component = ReasonReact.statelessComponent("Placeholder");

let make = _children => {
  ...component,
  render: _self => <h1> <String label="Loading ..." /> </h1>
};
