let component = ReasonReact.statelessComponent("NotFound");

let make = _children => {
  ...component,
  render: _self => <h1> <Text label="Not found !" /> </h1>
};
