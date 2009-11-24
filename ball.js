function Ball() {

	var speed = 20;
	
	this.div = document.getElementById('ball');
	
	this.move = function(x, y, z, walls) {
//		alert('test');
		var width = this.div.offsetWidth;
		var height = this.div.offsetHeight;
		
		
		var cur_top = this.div.offsetTop;
		var cur_left = this.div.offsetLeft;
		
		var k = 20;
		
		
		
		
		
		
		var new_top = (((k*y)+cur_top));
		var new_left = (((k*x)+cur_left));
		
		if (new_top < 0)
			new_top = 0;
		if (new_left < 0)
			new_left = 0;
		
		
			
		var doc_w = this.div.parentNode.offsetWidth;
		var doc_h = this.div.parentNode.offsetHeight;
		if (new_top > (doc_h - height))
			new_top = doc_h - height;
		
		if (new_left > (doc_w - width))
			new_left = doc_w - width;
		
		for (var i = 0;i<walls.length;i++) {
			var effect = walls[i].affect_ball(new_left,new_top,this.div);
			
			if (new_left != effect.left || new_top != effect.top) {
				new_left = effect.left;
				new_top = effect.top;
				break;
			}
		}
			
		new_top += 'px';
		new_left += 'px';
		
		this.div.style.top = new_top;
		this.div.style.left = new_left;
		i++;
	}

	this.grow = function(k) {
		var wandh = this.div.offsetWidth + k;
		
			
		width = this.div.offsetWidth;
		height = this.div.offsetHeight;
		
			
		if (wandh < 15)
			wandh = 15;
		if (wandh > 600)
			wandh = 600;
		
	//	this.style.mozBorderRadius = wandh+'px';
		
		this.div.style.width = wandh+'px';
		this.div.style.height = wandh+'px';
	}
	
	this.can_move = function(x,y,z,holes,finish) {
		if (this.in_hole(holes))
			return false;
		if (finish.in_hole(calculate_center(this.div)))	{
			Labrynth.win();
			return false;
		}
		return true;
	}
	
	this.in_hole = function(holes) {
		for (var i = 0; i<holes.length; i++) {
			if (holes[i].in_hole(calculate_center(this.div))) {				
				Labrynth.lose();
				return true;			
			}
		}
		return false;
	}
	
	return this;
}