let component = ReasonReact.statelessComponent("NotFound");

let make = _children => {
  ...component,
  render: _self => <h1> (ReasonReact.stringToElement("Not Found !")) </h1>
};
