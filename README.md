# reasonml-code-split 

[![Build Status](https://travis-ci.org/kMeillet/reasonml-code-split.svg?branch=master)](https://travis-ci.org/kMeillet/reasonml-code-split)

- With Parcel (output in ./dist).
- With Webpack 4 (output in ./dist-webpack).

Thanks to @rickyvetter and ReasonML community (discord.gg/reasonml).

# Workflow

I'm working on a big rework so wait a bit.

# Dependencies

- React & ReactDOM & ReasonReact & ReasonReactContext.
- QueryString.
- BuckleScript core API for basic operation (List, String, ...).

# Know issues

- Parcel watch server doesn't trigger change with ReasonML.

- Inline manifest with Webpack 4 doesn't work for the moment.

# Bundle size (minified, no gzip compression)

### Parcel

- Main bundle : xKb (main).
- Main CSS bundle : xKb.
- HTML : xKb.
- Bundle #1 (Home) : xKb.
- Bundle #2 (FAQ) : xKb.
- Manifest : inline.

### Webpack

- Main bundle : xKb (main).
- Main CSS bundle : xKb.
- HTML : xKb.
- Bundle #1 (Home) : xKb.
- Bundle #2 (Faq) : xKb.
- Manifest : xKb.

# Future

- PWA (service worker, manifest, Lighthouse test, ...) ?
- Elegant typed CSS solution ?
- Prepack ?
