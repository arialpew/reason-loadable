module type Interface = (module type of Deep);

let importable: (module Interface) = (module Deep);
