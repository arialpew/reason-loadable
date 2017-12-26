# parcel-reasonml-code-split 

Code splitting with ReasonML <> Bucklescript <> Parcel Bundler <> ReasonReact (experimental).

# Workflow

- Reason code (.re) is compiled to JavaScript via Bucklescript (.bs.js).
- Universal Router + History handles the client-side routing.
- ReasonReact handle React Component.
- Parcel compile Bucklescript JS file (.bs.js) and all other module (CSS, Image, ...) into final bundle (.js).

The application is encapsulated in a Shell, who bootstrap and render the whole app.

To bootstrap the application, we need a history (provided via the History library).

When a route change, handlers is called and return a Promise of ReactElement (you can return a simple ReactElement if you don't need code-splitting for some route).

Then, the application is re-render.

Thanks to @rickyvetter for the help :) .

# Final bundle size (with gzip)

- Parcel Prelude + Common code across module + Vendor (UniversalRouter/History/React/ReasonReact/ReactDOM) : 56kb.
- Home route : 1kb.
- FAQ route : 1kb.
- Global css : 1kb.

discord.gg/reasonml
