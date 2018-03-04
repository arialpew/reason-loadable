let component = ReasonReact.statelessComponent("Faq");

let make = _children => {
  ...component,
  render: _self => <h1> <String label="FAQ" /> </h1>
};
