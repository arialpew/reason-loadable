let component = ReasonReact.statelessComponent("Faq");

let make = _children => {
  ...component,
  render: _self => <h1> <Text label="FAQ" /> </h1>
};
