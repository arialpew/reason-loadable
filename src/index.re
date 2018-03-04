Utils.require("./index.css");

module Shell = Core.Create({
  /** Include routes & matcher. */
  include Routes;

  /** Delay between view component resolution (0 for instant). */
  let delay = 0;

  /** Resolve view component through route. */
  let resolver =
    fun
      | `DeepLink(_) => LazyDeepLink.load()
      | `Faq => LazyFaq.load()
      | `Home => LazyHome.load()
      | _ => Js.Promise.resolve(<NotFound />);
});

/** Now, you can use Shell component with function as children who take 2 labeled arguments : isLoading, view. */
let app =
  <Shell>
    ...((~isLoading, ~view) =>
      <Layout>
        (switch isLoading {
          | true => <Placeholder />
          | false => view
        })
        </Layout>
    )
  </Shell>;

/** Render app. */
let _ = ReactDOMRe.renderToElementWithId(app, "root");
