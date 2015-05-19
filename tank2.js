var tank2Position = 0;
var nextMove = 0;
var triggerRobotMove = '';

var tankMovement;

function move2 () {
	//create 0 or 1 randomly
	nextMove = Math.round(Math.random());
	
	if (nextMove === 1) {
		if (tank2Position === 450) {
			move2Up();
		} else { move2Down(); }
	} else {
		if (tank2Position === 0) {
			move2Down();
		} else { move2Up(); }
	}
	
	//repeat function
	tankMovement = setTimeout(function(){
		move2();
	}, 700);
}

move2();

function move2Up () {
	tank2Position = tank2Position - tankDistance;
	$("#tank2").css('top', tank2Position + 'px');
}

function move2Down () {
	tank2Position = tank2Position + tankDistance;
	$("#tank2").css('top', tank2Position + 'px');
}