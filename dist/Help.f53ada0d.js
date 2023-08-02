// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"1xC6H":[function(require,module,exports) {
var Refresh = require("d51f6fab3118a247");
var ErrorOverlay = require("d3e2e1c1aeec8b83");
Refresh.injectIntoGlobalHook(window);
window.$RefreshReg$ = function() {};
window.$RefreshSig$ = function() {
    return function(type) {
        return type;
    };
};
ErrorOverlay.setEditorHandler(function editorHandler(errorLocation) {
    let file = `${errorLocation.fileName}:${errorLocation.lineNumber || 1}:${errorLocation.colNumber || 1}`;
    fetch(`/__parcel_launch_editor?file=${encodeURIComponent(file)}`);
});
ErrorOverlay.startReportingRuntimeErrors({
    onError: function() {}
});
window.addEventListener("parcelhmraccept", ()=>{
    ErrorOverlay.dismissRuntimeErrors();
});

},{"d51f6fab3118a247":"786KC","d3e2e1c1aeec8b83":"1dldy"}],"76p2V":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "052e6e42f53ada0d";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"kmThC":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$e70a = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$e70a.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactRedux = require("react-redux");
var _constants = require("../../../constants");
var _accordionList = require("./AccordionList");
var _accordionListDefault = parcelHelpers.interopDefault(_accordionList);
var _supportPageCacheSlice = require("../../utils/supportPageCacheSlice");
var _s = $RefreshSig$();
const Help = ()=>{
    _s();
    const [sideNavList, setSideNavList] = (0, _react.useState)([]);
    const [accordianList, setAccordionList] = (0, _react.useState)([]);
    const [selectedOption, setSelectedOption] = (0, _react.useState)(`partner-onboarding`);
    const [tileHeader, setTileHeader] = (0, _react.useState)(`Partner Onboarding`);
    const dispatch = (0, _reactRedux.useDispatch)();
    const cachedSideNavData = (0, _reactRedux.useSelector)((store)=>store.supportPageCache.sideNavData);
    const cachedAccordionData = (0, _reactRedux.useSelector)((store)=>store.supportPageCache.accordionData);
    (0, _react.useEffect)(()=>{
        fetchSideNavData();
    }, []);
    (0, _react.useEffect)(()=>{
        fetchAccordionListData();
        window.scrollTo(0, 0);
    }, [
        selectedOption
    ]);
    const fetchSideNavData = async ()=>{
        //cache side nav data to reduce network calls
        if (cachedSideNavData.length === 0) {
            const data = await fetch((0, _constants.HELP_PAGE_DATA_URL));
            const jsonData = await data.json();
            setSideNavList(jsonData?.data?.issueTypes?.data);
            dispatch((0, _supportPageCacheSlice.addDataToSideNav)(jsonData?.data?.issueTypes?.data));
        } else setSideNavList(cachedSideNavData);
    };
    const fetchAccordionListData = async ()=>{
        //cache acoordiion data to reduce network calls
        if (!cachedAccordionData[selectedOption]) {
            const url = (0, _constants.HELP_PAGE_ACCORDION_LIST_DATA) + selectedOption;
            const data = await fetch(url);
            const jsonData = await data.json();
            setAccordionList(jsonData?.data?.issues?.data);
            let tempObjToStoreAccordionData = {};
            tempObjToStoreAccordionData[selectedOption] = jsonData?.data?.issues?.data;
            dispatch((0, _supportPageCacheSlice.addDataToAccordion)(tempObjToStoreAccordionData));
        } else setAccordionList(cachedAccordionData[selectedOption]);
    };
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: " bg-[#37718E] tracking-wide",
        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
            className: "mx-auto p-5 w-11/12 ",
            children: [
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: " sticky top-20 md:z-10 p-4 lg:p-10 lg:px-20 text-white bg-[#37718E]",
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("header", {
                            className: "text-lg lg:text-4xl font-semibold",
                            children: "Help & Support"
                        }, void 0, false, {
                            fileName: "src/components/support/Help.js",
                            lineNumber: 58,
                            columnNumber: 17
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                            className: "text-xs lg:text-lg",
                            children: "Let's take a step ahead and help you better."
                        }, void 0, false, {
                            fileName: "src/components/support/Help.js",
                            lineNumber: 59,
                            columnNumber: 17
                        }, undefined)
                    ]
                }, void 0, true, {
                    fileName: "src/components/support/Help.js",
                    lineNumber: 57,
                    columnNumber: 13
                }, undefined),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: " lg:flex justify-center min-h-screen bg-white lg:p-10 m-2 shadow-lg ",
                    children: sideNavList.length > 0 && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "self-start sticky top-36 lg:top-48 lg:min-h-screen flex justify-around lg:inline-block bg-slate-200 lg:w-1/4 lg:m-4 py-4 hover:cursor-pointer",
                                children: sideNavList.map((item)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        onClick: ()=>{
                                            setSelectedOption(item?.type);
                                            setTileHeader(item?.title);
                                        },
                                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                            className: ` text-[#535665] text-sm lg:text-base hover:font-semibold m-2 lg:mx-10 lg:mr-0 p-1 rounded-md lg:rounded-none lg:py-7 lg:pl-10 ${selectedOption === item.type ? " bg-white font-semibold" : ""}`,
                                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                                children: item.title
                                            }, void 0, false, {
                                                fileName: "src/components/support/Help.js",
                                                lineNumber: 71,
                                                columnNumber: 45
                                            }, undefined)
                                        }, void 0, false, {
                                            fileName: "src/components/support/Help.js",
                                            lineNumber: 70,
                                            columnNumber: 37
                                        }, undefined)
                                    }, item.title, false, {
                                        fileName: "src/components/support/Help.js",
                                        lineNumber: 66,
                                        columnNumber: 33
                                    }, undefined))
                            }, void 0, false, {
                                fileName: "src/components/support/Help.js",
                                lineNumber: 64,
                                columnNumber: 25
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("hr", {}, void 0, false, {
                                fileName: "src/components/support/Help.js",
                                lineNumber: 76,
                                columnNumber: 25
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: " lg:w-3/4 m-4 p-2",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        className: " text-xl lg:text-2xl font-semibold mt-2 lg:mt-10 mb-5",
                                        children: tileHeader
                                    }, void 0, false, {
                                        fileName: "src/components/support/Help.js",
                                        lineNumber: 78,
                                        columnNumber: 29
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _accordionListDefault.default), {
                                        items: accordianList,
                                        heading: tileHeader
                                    }, void 0, false, {
                                        fileName: "src/components/support/Help.js",
                                        lineNumber: 79,
                                        columnNumber: 31
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "src/components/support/Help.js",
                                lineNumber: 77,
                                columnNumber: 25
                            }, undefined)
                        ]
                    }, void 0, true)
                }, void 0, false, {
                    fileName: "src/components/support/Help.js",
                    lineNumber: 61,
                    columnNumber: 13
                }, undefined)
            ]
        }, void 0, true, {
            fileName: "src/components/support/Help.js",
            lineNumber: 56,
            columnNumber: 9
        }, undefined)
    }, void 0, false, {
        fileName: "src/components/support/Help.js",
        lineNumber: 55,
        columnNumber: 5
    }, undefined);
};
_s(Help, "IkxM6no5GCLEYf67bKPbScD9mw4=", false, function() {
    return [
        (0, _reactRedux.useDispatch),
        (0, _reactRedux.useSelector),
        (0, _reactRedux.useSelector)
    ];
});
_c = Help;
exports.default = Help /**
 * return sideNavList.length === 0 ? 'Loading...' :  (
    <div className=' bg-[#37718E] tracking-wide' >
        <div className='mx-auto p-5 w-11/12 '>
            <div className=' sticky top-20 sm:z-10 p-4  lg:p-10  lg:px-20 text-white bg-[#37718E]' >
                <header className='text-lg lg:text-4xl font-semibold' >Help & Support</header>
                <p className='text-xs lg:text-lg' >Let's take a step ahead and help you better.</p>
            </div>
            <div className=' lg:flex  justify-center min-h-screen bg-white lg:p-10 m-2 shadow-lg  ' >
                <div className='self-start sticky top-36 lg:top-48 lg:min-h-screen flex justify-around lg:inline-block bg-slate-200 lg:w-1/4  lg:m-4 py-4 hover:cursor-pointer' >
                    {sideNavList.map(item=>(
                        <div key={item.title} onClick={()=>{
                            setSelectedOption(item?.type)
                            setTileHeader(item?.title)
                        }} >
                            <div className= {` text-[#535665] text-sm lg:text-base hover:font-semibold m-2 lg:mx-10 lg:mr-0 p-1 rounded-md lg:rounded-none lg:py-7 lg:pl-10 ${selectedOption === item.type ? ' bg-white font-semibold' : ''}`}>
                                    <p>{item.title}</p>    
                            </div>
                        </div>
                    ))}
                </div>
                <hr/>
                <div className='  lg:w-3/4  m-4 p-2' >
                    <div className=' text-xl lg:text-2xl font-semibold mt-2 lg:mt-10 mb-5' >{tileHeader}</div>
                    { <AccordionList  items={accordianList} heading={tileHeader} />}
                </div>
            </div>
        </div>
    </div>
  )
 */ ;
