library main;

import "dart:html";
import "dart:math";
import "controllers/player_controller.dart";
import "models/level.dart";
import "models/player.dart";
import "models/vector.dart";

Level level = new Level();

Player p1 = new Player(level, 1000, 500);

PlayerController playerController = new PlayerController(p1);

CanvasElement canvas;
CanvasElement debugCanvas;

CanvasRenderingContext2D ctx;

bool exit = false;

main() {
	canvas = new CanvasElement();
	canvas
		..width = window.innerWidth - 30
		..height = window.innerHeight - 30
		..style.border = "1px solid black"
		..style.position = "absolute";
	debugCanvas = canvas.clone(false);

	query("#game-container")..append(debugCanvas)..append(canvas);
	ctx = canvas.context2D;

	window.onKeyDown.listen((e) {
		if (e.keyCode == KeyCode.ESC) exit = true;
		playerController.keyEvent(e.keyCode, false);
		e.preventDefault();
	});
	window.onKeyUp.listen((e) {
		playerController.keyEvent(e.keyCode, true);
		e.preventDefault();
	});
	mainLoop(0);
}


int prevTime = 0;

mainLoop(int time) {
	if (exit) {
		window.document.$dom_title = "SPIEL AUS";
		return;
	}
	int delta = time - prevTime;
	prevTime = time;

	act(delta);
	render(delta);

	window.requestAnimationFrame(mainLoop);
}

act(delta) {
	level.act(delta);
	p1.act(delta);
}

const num SCALE = .2;

bool firstRender = true;
render(delta) {
	var ctx = canvas.context2D;
	clear();
	ctx.fillStyle = "black";
	ctx.save();
	Vector v = p1.pos * SCALE;
	ctx.translate(v.x, v.y);
	ctx.rotate(p1.rotation);
	ctx.fillRect(0, 0, Player.WIDTH * SCALE, Player.HEIGHT * SCALE);
	ctx.restore();

	level.planets.forEach((Planet p) {
		Vector pos = p.pos * SCALE;
		ctx.fillStyle = "blue";
		ctx.beginPath();
		ctx.arc(pos.x, pos.y, p.r * SCALE * 1.1, 0, 6);
		ctx.closePath;
		ctx.fill();
	});

	if (!firstRender) return;
	firstRender = false;
	ctx = debugCanvas.context2D;
	for (int x = 0; x < level.gravity.w; x++) {
		for (int y = 0; y < level.gravity.h; y++) {
			Vector v = level.gravity[x][y] * 150;
			num cX = (x / Level.GRID_SIZE) * SCALE, cY = (y / Level.GRID_SIZE) * SCALE;
			ctx.strokeStyle = "lightgrey";
			ctx.beginPath();
			ctx.moveTo(cX, cY);
			ctx.lineTo(cX + v.x * .8, cY + v.y *.8);
			ctx.stroke();
			ctx.closePath();

			ctx.strokeStyle = "darkgrey";
			ctx.beginPath();
			ctx.moveTo(cX + v.x * .8, cY + v.y *.8);
			ctx.lineTo(cX + v.x * .2, cY + v.y *.2);
			ctx.closePath();
			ctx.stroke();
		}
	}
}

clear() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}