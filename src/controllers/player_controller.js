define(function() { return function PlayerController(player) {
		this.player = player;
		console.log(this.player);
		var that = this;

		this.keyEvent = function(key) {
			key = key || window.event;
			keyCode = key.keyCode;
			switch(keyCode) {
				case 37: // left
					that.player.move('l');
					break;
				case 39: // right
					that.player.move('r');
					break;
				default:
					//console.log(that.player);
					//alert('caught unexpected keycode '+keyCode)
			}
		}

	}
});