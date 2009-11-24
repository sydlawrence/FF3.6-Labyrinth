
var x=0;
var y=0;
var z=0;

var k = 2;

var finish = [405,280];

var hole_postions = [
	[150,49],
	[51,135],
	[50,369],
	[128,310],
	[155,225],
	[168,160],
	[223,116],
	[175,362],
	[227,471],
	[282,470],
	[376,469],
	[469,383],
	[384,350],
	[240,213],
	[326,109],
	[340,225],
	[419,199],
	[382,144],
];

var wall_postions = [

// boundaries
	[[28,28],[28,505]],
	[[28,505],[505,505]],
	[[505,28],[505,505]],
	[[28,28],[505,28]],
	
// corners
	// tl
	[[28,130],[107,130]],
	[[107,28],[107,130]],
	
	//tr
	[[412,142],[505,142]],
	[[412,28],[412,142]],
	
	//bl
	[[28,437],[108,437]],
	[[108,437],[108,505]],
	
	//br
	[[417,420],[505,420]],
	[[417,420],[417,505]],
	
//inner
	[[347,206],[506,206]],
	[[347,96],[347,206]],
	[[190,96],[347,96]],
	[[190,96],[190,199]],
	[[90,199],[190,199]],
	[[90,199],[90,364]],
	[[90,364],[175,364]],
	[[175,364],[175,449]],
	[[175,449],[334,449]],
	[[334,360],[334,449]],				//334
	[[334,360],[421,360]],
	[[421,280],[421,360]],
	[[301,280],[421,280]],
	[[301,226],[301,280]],
	[[243,226],[301,226]],
	[[243,226],[243,271]],
	[[199,271],[243,271]],
	[[199,271],[199,326]],
	[[199,326],[255,326]],
	[[255,326],[255,395]],
	[[255,395],[334,395]],
];

// alert(navigator.userAgent);

window.addEventListener("MozOrientation", function(e) {
	document.getElementById('x').innerHTML = e.x;
	document.getElementById('y').innerHTML = e.y;
	document.getElementById('z').innerHTML = e.z;
	x = (parseInt(e.x * 100)/100) * k;
	y = (parseInt(e.y * 100)/100) * k;
	z = (parseInt(e.z * 100)/100) * k;
}, true);

var ball;

var holes = [];

var walls = [];

function start() {
	ball = Ball();

	
	var i = 0;
	
	for (var i = 0;i<hole_postions.length;i++) {
		var hole = new Hole();
		hole.setPosition(hole_postions[i]);
		hole.display();
		holes[i] = hole;		
	}
	
	var f = new Finish();
	f.setPosition(finish);
	f.display();
	finish = f;
	
	for (var i = 0;i<wall_postions.length;i++) {
		var wall = new Wall();
		wall.setPosition(wall_postions[i]);
		wall.display();
		walls[i] = wall;		
	}
}

var i = 0;
function move_ball() {
	if (!Labrynth.active)
		return;
		
		
	if (ball.can_move(x,y,z,holes,finish)) {
		ball.move(x,y,z, walls);
	}
//	ball.grow(z);
	
	
	setTimeout("move_ball()",15);
	return;
				
}


	
