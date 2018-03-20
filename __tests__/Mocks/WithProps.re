let component = ReasonReact.statelessComponent("WithProps");

let make = (~text, _children) => {
  ...component,
  render: _self =>
    <p> (ReasonReact.stringToElement("Hello world : " ++ text)) </p>
};
