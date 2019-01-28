define(['dart_sdk', 'packages/sticky/sticky_header.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/bootstrap/modules', 'packages/sticky/sticky_header', 'packages/angular/angular.template'], function(dart_sdk, sticky_header$46css, view_type, change_detection, modules, sticky_header, angular) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const sticky_header$46css$46shim = sticky_header$46css.sticky_header$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__core__metadata__view = change_detection.src__core__metadata__view;
  const src__di__reflector = change_detection.src__di__reflector;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const sticky_header$ = sticky_header.sticky_header;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const sticky_header$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $toString = dartx.toString;
  const $setProperty = dartx.setProperty;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let ComponentRefOfStickyHeader = () => (ComponentRefOfStickyHeader = dart.constFn(src__core__linker__component_factory.ComponentRef$(sticky_header$.StickyHeader)))();
  let AppViewOfStickyHeader = () => (AppViewOfStickyHeader = dart.constFn(src__core__linker__app_view.AppView$(sticky_header$.StickyHeader)))();
  let AppViewAndintToAppViewOfStickyHeader = () => (AppViewAndintToAppViewOfStickyHeader = dart.constFn(dart.fnType(AppViewOfStickyHeader(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfStickyHeader = () => (ComponentFactoryOfStickyHeader = dart.constFn(src__core__linker__component_factory.ComponentFactory$(sticky_header$.StickyHeader)))();
  dart.defineLazy(sticky_header$46template, {
    /*sticky_header$46template.styles$StickyHeader*/get styles$StickyHeader() {
      return [sticky_header$46css$46shim.styles];
    }
  });
  const _el_0 = Symbol('_el_0');
  const _expr_0 = Symbol('_expr_0');
  let const$;
  sticky_header$46template.ViewStickyHeader0 = class ViewStickyHeader0 extends src__core__linker__app_view.AppView$(sticky_header$.StickyHeader) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this.addShimC(this[_el_0]);
      this.project(this[_el_0], 0);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = src__core__linker__app_view_utils.interpolate1("", _ctx.height, "px");
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_el_0].style[$setProperty]("height", currVal_0 == null ? null : dart.toString(currVal_0));
        this[_expr_0] = currVal_0;
      }
    }
  };
  (sticky_header$46template.ViewStickyHeader0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_expr_0] = null;
    sticky_header$46template.ViewStickyHeader0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("sticky-header"));
    let t = sticky_header$46template.ViewStickyHeader0._renderType;
    t == null ? sticky_header$46template.ViewStickyHeader0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:sticky/lib/sticky_header.dart" : null, src__core__metadata__view.ViewEncapsulation.Emulated, sticky_header$46template.styles$StickyHeader) : t;
    this.setupComponentType(sticky_header$46template.ViewStickyHeader0._renderType);
  }).prototype = sticky_header$46template.ViewStickyHeader0.prototype;
  dart.addTypeTests(sticky_header$46template.ViewStickyHeader0);
  dart.setMethodSignature(sticky_header$46template.ViewStickyHeader0, () => ({
    __proto__: dart.getMethods(sticky_header$46template.ViewStickyHeader0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(sticky_header$.StickyHeader), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(sticky_header$46template.ViewStickyHeader0, () => ({
    __proto__: dart.getFields(sticky_header$46template.ViewStickyHeader0.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(sticky_header$46template.ViewStickyHeader0, {
    /*sticky_header$46template.ViewStickyHeader0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  sticky_header$46template.viewFactory_StickyHeader0 = function(parentView, parentIndex) {
    return new sticky_header$46template.ViewStickyHeader0.new(parentView, parentIndex);
  };
  dart.defineLazy(sticky_header$46template, {
    /*sticky_header$46template.styles$StickyHeaderHost*/get styles$StickyHeaderHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _StickyHeader_0_5 = Symbol('_StickyHeader_0_5');
  sticky_header$46template._ViewStickyHeaderHost0 = class _ViewStickyHeaderHost0 extends src__core__linker__app_view.AppView$(sticky_header$.StickyHeader) {
    build() {
      this[_compView_0] = new sticky_header$46template.ViewStickyHeader0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_StickyHeader_0_5] = new sticky_header$.StickyHeader.new();
      this[_compView_0].create(this[_StickyHeader_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfStickyHeader()).new(0, this, this.rootEl, this[_StickyHeader_0_5]);
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      this[_compView_0].detectChanges();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_StickyHeader_0_5].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
      this[_StickyHeader_0_5].ngOnDestroy();
    }
  };
  (sticky_header$46template._ViewStickyHeaderHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_StickyHeader_0_5] = null;
    sticky_header$46template._ViewStickyHeaderHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = sticky_header$46template._ViewStickyHeaderHost0.prototype;
  dart.addTypeTests(sticky_header$46template._ViewStickyHeaderHost0);
  dart.setMethodSignature(sticky_header$46template._ViewStickyHeaderHost0, () => ({
    __proto__: dart.getMethods(sticky_header$46template._ViewStickyHeaderHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(sticky_header$.StickyHeader), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(sticky_header$46template._ViewStickyHeaderHost0, () => ({
    __proto__: dart.getFields(sticky_header$46template._ViewStickyHeaderHost0.__proto__),
    [_compView_0]: dart.fieldType(sticky_header$46template.ViewStickyHeader0),
    [_StickyHeader_0_5]: dart.fieldType(sticky_header$.StickyHeader)
  }));
  sticky_header$46template.viewFactory_StickyHeaderHost0 = function(parentView, parentIndex) {
    return new sticky_header$46template._ViewStickyHeaderHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(sticky_header$46template, {
    /*sticky_header$46template._StickyHeaderNgFactory*/get _StickyHeaderNgFactory() {
      return dart.const(new (ComponentFactoryOfStickyHeader()).new("sticky-header", dart.fn(sticky_header$46template.viewFactory_StickyHeaderHost0, AppViewAndintToAppViewOfStickyHeader())));
    }
  });
  dart.copyProperties(sticky_header$46template, {
    get StickyHeaderNgFactory() {
      return sticky_header$46template._StickyHeaderNgFactory;
    }
  });
  dart.defineLazy(sticky_header$46template, {
    /*sticky_header$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  sticky_header$46template.initReflector = function() {
    if (dart.test(sticky_header$46template._visited)) {
      return;
    }
    sticky_header$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(sticky_header$.StickyHeader), sticky_header$46template.StickyHeaderNgFactory);
    angular$46template.initReflector();
  };
  dart.trackLibraries("packages/sticky/sticky_header.template.ddc", {
    "package:sticky/sticky_header.template.dart": sticky_header$46template
  }, '{"version":3,"sourceRoot":"","sources":["sticky_header.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAuBoB,4CAAmB;YAAG,EAAS,iCAAM;;;;;;;;AAarD,UAAM,UAAU,WAAM;AACtB,UAA0B,mBAAmB,iBAAY,CAAC,OAAO;AACjE,UAAI,MAAc,aAAQ;AAC1B,iBAAK,GAAG,8CAAkB,CAAC,GAAG,EAAE,gBAAgB;AAChD,mBAAQ,CAAC,WAAK;AACd,kBAAO,CAAC,WAAK,EAAE;AACf,eAAI,CAAC,uDAAU;AACf,YAAO;IACT;;AAIE,UAA2B,OAAO,QAAG;AACrC,UAAM,YAAY,AAAQ,8CAAY,CAAC,IAAI,IAAI,OAAO,EAAE;AACxD,oBAAI,AAAQ,8CAAY,CAAC,aAAO,EAAE,SAAS,IAAG;AAC5C,mBAAK,MAAM,cAAY,CAAC,UAAU,SAAS,gCAAT,SAAS;AAC3C,qBAAO,GAAG,SAAS;;IAEvB;;6DAzBkB,UAA2B,EAAE,WAAe;IAH3C,WAAK;IACpB,aAAO;AAEuD,wEAAM,qCAAgB,UAAU,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AAClK,eAAM,2BAAG,AAAQ,aAAQ,gBAAc,CAAC;AACxC,kEAAW;gBAAX,sDAAW,GAAK,AAAQ,8CAAY,iBAAiB,CAAE,UAAQ,qCAAS,IAAG,wCAAwC,MAAO,2CAAiB,SAAS,EAAE,4CAAmB;AACzK,2BAAkB,CAAC,sDAAW;EAChC;;;;;;;;;;;;;MAL2B,sDAAW;;;;;gEA6BgB,UAA2B,EAAE,WAAe;AAClG,eAAO,8CAAiB,CAAC,UAAU,EAAE,WAAW;EAClD;;MAEoB,gDAAuB;YAAG;;;;;;;AAQ1C,uBAAW,OAAG,8CAAiB,CAAC,MAAM;AACtC,iBAAM,GAAG,iBAAW,OAAO;AAC3B,6BAAiB,OAAG,+BAAoB;AACxC,uBAAW,OAAO,CAAC,uBAAiB,EAAE,qBAAgB;AACtD,gBAAK,CAAC,WAAM;AACZ,iBAAO,kCAAY,CAAC,GAAG,MAAM,WAAM,EAAE,uBAAiB;IACxD;;AAIE,UAAK,aAAc,YAAY,KAAI;AACnC,uBAAW,cAAc;AACzB,qBAAK,8CAAoB,eAAe,GAAE;AACxC,YAAI,UAAU,EAAE;AACd,iCAAiB,gBAAgB;;;IAGvC;;AAIE,+BAAW;;AACX,6BAAiB,YAAY;IAC/B;;kEA1BuB,UAA2B,EAAE,WAAe;IAFjD,iBAAW;IACR,uBAAiB;AACiC,6EAAM,qCAAgB,KAAK,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;EAAC;;;;;;;;;;;;;oEA6B3G,UAA2B,EAAE,WAAe;AACtG,eAAO,mDAAsB,CAAC,UAAU,EAAE,WAAW;EACvD;;MAE6C,+CAAsB;YAAG,gBAAM,sCAAgB,CAAC,iBAAiB,uGAA6B;;;;;AAEzI,YAAO,gDAAsB;IAC/B;;;MAEI,iCAAQ;YAAG;;;;;AAEb,kBAAI,iCAAQ,GAAE;AACZ;;AAEF,wCAAW;AAEX,IAAO,oCAAiB,CAAC,0CAAY,EAAE,8CAAqB;AAC5D,IAAM,gCAAa;EACrB","file":"sticky_header.template.ddc.js"}');
  // Exports:
  return {
    sticky_header$46template: sticky_header$46template
  };
});

//# sourceMappingURL=sticky_header.template.ddc.js.map
