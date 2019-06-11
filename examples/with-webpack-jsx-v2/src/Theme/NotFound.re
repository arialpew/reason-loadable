let component = ReasonReact.statelessComponent("NotFound");

let make = _children => {
  ...component,
  render: _self => <h1> (ReasonReact.string("Not Found !")) </h1>
};
