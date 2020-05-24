# Summary

[![Build Status](https://travis-ci.org/kMeillet/reason-loadable.svg?branch=master)](https://travis-ci.org/kMeillet/reason-loadable)
![NPM license](https://img.shields.io/npm/l/reason-loadable.svg?style=flat)

🔥 [Suspense/Lazy](https://reactjs.org/docs/code-splitting.html) for [ReasonReact](https://github.com/reasonml/reason-react).

* [Installation](#installation)
* [Support](#support)
* [Examples](#examples)
* [Non-ReasonReact component)](#non-reasonreact-component)
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

# Examples

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

# API

#### `ReLoadable.import: (Js.t('a) => React.element), string) => Js.Promise.t(Js.t('a) => React.element)`

Dynamic import React component.

#### `ReLoadable.lazy_: (unit => Js.Promise.t('a)) => 'a`

[React.lazy](https://reactjs.org/docs/code-splitting.html) binding.

# Special thanks to

- @jchavarri

- @rickyvetter

- @bloodyowl

- @cristianoc

- @thangngoc89

- @jchavarri (https://github.com/jchavarri/reason-react-lazy-loading)
