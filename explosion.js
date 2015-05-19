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
	playing = false;
	playerOneScore = playerOneScore + 100;
	updateScore(playerOneScore);

	$('#tank2').addClass('explosion');
	$('#gameOver').css('display', 'block');

	clearTimeout(tankMovement);
	
	$(".shell").remove();
	$(".shell2").remove();
};



function stopPlaying2 () {
	isGameOver = true;
	playing = false;
	playerTwoScore = playerTwoScore + 100;
	updateScore(0);


	$('#tank1').addClass('explosion');
	$('#gameOverLose').css('display', 'block');

	clearTimeout(tankMovement);
	
	$(".shell").remove();
	$(".shell2").remove();	
};

function updateScore (score) {
	playerOneScore = score;
	$('#current-score').html('Current Score: ' + score)

	if (score > highestScore) {

		setTimeout(function () {
			var userName = prompt("You broke the record! What's your name?");
			
			// check if they added a user name
			if (!userName) {
				userName = "Anonymous"
			}
			updateHighScore(userName, score);
		}, 800)
	}
}