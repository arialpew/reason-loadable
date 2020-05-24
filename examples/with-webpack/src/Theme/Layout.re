let goHome = event => {
  event->ReactEvent.Synthetic.preventDefault;

  ReasonReactRouter.push("/");
};

let goFaq = event => {
  event->ReactEvent.Synthetic.preventDefault;

  ReasonReactRouter.push("/faq");
};

[@react.component]
let make = (~children) =>
  <div className="layout">
    <div className="nav">
      <a onClick=goHome> {React.string("Home")} </a>
      <a onClick=goFaq> {React.string("FAQ")} </a>
    </div>
    <div className="view"> children </div>
  </div>;
