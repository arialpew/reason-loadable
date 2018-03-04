let component = ReasonReact.statelessComponent("DeepLink");

let make = _children => {
  ...component,
  render: _self =>
    <Router.Context.Consumer>
      ...(
           route =>
             <h1>
               (
                 switch (Routes.matcher(route.path)) {
                 | `DeepLink(Some(page)) when Utils.Fn.intOfString(page) >= 42 =>
                   <Text label=("Super Deep Link : " ++ page) />
                 | `DeepLink(Some(page)) =>
                   <Text label=("Deep Link : " ++ page) />
                 | _ => <Text label="Deep Link : 0" />
                 }
               )
             </h1>
         )
    </Router.Context.Consumer>
};
