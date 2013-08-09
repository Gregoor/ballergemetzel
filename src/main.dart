library main;

import "dart:html";
import "dart:math";
import "controllers/player_controller.dart";
import "models/level.dart";
import "models/player.dart";
import "models/vector.dart";

Level level = new Level();

Player p1 = new Player(level, 0, 0);

PlayerController playerController = new PlayerController(p1);

CanvasElement canvas;
CanvasElement debugCanvas;

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

	window.onKeyDown.listen((e) {
		e.preventDefault();
		switch (e.keyCode) {
			case KeyCode.ESC:
				exit = true;
				return;
			case KeyCode.D:
				renderGravityMap();
				return;
		}
		//TODO: Keymap
		playerController.keyEvent(e.keyCode, false);
	});
	window.onKeyUp.listen((e) {
		e.preventDefault();
		playerController.keyEvent(e.keyCode, true);
	});
	mainLoop(0);
}


num prevTime = 0;

mainLoop(num time) {
	if (exit) {
		window.document.$dom_title = "SPIEL AUS";
		return;
	}
	num delta = time - prevTime;
	prevTime = time;

	act(delta);
	render(delta);

	window.requestAnimationFrame(mainLoop);
}

act(delta) {
	level.act(delta);
	p1.act(delta);
}

const num SCALE = .15;

bool firstRender = true;
render(delta) {
	CanvasRenderingContext2D ctx = canvas.context2D;
	clear(canvas);
	ctx.fillStyle = "black";
	ctx.save();
//	Vector v = (p1.pos - p1.rotationV * .5) * SCALE;
	Vector v = new Vector(canvas.width / 2, canvas.height / 2);
	ctx.translate(v.x, v.y);
	ctx.rotate(p1.rotation);
	ctx.fillRect(0, 0, Player.WIDTH * SCALE, Player.HEIGHT * SCALE);
	ctx.restore();

	level.planets.forEach((Planet planet) {
		Vector pos = v + (planet.pos - p1.pos) * SCALE;
		ctx.fillStyle = planet.color;
		ctx.beginPath();
		ctx.arc(pos.x, pos.y, planet.r * SCALE * 1.1, 0, 6);
		ctx.closePath;
		ctx.fill();
	});
}

renderGravityMap() {
	clear(debugCanvas);
	CanvasRenderingContext2D ctx = debugCanvas.context2D;
			Vector v = level.gravity[x][y];
			v *= 500;
			num cX = (x / Level.GRID_SIZE) * SCALE, cY = (y / Level.GRID_SIZE) * SCALE;
			Vector c = new Vector(cX, cY) + v * .7;
			ctx.strokeStyle = "lightblue";
			ctx.beginPath();
			ctx.moveTo(cX, cY);
			ctx.lineTo(c.x, c.y);
			ctx.stroke();
			ctx.closePath();

			ctx.strokeStyle = "orange";
			ctx.beginPath();
			ctx.moveTo(c.x, c.y);
			ctx.lineTo(cX + v.x * .3, cY + v.y *.3);
			ctx.closePath();
			ctx.stroke();
}

clear(CanvasElement canvas) {
	canvas.context2D.clearRect(0, 0, canvas.width, canvas.height);
}