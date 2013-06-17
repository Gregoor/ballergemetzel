library player;

import "vector.dart";
import "dart:math";
import "level.dart";

class Action {
	static const LEFT = const Action._(0);

	static const RIGHT = const Action._(1);

	static const JUMP = const Action._(2);

	static get values => [LEFT, RIGHT, JUMP];

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

	num rotation = 0;
	Vector rotationV = new Vector.zero();

	Set<Action> actions = new Set();

	Player(this.level, num x, num y) {
		pos.move(x, y);
	}

	act(dt) {
		actions.forEach((action) {
			switch (action) {
				case Action
			.
			LEFT:
					this.move(Action.LEFT);
					break;
				case Action
			.
			RIGHT:
					this.move(Action.RIGHT);
					break;
				case Action
			.
			JUMP:
					break;
			}
		});

		Vector graV = level.gravityAt(pos);
		num gravRotation = PI - atan2(graV.x, graV.y);
//		rotation += (gravRotation - rotation).abs() > PI ? .1 : -.1;
//		rotation = (rotation % (2 * PI)).abs();
		rotation = gravRotation;
		rotationV = new Vector(cos(rotation), sin(rotation));

		vel = (vel + accel * dt + graV * dt) * .9;
		vel = vel.length < .9 ? new Vector.zero() : (vel.length > MAX_VEL ? vel.normalize() * MAX_VEL : vel);
		accel *= 0;

		Vector nPos = pos + (vel * dt);

		Vector wV = rotationV.normalize() * WIDTH;
		Vector hV = new Vector(wV.y, wV.x) * HEIGHT;
		if (level.planetAt([nPos, nPos + wV, nPos + hV, nPos + wV + hV])) return;

		pos = nPos;
	}

	move(Action dir) {
		//TODO: Get the planet in a nonstatic way
		Vector p = level.planets[0].pos - pos;
		accel = new Vector(p.y, p.x).normalize() * 2;

		switch (dir) {
			case Action
		.
		LEFT:
			accel.x = -accel.x;
				break;
			case Action
		.
		RIGHT:
			accel.y = -accel.y;
				break;
		}
	}

	toString() => "${pos.x / 100} / ${pos.y / 100}";

}