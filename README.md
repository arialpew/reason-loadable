# Summary

[![Build Status](https://travis-ci.org/kMeillet/reason-loadable.svg?branch=master)](https://travis-ci.org/kMeillet/reason-loadable)
![NPM license](https://img.shields.io/npm/l/reason-loadable.svg?style=flat)

🔥 A higher order module for loading dynamic components with [ReasonReact](https://github.com/reasonml/reason-react).

* [Installation](#installation)
* [Common problems](#common-problems)
* [Example](#example)
  * [Basic example](#basic-example)
* [API](#api)
  * [ReLoadable](#create-dynamic-component)
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

# Common problems

Some of the most common problematic patterns that were covered include :

* **Import [ReasonReact](https://github.com/reasonml/reason-react) component dynamically**. ✔️
* **Import multiple component dynamically in parallel**. ❌
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

2) Create a dynamic component with **"ReLoadable"** module. Use **"DynamicImport"** 

```reason
/* LazyHelloWorld.re */
module Configuration = {
   module type t = (module type of HelloWorld);
};

module Component = ReLoadable.Create(Configuration);

let make = (~name, _children) =>
  Component.make(
    ~fetch=() => DynamicImport.import("./HelloWorld.bs.js"),
    ~render=((module LoadedComponent)) => <LoadedComponent name />,
    [||]
  );
```

3) Render dynamic component anywhere in your code like any component 🖌️ !

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

**Note :** for browser application, you should use a bundler (Parcel, Webpack, ...) to compile BuckleScript output and get code-splitting work. On server-side (Node.js), you should use Babel with "[babel-plugin-dynamic-import-node](https://github.com/airbnb/babel-plugin-dynamic-import-node)".

[More example are available in repository.](https://github.com/kMeillet/reason-loadable/tree/master/examples)

# API

## ReLoadable

#### `Configuration: { module type t; }`

Configuration store importable module type.

#### `ReLoadable.Create: Configuration => LoadableComponent`

Take Configuration and create LoadableComponent.

This LoadableComponent should be wrapped into "make" function to forwards props.

#### `DynamicImport.import: string => Js.Promise.t(DynamicImport.importable('a))`

Import dynamic module via relative path, from the current module.

## Options

LoadableComponent are regular component but they use render props to unleash render power into user hands.

You have to provide fetch and render function, the rest are optionnal.

##### `fetch: unit => Js.Promise.t(DynamicImport.importable((module Configuration.t)))`

##### `render: (module Configuration.t) => ReasonReact.reactElement`

##### `onFail: string => ReasonReact.reactElement (optionnal, by default use ReasonReact.nullElement)`

##### `onLoading: string => ReasonReact.reactElement (optionnal, by default use ReasonReact.nullElement)`

##### `delay: int (optionnal, by default use 200ms)`
