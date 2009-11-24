function Labrynth() {

}

Labrynth.active = false;

Labrynth.lose = function() {
	Labrynth.stop();
	alert('EPIC FAIL');
}

Labrynth.win = function() {
	Labrynth.stop();
	alert('Firefox FTW!');
}

Labrynth.start = function() {
	Labrynth.active = true;
	var div = document.getElementById('starter');
	div.value = "pause";
	div.setAttribute("onclick", "Labrynth.pause()"); 
	move_ball();
	
}

Labrynth.stop = function() {
	Labrynth.active = false;
}

Labrynth.pause = function() {
	Labrynth.active = false;
	
	var div = document.getElementById('starter');
	div.value = "start";
	div.setAttribute("onclick", "Labrynth.start()"); 
}