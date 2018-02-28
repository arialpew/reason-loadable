let component = ReasonReact.statelessComponent("Faq");

let make = (_children) => {
  ...component,
  render: (_self) => {
    <div>
      <a onClick=Shell.redirect("/")> (ReasonReact.stringToElement("Home")) </a>
      <a onClick=Shell.redirect("/faq")> (ReasonReact.stringToElement("FAQ")) </a>
      <a onClick=Shell.redirect("/test/deep")> (ReasonReact.stringToElement("Deep link")) </a>
      <h1> (ReasonReact.stringToElement("FAQ")) </h1>
    </div>;
  }
};
