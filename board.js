var game = function(x,y){
    
    this.canvas;
    this.board = [];
    this.x = x;
    this.y = y;
    var offset  = $('#canvas').offset(); 
    this.xOffset = offset.top;
    this.yOffset = offset.left;

    this.getIndex = function(position){
        var x = Math.floor( ( position - this.xOffset ) / 20);

        x = x < 0 ? 0 : x;
        x = x > this.x ? this.x - 1 : x;
        return x;
    }
 
    this.click_function =  function(e){
        
        var x = this.getIndex(e.clientX);
        var y = this.getIndex(e.clientY);
        console.log('clickety', e.clientX,":",x , e.clientY, ":",y);
        
        this.board[x][y].current_state = !this.board[x][y].current_state;
        this.board[x][y].past_state    = this.board[x][y].current_state;

        this.board[x][y].draw(); 
    };
    
    this.init = function(){
        this.canvas = canvas = document.getElementById('canvas');
        context = canvas.getContext('2d');
        context.fillStyle='grey';
        context.fillRect(0,0,600,600);
        for(var i = 0; i < this.x; i++){
            this.board[i] = [];
            for(var j = 0; j < this.y; j++){
                this.board[i][j] = new cell(i,j,context,this);
            }
        }

        this.canvas.addEventListener('click',this.click_function.bind(this));
    }

    this.getBoard = function(){
        return this.board;
    }

    this.run_turn = function(){        
        for(var i = 0; i < cells ; i++){
            for(var j = 0; j < cells; j++){
                this.board[i][j].decide_state(game);
            }
        }

        for(var i = 0; i < cells ; i++){
            for(var j = 0; j < cells; j++){
                this.board[i][j].before_draw();
                this.board[i][j].draw();
            }
        }
    }

}

