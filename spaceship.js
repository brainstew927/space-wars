class spaceship {

    set debug_mode(value){
        this.debug = value;
    }    

    constructor(x, y, size, delta){
        this.x = x;
        this.y = y;
        this.size = size;
        this.delta = delta;

        this.debug = false;

        this.sprite = loadImage('img/spaceship.png');
    }

    move(dir){

        if(dir != null){

            switch(dir){
                case "U":
                    if(this.y >= 0){
                        this.y -= this.delta;
                    }
                    break;
                case "D":
                    if(this.y < height -this.size){
                        this.y += this.delta;
                    }
                    break;
            }
        }
        
    }

    draw(){

        image(this.sprite, this.x, this.y, this.size, this.size)
      
    }
}