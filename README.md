# reasonml-code-split 

[![Build Status](https://travis-ci.org/kMeillet/reasonml-code-split.svg?branch=master)](https://travis-ci.org/kMeillet/reasonml-code-split)

- With Parcel.
- With Webpack 4.

# Workflow

- Reason code (.re) is compiled to JavaScript (ES5 target) via Bucklescript (.bs.js).
- ReasonReact handle React Component & Routing.
- Parcel or Webpack compile JavaScript file (.bs.js) and all other module (CSS, Image, ...) into final bundle (.js).

# Dependencies

- React & ReactDOM & ReasonReact.
- BuckleScript core API for basic operation (List, String, ...).

# Limit

- Parcel watch server doesn't trigger change on code-splitted ReasonML module (they will remove Chokidar soon, so maybe it will fix it).

- Code should look better for scaling.

# Bundle size (minified, no gzip compression)

### Parcel : 188kb (main) - 2kb (css) - 1kb (html) - 2kb (bundle 1) - 2kb (bundle 2)

### WebPack : 181kb (main) - 1kb (html) - 1kb (bundle 1) - 1kb (bundle 2)

discord.gg/reasonml

Thanks to @rickyvetter and ReasonML community.
