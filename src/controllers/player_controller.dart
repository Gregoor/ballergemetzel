library playerController;

import "../models/player.dart";
import "dart:html";

class PlayerController {
	Player p;

	PlayerController(this.p);

	keyDown(key) => keyEvent(key, false);
	keyUp(key) => keyEvent(key, true);

	keyEvent(int key, bool upOrDown) {
		key = key || window.event;
		Action action;

		switch (key.keyCode) {
			case KeyCode.LEFT:
				action = Action.LEFT;
				break;
		}

		if (action == null) return;

		if (upOrDown) p.actions.remove(action);
		else p.actions.add(action);
	}
}
