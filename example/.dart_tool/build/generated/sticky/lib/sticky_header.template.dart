// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'sticky_header.dart';
export 'sticky_header.dart';
import 'dart:async';
import 'dart:html' as dom;
import 'package:angular/angular.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:sticky/sticky_header.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'sticky_header.dart' as import2;
import 'dart:html' as import3;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import5;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import7;
import 'package:angular/src/runtime.dart' as import8;
import 'package:angular/angular.dart';

final List<dynamic> styles$StickyHeader = [import0.styles];

class ViewStickyHeader0 extends AppView<import2.StickyHeader> {
  import3.DivElement _el_0;
  var _expr_0;
  static RenderComponentType _renderType;
  ViewStickyHeader0(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import3.document.createElement('sticky-header');
    _renderType ??= import7.appViewUtils.createRenderType((import8.isDevMode ? 'asset:sticky/lib/sticky_header.dart' : null), ViewEncapsulation.Emulated, styles$StickyHeader);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.StickyHeader> build() {
    final _rootEl = rootEl;
    final import3.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import3.document;
    _el_0 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_0);
    project(_el_0, 0);
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.StickyHeader _ctx = ctx;
    final currVal_0 = import7.interpolate1('', _ctx.height, 'px');
    if (import7.checkBinding(_expr_0, currVal_0)) {
      _el_0.style.setProperty('height', currVal_0?.toString());
      _expr_0 = currVal_0;
    }
  }
}

AppView<import2.StickyHeader> viewFactory_StickyHeader0(AppView<dynamic> parentView, int parentIndex) {
  return ViewStickyHeader0(parentView, parentIndex);
}

final List<dynamic> styles$StickyHeaderHost = const [];

class _ViewStickyHeaderHost0 extends AppView<import2.StickyHeader> {
  ViewStickyHeader0 _compView_0;
  import2.StickyHeader _StickyHeader_0_5;
  _ViewStickyHeaderHost0(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.StickyHeader> build() {
    _compView_0 = ViewStickyHeader0(this, 0);
    rootEl = _compView_0.rootEl;
    _StickyHeader_0_5 = import2.StickyHeader();
    _compView_0.create(_StickyHeader_0_5, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _StickyHeader_0_5);
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    _compView_0.detectChanges();
    if (!import7.AppViewUtils.throwOnChanges) {
      if (firstCheck) {
        _StickyHeader_0_5.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
    _StickyHeader_0_5.ngOnDestroy();
  }
}

AppView<import2.StickyHeader> viewFactory_StickyHeaderHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewStickyHeaderHost0(parentView, parentIndex);
}

const ComponentFactory<import2.StickyHeader> _StickyHeaderNgFactory = const ComponentFactory('sticky-header', viewFactory_StickyHeaderHost0);
ComponentFactory<import2.StickyHeader> get StickyHeaderNgFactory {
  return _StickyHeaderNgFactory;
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(StickyHeader, StickyHeaderNgFactory);
  _ref0.initReflector();
}
