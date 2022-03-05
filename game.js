var canvas = document.getElementById("game");
var context = canvas.getContext("2d");

var aster = [];
var fire = [];
var timer = 0;
var ship = {x:300,y:300};

var asterimg = new Image();
asterimg.src = "aster.png";

fireimg = new Image();
fireimg.src = "fire.png";

shipimg = new Image();
shipimg.src = "ship.png";

var fonimg = new Image();
fonimg.src = "fon.png";




canvas.addEventListener("mousemove", function(event){
    ship.x=event.offsetX-25;
    ship.y=event.offsetY-13;
});



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
timer++;
if (timer%10==0) {
    aster.push({
        x:Math.random()*600,
        y:-50,
        dx:Math.random()*2-1,
        dy:Math.random()*2+2,
        del:0});
}

//shut
if (timer%20==0) {
    fire.push({x:ship.x+10,y:ship.y,dx:0,by:-5.2});
    fire.push({x:ship.x+10,y:ship.y,dx:0.5,by:-5});
    fire.push({x:ship.x+10,y:ship.y,dx:-0.5,by:-5});
}

//move fire
for (i in fire) {
    fire[i].x=fire[i].x+fire[i].dx;
    fire[i].y=fire[i].y+fire[i].dy;

   if (fire[i].y<-30) fire.splice(i,1);

}

//Fisica    
for(i in aster){ 
aster[i].x=aster[i].x+aster[i].dx;
aster[i].y=aster[i].y+aster[i].dy;
//board
 if (aster[i].x>=550 || aster[i].x<0) aster[i].dx=-aster[i].dx;
 if (aster[i].y>=600 ) aster.splice(i,1);


      for (j in fire) {
         if (Math.abs(aster[i].x+25-fire[j].x-15)<50 && Math.abs(aster[i].y-fire[j].y)<25){
             aster[i].del=1;
             fire.splice(j,1);break;
         }
     }
     if (aster[i].del==1) aster.splice(i,1);
}
}


function render (){
    context.drawImage(fonimg,0,0,600,600);
    context.drawImage(shipimg,ship.x, ship.y,50,50);
    for (i in fire) context.drawImage(fireimg, fire[i].x,fire[i].y,25,25);
    for(i in aster) context.drawImage(asterimg,aster[i].x,aster[i].y,50,50);

}



var requestAnimationFrame = (function(){
    return window.requestAnimationFrame||

    window.webkitRequestAnimationFrame||
    window.mozRequestAnimationFrame   ||
    function(callback){
     window.setTimeout(callback,1000 / 20);
    };
})();

//inishon 
function init () {
    canvas.addEventListener("mousemove",function(event){
        ship.x=event.offsetX-25;
        ship.y=event.offsetY-13;
    });
    Timer=0;
    ship={x:300,y:300,animx:0,animy:0};
}