var canvas = document.getElementById("game");
var context = canvas.getContext("2d");



var asterimg = new Image();
asterimg.src = "aster.png";

var fonimg = new Image();
fonimg.src = "fon.png";



fonimg.onload = function () {
 game();
}
//basic game cicle

function game () {
    update();
    render();
    requestAnimationFrame(game);
}

function update() {

}

function render (){
    context.drawImage(fonimg,0,0,600,600);
    context.drawImage(asterimg,0,0,50,50);

}



var requestAnimationFrame = (function(){
    return window.requestAnimationFrame||

    window.webkitRequestAnimationFrame||
    window.mozRequestAnimationFrame   ||
    function(callback){
     window.setTimeout(callback,1000 / 20);
    };
})();