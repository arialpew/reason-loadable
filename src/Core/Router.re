include ReasonReact.Router;

type path = list(string);

/** Redirect. */
let redirect = (path, event) => {
  ReactEventRe.Synthetic.preventDefault(event);
  ReasonReact.Router.push(path);
};

/** Initial state. */
let initialState = () => ReasonReact.Router.dangerouslyGetInitialUrl();

/** Context. */
module Context =
  ReasonReactContext.CreateContext(
    {
      type state = ReasonReact.Router.url;
      let name = "Router";
      let defaultValue = initialState();
    }
  );
