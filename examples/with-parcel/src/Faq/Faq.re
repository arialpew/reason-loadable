Utils.require("./faq.css");

let component = ReasonReact.statelessComponent("Faq");

let make = _children => {
  ...component,
  render: _self =>
    <h1 className="faq"> (ReasonReact.string("FAQ")) </h1>
};
