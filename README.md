# Warning

This package is now deprecated. Please do not use this in production.

# Summary

[![Build Status](https://travis-ci.org/kMeillet/reason-loadable.svg?branch=master)](https://travis-ci.org/kMeillet/reason-loadable)
![NPM license](https://img.shields.io/npm/l/reason-loadable.svg?style=flat)

🔥 A higher order module for loading dynamic components with [ReasonReact](https://github.com/reasonml/reason-react).

* [Installation](#installation)
* [Motivation](#motivation)
  * [Common problems](#common-problems)
  * [Support](#support)
* [Example](#example)
  * [Basic example](#basic-example)
* [API](#api)
  * [ReLoadable](#reloadable)
  * [Options](#options)

# Installation

```sh
npm install reason-loadable bs-dynamic-import --save
```

Then add it to "bsconfig.json" :

```sh
"bs-dependencies": [
 "bs-dynamic-import",
 "reason-loadable"
]
```

You can now use **"ReLoadable"** & **"DynamicImport"** module.

About **"DynamicImport"**, you can take a look at the [documentation](https://github.com/kMeillet/bs-dynamic-import) for more information.

# Motivation

This project is strongly inspired from ["react-loadable"](https://github.com/jamiebuilds/react-loadable), the goal is ultimately to achieve the same functionality in pure Reason.

## Common problems

Some of the most common problematic patterns that were covered include :

* **Import [ReasonReact](https://github.com/reasonml/reason-react) component dynamically**. ✔️
* **Support function as children / render prop**. ✔️
* **Minimal SSR support**. ✔️
* **Import multiple component dynamically in parallel**. ❌
* **Full SSR support (preloadAll, preload, preloadReady)**. ❌
* **Retry**. ❌

## Support

- Server-side (Node.js) : Node.js doesn't support dynamic import, you should use [Babel](https://babeljs.io/) with ["babel-plugin-dynamic-import-node"](https://github.com/airbnb/babel-plugin-dynamic-import-node). [#example](https://github.com/kMeillet/bs-dynamic-import)

- Client-side (web) : you should use a bundler ([Webpack 4](https://webpack.js.org/) and [Parcel](https://github.com/parcel-bundler/parcel) support dynamic import with zero-configuration, Rollup require experimental flag). [#example](https://github.com/kMeillet/reason-loadable/tree/master/examples)

# Example

## Basic example

1) Create a [ReasonReact](https://github.com/reasonml/reason-react) component.

```reason
/* HelloWorld.re */
let component = ReasonReact.statelessComponent("HelloWorld");

let make = (~name, _children) => {
  ...component,
  render: _self =>
    <h1> (ReasonReact.stringToElement("Hello world " ++ name)) </h1>
};
```

2) Create type-safe dynamic component with **"ReLoadable"** module.

```reason
/* LazyHelloWorld.re */
module Config = {
   module type t = (module type of HelloWorld);
};

/* Include component : LazyHelloWorld is now a component. */
include ReLoadable.WithRender(Config);
```

3) Render dynamic component anywhere in your code like any component, fetch with **"DynamicImport"** module & render.

```reason
/* App.re */
let component = ReasonReact.statelessComponent("App");

let make = _children => {
  ...component,
  render: _self =>
    <div>
      <LazyHelloWorld
        fetch=(() => DynamicImport.import("./HelloWorld.bs.js"))
        render=(((module HelloWorld)) => <HelloWorld name="Zeus" />)
      />
    </div>
};
```

4) We can add optionnal parameters (loading component, failed component and delay).

```reason
/* App.re */
let component = ReasonReact.statelessComponent("App");

let make = _children => {
  ...component,
  render: _self =>
    <div>
      <LazyHelloWorld
        fetch=(() => DynamicImport.import("./HelloWorld.bs.js"))
        render=(((module HelloWorld)) => <HelloWorld name="Zeus" />)
        onLoading=(() => <p>(ReasonReact.stringToElement("Loading ..."))</p>)
        onFail=((_error) => <p>(ReasonReact.stringToElement("Oops, something goes wrong !"))</p>)
        delay=3000
      />
    </div>
};
```

5) You might be thinking that this is cool but a bit ugly ... it would be inconvenient to have to pass props like "fetch", "onLoading", "onFail", "delay", everytime we want to load "HelloWorld" module dynamically. It could be nice if we can reduce boilerplate. So in this case, instead of using **"include"**, let’s define a new make function who will create pre-filled component.

```reason
/* LazyHelloWorld.re */
module Config = {
   module type t = (module type of HelloWorld);
};

module Loadable = ReLoadable.WithRender(Config);

/* Forward props. */
let make = (~name, _children) =>
  Loadable.make(
    ~fetch=() => DynamicImport.import("./HelloWorld.bs.js"),
    ~render=((module HelloWorld)) => <HelloWorld name />,
    ~onLoading=() => <p>(ReasonReact.stringToElement("Loading ..."))</p>,
    ~onFail=_error => <p>(ReasonReact.stringToElement("Oops, something goes wrong !"))</p>,
    ~delay=3000,
    [||]
  );
```

```reason
/* App.re */
let component = ReasonReact.statelessComponent("App");

let make = _children => {
  ...component,
  render: _self =>
    <div>
      <LazyHelloWorld name="Zeus" />
    </div>
};
```

6) What about delegate rendering later ? Luckily, we know the solution for this, we can use partial application to fix some of the parameters.

```reason
/* LazyHelloWorld.re */
module Config = {
   module type t = (module type of HelloWorld);
};

module Loadable = ReLoadable.WithRender(Config);

/* Remove render and props forwarding. */
let make = _children =>
  Loadable.make(
    ~fetch=() => DynamicImport.import("./HelloWorld.bs.js"),
    ~onLoading=() => <p>(ReasonReact.stringToElement("Loading ..."))</p>,
    ~onFail=_error => <p>(ReasonReact.stringToElement("Oops, something goes wrong !"))</p>,
    ~delay=3000,
    [||]
  );
```

```reason
/* App.re */
let component = ReasonReact.statelessComponent("App");

let make = _children => {
  ...component,
  render: _self =>
    <div>
      <LazyHelloWorld
        render=(((module HelloWorld)) => <HelloWorld name="Zeus" />)
      />
    </div>
};
```

🖌️ Look much better !

**Note :** **"ReLoadable.WithRender"** return a childless LoadableComponent, that mean you literally can't use children ([||]) but have to use "render prop". If you are in favor of "function as children", use **"ReLoadable.WithChildren"**.

[More example are available in repository.](https://github.com/kMeillet/reason-loadable/tree/master/examples)

# API

## ReLoadable

#### `Configuration: { module type t; }`

Configuration store importable module type.

#### `ReLoadable.WithRender: Configuration => LoadableComponent`

Take Configuration and create LoadableComponent who use "render" prop pattern.

This LoadableComponent should be wrapped into "make" function if you want to pre-fill parameters.

#### `ReLoadable.WithChildren: Configuration => LoadableComponent`

Take Configuration and create LoadableComponent who use "function as children" pattern.

This LoadableComponent should be wrapped into "make" function if you want to pre-fill parameters.

#### `DynamicImport.import: string => Js.Promise.t(DynamicImport.importable('a))`

Import dynamic module ("bs.js" compiled file).

## Options

You have to provide fetch and render/children function, rest are optionnal.

##### `fetch: unit => Js.Promise.t(DynamicImport.importable((module Configuration.t)))`

##### `render | children: (module Configuration.t) => ReasonReact.reactElement`

##### `onFail: string => ReasonReact.reactElement (optionnal, by default use ReasonReact.nullElement)`

##### `onLoading: string => ReasonReact.reactElement (optionnal, by default use ReasonReact.nullElement)`

##### `delay: int (optionnal, by default use 200ms)`
