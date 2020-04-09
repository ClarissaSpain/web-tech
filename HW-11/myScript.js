//work in progesss


var ctx = document.getElementById('game').getContext('2d');
// load image
var image = new Image();
image.onload = function () {
    // draw the image into the canvas
    ctx.drawImage(image, 0, 0);
    // ctx.Monster(image, x, y);
}
image.src = './assets/monster_sprite.png';


//arrays
var monsterArray = [];
var enemyArray = [];

// var sound = document.getElementById("sound");
// sound.loop = true;
// sound.load();


//class collectable monster

class Monster{
  constructor(imageVal, xVal, yVal){
    this.imageVal = imageVal;
    this.xVal = xVal;
    this.yVal = yVal;
  }
  get image(){
    return this.imageVal;
  }
  get x(){
    return this.xVal;
  }

  set x(value){
    this.xVal = value;
  }
  get y(){
    return this.xVal;
  }

  set y(value){
    this.xVal = value;
  }
}

function setup(){
  $.getJSON("json/monster.json", function(result){
    for( var i = 0; i < result.monster.length; i++){
      monsterArray.push(new Monster(result.monsters[i].image, result.monsters[i].x, result.monsters[i].y));
    }
  });
}
