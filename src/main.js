requirejs.config({
	paths: {
		kinetic: "libs/kinetic"
	},
	shim: {
		kinetic: {
			exports: "Kinetic"
		}
	}
});

require(["kinetic"], function(Kinetic) {
	var stage = new Kinetic.Stage({
		container: "game-container",
		width: 600,
		height: 300
	});

	var update = function(delta) {
		},
		draw = function(delta) {

		},
		mainloop = function(delta) {
			update(delta);
			draw(delta);
		};

	var animFrame = window.requestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		window.oRequestAnimationFrame ||
		window.msRequestAnimationFrame ||
		null;

	if (animFrame !== null) {
		var canvas, prevTime = 0;

		var recursiveAnim = function(time) {
			var delta = time - prevTime;
			prevTime = time;

			mainloop(delta);
			animFrame(recursiveAnim, canvas);
		};

		animFrame(recursiveAnim, canvas);
	} else {
		var ONE_FRAME_TIME = 1000.0 / 60.0;
		setInterval(function() {
			mainLoop(ONE_FRAME_TIME);
		}, ONE_FRAME_TIME);
	}
});