module type t = (module type of Faq);

let importable: (module t) = (module Faq);
