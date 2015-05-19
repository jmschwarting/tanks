var shellCount = 0;

function shoot () {
	var shellID = "shell" + shellCount;
	var cleanID = "#" + shellID;
	$("#field").append('<div class="shell" style="top: ' + tank1Position + 'px" id=' + shellID + '"></div>');
	$(".shell").animate({right: "-50px"}, shellSpeed, 'linear');
	shellCount ++;

	detectGameOver(tank1Position);
};