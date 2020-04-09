//work in progesss


var ctx = document.getElementById('game').getContext('2d');
// load image
var image = new Image();
var image1 = new Image();
var x = 50;
var y = 50;
createCharacter();
setInterval(update, 1000);

// image.onload = function () {
//     // draw the image into the canvas
//     ctx.drawImage(image, 0, 0);
//     // ctx.Monster(image, x, y);
// }
// image.src = './assets/monster_sprite.png';

function update(){
  createCharacter();
}

function createCharacter(){
  ctx.drawImage(image1, 10, 10);

}
image1.src = './assets/main.png';

//onKey events
$(document).ready(function(){
    $(this).keypress(function(event){
        getKey(event);
    });
});

function getKey(event)
{
    var char = event.which || event.keyCode;
    var actualLetter = String.fromCharCode(char);
    if(actualLetter == "w"){
      moveUp();
    }
    createCharacter();
}

function moveUp(){
  y -= 10;
}

//arrays
var monsterArray = [];
var enemyArray = [];

// var sound = document.getElementById("sound");
// sound.loop = true;
// sound.load();


//class collectable monster

// class Monster{
//   constructor(imageVal, xVal, yVal){
//     this.imageVal = imageVal;
//     this.xVal = xVal;
//     this.yVal = yVal;
//   }
//   get image(){
//     return this.imageVal;
//   }
//   get x(){
//     return this.xVal;
//   }
//
//   set x(value){
//     this.xVal = value;
//   }
//   get y(){
//     return this.xVal;
//   }
//
//   set y(value){
//     this.xVal = value;
//   }
// }
//
// function setup(){
//   $.getJSON("json/monster.json", function(result){
//     for( var i = 0; i < result.monster.length; i++){
//       monsterArray.push(new Monster(result.monsters[i].image, result.monsters[i].x, result.monsters[i].y));
//     }
//   });
// }
