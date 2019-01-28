// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'app_component.dart';
export 'app_component.dart';
import 'package:angular/angular.dart';
import 'package:sticky/sticky_header.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:sticky/sticky_header.template.dart' as _ref1;
import 'package:sticky_example/app_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'app_component.dart' as import2;
import 'dart:html' as import3;
import 'package:sticky/sticky_header.template.dart' as import4;
import 'package:sticky/sticky_header.dart' as import5;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import7;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import9;
import 'package:angular/src/runtime.dart' as import10;
import 'package:angular/angular.dart';

final List<dynamic> styles$AppComponent = [import0.styles];

class ViewAppComponent0 extends AppView<import2.AppComponent> {
  import3.Element _el_0;
  import4.ViewStickyHeader0 _compView_0;
  import5.StickyHeader _StickyHeader_0_5;
  import3.Element _el_1;
  static RenderComponentType _renderType;
  ViewAppComponent0(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import3.document.createElement('app');
    _renderType ??= import9.appViewUtils.createRenderType((import10.isDevMode ? 'asset:sticky_example/lib/app_component.dart' : null), ViewEncapsulation.Emulated, styles$AppComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.AppComponent> build() {
    final _rootEl = rootEl;
    final import3.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    _compView_0 = import4.ViewStickyHeader0(this, 0);
    _el_0 = _compView_0.rootEl;
    parentRenderNode.append(_el_0);
    addShimC(_el_0);
    _StickyHeader_0_5 = import5.StickyHeader();
    var doc = import3.document;
    _el_1 = doc.createElement('p');
    addShimE(_el_1);
    import3.Text _text_2 = import3.Text('hej');
    _el_1.append(_text_2);
    _compView_0.create(_StickyHeader_0_5, [
      [_el_1]
    ]);
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    if (firstCheck) {
      (_StickyHeader_0_5.height = 150);
    }
    _compView_0.detectChanges();
    if (!import9.AppViewUtils.throwOnChanges) {
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

AppView<import2.AppComponent> viewFactory_AppComponent0(AppView<dynamic> parentView, int parentIndex) {
  return ViewAppComponent0(parentView, parentIndex);
}

final List<dynamic> styles$AppComponentHost = const [];

class _ViewAppComponentHost0 extends AppView<import2.AppComponent> {
  ViewAppComponent0 _compView_0;
  import2.AppComponent _AppComponent_0_5;
  _ViewAppComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.AppComponent> build() {
    _compView_0 = ViewAppComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _AppComponent_0_5 = import2.AppComponent();
    _compView_0.create(_AppComponent_0_5, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _AppComponent_0_5);
  }

  @override
  void detectChangesInternal() {
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView<import2.AppComponent> viewFactory_AppComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewAppComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.AppComponent> _AppComponentNgFactory = const ComponentFactory('app', viewFactory_AppComponentHost0);
ComponentFactory<import2.AppComponent> get AppComponentNgFactory {
  return _AppComponentNgFactory;
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(AppComponent, AppComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
}