var _c;
$RefreshReg$(_c, "Help");

  $parcel$ReactRefreshHelpers$e70a.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","../../../constants":"8eIVP","./AccordionList":"bYLDU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru","react-redux":"bdVon","../../utils/supportPageCacheSlice":"13BIQ"}],"bYLDU":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$8c8e = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$8c8e.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _accordionItem = require("./AccordionItem");
var _accordionItemDefault = parcelHelpers.interopDefault(_accordionItem);
var _s = $RefreshSig$();
const AccordionList = ({ items  })=>{
    _s();
    const [selectedIndex, setSelectedIndex] = (0, _react.useState)(0);
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        children: items.map((item)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                onClick: ()=>setSelectedIndex(item.id),
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _accordionItemDefault.default), {
                    item: item,
                    selectedIndex: selectedIndex
                }, void 0, false, {
                    fileName: "src/components/support/AccordionList.js",
                    lineNumber: 9,
                    columnNumber: 17
                }, undefined)
            }, item.id, false, {
                fileName: "src/components/support/AccordionList.js",
                lineNumber: 8,
                columnNumber: 13
            }, undefined))
    }, void 0, false, {
        fileName: "src/components/support/AccordionList.js",
        lineNumber: 6,
        columnNumber: 5
    }, undefined);
};
_s(AccordionList, "99+ndi6KUKLA1hpm1gDNGmqPOOY=");
_c = AccordionList;
exports.default = AccordionList;
var _c;
$RefreshReg$(_c, "AccordionList");

  $parcel$ReactRefreshHelpers$8c8e.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","./AccordionItem":"exh6y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"exh6y":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$3292 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$3292.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _hi2 = require("react-icons/hi2");
