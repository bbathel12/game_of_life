var cell = function(x,y,context,game){

    const ALIVE = true;
    const DEAD  = false;

    this.past_state = DEAD;
    this.current_state = DEAD;
    
    this.height = 20;
    this.width = 20;
    
    this.x = x;
    this.y = y;
    this.canvas = context;
    this.game = game
    
    this.neighbors = function(){
        var num_neighbors = 0;
        //check vertical to the left if there are any
        if(this.x - 1 >= 0){
            for(var i = -1 ; i <= 1 ; i++){
                //console.log(this.x - 1,this.y + i, game.y)
                if( this.y + i >= 0 && this.y + i < game.y){
    
                    var neighbor_cell = this.game.board[this.x - 1][this.y + i]; 
                    //console.log(neighbor_cell)
                    if( neighbor_cell.past_state  ){
                        num_neighbors++;
                    } 
                }
            }
        }

        //check vertical to the right
        if(this.x + 1 < game.x ){
            for(var i = -1 ; i <= 1 ; i++){
                //console.log(this.x - 1,this.y + i, game.y)
                if( this.y + i >= 0 && this.y + i < game.y){
    
                    var neighbor_cell = this.game.board[this.x + 1][this.y + i]; 
                    //console.log(neighbor_cell)
                    if( neighbor_cell.past_state  ){
                        num_neighbors++;
                    } 
                }
            }
        }

        if( this.y -1 >= 0 ){
            if(game.board[this.x][this.y-1].past_state){
                num_neighbors++
            }
        }

         if( this.y +1 < game.y ){
            if(game.board[this.x][this.y+1].past_state){
                num_neighbors++
            }
        }


        //return the number of neighbors found

        return num_neighbors;
    }

    this.decide_state = function(){
        var num_neighbors = this.neighbors();

        if( this.past_state === ALIVE){
            if( num_neighbors === 2 || num_neighbors === 3){
                this.current_state = ALIVE;
            }else{
                this.current_state = DEAD;
            }

        }else{
            if( num_neighbors === 3){
                this.current_state = ALIVE;
            }else{
                this.current_state = DEAD;
            }
        }
    }

    this.before_draw = function(){
        this.past_state = this.current_state;

    }

    this.draw = function(){
          var starting_point = [this.x * this.width , this.y * this.height]
          var ending_point   = [this.width , this.height ]
          this.canvas.beginPath();
          this.canvas.rect( starting_point[0], starting_point[1] , ending_point[0] , ending_point[1] );
          this.canvas.fillStyle = this.current_state ? '#00FF00' : 'grey' ;
          this.canvas.fill();
          this.canvas.lineWidth = 3;
          this.canvas.strokeStyle = 'black';
          this.canvas.stroke();
    }
}
    

