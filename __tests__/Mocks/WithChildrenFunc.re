let component = ReasonReact.statelessComponent("WithChildrenFunc");

let make = (~text, children) => {
  ...component,
  render: _self => children(text),
};
