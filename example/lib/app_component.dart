import 'package:angular/angular.dart';
import 'package:sticky/sticky_header/sticky_header.dart';
import 'package:sticky/sticky_popin/sticky_popin.dart';

@Component(
    selector: 'app',
    templateUrl: 'app_component.html',
    styleUrls: const ['app_component.css'],
    directives: const [StickyHeader, StickyPopin])
class AppComponent {
  AppComponent();

  bool visible = false;
}
