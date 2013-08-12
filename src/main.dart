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
CanvasElement bgCanvas;
CanvasElement debugCanvas;

ImageElement tileImg;

bool exit = false;

main() {
	canvas = new CanvasElement();
	canvas
		..width = window.innerWidth
		..height = window.innerHeight
		..style.position = "absolute"
		..style.left = "0px"
		..style.top = "0px";
	bgCanvas = debugCanvas = canvas.clone(false);

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

	tileImg = new ImageElement(src: "img/tile.jpg");
	tileImg.onLoad.listen((Event e) {
		mainLoop(0);
	});
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
	Vector center = new Vector(canvas.width, canvas.height).scale(.5);
	ctx..fillStyle = "darkgrey"
		..strokeStyle = "black"
		..lineWidth = 2
		..save()
		..translate(center.x, center.y)
		..rotate(p1.rotation)
		..fillRect(0, 0, Player.WIDTH * SCALE, Player.HEIGHT * SCALE)
		..strokeRect(0, 0, Player.WIDTH * SCALE, Player.HEIGHT * SCALE)
		..restore();

	Vector offset = p1.pos - new Vector(-p1.rotationV.y, p1.rotationV.x).scale(.5);
	level.planets.forEach((Planet planet) {
		Vector pos = center + (planet.pos - offset).scale(SCALE);
		ctx..fillStyle = planet.color
			..beginPath()
			..arc(pos.x, pos.y, planet.r * SCALE * 1.1, 0, 6)
			..closePath
			..fill();
	});

	for (int x = -((p1.pos.x * SCALE / 1.5).floor() % tileImg.width); x < bgCanvas.width; x += tileImg.width) {
		for (int y = -((p1.pos.y * SCALE / 1.5).floor() % tileImg.height); y < bgCanvas.height; y += tileImg.height) {
			bgCanvas.context2D.drawImage(tileImg, x, y);
		}
	}
}


/**
* Broken as fuck
*/
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