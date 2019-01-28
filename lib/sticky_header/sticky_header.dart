import 'dart:async';
import 'dart:html' as dom;
import 'dart:math';

import 'package:angular/angular.dart';

@Component(
    selector: 'sticky-header',
    templateUrl: 'sticky_header.html',
    styleUrls: const ['sticky_header.css'],
    directives: const [coreDirectives])
class StickyHeader implements OnDestroy {
  @Input()
  int height = 100;

  int offset = 0;
  int _previousScrollY = 0;
  StreamSubscription<dom.Event> _scrollListener;

  StickyHeader() {
    _scrollListener = dom.document.onScroll.listen(_parseScroll);
  }

  int get scrollY => dom.window.scrollY;

  void _parseScroll(dom.Event e) {
    final delta = _previousScrollY - scrollY;
    offset = min(0, max(offset + delta, -height));
    _previousScrollY = scrollY;
  }

  @override
  void ngOnDestroy() {
    _scrollListener?.cancel();
  }
}
