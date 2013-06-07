define(["kinetic"], function(Kinetic) {
	return function Level(stage) {
		this.layer = new Kinetic.Layer();
		this.boxes = [];

		var range = function(min, max) {
			if (!max) {
				max = min;
				min = 0;
			}
			return Math.round(Math.random() * (max - min)) + min;
		}
		var lvl = this;
		var iterCollide = function(bX, bY, bW, bH) {
			var pointCollision = function(pointX, pointY, rectX, rectY, rectWidth, rectHeight) {
				var bTop = rectY, bLeft = rectX, bRight = rectX + rectWidth, bBottom = rectY + rectHeight;

				if (pointX > bLeft && pointX < bRight && pointY > bTop && pointY < bBottom) return true;
				return false;
			};
			var collision = lvl.boxes.every(function(box) {
				if (pointCollision(bX, bY, box.x, box.y, box.w, box.h) ||
					pointCollision(bX + bW, bY, box.x, box.y, box.w, box.h) ||
					pointCollision(bX, bY + bH, box.x, box.y, box.w, box.h) ||
					pointCollision(bX + bW, bY + bH, box.x, box.y, box.w, box.h)) {
					return false;
				}
				return true;
			});

			return collision;
		};


		// build level in a highly sophisticated manner with major personalized emotional response analyzing big data donkeypiss
		for (var i = 0; i < range(10, 20); i++) {
			var x, y, width, height;
			do {
				x = range(stage.getWidth());
				y = range(stage.getHeight());
				width = range(50, 200);
				height = range(20, 100);
			} while (!iterCollide(x, y, width, height));

			this.boxes.push({x: x, y: y, w: width, h: height, c: "#" + Math.random().toString(16).substring(4) });
		}

		// initdraw, because later we will only move that whole fucking layer because we fucking can
		for (var i = 0; i < this.boxes.length; i++) {
			var box = this.boxes[i];
			this.layer.add(new Kinetic.Rect({
				x: box.x,
				y: box.y,
				width: box.w,
				height: box.h,
				fill: box.c
			}));
		}
		stage.add(this.layer);

		this.act = function(delta) {

		};
		this.render = function(delta) {

		};
	}
});