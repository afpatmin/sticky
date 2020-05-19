import 'dart:async';
import 'dart:html' as dom;

import 'package:angular/angular.dart';

@Component(
    selector: 'sticky-popin',
    templateUrl: 'sticky_popin.html',
    styleUrls: ['sticky_popin.css'],
    directives: [NgClass, NgStyle],
    providers: [])
class StickyPopin implements OnInit, OnDestroy {
  final StreamController<bool> _visibleChangeController =
      StreamController<bool>();

  bool _animate = false;
  bool get animate => _animate;

  @ViewChild('content')
  dom.DivElement content;

  Map<String, String> fixedStyle = {};

  @Input()
  bool visible = false;

  @Input()
  bool overlay = true;

  /// 'top', 'right', 'bottom', 'left'
  @Input()
  String position = 'bottom';

  @Output('visibleChange')
  Stream<bool> get visibleChange => _visibleChangeController.stream;

  StickyPopin();

  void onDrag(dom.Event event) {
    if (visible == true && overlay == true) {
      event.stopPropagation();
    }
  }

  void onOverlayClick() {
    if (overlay == true) {
      _visibleChangeController.add(false);
    }
  }

  String get transform {
    if (content == null || visible == true) {
      return '';
    }
    final rect = content.getBoundingClientRect();

    switch (position) {
      case 'top':
        return 'translateY(-${rect.height}px)';

      case 'right':
        return 'translateX(${rect.width}px)';

      case 'bottom':
        return 'translateY(${rect.height}px)';

      case 'left':
        return 'translateX(${-rect.width}px)';

      default:
        return '';
    }
  }

  @override
  void ngOnInit() {
    switch (position) {
      case 'top':
        fixedStyle['top'] = '0';
        fixedStyle['right'] = '0';
        fixedStyle['bottom'] = 'auto';
        fixedStyle['left'] = '0';
        break;

      case 'right':
        fixedStyle['top'] = '0';
        fixedStyle['right'] = '0';
        fixedStyle['bottom'] = '0';
        fixedStyle['left'] = 'auto';
        break;

      case 'bottom':
        fixedStyle['top'] = 'auto';
        fixedStyle['right'] = '0';
        fixedStyle['bottom'] = '0';
        fixedStyle['left'] = '0';
        break;

      case 'left':
        fixedStyle['top'] = '0';
        fixedStyle['right'] = 'auto';
        fixedStyle['bottom'] = '0';
        fixedStyle['left'] = '0';
        break;

      default:
        break;
    }
    Future.delayed(const Duration(milliseconds: 200)).then((_) {
      _animate = true;
    });
  }

  @override
  void ngOnDestroy() {
    _visibleChangeController.close();
  }
}
