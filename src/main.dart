import 'dart:html';
import 'package:js/js.dart' as js;

main() {
	js.context.Physics((world) {
		print(world);
	});
}