let component = ReasonReact.statelessComponent("Home");

let make = (_children) => {
  ...component,
  render: (_self) => {
    <div>
      <a onClick=Shell.redirect("/")> (ReasonReact.stringToElement("Home")) </a>
      <a onClick=Shell.redirect("/faq")> (ReasonReact.stringToElement("FAQ")) </a>
      <h1> (ReasonReact.stringToElement("Home")) </h1>
    </div>;
  }
};
