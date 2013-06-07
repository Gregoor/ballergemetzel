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
		for (var i = 0; i < range(10, 20); i++) {
			this.boxes.push({
				x: range(stage.getWidth()),
				y: range(stage.getHeight()),
				w: range(50, 200),
				h: range(20, 100),
				c: "#" + Math.random().toString(16).substring(4)
			});
		}

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