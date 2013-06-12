library level;

import "vector.dart";

class Action {
	static const LEFT = const Direction._(0);

	static const RIGHT = const Direction._(1);

	static const JUMP = const Direction._(1);

	static get values => [LEFT, RIGHT, JUMP];

	final int value;

	const Action._(this.value);

	int get hashCode => value;
}

class Direction {
	static const LEFT = const Direction._(0);

	static const RIGHT = const Direction._(1);

	static get values => [LEFT, RIGHT];

	final int value;

	const Direction._(this.value);

	int get hashCode => value;
}

class Player {
	Vector pos = new Vector(0, 0);

	Direction facing = Direction.RIGHT;

	Set<Action> actions = new Set();

	Player(num x, num y) {
		pos.move(x, y);
	}

	act(delta) {
		actions.forEach((action) {
			switch (action) {
				case Action.LEFT:
					this.move(Direction.LEFT);
					break;
				case Action.RIGHT:
					this.move(Direction.RIGHT);
					break;
				case Action.JUMP:
					break;
			}
		});
	}

	move(Direction dir) {
		num xOffset = 20, yOffset = 15;
		switch (dir) {
			case Direction.LEFT:
				pos.x -= xOffset;
				break;
			case Direction.RIGHT:
				pos.x += xOffset;
				break;
		}
	}

}