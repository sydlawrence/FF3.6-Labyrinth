function calculate_center(div) { 
	var x = div.offsetLeft+(div.offsetWidth/2);
	var y = div.offsetTop+(div.offsetHeight/2);
	
       
	return {
		x: x,
		y: y
	}
}

var count = 0;

function log(str) {
//	if (count > 0)	
//		return;
	var div = document.getElementById('log');
	if (count < 5) {
		div.innerHTML = div.innerHTML+"<br/>"+str;
	}
	else {
		div.innerHTML = str;
		count = 0;
	}
	count++;
}