define(["kinetic"], function(Kinetic) { return function Player(x,y) {
		this.x = x;
		this.y = y;
		this.direction = 'l';
		this.image = new Image();
		this.image.src = 'http://www.html5canvastutorials.com/demos/assets/blob-sprite.png';
		this.animations = {
        	idle: [{
          		x: 2,
          		y: 2,
          		width: 70,
          		height: 119
        	}, {
          		x: 71,
          		y: 2,
          		width: 74,
          		height: 119
        	}, {
          		x: 146,
         		y: 2,
          		width: 81,
          		height: 119
        	}, {
          		x: 226,
          		y: 2,
          		width: 76,
          		height: 119
        	}]
        };

		this.view = new Kinetic.Sprite({
        	x: this.x,
         	y: this.y,
          	image: this.image,
          	animation: 'idle',
          	animations: this.animations,
          	frameRate: 15,
          	index: 0
        });

		this.renderTo = function(layer) {
			layer.add(this.view);
			this.view.start();

		}

		this.move = function(direction) {
			switch(direction) {
				case 'l':
					this.x -= 5;
					break;
				case 'r':
					this.x += 5;
					break;
			}
			this.view.setX(this.x);
			//alert("x is now "+this.x);
		}
	}
});