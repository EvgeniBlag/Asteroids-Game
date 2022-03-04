var canvas = document.getElementById("game");
var context = canvas.getContext("2d");

var fonimg = new Image();
fonimg.src = "fon.png";

fonimg.onload = function () {
  context.drawImage(fonimg,0,0,600,600);
}