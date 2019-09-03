let cont_alieni = 20;

function generate_friends(){
   random_value = Math.floor(Math.random()*50)+1
   if(random_value == 32){

        random_y = Math.floor(Math.random()* (height - alien_size) + 1)

        alien_temp = new alien(width, random_y, 90, alien_delta)
       
        array_alieni.push(
            alien_temp
        )
   }
}

function show_alien(){
    array_alieni.forEach(alieno => {
        alieno.show();
    });
}
function move_alien(){
    array_alieni.forEach(alieno => {
        alieno.move();
    });
}

function exterminate(){
    if(array_alieni[0] != null){
        if (array_alieni[0]["x"] < -Math.abs(alien_size)){
            array_alieni.shift();

            score++
        }
    }   
}

function force_gen(varx,vary){
    random_y = Math.floor(Math.random()* (height - alien_size) + 1)

    if(varx == null && vary == null){
        alien_temp = new alien(width, random_y, 90, alien_delta);
    }
    else{
        alien_temp = new alien(width, vary, 90, alien_delta);
        cont_alieni--;
    }

    array_alieni.push(
        alien_temp
    )
}

function mouseClicked(){
    if(cont_alieni >= 1 && mode == 2)
    force_gen(mouseX, mouseY);
}
