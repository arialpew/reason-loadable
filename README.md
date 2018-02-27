# reasonml-code-split 

[![Build Status](https://travis-ci.org/kMeillet/reasonml-code-split.svg?branch=master)](https://travis-ci.org/kMeillet/reasonml-code-split)

- With Parcel.
- With Webpack 4.

# Workflow

- Reason code (.re) is compiled to JavaScript (ES5 target) via Bucklescript (.bs.js).
- Universal Router + History handles the client-side routing.
- ReasonReact handle React Component.
- Parcel or Webpack compile JavaScript file (.bs.js) and all other module (CSS, Image, ...) into final bundle (.js).

# Dependencies

- React & ReactDOM & ReasonReact.
- UniversalRouter & History.
- BuckleScript core API for basic operation (List, String, ...).

# How

The application is encapsulated in a Shell, who bootstrap and render the whole app.

To bootstrap the application, we need a history (provided via the History library).

When a route change, handlers are called and return a Promise<ReactElement> (you can return a simple ReactElement if you don't need code-splitting for some route).

Then, the application is re-render.

Thanks to @rickyvetter and ReasonML community.

# Bundle size (minified, no gzip compression)

### Parcel : 188kb (main) - 2kb (css) - 1kb (html) - 2kb (bundle 1) - 2kb (bundle 2)

### WebPack : 181kb (main) - 1kb (html) - 1kb (bundle 1) - 1kb (bundle 2)

discord.gg/reasonml
