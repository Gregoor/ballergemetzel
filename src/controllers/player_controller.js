define(function() { return function PlayerController(player) {
		this.player = player;
		var that = this;

		this.keyEvent = function(key) {
			key = key || window.event;
			var keyCode = key.keyCode;
			switch(keyCode) {
				case 37: // left
					that.player.move("l");
					break;
				case 39: // right
					that.player.move("r");
					break;
				case 38: // up
					that.player.move("u");
					break;
				case 40: // down
					that.player.move("d");
					break;
				default:
					//console.log(that.player);
					//alert("caught unexpected keycode "+keyCode)
			}
		}

	}
});