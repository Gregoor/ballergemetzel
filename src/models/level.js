define(["kinetic"], function(Kinetic) {
	return function Level(stage) {
		this.stage = stage;
		this.layer = new Kinetic.Layer();
		this.boxes = [];

		var nextInt = function(n) {
			return Math.round(Math.random() * n);
		}
		for (var i = 0; i < 10; i++) {
			this.boxes.push({
				x: nextInt(this.stage.getWidth()),
				y: nextInt(this.stage.getHeight()),
				w: nextInt(200),
				h: nextInt(100),
			});
		}

		this.act = function(delta) {

		};
		this.render = function(delta) {
			this.layer.clear();
			for (var i = 0; i < this.boxes.length; i++) {
				var box = this.boxes[i];
				this.layer.add(new Kinetic.Rect({
					x: box.x,
					y: box.y,
					width: box.w,
					height: box.h,
					fill: "black"
				}));
			}
			this.stage.add(this.layer);
		}
	}
});