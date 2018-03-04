let component = ReasonReact.statelessComponent("Layout");

let make = children => {
  ...component,
  render: _self =>
    <div>
      <div>
        <Router.Link label="Home" href="/" />
        <Router.Link label="Faq" href="/faq" />
        <Router.Link label="DeepLink" href="/deep/link" />
        <Router.Link label="DeepLink (40)" href="/deep/link/40" />
        <Router.Link label="DeepLink (42)" href="/deep/link/42" />
      </div>
      <div>children[0]</div>
    </div>
};
