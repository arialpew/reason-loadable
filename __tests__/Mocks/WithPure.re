let component = ReasonReact.statelessComponent("WithPure");

let make = _children => {
  ...component,
  render: _self => <p> (ReasonReact.stringToElement("Hello world")) </p>
};
