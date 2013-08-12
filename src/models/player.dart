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

	static const int WIDTH = 60;

	static const int MAX_WALK_VEL = 1;

	static const num MAX_FALL_VEL = 3;

	Level level;

	Vector pos;

	bool grounded = false;

	Vector vel = new Vector.zero();

	Vector accel = new Vector.zero();

	Action facing = Action.RIGHT;

	num rotation = 0;

	Vector rotationV = new Vector.zero();

	Set<Action> actions = new Set();

	Player(this.level, num x, num y) {
		pos = new Vector(x, y);
	}

	act(num dt) {
		if (airTime != null) airTime += dt;

		actions.forEach((action) {
			switch (action) {
				case Action.LEFT:
					move(Action.LEFT);
					break;
				case Action.RIGHT:
					move(Action.RIGHT);
					break;
				case Action.JUMP:
					jump();
					break;
			}
		});
		Vector graV = level.gravityAt(pos);
		num gravRotation = PI - atan2(graV.x, graV.y);
		rotationV = new Vector(sin(rotation), cos(rotation));

		// **[VELOCITY CALCULATION]**
		vel = vel + vel.neg.scale(.01 * dt) + accel.scale(dt) + graV.scale(dt);
		vel = vel.length < .9 ? new Vector.zero() : (vel.length > MAX_FALL_VEL ? vel.normalize().scale(MAX_FALL_VEL) : vel);
		accel = new Vector.zero();

		// **[COLLISION DETECTION]**
		Vector widthV = new Vector(-rotationV.y, rotationV.x).scale(WIDTH), heightV = rotationV.neg.scale(HEIGHT), bottomLeft;
		num i = 1;
		do {
			bottomLeft = pos - widthV.scale(.5) + vel.scale(dt * i);
			i -= .1;
		} while([bottomLeft, bottomLeft + widthV, bottomLeft + heightV, bottomLeft + widthV + heightV].any((v) => level.planetAt(v)) && i > 0);
		pos = bottomLeft + widthV.scale(.5);

		do {
			// change rotation to (if necessary) decremented gravity rotation
		} while(false); //check collision for new rotation

		grounded = level.planetAt(pos + graV.normalize().scale(20));
		if (grounded) {
			airTime = null;
		} else {
			rotation = gravRotation;
		}
	}

	move(Action dir) {
		Vector p = level.gravityAt(pos);
		accel = new Vector(p.y, p.x).normalize().scale(4);// * (grounded ? .05 : .02);

//		if (vel.length > MAX_WALK_VEL) return;

		switch (dir) {
			case Action.LEFT:
				accel.x = -accel.x;
				break;
			case Action.RIGHT:
				accel.y = -accel.y;
				break;
		}
	}

	num airTime = null;
	jump() {
//		if ((airTime == null && !grounded) || (airTime != null && airTime > 300)) return;
		if (airTime == null) airTime = 0;
		Vector graV = level.gravityAt(pos);
		vel += graV.neg.normalize().scale(50);
	}

	toString() => "${pos.x / 100} / ${pos.y / 100}";

}