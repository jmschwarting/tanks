

function detectGameOver (shell) {
	var collisionCheck = setTimeout(function() {
		if (collision( $('#tank2'), $(shell)) ) {
			// canPlay = false;
			return stopPlaying();
			clearTimeout(collisionCheck);
		}
	}, 400);
}


function collision (tank, shell) {
	

	// var x1 = tank.offset().left;
	// var y1 = tank.offset().top;
	// var h1 = tank.outerHeight(true);
	// var w1 = tank.outerWidth(true);
	// var b1 = y1 + h1;
	// var r1 = x1 + w1;
	// var x2 = shell.offset().left;
	// var y2 = shell.offset().top;
	// var h2 = shell.outerHeight(true);
	// var w2 = shell.outerWidth(true);
	// var b2 = y2 + h2;
	// var r2 = x2 + w2;

	// if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
	// return true;
}

function stopPlaying () {
	console.log("You win!");
}