library level;

import "vector.dart";
import "grid.dart";
import "dart:math";

class Level {
	int width = 5000, height = 5000;

	static const GRAVITY_PREC = .01;

	List planets = [];

	Grid gravity;

	Level() {
		planets.add(new Planet(3000, 1000, 300));
		gravity = new Grid(width * GRAVITY_PREC, height * GRAVITY_PREC);
		buildGravityMap();
	}

	act(delta) {

	}

	buildGravityMap() {
		print("building gravity map");
		Planet p = planets[0];
		for (int x = 0; x < gravity.w; x++) {
			for (int y = 0; y < gravity.h; y++) {
				gravity[x][y] = (p.pos - new Vector(x  / GRAVITY_PREC, y / GRAVITY_PREC)).normalize() * .1;
			}
		}
		print("gravitized");
	}

	Vector gravityAt(Vector v) {
		return gravity.data[((v.x * GRAVITY_PREC) + gravity.w * (v.y * GRAVITY_PREC)).toInt()];
	}

}

class Planet {
	Vector pos;

	int r;

	Planet(x, y, this.r) : pos = new Vector(x, y);
}

