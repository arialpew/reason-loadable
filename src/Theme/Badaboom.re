let component = ReasonReact.statelessComponent("Badaboom");

let make = (~err, _children) => {
  ...component,
  render: _self =>
    <h1> (Utils.Fn.ste("Oops, an error happened : " ++ err)) </h1>
};
