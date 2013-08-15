library level;

import "vector.dart";
import "grid.dart";
import "dart:math";

class Level {
	static const GRID_SIZE = .015;

	static const BIG_G = 7 * 10 ^ -11;

	int width = 10000, height = 5000;

	Set<Planet> planets = [];

	Set<Projectile> projectiles = [];

	Grid gravity;

	Level() {
		[
			new Planet(new Vector(-1600, -1800), 600, "blue"),
			new Planet(new Vector(-800, 1200), 300, "darkred"),
			new Planet(new Vector(900, -1400), 400, "green"),
			new Planet(new Vector(1500, 1400), 700, "darkorange"),
			new Planet(new Vector(4000, 700), 400, "pink"),
		].forEach((Planet p) { planets.add(p); });

		return;
		List<String> colors = ["blue", "darkred", "green", "darkorange", "pink", "yellow"];
		Random random = new Random();

		randomBig() => (random.nextBool() ? 1 : -1) * random.nextInt(5000);
		do {
			Planet newPlanet;
			do {
				newPlanet = new Planet(new Vector(randomBig(), randomBig()), 300 + random.nextInt(500), colors[random.nextInt(colors.length)]);
			} while (planets.any((Planet planet) => (planet.pos - newPlanet.pos).length < planet.r + newPlanet.r * 2) || newPlanet.surfaceTo(new Vector.zero()).length < 1000);

			planets.add(newPlanet);
		} while (random.nextDouble() < .8);
	}

	act(num dt) {
		Set<Projectile> deadProjectiles = [];
		projectiles.forEach((Projectile p) {
			p.act(dt, gravityAt(p.pos, p.mass));
			if (p.hit || p.lifetime > 3000) deadProjectiles.add(p);
		});
		projectiles.removeWhere((Projectile p) => deadProjectiles.contains(p));
	}

	Vector gravityAt(Vector pos, num mass) {
		Vector grav;
		planets.forEach((Planet planet) {
			Vector dist = planet.surfaceTo(pos);
			Vector force = dist.normalize().scale(.001 * mass * planet.mass / pow(dist.length, 2));

			grav = grav == null ? force : grav + force;
		});
		return grav;
	}

	Planet planetAt(Vector v) {
		return planets.any((Planet p) => (v - p.pos).length <= p.r);
	}
}

class Planet {
	Vector pos;

	int r;

	String color;

	Planet(this.pos, this.r, this.color);

	get mass => (4 / 3) * PI * pow(r, 3);

	Vector surfaceTo(Vector v) {
		Vector dist = pos - v;
		return dist.length <= r ? dist.normalize() : dist;
	}

}
