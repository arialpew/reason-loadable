let component = ReasonReact.statelessComponent("NotFound");

let make = _children => {
  ...component,
  render: _self => <h1> <String label="Not found !" /> </h1>
};
