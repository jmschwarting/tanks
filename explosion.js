var collisionCheck;
function detectGameOver (shellPosition) {
	collisionCheck = setTimeout(function() {
		if (tank2Position ==  shellPosition) {
			clearTimeout(collisionCheck);
			clearTimeout(collisionCheck2);
			clearInterval(autoShooting);
			stopPlaying();
		}
	}, 600);
}


var collisionCheck2;
function detectGameOver2 (shellPosition) {
	collisionCheck2 = setTimeout(function() {
		if (tank1Position ==  shellPosition) {
			clearTimeout(collisionCheck2);
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
	$(".shell2").remove();
};



function stopPlaying2 () {
	isGameOver = true;

	$('#tank1').addClass('explosion');
	$('#gameOverLose').css('display', 'block');

	clearTimeout(tankMovement);
	
	$(".shell").remove();
	$(".shell2").remove();	
};