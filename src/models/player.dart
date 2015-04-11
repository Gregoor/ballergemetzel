library player;

import "vector.dart";
import "dart:math";
import "level.dart";
import "projectile.dart";
import "physactor.dart";

class Action {
	static const LEFT = const Action._(0);

	static const RIGHT = const Action._(1);

	static const JUMP = const Action._(2);

	static const SHOOT_RIGHT = const Action._(3);

	static const SHOOT_LEFT = const Action._(4);

	static get values => [LEFT, RIGHT, JUMP, SHOOT_RIGHT, SHOOT_LEFT];

	final int value;

	const Action._(this.value);

	int get hashCode => value;
}


class Player extends PhysActor {
	static const int HEIGHT = 195;

	static const int WIDTH = 60;

	static const int MAX_FALL_VEL = 4;
	static const int MAX_WALK_VEL = 1;

	bool grounded = false;

	Action facing = Action.RIGHT;

	num rotation = 0;

	num mass = 90;

	Set<Action> actions = new Set();

	Player(Level level, num x, num y) {
		this.level = level;
		pos = new Vector(x, y);
	}

	act(num dt, Vector graV) {
		super.act(dt, graV);
		if (airTime != null) airTime += dt;

		actions.forEach((action) {
			switch (action) {
				case Action.LEFT:
					move(dt, Action.LEFT);
					break;
				case Action.RIGHT:
					move(dt, Action.RIGHT);
					break;
				case Action.JUMP:
					jump(graV);
					break;
				case Action.SHOOT_RIGHT:
					shoot(dt, Action.SHOOT_RIGHT);
					break;
				case Action.SHOOT_LEFT:
					shoot(dt, Action.SHOOT_LEFT);
					break;
			}
		});

		do {
			// change rotation to (if necessary) decremented gravity rotation
		} while(false); //check collision for new rotation

		grounded = level.planetAt(pos + rotationV.scale(20));
		if (grounded) {
			airTime = null;
		} else {
			rotation = PI - atan2(rotationV.x, rotationV.y);
		}
	}

	collide() {

	}

	move(num dt, Action dir) {
//		num rad = -50 * (PI / 180);
//		num sn = sin(rad), cs = cos(rad);
//		Vector direction = new Vector(rotationV.y * cs - rotationV.x * sn, rotationV.y * sn + rotationV.x * cs);
		Vector direction = new Vector(rotationV.y, rotationV.x);
		accel = direction.normalize().scale(15 * dt);// * (grounded ? .05 : .02);

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
	jump(graV) {
//		if ((airTime == null && !grounded) || (airTime != null && airTime > 300)) return;
		if (airTime == null) airTime = 0;
		vel += graV.neg.scale(150);
	}

	shoot(num dt, Action direction) { // Later Vector target
		Vector widthV = new Vector(-rotationV.y, rotationV.x).scale(WIDTH), heightV = rotationV.neg.scale(HEIGHT);

		Vector start = pos - widthV.scale(.5) + heightV.scale(.8), accel = widthV.normalize().scale(5 * dt);
		if (direction == Action.SHOOT_RIGHT) {
			accel = accel.neg;
		}
		level.projectiles.add(new Projectile(level, start, accel));
	}

	toString() => "${pos.x / 100} / ${pos.y / 100}";

}
