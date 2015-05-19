var shellCount = 0;

var shooting = true;

	function shoot () {
		if (shooting) {
			var shellID = "shell" + shellCount;
			var cleanID = "#" + shellID;
			$("#field").append('<div class="shell" style="top: ' + tank1Position + 'px" id=' + shellID + '"></div>');
			$(".shell").animate({right: "-50px"}, shellSpeed, 'linear');
			shellCount ++;
			shooting = false;
			setTimeout(function(){
				shooting=true}, 500);

			detectGameOver(tank1Position);
		};	
	};