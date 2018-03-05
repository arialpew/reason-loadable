let component = ReasonReact.statelessComponent("Deep");

let make = (~page, ~isDeepPage, _children) => {
  ...component,
  render: _self =>
    isDeepPage ?
      <h1>
        (Utils.Fn.ste("D-E-E-P Current page : " ++ Utils.Fn.stringOfInt(page)))
      </h1> :
      <h1>
        (Utils.Fn.ste("Current page : " ++ Utils.Fn.stringOfInt(page)))
      </h1>
};
