function detectGameOver (shellPosition) {

	var collisionCheck = setTimeout(function() {
		if (tank2Position ==  shellPosition) {
			clearTimeout(collisionCheck);
			stopPlaying();
		}
	}, 600);
}

function stopPlaying () {
	clearTimeout(tankMovement);
	$('#tank2').addClass('explosion');
	$(".shell").remove();	
};