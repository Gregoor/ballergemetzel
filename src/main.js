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

require(["kinetic", "models/level"], function(Kinetic, Level) {
	var stage, level, act, render, mainloop;
	stage = new Kinetic.Stage({
		container: "game-container",
		width: 600,
		height: 300
	});
	level = new Level(stage);

	act = function(delta) {
		level.act(delta);
	};
	render = function(delta) {
		level.render(delta);
	};
	mainloop = function(delta) {
		act(delta);
		render(delta);
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