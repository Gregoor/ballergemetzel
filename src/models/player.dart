library player;

import "vector.dart";
import "dart:math";
import "level.dart";

class Action {
	static const LEFT = const Action._(0);

	static const RIGHT = const Action._(1);

	static const JUMP = const Action._(2);

	static const UP = const Action._(3);

	static const DOWN = const Action._(4);

	static get values => [LEFT, RIGHT, JUMP, UP, DOWN];

	final int value;

	const Action._(this.value);

	int get hashCode => value;
}


class Player {
	static const int HEIGHT = 195;
	static const int WIDTH = 70;

	static const int MAX_VEL = 2;
	static const num ACCEL = .1;

	Level level;

	Vector pos = new Vector.zero();
	Vector vel = new Vector.zero();
	Vector accel = new Vector.zero();

	Action facing = Action.RIGHT;

	Set<Action> actions = new Set();

	Player(this.level, num x, num y) {
		pos.move(x, y);
	}

	num s = 0;
	act(dt) {
		actions.forEach((action) {
			switch (action) {
				case Action.LEFT:
					this.move(Action.LEFT);
					break;
				case Action.RIGHT:
					this.move(Action.RIGHT);
					break;
				case Action.UP:
					this.move(Action.UP);
					break;
				case Action.DOWN:
					this.move(Action.DOWN);
					break;
				case Action.JUMP:
					break;
			}
		});

//		if (s += dt > 1000) {
//			print(level.gravityAt(pos));
//			s = 0;
//		}
		vel = (vel + accel * dt + level.gravityAt(pos) * dt) * .9;
		vel = vel.length < .9 ? new Vector.zero() : (vel.length > MAX_VEL ? vel.normalize() * MAX_VEL : vel);
		pos += vel * dt;

		accel *= 0;
	}

	move(Action dir) {
		switch (dir) {
			case Action.LEFT:
				accel.x = max(accel.x - ACCEL, -ACCEL);
				break;
			case Action.RIGHT:
				accel.x = min(accel.x + ACCEL, ACCEL);
				break;
			case Action.UP:
				accel.y = max(accel.y - ACCEL, -ACCEL);
				break;
		case Action.DOWN:
				accel.y = min(accel.y + ACCEL, ACCEL);
				break;
		}
	}

	toString() => "${pos.x / 100} / ${pos.y / 100}";

}