let component = ReasonReact.statelessComponent("App");

let make = _children => {
  ...component,
  render: _self =>
    <Layout>
      <Routes.Container>
        ...(
             (~currentRoute) =>
               switch currentRoute {
               | Home => <Home />
               | Faq(Some(_)) => <LazyFaq />
               | Faq(None) => <Faq />
               | _ => <NotFound />
               }
           )
      </Routes.Container>
    </Layout>
};
