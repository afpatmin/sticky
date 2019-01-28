import 'dart:async';
import 'dart:html' as dom;

import 'package:angular/angular.dart';

@Component(
    selector: 'sticky-header',
    templateUrl: 'sticky_header.html',
    styleUrls: const ['sticky_header.css'],
    directives: const [coreDirectives])
class StickyHeader implements AfterViewInit, OnDestroy {
  @Input()
  int height = 100;

  int offset = 0;

  int _previousOffset = 0;

  StreamSubscription<dom.Event> _scrollListener;

  StickyHeader() {
    _scrollListener = dom.document.onScroll.listen(_parseScroll);
  }

  void _parseScroll(dom.Event e) {
    print('scrolling');
    offset = dom.window.scrollY;
    

    _previousOffset = offset;
  }

  @override
  void ngAfterViewInit() {    
  }

  @override
  void ngOnDestroy() {
    _scrollListener?.cancel();  
  }
}
