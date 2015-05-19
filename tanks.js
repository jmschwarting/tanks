var hotKeys = [38, 40, 32]; //38 up; 40 down; 32 space bar shoot

var player = 1;

var tankPosition = 0;
var tank1Position = tankPosition;
var tank2Position = tankPosition;

var shellSpeed = 700;
var tankDistance = 50;
var isGameOver = false;
var playing = false;

$(document).keydown(function (e) {
	if (!playing) return;

	var key = e.which;

	if ($.inArray(key, hotKeys) < 0) { return; } else {
		e.preventDefault();
		if (isGameOver) return;
		if (key === 38) {
			goUp();
		} else if (key === 40) {
			goDown();
		} else if (key === 32) {
			shoot();
		}
	}
})

// get the game started
$(document).keypress(function (e) {
	if (e.which === 13) {
		startGame();
	}
})

var goUp = function () {
	// check top status
	if (tank1Position === 0) return;

	tank1Position = tank1Position - tankDistance;
	$("#tank1").css('top', tank1Position + 'px');
}

var goDown = function () {
	// check down status
	if (tank1Position === 450) return;

	tank1Position = tank1Position + tankDistance;
	$("#tank1").css('top', tank1Position + 'px');
}

var startGame = function () {
	if (playing) return;

	// can play
	isGameOver = false;
	playing = true;

	// get the tanks back
	$('#tank1').removeClass('explosion');
	$('#tank2').removeClass('explosion');

	// the the machine working again
	move2();
	getShooting();

	// remove game over text
	$('#gameOver').css('display', 'none');
	$('#gameOverLose').css('display', 'none');
}