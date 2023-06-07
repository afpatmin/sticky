import 'dart:async';
import 'dart:html' as dom;
import 'dart:math';

import 'package:ngdart/angular.dart';

@Component(
    selector: 'sticky-header',
    templateUrl: 'sticky_header.html',
    styleUrls: ['sticky_header.css'],
    directives: [coreDirectives])
class StickyHeader implements AfterChanges, OnDestroy {
  @Input()
  late int height;

  /// Hide when scrolling down
  @Input()
  bool hide = true;

  int offset = 0;
  int _previousScrollY = 0;
  StreamSubscription<dom.Event>? _scrollListener;
  final dom.Element _host;

  StickyHeader(this._host) {
    _scrollListener = dom.document.onScroll.listen(_parseScroll);
  }

  int get scrollY => dom.window.scrollY;

  void _parseScroll(dom.Event e) {
    if (scrollY >= 0) {
      if (hide == true) {
        final delta = _previousScrollY - scrollY;
        offset = min(0, max(offset + delta, -height));
        _host.style.top = '${offset}px';
      } else {
        _host.style.top = '0px';
      }

      if (scrollY == 0) {
        _host.classes.remove('shadow');
      } else if (!_host.classes.contains('shadow')) {
        _host.classes.add('shadow');
      }
      _previousScrollY = scrollY;
    }
  }

  @override
  void ngOnDestroy() {
    _scrollListener?.cancel();
  }

  @override
  void ngAfterChanges() {
    _host.style.height = '${height}px';
  }
}
