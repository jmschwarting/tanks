function detectGameOver (shellPosition) {
	var collisionCheck = setTimeout(function() {
		if (tank2Position ==  shellPosition) {
			clearTimeout(collisionCheck);
			clearInterval(autoShooting);
			stopPlaying();
		}
	}, 600);
}



function detectGameOver2 (shellPosition) {
	var collisionCheck = setTimeout(function() {
		if (tank1Position ==  shellPosition) {
			clearTimeout(collisionCheck);
			clearInterval(autoShooting);
			stopPlaying2();
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



function stopPlaying2 () {
	isGameOver = true;

	$('#tank1').addClass('explosion');
	$('#gameOverLose').css('display', 'block');

	clearTimeout(tankMovement);
	
	$(".shell").remove();	
};