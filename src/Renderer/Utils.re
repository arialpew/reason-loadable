/* Require CSS file (side effect) */
[@bs.val] external requireCSS: string => unit = "require";

/* Require an asset (eg. an image) and return exported string value (base64) */
[@bs.val] external requireAssetURI: string => string = "require";

/* Require a module at runtime (code-splitting import) */
[@bs.val] external import: string => Js.Promise.t('a) = "";

