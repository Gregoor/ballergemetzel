library level;

import "dart:math";

class Level {
	var player, stage;

	int width = 5000, height = 3000;

	List boxes = [];

	Level(this.player, this.stage) {
		int range(int min, [int max]) {
			if (!max) {
				max = min;
				min = 0;
			}
			return new Random.nextInt(max - min) + min;
		}

		boolean iterCollide(int bX, int bY, int bW, int bH) {
			boolean pointCollision(int pointX, int pointY, int rectX, int rectY, int revtWidth, int rectHeight) {
				int bTop = rectY, bLeft = rectX, bRight = rectX + rectWidth, bBottom = rectY + rectHeight;
				if (pointX > bLeft && pointX < bRight && pointY > bTop && pointY < bBottom) return true;
				return false;
			}

			return lvl.boxes.every((box) {
				if (pointCollision(bX, bY, box.x, box.y, box.w, box.h) || pointCollision(bX + bW, bY, box.x, box.y, box.w, box.h) || pointCollision(bX, bY + bH, box.x, box.y, box.w, box.h) || pointCollision(bX + bW, bY + bH, box.x, box.y, box.w, box.h)) {
					return false;
				}
				return true;
			});
		}

		for (int i = 0; i < width * height * .00002; i++) {
			var x, y, width, height;
			do {
				x = range(width);
				y = range(height);
				width = range(50, 200);
				height = range(20, 100);
			} while (!iterCollide(x, y, width, height));

			boxes.add({"x": x, "y": y, "w": width, "h": height, "c": "#" + Math.random().toString(16).substring(4)});
		}

		for (var i = 0; i < this.boxes.length; i++) {
			var box = this.boxes[i];
		}
		stage.add(this.layer);
	}

	act(delta) {
		player.act();
	}

	render(delta) {

	}

}

