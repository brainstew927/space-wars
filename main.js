//crea un array vuoto per storare gli alieni
let array_alieni = [];

let alien_size = 60

let alien_delta = 30;

let pos_nave;

let collision = false;

let mode = null;

let score = 0

function setup(){
    var cnv = createCanvas(windowWidth, windowHeight);
    background_img = loadImage("img/bg.jpg")
    menu()
    ship = new spaceship(60,windowHeight/2 - 90/2, 90, 8);
    
    
}

function draw(){
    console.log("arrivato a loop");
    


    if(mode != null){
        
        if(collision){
            noLoop()
        }

        console.log("ciao bro");
        
        clear();
        background(background_img)

        //genera gli alieni
        if(mode == 1){
            generate_friends();
            console.log("generata nave");
            
        }
        //mostra la nave del player e le navi nemiche
        ship.draw();
        show_alien();
        //muove tutte le navi
        move_alien();
        ship.move(fetch_key());

        collision_checker();

        exterminate();

        //visualizza punteggio
        fill(51)
        rect(width - width/10, height/20, width/4, height/20)
        fill(0)
        textSize(20)         
        text("punteggio:  " + score, width - width/10 + 10, height/20 + height/31)

        if(mode == 2){
            fill(51)
            rect(width/20, height/20, width/4, height/20)
            fill(0)
            textSize(20)
            console.log("stampato rect")            
            text("alieni spawnabili:  " + Math.round(cont_alieni), width/20 + width/70, height/20 + height/31)
        }
        if(cont_alieni < 20)    
            cont_alieni += 0.02;

    }
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
                        log("hit!");
                    }
                }
            }
        }
    });
}

function menu(){

    textSize(100);

    title = text("Space-Wars", 0, height)

    button_single = createButton("Single player");
    button_single.size(200)
    button_single.position(width/2 - button_single.width/2,height/3);
    

    button_multi=createButton("Multi Player");
    button_multi.size(200)
    button_multi.position(width/2 - button_multi.width/2,height/3 + button_single.height+60);
   
    button_single.mousePressed(single_player_press)
    button_multi.mousePressed(multi_player_press)

}

function single_player_press(){
    mode = 1;

    button_multi.hide()
    button_single.hide()
    storeItem("tit", title);
    removeItem("but1");
    removeItem("but2");
    removeItem("tit");
}

function multi_player_press(){
    mode = 2;
  
   
    button_multi.hide()
    button_single.hide()
    storeItem("tit", title);
    removeItem("but1");
    removeItem("but2");
    removeItem("tit");
}