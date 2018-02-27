module type HomeIntf = (module type of Home);

let importable: (module HomeIntf) = (module Home);
