# reasonml-code-split 

[![Build Status](https://travis-ci.org/kMeillet/reasonml-code-split.svg?branch=master)](https://travis-ci.org/kMeillet/reasonml-code-split)

- With Parcel (output in ./dist-parcel).
- With Webpack 4 (output in ./dist-webpack).

Thanks to @rickyvetter and ReasonML community (discord.gg/reasonml).

# State

I'm working on this repository to extract the best API for dynamic import on Reason without sacrifice.

# Dependencies

- React & ReactDOM & ReasonReact & ReasonReactContext & ReRoute.
- BuckleScript core API for basic operation (List, String, ...).

# Bundle size (minified, no gzip compression)

### Parcel

Pro : zero-configuration.

Cons : doesn't provide threeshaking for the moment so the bundle size is larger than Webpack.

- Main bundle : 192Kb (main).
- Main CSS bundle : less than 1Kb.
- HTML : less than 1Kb.
- Bundle #1 (FAQ) : less than 2Kb.
- Bundle #2 (Deep) : less than 2Kb.
- Manifest : inline.

### Webpack

Pro : best bundle size.

Cons : require a small configuration.

- Main bundle : 124Kb (main).
- Main CSS bundle : less than 1Kb.
- HTML : less than 1Kb.
- Bundle #1 (FAQ) : less than 1Kb.
- Bundle #2 (Deep) : less than 1Kb.
- Manifest : less than 1Kb.

# Know issues

- Parcel watch server doesn't trigger change with ReasonML.

- Inline manifest with Webpack 4 doesn't work for the moment.
