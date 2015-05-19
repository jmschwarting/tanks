function detectGameOver (shellPosition) {

	var collisionCheck = setTimeout(function() {
		if (tank2Position ==  shellPosition) {
			clearTimeout(collisionCheck);
			stopPlaying();
		}
	}, 400);
}

function stopPlaying () {
	clearTimeout(tankMovement);
	$('#tank2').addClass('explosion');
}