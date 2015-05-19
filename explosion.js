function detectGameOver (shellPosition) {
	var collisionCheck = setTimeout(function() {
		if (tank2Position ==  shellPosition) {
			clearTimeout(collisionCheck);
			stopPlaying();
		}
	}, 600);
}

function stopPlaying () {
	isGameOver = true;

	$('#tank2').addClass('explosion');
	$('#gameOver').css('display', 'block');

	clearTimeout(tankMovement);
	
	$(".shell").remove();	
};