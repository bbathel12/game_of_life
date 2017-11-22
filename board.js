var game = function(x,y){
    
    this.board = [];
    this.x = x;
    this.y = y;
    
    this.init = function(){
        var canvas = document.getElementById('canvas');
        context = canvas.getContext('2d');
        context.fillStyle='grey';
        context.fillRect(0,0,600,600);
        for(var i = 0; i < this.x; i++){
            this.board[i] = [];
            for(var j = 0; j < this.y; j++){
                this.board[i][j] = new cell(i,j,context,this);
            }
        }
    }

    this.getBoard = function(){
        return this.board;
    }

    this.run_turn = function(){        
        for(var i = 0; i < cells ; i++){
            for(var j = 0; j < cells; j++){
                game_board[i][j].decide_state(game);
            }
        }

        for(var i = 0; i < cells ; i++){
            for(var j = 0; j < cells; j++){
                game_board[i][j].before_draw();
                game_board[i][j].draw();
            }
        }
    }

}

