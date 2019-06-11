[@react.component]
let make = () => {
  let url = ReasonReactRouter.useUrl();

  let content = switch (url.path) {
    | [] => <Home />
    | ["faq"] => 
      <React.Suspense fallback={<div></div>}>
        <LazyFaq.Lazy />
      </React.Suspense>
    | _ => <NotFound />
  };

  <Layout>
    content
  </Layout>
};
