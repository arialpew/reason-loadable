// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

require = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof require === "function" && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof require === "function" && require;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }
      
      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module;

      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module() {
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({68:[function(require,module,exports) {
"use strict";var e=require("bs-platform/lib/js/curry.js"),r=require("react"),t=require("reason-react/src/ReasonReact.js"),n=t.statelessComponent("Home");function o(t,o){var a=n.slice();return a[9]=function(){return r.createElement("div",void 0,r.createElement("a",{onClick:e._1(t,"/")},"Home"),r.createElement("a",{onClick:e._1(t,"/faq")},"FAQ"),r.createElement("h1",void 0,"Home"))},a}exports.component=n,exports.make=o;
},{"bs-platform/lib/js/curry.js":19,"react":25,"reason-react/src/ReasonReact.js":17}],65:[function(require,module,exports) {
"use strict";var e=require("./Home.bs.js"),r=[e.component,e.make];exports.importable=r;
},{"./Home.bs.js":68}]},{},[65])