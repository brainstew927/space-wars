//w: 87
//s: 83
/*
function fetch_key(keyCode){
    if(keyCode == 87){
        return("U");
    }
    if(keyCode == 83){
        return ("D");
    }
}*/

function fetch_key(){
    if(keyIsDown(87)){
        return("U");
    }
    if(keyIsDown(83)){
        return("D");
    }
}