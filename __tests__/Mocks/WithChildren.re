let component = ReasonReact.statelessComponent("WithChildren");

let make = children => {...component, render: _self => children[0]};