const AccordionItem = ({ item , selectedIndex  })=>{
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: " border-b lg:border-b-2 border-gray-200 hover:cursor-pointer py-4 lg:p-6 text-[#3D4152] font-light ",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "flex justify-between",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                        className: " text-xs lg:text-lg hover:text-orange-400 pr-1 lg:pr-0 ",
                        children: item.title
                    }, void 0, false, {
                        fileName: "src/components/support/AccordionItem.js",
                        lineNumber: 7,
                        columnNumber: 13
                    }, undefined),
                    selectedIndex === item.id ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _hi2.HiOutlineChevronUp), {}, void 0, false, {
                        fileName: "src/components/support/AccordionItem.js",
                        lineNumber: 8,
                        columnNumber: 43
                    }, undefined) : /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _hi2.HiOutlineChevronDown), {}, void 0, false, {
                        fileName: "src/components/support/AccordionItem.js",
                        lineNumber: 8,
                        columnNumber: 68
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/components/support/AccordionItem.js",
                lineNumber: 6,
                columnNumber: 9
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: `text-xs  lg:text-sm w-11/12 lg:w-4/5 ${selectedIndex !== item.id ? "hidden" : " my-5  "}`,
                children: [
                    (item.description || item.hyperLinkText) && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                        className: `${item.description ? "text-[#3D4152]" : item.hyperLinkText ? "text-orange-400 font-semibold" : ""}`,
                        children: item.description || item.hyperLinkText
                    }, void 0, false, {
                        fileName: "src/components/support/AccordionItem.js",
                        lineNumber: 13,
                        columnNumber: 21
                    }, undefined),
                    item.options[0]?.type === "email" && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                            className: "pt-6",
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                                    className: "p-2 px-4 text-orange-400 font-semibold border-2 border-orange-400",
                                    href: "mailto:support@swiggy.in?subject=I want to provide feedback",
                                    children: "SEND AN EMAIL"
                                }, void 0, false, {
                                    fileName: "src/components/support/AccordionItem.js",
                                    lineNumber: 20,
                                    columnNumber: 29
                                }, undefined),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                    className: "text-[9px] font-extralight mt-2",
                                    children: item.options[0].waitTime
                                }, void 0, false, {
                                    fileName: "src/components/support/AccordionItem.js",
                                    lineNumber: 21,
                                    columnNumber: 29
                                }, undefined)
                            ]
                        }, void 0, true, {
                            fileName: "src/components/support/AccordionItem.js",
                            lineNumber: 19,
                            columnNumber: 25
                        }, undefined)
                    }, void 0, false, {
                        fileName: "src/components/support/AccordionItem.js",
                        lineNumber: 18,
                        columnNumber: 21
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/components/support/AccordionItem.js",
                lineNumber: 10,
                columnNumber: 9
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/components/support/AccordionItem.js",
        lineNumber: 5,
        columnNumber: 5
    }, undefined);
};
_c = AccordionItem;
exports.default = AccordionItem;
var _c;
$RefreshReg$(_c, "AccordionItem");

  $parcel$ReactRefreshHelpers$3292.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react-icons/hi2":"9AZgP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}]},["1xC6H","76p2V"], null, "parcelRequire486a")

//# sourceMappingURL=Help.f53ada0d.js.map
