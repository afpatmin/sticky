define(['dart_sdk', 'packages/angular/src/core/change_detection/change_detection'], function(dart_sdk, change_detection) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__metadata__lifecycle_hooks = change_detection.src__core__metadata__lifecycle_hooks;
  const _root = Object.create(null);
  const sticky_header = Object.create(_root);
  const $onScroll = dartx.onScroll;
  let StreamSubscriptionOfEvent = () => (StreamSubscriptionOfEvent = dart.constFn(async.StreamSubscription$(html.Event)))();
  const _scrollListener = Symbol('_scrollListener');
  const _parseScroll = Symbol('_parseScroll');
  sticky_header.StickyHeader = class StickyHeader extends core.Object {
    get height() {
      return this[height];
    }
    set height(value) {
      this[height] = value;
    }
    get offset() {
      return this[offset];
    }
    set offset(value) {
      this[offset] = value;
    }
    [_parseScroll](e) {
      core.print("scrolling");
    }
    ngAfterViewInit() {}
    ngOnDestroy() {
      let t = this[_scrollListener];
      t == null ? null : t.cancel();
    }
  };
  (sticky_header.StickyHeader.new = function() {
    this[height] = 100;
    this[offset] = 0;
    this[_scrollListener] = null;
    this[_scrollListener] = html.document[$onScroll].listen(dart.bind(this, _parseScroll));
  }).prototype = sticky_header.StickyHeader.prototype;
  dart.addTypeTests(sticky_header.StickyHeader);
  const height = Symbol("StickyHeader.height");
  const offset = Symbol("StickyHeader.offset");
  sticky_header.StickyHeader[dart.implements] = () => [src__core__metadata__lifecycle_hooks.AfterViewInit, src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(sticky_header.StickyHeader, () => ({
    __proto__: dart.getMethods(sticky_header.StickyHeader.__proto__),
    [_parseScroll]: dart.fnType(dart.void, [html.Event]),
    ngAfterViewInit: dart.fnType(dart.void, []),
    ngOnDestroy: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(sticky_header.StickyHeader, () => ({
    __proto__: dart.getFields(sticky_header.StickyHeader.__proto__),
    height: dart.fieldType(core.int),
    offset: dart.fieldType(core.int),
    [_scrollListener]: dart.fieldType(StreamSubscriptionOfEvent())
  }));
  dart.trackLibraries("packages/sticky/sticky_header.ddc", {
    "package:sticky/sticky_header.dart": sticky_header
  }, '{"version":3,"sourceRoot":"","sources":["sticky_header.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;IAYM;;;;;;IAEA;;;;;;mBAQc,CAAW;AAC3B,gBAAK,CAAC;IACR;uBAIA;;AAIE,mCAAe;;IACjB;;;IArBI,YAAM,GAAG;IAET,YAAM,GAAG;IAEiB,qBAAe;AAG3C,yBAAe,GAAG,AAAI,aAAQ,WAAS,OAAO,CAAC,6BAAY;EAC7D","file":"sticky_header.ddc.js"}');
  // Exports:
  return {
    sticky_header: sticky_header
  };
});

//# sourceMappingURL=sticky_header.ddc.js.map
