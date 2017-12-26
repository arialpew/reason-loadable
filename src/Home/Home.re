let component = ReasonReact.statelessComponent("Home");

let make = (~redirect, _children) => {
  ...component,
  render: (_self) => {
    <div>
      <a onClick=redirect("/")> (ReasonReact.stringToElement("Home")) </a>
      <a onClick=redirect("/faq")> (ReasonReact.stringToElement("FAQ")) </a>
      <h1> (ReasonReact.stringToElement("Home")) </h1>
    </div>;
  }
};
