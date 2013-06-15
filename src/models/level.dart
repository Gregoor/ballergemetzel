library level;

import "vector.dart";
import "grid.dart";
import "dart:math";

class Level {
	int width = 5000, height = 5000;

	static const GRID_SIZE = .005;

	List planets = [];

	Grid gravity;

	Level() {
		planets.add(new Planet(3000, 1000, 300));
		buildGravityMap();
	}

	act(delta) {

	}

	buildGravityMap() {
		print("gravitating");
		gravity = new Grid(width * GRID_SIZE, height * GRID_SIZE);
		Planet p = planets[0];
		for (int x = 0; x < gravity.w; x++) {
			for (int y = 0; y < gravity.h; y++) {
				gravity[x][y] = (p.pos - new Vector(x / GRID_SIZE, y / GRID_SIZE)).normalize() * .1;
			}
		}
		print("gravitized");
	}

	Vector gravityAt(Vector v) {
		return gravity.data[(v.x * GRID_SIZE).toInt() + gravity.w * (v.y * GRID_SIZE).toInt()];
	}

	planetAt(var o) {
		Vector v;
		if (o is List) return o.any((Vector v) => planetAt(v));
		else v = o;

		return planets.any((p) => (v - p.pos).length <= p.r ? true : false);
	}
}

class Planet {
	Vector pos;

	int r;

	Planet(x, y, this.r) : pos = new Vector(x, y);
}

