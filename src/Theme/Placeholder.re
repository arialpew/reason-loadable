let component = ReasonReact.statelessComponent("Placeholder");

let make = _children => {
  ...component,
  render: _self => <h1> (Utils.Fn.ste("Loading ...")) </h1>
};
