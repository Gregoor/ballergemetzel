import "physactor.dart";

class Projectile extends PhysActor {

	boolean hit = false;

	num mass = .5;

	num lifetime = 0;

	Projectile(level, pos, accel) {
		this.level = level;
		this.pos = pos;
		this.accel = accel;
	}

	act(num dt, Vector graV) {
		super.act(dt, graV);
		print(pos);
		lifetime += dt;
	}

	collide() {
		hit = true;
	}

}