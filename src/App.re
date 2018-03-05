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
               | Faq(_) => <LazyFaq />
               | _ => <NotFound />
               }
           )
      </Routes.Container>
    </Layout>
};
