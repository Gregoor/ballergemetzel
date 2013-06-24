library level;

import "vector.dart";
import "grid.dart";
import "dart:math";

class Level {
	int width = 10000, height = 5000;

	static const GRID_SIZE = .015;

	Set planets = [];

	Grid gravity;

	Level() {
		planets.add(new Planet(new Vector(4000, 1500), 500, "blue"));
		planets.add(new Planet(new Vector(1000, 2000), 300, "darkred"));
		planets.add(new Planet(new Vector(2500, 2700), 300, "darkgreen"));
		planets.add(new Planet(new Vector(2500, 700), 300, "darkorange"));
		buildGravityMap();
	}

	act(delta) {

	}

	buildGravityMap() {
		print("gravitating");
		gravity = new Grid(width * GRID_SIZE, height * GRID_SIZE);
		for (int x = 0; x < gravity.w; x++) {
			for (int y = 0; y < gravity.h; y++) {
				Vector pos = new Vector(x / GRID_SIZE, y / GRID_SIZE);
				Planet closestPlanet = planets.fold(null, (Planet closest, Planet current) =>
					closest == null || (closest.pos - pos) * current.mass > (current.pos - pos) * closest.mass ? current : closest);
				Vector v = closestPlanet.pos - pos;
	// TODO: Those values are calculated using the religious method (Pascals razor)
				gravity[x][y] = v * 1 / (25 * (v.length == 0 ? 1 : v.length));
			}
		}
		print("gravitized");
	}

	Vector gravityAt(Vector v) {
		return gravity.data[(v.x * GRID_SIZE).toInt() + gravity.w * (v.y * GRID_SIZE).toInt()];
	}

	planetAt(Vector v) {
		return planets.any((Planet p) => (v - p.pos).length <= p.r ? true : false);
	}
}

class Planet {
	Vector pos;

	int r;

	String color;

	Planet(this.pos, this.r, this.color);

	get mass => pow(r, 2) * PI;
}
