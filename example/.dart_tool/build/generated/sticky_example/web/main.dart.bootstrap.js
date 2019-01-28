/* ENTRYPOINT_EXTENTION_MARKER */
(function() {
var baseUrl = (function () {
  // Attempt to detect base url using <base href> html tag
  // base href should start with "/"
  if (typeof document !== 'undefined') {
    var el = document.getElementsByTagName('base');
    if (el && el[0] && el[0].getAttribute("href") && el[0].getAttribute("href").startsWith("/")){
      return el[0].href;
    }
  }
  // Attempt to detect --precompiled mode for tests, and set the base url
  // appropriately, otherwise set it to '/'.
  var pathParts = location.pathname.split("/");
  if (pathParts[0] == "") {
    pathParts.shift();
  }
  var baseUrl;
  if (pathParts.length > 1 && pathParts[1] == "test") {
    return "/" + pathParts.slice(0, 2).join("/") + "/";
  }
  return "/";
}());

let modulePaths = {
 "dart_sdk": "packages/$sdk/dev_compiler/amd/dart_sdk",
 "packages/angular/angular": "packages/angular/angular.ddc",
 "packages/angular/angular.template": "packages/angular/angular.template.ddc",
 "packages/angular/core": "packages/angular/core.ddc",
 "packages/angular/core.template": "packages/angular/core.template.ddc",
 "packages/angular/di": "packages/angular/di.ddc",
 "packages/angular/di.template": "packages/angular/di.template.ddc",
 "packages/angular/src/bootstrap/modules": "packages/angular/src/bootstrap/modules.ddc",
 "packages/angular/src/bootstrap/run.template": "packages/angular/src/bootstrap/run.template.ddc",
 "packages/angular/src/core/application_tokens": "packages/angular/src/core/application_tokens.ddc",
 "packages/angular/src/core/application_tokens.template": "packages/angular/src/core/application_tokens.template.ddc",
 "packages/angular/src/core/change_detection/change_detection": "packages/angular/src/core/change_detection/change_detection.ddc",
 "packages/angular/src/core/change_detection/change_detection.template": "packages/angular/src/core/change_detection/change_detection.template.ddc",
 "packages/angular/src/core/linker/view_type": "packages/angular/src/core/linker/view_type.ddc",
 "packages/angular/src/core/zone/ng_zone": "packages/angular/src/core/zone/ng_zone.ddc",
 "packages/collection/collection": "packages/collection/collection.ddc",
 "packages/collection/src/algorithms": "packages/collection/src/algorithms.ddc",
 "packages/collection/src/canonicalized_map": "packages/collection/src/canonicalized_map.ddc",
 "packages/collection/src/comparators": "packages/collection/src/comparators.ddc",
 "packages/collection/src/iterable_zip": "packages/collection/src/iterable_zip.ddc",
 "packages/collection/src/priority_queue": "packages/collection/src/priority_queue.ddc",
 "packages/collection/src/utils": "packages/collection/src/utils.ddc",
 "packages/intl/date_symbols": "packages/intl/date_symbols.ddc",
 "packages/intl/intl": "packages/intl/intl.ddc",
 "packages/intl/number_symbols": "packages/intl/number_symbols.ddc",
 "packages/intl/number_symbols_data": "packages/intl/number_symbols_data.ddc",
 "packages/intl/src/plural_rules": "packages/intl/src/plural_rules.ddc",
 "packages/js/js": "packages/js/js.ddc",
 "packages/js/js_util": "packages/js/js_util.ddc",
 "packages/logging/logging": "packages/logging/logging.ddc",
 "packages/meta/dart2js": "packages/meta/dart2js.ddc",
 "packages/meta/meta": "packages/meta/meta.ddc",
 "packages/path/path": "packages/path/path.ddc",
 "packages/stack_trace/stack_trace": "packages/stack_trace/stack_trace.ddc",
 "packages/sticky/sticky_header": "packages/sticky/sticky_header.ddc",
 "packages/sticky/sticky_header.css.shim": "packages/sticky/sticky_header.css.shim.ddc",
 "packages/sticky/sticky_header.template": "packages/sticky/sticky_header.template.ddc",
 "packages/sticky_example/app_component": "packages/sticky_example/app_component.ddc",
 "packages/sticky_example/app_component.css.shim": "packages/sticky_example/app_component.css.shim.ddc",
 "packages/sticky_example/app_component.template": "packages/sticky_example/app_component.template.ddc",
 "web/main": "main.ddc"
};
if(!window.$dartLoader) {
   window.$dartLoader = {
     moduleIdToUrl: new Map(),
     urlToModuleId: new Map(),
     rootDirectories: new Array(),
   };
}
let customModulePaths = {};
window.$dartLoader.rootDirectories.push(window.location.origin + baseUrl);
for (let moduleName of Object.getOwnPropertyNames(modulePaths)) {
  let modulePath = modulePaths[moduleName];
  if (modulePath != moduleName) {
    customModulePaths[moduleName] = modulePath;
  }
  var src = window.location.origin + '/' + modulePath + '.js';
  // dartdevc only strips the final extension when adding modules to source
  // maps, so we need to do the same.
  if (moduleName != 'dart_sdk') {
    moduleName += '.ddc';
  }
  if (window.$dartLoader.moduleIdToUrl.has(moduleName)) {
    continue;
  }
  $dartLoader.moduleIdToUrl.set(moduleName, src);
  $dartLoader.urlToModuleId.set(src, moduleName);
}
// Whenever we fail to load a JS module, try to request the corresponding
// `.errors` file, and log it to the console.
(function() {
  var oldOnError = requirejs.onError;
  requirejs.onError = function(e) {
    if (e.originalError && e.originalError.srcElement) {
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (this.readyState == 4) {
          var message;
          if (this.status == 200) {
            message = this.responseText;
          } else {
            message = "Unknown error loading " + e.originalError.srcElement.src;
          }
          console.error(message);
          var errorEvent = new CustomEvent(
            'dartLoadException', { detail: message });
          window.dispatchEvent(errorEvent);
        }
      };
      xhr.open("GET", e.originalError.srcElement.src + ".errors", true);
      xhr.send();
    }
    // Also handle errors the normal way.
    if (oldOnError) oldOnError(e);
  };
}());

var baseUrl = (function () {
  // Attempt to detect base url using <base href> html tag
  // base href should start with "/"
  if (typeof document !== 'undefined') {
    var el = document.getElementsByTagName('base');
    if (el && el[0] && el[0].getAttribute("href") && el[0].getAttribute("href").startsWith("/")){
      return el[0].href;
    }
  }
  // Attempt to detect --precompiled mode for tests, and set the base url
  // appropriately, otherwise set it to '/'.
  var pathParts = location.pathname.split("/");
  if (pathParts[0] == "") {
    pathParts.shift();
  }
  var baseUrl;
  if (pathParts.length > 1 && pathParts[1] == "test") {
    return "/" + pathParts.slice(0, 2).join("/") + "/";
  }
  return "/";
}());
;

require.config({
    baseUrl: baseUrl,
    waitSeconds: 0,
    paths: customModulePaths
});
require(["web/main", "dart_sdk"], function(app, dart_sdk) {
  dart_sdk.dart.ignoreWhitelistedErrors(false);
  dart_sdk.dart.setStartAsyncSynchronously(true);
  dart_sdk._isolate_helper.startRootIsolate(() => {}, []);
var baseUrl = (function () {
  // Attempt to detect base url using <base href> html tag
  // base href should start with "/"
  if (typeof document !== 'undefined') {
    var el = document.getElementsByTagName('base');
    if (el && el[0] && el[0].getAttribute("href") && el[0].getAttribute("href").startsWith("/")){
      return el[0].href;
    }
  }
  // Attempt to detect --precompiled mode for tests, and set the base url
  // appropriately, otherwise set it to '/'.
  var pathParts = location.pathname.split("/");
  if (pathParts[0] == "") {
    pathParts.shift();
  }
  var baseUrl;
  if (pathParts.length > 1 && pathParts[1] == "test") {
    return "/" + pathParts.slice(0, 2).join("/") + "/";
  }
  return "/";
}());

  dart_sdk._debugger.registerDevtoolsFormatter();
  if (window.$dartStackTraceUtility && !window.$dartStackTraceUtility.ready) {
    window.$dartStackTraceUtility.ready = true;
    let dart = dart_sdk.dart;
    window.$dartStackTraceUtility.setSourceMapProvider(
      function(url) {
        url = url.replace(baseUrl, '/');
        var module = window.$dartLoader.urlToModuleId.get(url);
        if (!module) return null;
        return dart.getSourceMap(module);
      });
  }
  if (window.postMessage) {
    window.postMessage({ type: "DDC_STATE_CHANGE", state: "start" }, "*");
  }

  app.main.main();
});
})();
