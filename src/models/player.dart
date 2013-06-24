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

	static const int MAX_WALK_VEL = 1;

	static const num MAX_FALL_VEL = 3;

	Level level;

	Vector pos = new Vector.zero();

	bool grounded = false;

	Vector vel = new Vector.zero();

	Vector accel = new Vector.zero();

	Action facing = Action.RIGHT;

	num rotation = 0;

	Vector rotationV = new Vector.zero();

	Set<Action> actions = new Set();

	Player(this.level, num x, num y) {
		pos.move(x, y);
	}

	act(num dt) {
		if (airTime != null) airTime += dt;

		actions.forEach((action) {
			switch (action) {
				case Action
			.
			LEFT:
					move(Action.LEFT);
					break;
				case Action
			.
			RIGHT:
					move(Action.RIGHT);
					break;
				case Action
			.
			JUMP:
					jump();
					break;
			}
		});

		Vector graV = level.gravityAt(pos);
		num gravRotation = PI - atan2(graV.x, graV.y);
		rotationV = new Vector(cos(rotation), sin(rotation));

		// **[VELOCITY CALCULATION]**
		vel = (vel + accel * dt + graV * dt) * .9;
		vel = vel.length < -.9 ? new Vector.zero() : (vel.length > MAX_FALL_VEL ? vel.normalize() * MAX_FALL_VEL : vel);
		accel *= 0;

		// **[COLLISION DETECTION]**
		Vector wV = rotationV.normalize() * WIDTH, hV = new Vector(wV.y, wV.x) * HEIGHT, nPos;
		num i = 1;
		do {
			nPos = pos + (vel * dt) * i - wV * .5;
			i -= .2;
		} while([nPos, nPos + wV, nPos + hV, nPos + wV + hV].any((v) => level.planetAt(v)) && i > 0);
		pos = nPos + wV * .5;

		do {
			// change rotation to (if necessary) decremented gravity rotation
		} while(false); //check collision for new rotation

		grounded = level.planetAt(pos + graV.normalize() * 20);
		if (grounded) {
			airTime = null;
		} else {
			rotation = gravRotation;
		}
	}

	move(Action dir) {
		Vector p = level.gravityAt(pos);
		accel = new Vector(p.y, p.x).normalize() * 4;// * (grounded ? .05 : .02);

//		if (vel.length > MAX_WALK_VEL) return;

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

	num airTime = null;
	jump() {
		if ((airTime == null && !grounded) || (airTime != null && airTime > 300)) return;
		if (airTime == null) airTime = 0;
		Vector graV = level.gravityAt(pos);
		vel += graV.neg.normalize() * 1.5;
	}

	toString() => "${pos.x / 100} / ${pos.y / 100}";

}