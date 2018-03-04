# reasonml-code-split 

[![Build Status](https://travis-ci.org/kMeillet/reasonml-code-split.svg?branch=master)](https://travis-ci.org/kMeillet/reasonml-code-split)

- With Parcel (output in ./dist).
- With Webpack 4 (output in ./dist-webpack).

Thanks to @rickyvetter and ReasonML community (discord.gg/reasonml).

# Workflow

I'm working on a big rework so wait a bit.

# Dependencies

- React & ReactDOM & ReasonReact & ReasonReactContext.
- BuckleScript core API for basic operation (List, String, ...).

# Know issues

- Parcel watch server doesn't trigger change with ReasonML.

- Inline manifest with Webpack 4 doesn't work for the moment.

# Bundle size (minified, no gzip compression)

### Parcel

- Main bundle : 198Kb (main).
- Main CSS bundle : less than 1Kb.
- HTML : less than 1Kb.
- Bundle #1 (Home) : 2Kb.
- Bundle #2 (FAQ) : 2Kb.
- Bundle #2 (DeepLink) : 2Kb.
- Manifest : inline.

### Webpack

- Main bundle : 125Kb (main).
- Main CSS bundle : less than 1Kb.
- HTML : less than 1Kb.
- Bundle #1 (Home) : less than 1Kb.
- Bundle #2 (Faq) : less than 1Kb.
- Bundle #3 (DeepLink) : less than 1Kb.
- Manifest : less than 1Kb.
