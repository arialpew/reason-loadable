let component = ReasonReact.statelessComponent("Link");

let make = (~href, ~label, _children) => {
  ...component,
  render: _self => <a onClick=(Router.redirect(href))> <String label /> </a>
};
