let component = ReasonReact.statelessComponent("String");

let make = (~label, _children) => {
  ...component,
  render: _self => ReasonReact.stringToElement(label)
};
