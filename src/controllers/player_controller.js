define(function() {
	return function PlayerController(player) {
		this.player = player;

		var that = this;
		this.keyDown = function(key) {
			that.keyEvent(key, false);
		}
		this.keyUp = function(key) {
			that.keyEvent(key, true);
		}
		this.keyEvent = function(key, upOrDown) {
			key = key || window.event;
			var keyCode = key.keyCode, action;
			switch (keyCode) {
				case 37: // left
					action = "left";
					break;
				case 39: // right
					action = "right";
					break;
				case 38: // up
					action = "up";
					break;
				case 40: // down
					action = "down";
					break;
			}
			if (action) this.player.actions[action] = upOrDown == true ? false : true;
		}

	}
});