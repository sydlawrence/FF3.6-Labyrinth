function Finish(){
	
	var div;

    // define object properties
    this.div=document.createElement('div');
    this.div.className = 'finish'
    
    
    this.top = 0;
    this.left = 0;
    
    this.width = 0;
    this.height = 0;
    
    this.center_offset = 7;
    
    this.Hole = function() {
    
    }
    
    this.setPosition = function(pos) {
    	this.top = pos[0];
    	this.left = pos[1];
    
    }
    
    // define 'display()' method
    this.display=function(){
        
        this.div.style.top=this.top+'px';
        this.div.style.left=this.left+'px';
        document.getElementById('game').appendChild(this.div);
        
        this.center = calculate_center(this.div);
        
    }
    
    this.in_hole = function(ball_center) {
    
    	if (
    		(ball_center.x < this.center.x + this.center_offset)
    		&& (ball_center.x > this.center.x - this.center_offset)
    		&& (ball_center.y < this.center.y + this.center_offset)
    		&& (ball_center.y > this.center.y - this.center_offset)
    	)
    		return true;
    
    	    	
    	return false;
    
    }
}