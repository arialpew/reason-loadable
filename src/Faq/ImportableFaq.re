module type FaqIntf = (module type of Faq);

let importable: (module FaqIntf) = (module Faq);
