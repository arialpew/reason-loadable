# Summary

[![Build Status](https://travis-ci.org/kMeillet/re-loadable.svg?branch=master)](https://travis-ci.org/kMeillet/re-loadable)
![NPM license](https://img.shields.io/npm/l/re-loadable.svg?style=flat)

🔥 A higher order module for loading dynamic components with ReasonReact.

* [Installation](#installation)
* [Common problems](#common-problems)
* [Example](#example)
  * [Basic example](#basic-example)
* [API](#api)
  * [Create dynamic module](#create-dynamic-module)
  * [Create dynamic component](#create-dynamic-component)
  * [Options](#options)

# Installation

```sh
npm install re-loadable bs-dynamic-import --save
```

Then add it to "bsconfig.json" :

```sh
"bs-dependencies": [
 "bs-dynamic-import",
 "re-loadable"
]
```

You can now use **"ReLoadable"** & **"DynamicImport"** module.

About **"DynamicImport"**, you can take a look at the [documentation](https://github.com/kMeillet/bs-dynamic-import) for more information.

# Common problems

Some of the most common problematic patterns that were covered include :

* **Load [ReasonReact](https://github.com/reasonml/reason-react) component dynamically**. ✔️
* **Multiple component import in parallel**. ❌
* **Interopt with JavaScript component**. ❌
* **Full SSR support**. ❌
* **Preloading**. ❌

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

2) Create a dynamic module with **"DynamicImport"**.

```reason
/* ImportableHelloWorld.re */
module type t = (module type of HelloWorld);

let importable: (module t) = (module HelloWorld);
```

3) Create a dynamic component with **"ReLoadable"** and forward props.

```reason
/* LazyHelloWorld.re */
module LazyLoadable = ReLoadable.Create({
  module type t = ImportableHelloWorld.t;
});

let make = (~name, _children) =>
  LazyLoadable.make(
    ~fetch=() => DynamicImport.import("./ImportableHelloWorld.bs"),
    ~render=((module LoadedComponent)) => <LoadedComponent name />,
    [||]
  );
```

4) Render dynamic component anywhere in your code like any component 🖌️ !

```reason
/* App.re */
let component = ReasonReact.statelessComponent("App");

let make = _children => {
  ...component,
  render: _self =>
    <div>
      <LazyHelloWorld name="Zeus" />
    <div>
};
```

**Note :** for browser application, you should use a bundler (Parcel, Webpack, ...) to compile BuckleScript output and get code-splitting work. On server-side (Node.js), you should use Babel with "[babel-plugin-dynamic-import-node](https://github.com/airbnb/babel-plugin-dynamic-import-node)".

[More example are available in repository.]((/examples))

# API

## Create dynamic module

A [ReasonReact](https://github.com/reasonml/reason-react) component is a simple module with, at least, "component" and "make" function.

In Reason/Ocaml, module are static.

To create a dynamic version of a static module X, you need to create new file with this pattern :

```reason
/* ImportableX.re */
module type t = (module type of X);

let importable: t = (module X);
```

[Read more about dynamic module import.](https://github.com/kMeillet/bs-dynamic-import)

## Create dynamic component

```reason
/* LazyX.re */
module Component =
  ReLoadable.Create(
    {
      module type t = ImportableX.t;
    }
  );

/* Forward props into render func (not required if component doesn't need props). */
let make = (~name, _children) =>
  Component.make(
    ~fetch=() => DynamicImport.import("./ImportableX"),
    ~render=((module LoadedComponent)) => <LoadedComponent name />,
    [||]
  );
```

#### `Configuration: { module type t; }`

Configuration store importable module interface.

#### `ReLoadable.Create: Configuration => LoadableComponent`

Take Configuration and create LoadableComponent.

This LoadableComponent should be wrapped into "make" function to forwards props.

#### `DynamicImport.import: string => Js.Promise.t(DynamicImport.importable('a))`

Import dynamic module via relative path, from the current module.

## Options

LoadableComponent are regular component but they use render function to unleash the power into user hands.

You have to provide fetch and render function, the rest are optionnal.

##### `fetch: unit => Js.Promise.t(DynamicImport.importable((module Configuration.t)))`

##### `render: (module Configuration.t) => ReasonReact.reactElement`

##### `onFail: string => ReasonReact.reactElement (optionnal, by default use ReasonReact.nullElement)`

##### `onLoading: string => ReasonReact.reactElement (optionnal, by default use ReasonReact.nullElement)`

##### `delay: int (optionnal, by default use 200ms)`