[@bs.val]
external import:
  ([@bs.ignore] (Js.t('a) => React.element), string) =>
  Js.Promise.t(Js.t('a) => React.element) =
  "import";

[@bs.module "react"]
external lazy_: (unit => Js.Promise.t('a)) => 'a = "lazy";
