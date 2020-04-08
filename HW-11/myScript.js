//work in progesss


var ctx = document.getElementById('game').getContext('2d');
// load image
var image = new Image();
image.onload = function () {
    // draw the image into the canvas
    ctx.drawImage(image, 0, 0);
}
image.src = './assets/monster_sprite.png';
