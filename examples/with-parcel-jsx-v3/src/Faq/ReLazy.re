[@bs.module "react"]
external lazy_: (unit => Js.Promise.t(DynamicImport.importable('a))) => 'a = "lazy";
