function Wall(){
	
	var div;

    // define object properties
    this.div=document.createElement('div');
    this.div.className = 'wall'
    
    
    this.boundary = 0;
    
    this.start = 0;
    this.end = 0;
    
    this.width = 0;
    this.height = 0;
    
    this.setPosition = function(pos) {
    	this.start = pos[0];
    	this.end = pos[1];
    
    }
    
    // define 'display()' method
    this.display=function(){
        
        this.div.style.top=this.start[1]+'px';
        this.div.style.left=this.start[0]+'px';
        
		if (this.start[0] != this.end[0])
			this.div.style.width = (this.end[0] - this.start[0])+'px'; 
		if (this.start[1] != this.end[1])
			this.div.style.height = (this.end[1] - this.start[1])+'px'; 
			
        document.getElementById('game').appendChild(this.div);			        
    }
    
    this.affect_ball = function(left,top,div) {
    	
    	var boundary = this.boundaries();
    	
    	this.div.title = "btop: "+boundary.top+', bleft: '+boundary.left+', bright: '+boundary.right+', bbottom: '+boundary.bottom;
    	
    	var ball = {
    		top:	top,
    		right:	left + div.offsetWidth,
    		bottom:	top + div.offsetWidth,
    		left:	left,
    		center: {
    			left:	left + (div.offsetWidth/2),
    			top:	top + (div.offsetWidth/2),
    		},
    		width: div.offsetWidth
    	}
    	
    	div.title = "top: "+ball.top+', left: '+ball.left+', right: '+ball.right+', bottom: '+ball.bottom;

    	  
    	var arr  = {
			top:	top,
			left:	left
		}; 
    	   
    	 
    	if (	ball.top < boundary.top
	    		&& ball.bottom > boundary.top 		
    			&& ball.left < boundary.right && ball.right > boundary.left) {
    		arr.top = div.offsetTop;
    	}
    	
    	if (	ball.top < boundary.bottom 
    			&& ball.bottom > boundary.bottom
    			&& ball.left < boundary.right && ball.right > boundary.left) {
    		arr.top = div.offsetTop;
    	}
    		
    	if (	ball.left < boundary.left 
    			&& ball.right > boundary.left
    			&& ball.bottom > boundary.top && ball.top < boundary.bottom ) {
    		arr.left = div.offsetLeft;
    	}
    	
    	if (	ball.left < boundary.right 
    			&& ball.right > boundary.right
    			&& ball.bottom > boundary.top && ball.top < boundary.bottom ) {
    		arr.left = div.offsetLeft;
    	}
    		
    	/*
    	if (	ball.top < boundary.top 
    			&& ball.bottom > boundary.bottom
    			&& ball.right < boundary.right
    			&& ball.left > boundary.left
    		) {
    		
    		 log('top: '+(this.start[1])+', bottom: '+(this.end[1])+
    		    	'<br/>ball top: '+ball.top+', ball bottom: '+ball.bottom);   	

    		    	
    		// move above
    		if (ball.center.top < boundary.top) {
    			log('center is less than top');
    			arr.top = div.offsetTop;
    		}
    		
    		// move below
			if (ball.center.top > boundary.bottom) {
				log('center is more than bottom');
    			arr.top = div.offsetTop;
    		}
    		
    		// move left
    		if (ball.center.left < boundary.left) {
    			log('center is less than left');
    			arr.left = div.offsetLeft;
    		}
    		
    		// move right
    		if (ball.center.left > boundary.right) {
    			log('center is more than right');
    			arr.left = div.offsetLeft;
    		}
    	}
    	*/
    	
    	return arr
    
    }
    
    this.boundaries = function() {
    
    
    	return {
    		top:	this.start[1]-this.boundary,
    		right:	this.end[0]+10+this.boundary,
    		bottom:	this.end[1]+10+this.boundary,
    		left:	this.start[0]-this.boundary, 
    		center:	{
    			left:	(this.start[0] + this.end[0])/2,
    			top:	(this.start[1] + this.end[1])/2,
    		}   	
    	};
    }

}