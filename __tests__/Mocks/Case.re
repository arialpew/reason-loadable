open DynamicImport;

open Utils;

module Types = {
  module WithPure = {
    module type t = (module type of WithPure);
  };
  module WithProps = {
    module type t = (module type of WithProps);
  };
  module WithChildren = {
    module type t = (module type of WithChildren);
  };
  module WithChildrenFunc = {
    module type t = (module type of WithChildrenFunc);
  };
};

/* Pure case (no props, no state). */
module Pure = {
  module WithRender = {
    module Loadable = ReLoadable.WithRender(Types.WithPure);
    let make = _children =>
      Loadable.make(
        ~fetch=() => import("./WithPure.bs.js"),
        ~onLoading=__STD_ONLOADING__,
        ~onFail=__STD_ONFAIL__,
        ~delay=__STD_DELAY__,
        __CHILDLESS__,
      );
  };
  module WithChildren = {
    module Loadable = ReLoadable.WithChildren(Types.WithPure);
    let make = children =>
      Loadable.make(
        ~fetch=() => import("./WithPure.bs.js"),
        ~onLoading=__STD_ONLOADING__,
        ~onFail=__STD_ONFAIL__,
        ~delay=__STD_DELAY__,
        children,
      );
  };
};

/* Bad case (missing file). */
module Bad = {
  module WithRender = {
    module Loadable = ReLoadable.WithRender(Types.WithPure);
    let make = _children =>
      Loadable.make(
        ~fetch=() => import("./???.bs.js"),
        ~onLoading=__STD_ONLOADING__,
        ~onFail=__STD_ONFAIL__,
        ~delay=__STD_DELAY__,
        __CHILDLESS__,
      );
  };
  module WithChildren = {
    module Loadable = ReLoadable.WithChildren(Types.WithPure);
    let make = children =>
      Loadable.make(
        ~fetch=() => import("./???.bs.js"),
        ~onLoading=__STD_ONLOADING__,
        ~onFail=__STD_ONFAIL__,
        ~delay=__STD_DELAY__,
        children,
      );
  };
};

/* Props case (forward props). */
module Props = {
  module WithRender = {
    module Loadable = ReLoadable.WithRender(Types.WithProps);
    let make = _children =>
      Loadable.make(
        ~fetch=() => import("./WithProps.bs.js"),
        ~onLoading=__STD_ONLOADING__,
        ~onFail=__STD_ONFAIL__,
        ~delay=__STD_DELAY__,
        __CHILDLESS__,
      );
  };
  module WithChildren = {
    module Loadable = ReLoadable.WithChildren(Types.WithProps);
    let make = children =>
      Loadable.make(
        ~fetch=() => import("./WithProps.bs.js"),
        ~onLoading=__STD_ONLOADING__,
        ~onFail=__STD_ONFAIL__,
        ~delay=__STD_DELAY__,
        children,
      );
  };
};

/* Children case (component). */
module Children = {
  module WithRender = {
    module Loadable = ReLoadable.WithRender(Types.WithChildren);
    let make = _children =>
      Loadable.make(
        ~fetch=() => import("./WithChildren.bs.js"),
        ~onLoading=__STD_ONLOADING__,
        ~onFail=__STD_ONFAIL__,
        ~delay=__STD_DELAY__,
        __CHILDLESS__,
      );
  };
  module WithChildren = {
    module Loadable = ReLoadable.WithChildren(Types.WithChildren);
    let make = children =>
      Loadable.make(
        ~fetch=() => import("./WithChildren.bs.js"),
        ~onLoading=__STD_ONLOADING__,
        ~onFail=__STD_ONFAIL__,
        ~delay=__STD_DELAY__,
        children,
      );
  };
};

/* Children case (function). */
module ChildrenFunc = {
  module WithRender = {
    module Loadable = ReLoadable.WithRender(Types.WithChildrenFunc);
    let make = _children =>
      Loadable.make(
        ~fetch=() => import("./WithChildrenFunc.bs.js"),
        ~onLoading=__STD_ONLOADING__,
        ~onFail=__STD_ONFAIL__,
        ~delay=__STD_DELAY__,
        __CHILDLESS__,
      );
  };
  module WithChildren = {
    module Loadable = ReLoadable.WithChildren(Types.WithChildrenFunc);
    let make = children =>
      Loadable.make(
        ~fetch=() => import("./WithChildrenFunc.bs.js"),
        ~onLoading=__STD_ONLOADING__,
        ~onFail=__STD_ONFAIL__,
        ~delay=__STD_DELAY__,
        children,
      );
  };
};
