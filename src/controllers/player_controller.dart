library playerController;

import "../models/player.dart";
import "dart:html";

class PlayerController {
	Player p;

	PlayerController(this.p);

	keyEvent(int keyCode, bool upOrDown) {
		Action action;
		switch (keyCode) {
			case KeyCode.LEFT:
				action = Action.LEFT;
				break;
			case KeyCode.RIGHT:
				action = Action.RIGHT;
				break;
			case KeyCode.UP:
				action = Action.UP;
				break;
			case KeyCode.DOWN:
				action = Action.DOWN;
				break;
		}

		if (action == null) return;

		if (upOrDown) p.actions.remove(action);
		else p.actions.add(action);
	}
}