let component = ReasonReact.statelessComponent("Text");

let make = (~label, _children) => {
  ...component,
  render: _self => ReasonReact.stringToElement(label)
};
