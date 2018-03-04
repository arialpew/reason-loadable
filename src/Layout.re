let component = ReasonReact.statelessComponent("Layout");

let make = children => {
  ...component,
  render: _self =>
    <div>
      <div>
        <Link label="Home" href="/" />
        <Link label="Faq" href="/faq" />
        <Link label="DeepLink" href="/deep/link" />
        <Link label="DeepLink (40)" href="/deep/link/40" />
        <Link label="DeepLink (42)" href="/deep/link/42" />
      </div>
      <div>children[0]</div>
    </div>
};
