module type DeepLinkIntf = (module type of DeepLink);

let importable: (module DeepLinkIntf) = (module DeepLink);
