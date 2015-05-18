var hotKeys = [38, 40, 32]; //38 up; 40 down; 32 space bar shoot.

var player = 1;

var tank1Position = 0;
var tankDistance = 40;

$(document).keydown(function (e) {
	var key = e.which;

	if ($.inArray(key, hotKeys) < 0) { return; } else {
		e.preventDefault();
		if (key === 38) {
			goUp();
		} else if (key === 40) {
			goDown();
		} else {
			shoot();
		}
	}
})

var goUp = function () {
	tank1Position = tank1Position - tankDistance;
	$("#tank1").css('top', tank1Position + 'px');
}

var goDown = function () {
	tank1Position = tank1Position + tankDistance;
	$("#tank1").css('top', tank1Position + 'px');
}