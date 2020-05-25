# Summary

[![Build Status](https://travis-ci.org/kMeillet/reason-loadable.svg?branch=master)](https://travis-ci.org/kMeillet/reason-loadable)
![NPM license](https://img.shields.io/npm/l/reason-loadable.svg?style=flat)

🔥 [Suspense/Lazy](https://reactjs.org/docs/code-splitting.html) for [ReasonReact](https://github.com/reasonml/reason-react).

* [Installation](#installation)
* [Support](#support)
* [Example](#example)
* [Non-ReasonReact component](#non-reasonreact-component)
* [Experimental SuspenseList](#experimental-suspenselist)
* [API](#api)
* [Special thanks to](#special-thanks-to)

# Installation

```sh
npm install reason-loadable --save
```

Then add "reason-loadable" in "bsconfig.json" :

```sh
"bs-dependencies": [
 "reason-loadable"
]
```

You can now use **"ReLoadable"** module.

**Note :** **"ReLoadable"** contain type definition, it doesn't add any single bit into your project.

# Support

* **[ReasonReact](https://github.com/reasonml/reason-react) component (JSX v3)**. ✔️
* **Non-ReasonReact component (third-party React component or your own plain JavaScript React component)**. ✔️

[ReasonReact](https://github.com/reasonml/reason-react) JSX v2 isn't supported : Please consider migrating to JSX v3 (new [ReasonReact](https://github.com/reasonml/reason-react) hook components).

# Example

1) Create a [ReasonReact](https://github.com/reasonml/reason-react) hook component (JSX v3).

```reason
/* HelloWorld.re */
[@react.component]
let make = (~name) => <h1> (React.string("Hello world " ++ name)) </h1>;

/* Export default is necessary because React lazy function always resolve the default export. */
let default = make;
```

2) Create type-safe lazy component with **"ReLoadable.lazy_"** and **"ReLoadable.import"**.

```reason
/* LazyHelloWorld.re */
module type T = (module type of WithPure);

/*
  Needed for BuckleScript to not import the original component :
  See https://github.com/BuckleScript/bucklescript/issues/3543
*/
let unsafePlaceholder: module T = [%raw {|{}|}];

module UnsafePlaceholder = (val unsafePlaceholder);

let makeProps = UnsafePlaceholder.makeProps;

let make =
  ReLoadable.lazy_(() => ReLoadable.import(UnsafePlaceholder.make, "./HelloWord.bs.js"));
```

3) Render lazy component anywhere in your [ReasonReact](https://github.com/reasonml/reason-react) app with **"React.Suspense"**.

```reason
/* App.re */
[@react.component]
let make = () => {
  <React.Suspense fallback={<div> (React.string("Loading ...")) </div>}>
    <LazyHelloWorld name="Zeus" />
  </React.Suspense>;
};
```

[More example are available in repository.](https://github.com/kMeillet/reason-loadable/tree/master/examples)

# Non-ReasonReact component

1) Create type-safe lazy component with **"ReLoadable.lazy_"** and **"ReLoadable.import"**.

```reason
/* LazyButton.re */
/* You have to type non-ReasonReact component props explicitly. */
module type T = {
  [@react.component]
  let make: (~text: string) => React.element;
};

/*
  Needed for BuckleScript to not import the original component :
  See https://github.com/BuckleScript/bucklescript/issues/3543
*/
let unsafePlaceholder: module T = [%raw {|{}|}];

module UnsafePlaceholder = (val unsafePlaceholder);

let makeProps = UnsafePlaceholder.makeProps;

/* "@my-component-lib/button" should have a default export. */
let make =
  ReLoadable.lazy_(() => ReLoadable.import(UnsafePlaceholder.make, "@my-component-lib/button"));
```

2) Render lazy component anywhere in your [ReasonReact](https://github.com/reasonml/reason-react) app with **"React.Suspense"**.

```reason
/* App.re */
[@react.component]
let make = () => {
  <React.Suspense fallback={<div> (React.string("Loading ...")) </div>}>
    <LazyButton text="Click !" />
  </React.Suspense>;
};
```

# Experimental SuspenseList

[Concurrent mode](https://reactjs.org/docs/concurrent-mode-intro.html) is only available in the experimental builds of React. To install them, run :

```sh
npm install react@experimental react-dom@experimental
```

There are no semantic versioning guarantees for the experimental builds. APIs may be added, changed, or removed with any @experimental release.

[Experimental releases will have frequent breaking changes](https://reactjs.org/docs/concurrent-mode-adoption.html).

You can try these builds on personal projects or in a branch, but we don’t recommend running them in production.

Sometime, there's breaking change in experimental builds. For example, "createRoot" function has been changed to "unstable_createRoot" recently. 

Be prepared to do some research into ReasonReact and React source code if something goes wrong, especially when binding between ReasonReact and React doesn't match due to breaking changes.

**Experimental ReasonReact API is available under the "Experimental" module :** https://github.com/reasonml/reason-react/blob/master/src/ReactDOMRe.re#L40

Some React experimental builds can break the SuspenseList API.

Here is one experimental build that seem to work well with SuspenseList API : **0.0.0-experimental-aae83a4b9**.

```sh
npm install react@0.0.0-experimental-aae83a4b9 react-dom@0.0.0-experimental-aae83a4b9
```

```reason
/* App.re */
/* LazyButton and LazyHelloWorld are lazy components (see previous examples). */
[@react.component]
let make = () => {
  <React.SuspenseList>
    <React.Suspense fallback={<div> (React.string("Loading ...")) </div>}>
      <LazyButton text="Click !" />
    </React.Suspense>
    <React.Suspense fallback={<div> (React.string("Loading ...")) </div>}>
      <LazyHelloWorld name="Zeus" />
    </React.Suspense>
  </React.SuspenseList>;
};
```

```reason
/* index.re */
/* You have to use the experimental createRoot API explicitly. */
let _ =
  switch (ReactDOMRe.Experimental.createRootWithId("root")) {
  | Ok(root) => ReactDOMRe.Experimental.render(root, <App />)
  | Error(err) => Js.log(err)
  };
```

# API

#### `ReLoadable.import: (Js.t('a) => React.element), string) => Js.Promise.t(Js.t('a) => React.element)`

Dynamic import React component.

#### `ReLoadable.lazy_: (unit => Js.Promise.t('a)) => 'a`

[React.lazy](https://reactjs.org/docs/code-splitting.html) binding.

# Special thanks to

- @rickyvetter

- @bloodyowl

- @cristianoc

- @thangngoc89

- @jchavarri (https://github.com/jchavarri/reason-react-lazy-loading)
