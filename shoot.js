var shellCount = 0;
var shooting = true;
var shootDelay = 500;

var fireAudio = new Audio('fire.wav');
var fireAudio2 = new Audio('fire2.wav');


function shoot () {
	if (shooting) {
		fireAudio.pause();
		fireAudio.currentTime = 0;
		fireAudio.play();

		var shellID = "shell" + shellCount;
		var cleanID = "#" + shellID;
		$("#field").append('<div class="shell" style="top: ' + tank1Position + 'px" id=' + shellID + '"></div>');
		$(".shell").animate({right: "-50px"}, shellSpeed, 'linear');
		shellCount ++;


		// Delays shooting
		shooting = false;
		setTimeout(function(){
			shooting = true},
		shootDelay);
		
		detectGameOver(tank1Position);
	};
};



var shellCount2 = 0;
var autoShooting;

var getShooting = function () {
	autoShooting = setInterval (
		function shoot2 () {
			fireAudio2.pause();
			fireAudio2.currentTime = 0;
			fireAudio2.play();

			var shell2ID = "shell" + shellCount2;
			var cleanID = "#" + shell2ID;
			$("#field").append('<div class="shell2" style="top: ' + tank2Position + 'px; left: 650px" id=' + shell2ID + '"></div>');
			$(".shell2").animate({left: "-50px"}, shellSpeed, 'linear');
			shellCount2 ++;

			detectGameOver2(tank2Position);
		},
	autoShootingSpeed);
}