# Summary

[![Build Status](https://travis-ci.org/kMeillet/reason-loadable.svg?branch=master)](https://travis-ci.org/kMeillet/reason-loadable)
![NPM license](https://img.shields.io/npm/l/reason-loadable.svg?style=flat)

🔥 A higher order module for loading dynamic components with [ReasonReact](https://github.com/reasonml/reason-react).

* [Installation](#installation)
* [Common problems solved](#common-problems-solved)
* [Support](#support)
* [JSX v3](#jsx-v2)
  * [Examples](#examples)
* [JSX v2](#jsx-v2)
  * [Examples](#examples)
* [API](#api)

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

# Common problems solved

Some of the most common problematic patterns that were covered include :

* **Import [ReasonReact](https://github.com/reasonml/reason-react) component dynamically**. ✔️
* **Support JSX v3 (hook component) : Suspense/Lazy**. ✔️
* **Support JSX v2 (record component) : function as children / render prop**. ✔️

# Support

- Server-side (Node.js) : Node.js doesn't support dynamic import, you should use [Babel](https://babeljs.io/) with ["babel-plugin-dynamic-import-node"](https://github.com/airbnb/babel-plugin-dynamic-import-node). [#example](https://github.com/kMeillet/bs-dynamic-import)

- Client-side (web) : you should use a bundler ([Webpack](https://webpack.js.org/) and [Parcel](https://github.com/parcel-bundler/parcel) support dynamic import with zero-configuration). [#example](https://github.com/kMeillet/reason-loadable/tree/master/examples)

# JSX v3

JSX v3 API support [hook component](https://reasonml.github.io/reason-react/docs/en/components).

## Example

1) Create a [ReasonReact](https://github.com/reasonml/reason-react) hook component.

```reason
/* HelloWorld.re */
[@react.component]
let make = (~name) => <h1> (ReasonReact.string("Hello world " ++ name)) </h1>;

/* Export default. */
let default = make;
```

2) Create type-safe dynamic component, use **"ReLoadable.lazy_"** and **"DynamicImport.import"**.

```reason
/* LazyHelloWorld.re */
module type T = (module type of HelloWorld);

/*
  Needed for BuckleScript to not import the original component :
  See https://github.com/BuckleScript/bucklescript/issues/3543
*/
[@bs.val] external component: (module T) = "undefined";

/* Module annotation needed to make sure `make` has the same type as the original component. */
module Lazy: T = {
  /* Includes `makeProps` at the type level without adding `import` of the original component. */
  include (val component);
  /* 100% unsafe due to `import` typedef :) but will be unified by the explicit type annotation above. */
  let make = ReLoadable.lazy_(() => DynamicImport.import("./HelloWord.bs.js"));
  /* All bindings in the original component have to be added here (`makeProps` is external, so no need). */
  /* Shallowing them here removes invalid access to undefined[1], undefined[n] in the resulting output. */
  let default = make;
};
```

3) Render dynamic component anywhere in your code, use **"React.Suspense"**.

```reason
/* App.re */
[@react.component]
let make = () => {
  <React.Suspense fallback={<div> (ReasonReact.string("Loading ...")) </div>}>
    <LazyHelloWorld.Lazy name="Zeus" />
  </React.Suspense>;
};
```

[More example are available in repository.](https://github.com/kMeillet/reason-loadable/tree/master/examples)

# JSX v2

JSX v2 API support [record component](https://reasonml.github.io/reason-react/docs/en/jsx-2).

## Example

1) Create a [ReasonReact](https://github.com/reasonml/reason-react) record component.

```reason
/* HelloWorld.re */
let component = ReasonReact.statelessComponent("HelloWorld");

let make = (~name, _children) => {
  ...component,
  render: _self =>
    <h1> (ReasonReact.string("Hello world " ++ name)) </h1>
};
```

2) Create type-safe dynamic component, use **"ReLoadable.WithRender"** (or **"ReLoadable.WithChildren"**, see API above).

```reason
/* LazyHelloWorld.re */
module Config = {
   module type t = (module type of HelloWorld);
};

/* Include component : LazyHelloWorld is now a component. */
include ReLoadable.WithRender(Config);
```

3) Render dynamic component anywhere in your code, use **"DynamicImport.import"**.

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
        onLoading=(() => <p>(ReasonReact.string("Loading ..."))</p>)
        onFail=((_error) => <p>(ReasonReact.string("Oops, something goes wrong !"))</p>)
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
    ~onLoading=() => <p>(ReasonReact.string("Loading ..."))</p>,
    ~onFail=_error => <p>(ReasonReact.string("Oops, something goes wrong !"))</p>,
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
    ~onLoading=() => <p>(ReasonReact.string("Loading ..."))</p>,
    ~onFail=_error => <p>(ReasonReact.string("Oops, something goes wrong !"))</p>,
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

🖌️ Look much better. We recommend [JSX v3 API](#jsx-v3) for new project (hook component), give it a try.

**Note :** **"ReLoadable.WithRender"** return a childless LoadableComponent, that mean you literally can't use children ([||]) but have to use "render prop". If you are in favor of "function as children", use **"ReLoadable.WithChildren"**.

[More example are available in repository.](https://github.com/kMeillet/reason-loadable/tree/master/examples)

# API

#### `DynamicImport.import: string => Js.Promise.t(DynamicImport.importable('a))`

Import dynamic module ("bs.js" compiled file).

#### `ReLoadable.lazy_: (unit => Js.Promise.t(DynamicImport.importable('a))) => 'a`

React.lazy binding.

**Note :** JSX v3 API

#### `ReLoadable.Configuration: { module type t; }`

Configuration store importable module type.

**Note :** JSX v2 API

#### `ReLoadable.WithRender: ReLoadable.Configuration => LoadableComponent`

Take Configuration and create LoadableComponent who use "render" prop pattern.

This LoadableComponent should be wrapped into "make" function if you want to pre-fill parameters.

**Note :** JSX v2 API

#### `ReLoadable.WithChildren: ReLoadable.Configuration => LoadableComponent`

Take Configuration and create LoadableComponent who use "function as children" pattern.

This LoadableComponent should be wrapped into "make" function if you want to pre-fill parameters.

**Note :** JSX v2 API

#### Options

You have to provide fetch and render/children function, rest are optionnal.

**Note :** JSX v2 API

##### `fetch: unit => Js.Promise.t(DynamicImport.importable((module ReLoadable.Configuration.t)))`

##### `render | children: (module ReLoadable.Configuration.t) => ReasonReact.reactElement`

##### `onFail: string => ReasonReact.reactElement (optionnal, by default use ReasonReact.nullElement)`

##### `onLoading: string => ReasonReact.reactElement (optionnal, by default use ReasonReact.nullElement)`

##### `delay: int (optionnal, by default use 200ms)`
