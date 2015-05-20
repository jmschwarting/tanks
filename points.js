var firebase = new Firebase("https://tankgame.firebaseio.com/");

var getHighScore = function () {
	firebase.on('value', function (data) {
		allData = data.val();
		highestScore = allData.score;
		$('#high-score').html(highestScore);
		$('#high-player').html(allData.player);
	})
}

getHighScore();

var updateHighScore = function (userName, newScore) {
	firebase.set ({
		player: userName,
		score: newScore
	})
}