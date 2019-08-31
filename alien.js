//classe per i nemici, si devono muovere orizzontalmente
class alien {
    constructor(x, y, size, delta){
        this.x = x;
        this.y = y;
        this.size = size;
        this.delta = delta;

        this.sprite = loadImage("img/alienship.png")
    }

    move(){
        this.x -= this.delta;
    }

    get xvalue() {
        return this.x;
    }

    show(){
        image(this.sprite, this.x, this.y, this.size, this.size)
    }
}