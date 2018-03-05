let component = ReasonReact.statelessComponent("Faq");

let make = _children => {
  ...component,
  render: _self =>
    <Routes.Container>
      ...(
           (~currentRoute) =>
             switch currentRoute {
             | Faq(Some(page)) when page >= 42 =>
               <LazyDeep isDeepPage=true page />
             | Faq(Some(page)) => <LazyDeep isDeepPage=false page />
             | _ => <LazyDeep isDeepPage=false page=0 />
             }
         )
    </Routes.Container>
};
