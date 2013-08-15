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
			case KeyCode.SPACE:
				action = Action.JUMP;
				break;
			case KeyCode.D:
				action = Action.SHOOT_RIGHT;
				break;
			case KeyCode.A:
				action = Action.SHOOT_LEFT;
				break;
		}

		if (action == null) return;

		if (upOrDown) p.actions.remove(action);
		else p.actions.add(action);
	}
}
