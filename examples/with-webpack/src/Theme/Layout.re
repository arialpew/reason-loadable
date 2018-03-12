let component = ReasonReact.statelessComponent("Layout");

let make = children => {
  ...component,
  render: _self =>
    <div className="layout">
      <div className="nav">
        <Routes.Link route=Home>
          (ReasonReact.stringToElement("Home"))
        </Routes.Link>
        <Routes.Link route=Faq>
          (ReasonReact.stringToElement("FAQ"))
        </Routes.Link>
      </div>
      <div className="view"> children[0] </div>
    </div>
};
