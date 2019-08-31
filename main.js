
/*
devo creare un array vuoto e aggiugerci randomicamente un alieno con y casuale
*/

//crea un array vuoto per storare gli alieni
let array_alieni = [];

let alien_size = 60

let alien_delta = 30;

let pos_nave;

let collision = false;
function setup(){
    var cnv = createCanvas(windowWidth, windowHeight);
    

    ship = new spaceship(60,windowHeight/2 - 90/2, 90, 8);
   // aliens = new alien(1000, 90, alien_size, 10);
    force_gen();
    background_img = loadImage("img/bg.jpg")

}

function draw(){

    if(collision){
        noLoop()
    }

    clear();
    background(background_img)

    //genera gli alieni
    generate_friends();
    //mostra la nave del player e le navi nemiche
    ship.draw();
    show_alien();
    //muove tutte le navi
    move_alien();
    ship.move(fetch_key());

    collision_checker();

    exterminate();

    console.log("collision:  " + collision)
}


function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

function collision_checker(){
    array_alieni.forEach(nave_aliena => {
        if(ship["x"] < nave_aliena["x"] + alien_size){
            if(ship["x"] + ship["size"] > nave_aliena["x"]){
                if(ship["y"] < nave_aliena["y"] + alien_size){
                    if(ship["y"] + ship["size"] > nave_aliena["y"]){
                        collision = true;
                    }
                }
            }
        }
    });
}