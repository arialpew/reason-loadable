module type Interface = (module type of Faq);

let importable: (module Interface) = (module Faq);
