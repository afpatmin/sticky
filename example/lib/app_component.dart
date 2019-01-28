import 'package:angular/angular.dart';
import 'package:sticky/sticky_header.dart';

@Component(
  selector: 'app',
  templateUrl: 'app_component.html',
  styleUrls: const ['app_component.css'],
  directives: const [StickyHeader]
)
class AppComponent {
  AppComponent();
}