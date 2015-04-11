import "vector.dart";
import "level.dart";

abstract class PhysActor {

	static const int MAX_FALL_VEL = 10;

	Vector pos, vel = new Vector.zero(), accel = new Vector.zero(), rotationV = new Vector.zero();

	num mass;

	Level level;

	act(num dt, Vector graV) {
		rotationV = graV.normalize();
		// **[VELOCITY CALCULATION]**
		vel += accel.scale(dt) + graV.scale(dt);
		vel = vel.length > MAX_FALL_VEL ? vel.normalize().scale(MAX_FALL_VEL) : vel;
		accel = new Vector.zero();
		Vector newPos = pos;
		for (num i = 0; i < dt; i++) {
			pos = newPos;
			newPos += vel;
			if (level.planetAt(newPos)) {
				return collide();
			}
		}

	}

	collide();

}