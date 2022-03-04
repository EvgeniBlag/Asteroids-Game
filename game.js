var canvas = document.getElementById("game");
var context = canvas.getContext("2d");

var fonimg = new Image();
fonimg.src = "fon.png";

fonimg.onload = function () {
 game();
}

function game () {
    update();
    render();
    requestAnimationFrame(game);
}

function update() {

}

function render (){
    context.drawImage(fonimg,0,0,600,600);

}

var requestAnimationFrame = (function(){
    return window.requestAnimationFrame||

    window.webkitRequestAnimationFrame||
    window.mozRequestAnimationFrame   ||
    function(callback){
     window.setTimeout(callback,1000 / 20);
    };
})();