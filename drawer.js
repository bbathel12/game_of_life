var drawer = function(){

	this.backgroundColor = 'white';
	this.aliveColor = 'green';
	this.deadColor = 'transparent';
	this.cellBorder = 'black';
	this.cellBorderWidth = 1;

	var init = function(){
		var c = document.getElementById('canvas');
		this.canvas = c.getContext('2d');
	}
	

	var drawCell = function(cell){
      var starting_point = [cell.x * cell.width , cell.y * cell.height]
      var ending_point   = [cell.x * cell.width + cell.width , cell.y * cell.height + cell.height ]
	  context.beginPath();
      context.rect( starting[0], starting[1] , ending[0] , ending[1] );
      context.fillStyle = cell.current_state ? 'green' : 'transparent' ;
      context.fill();
      context.lineWidth = 3;
      context.strokeStyle = '';
      context.stroke();
	}


}
