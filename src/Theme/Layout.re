let component = ReasonReact.statelessComponent("Layout");

let make = children => {
  ...component,
  render: _self =>
    <div>
      <div>
        <Routes.Link route=Home>
          (ReasonReact.stringToElement("Home"))
        </Routes.Link>
        <Routes.Link route=(Faq(None))>
          (ReasonReact.stringToElement("FAQ"))
        </Routes.Link>
        <Routes.Link route=(Faq(Some(21)))>
          (ReasonReact.stringToElement("FAQ (Light)"))
        </Routes.Link>
        <Routes.Link route=(Faq(Some(42)))>
          (ReasonReact.stringToElement("FAQ (Deep)"))
        </Routes.Link>
      </div>
      <div> children[0] </div>
    </div>
};
