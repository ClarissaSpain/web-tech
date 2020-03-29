var canvas = document.getElementById("pong");
var ctx = canvas.getContext('2d');

//sounds
var hit = new Audio();
var wall = new Audio();
var userScore = new Audio();
var comScore = new Audio();

hit.src = "sounds/hit.mp3";
wall.src = "sounds/wall.mp3";
comScore.src = "sounds/comScore.mp3";
userScore.src = "sounds/userScore.mp3";


var backgroundcolor = "rgb(0,0,0)";

const ball = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  radius: 10,
  velocityX: 5,
  velocityY: 5,
  speed: 7,
  color: "WHITE"
}

const user = {
  x: 0,
  y: (canvas.height - 100) / 2,
  width: 10,
  height: 100,
  score: 0,
  color: "WHITE"
}

const com = {
  x: canvas.width - 10,
  y: (canvas.height - 100) / 2,
  width: 10,
  height: 100,
  score: 0,
  color: "WHITE"
}

const net = {
  x: (canvas.width-2) / 2,
  y: 0,
  height: 10,
  width: 2,
  color: "WHITE"
}

function drawRect(x, y, w, h, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
}

function drawArc(x, y, r, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.fill();
}

canvas.addEventListener("mousemove", getMousePos);

function getMousePos(evt) {
  let rect = canvas.getBoundingClientRect();

  user.y = evt.clientY - rect.top - user.height / 2;
}

function resetBall() {
  ball.x = canvas.width / 2;
  ball.y = canvas.height / 2;
  ball.velocityX = -ball.velocityX;
  ball.speed = 7;
}

function drawNet() {
  for (let i = 0; i <= canvas.height; i += 10) {
    drawRect(net.x, net.y + i, net.width, net.height, net.color);
  }
}

function drawText(text, x, y) {
  ctx.fillStyle = "#FFF";
  ctx.font = "75px fantasy";
  ctx.fillText(text, x, y);
}


// collision detection
function collision(b, p) {
  p.top = p.y;
  p.bottom = p.y + p.height;
  p.left = p.x;
  p.right = p.x + p.width;

  b.top = b.y - b.radius;
  b.bottom = b.y + b.radius;
  b.left = b.x - b.radius;
  b.right = b.x + b.radius;

  return p.left < b.right && p.top < b.bottom && p.right > b.left && p.bottom > b.top;
}


function update() {

  //score
  if (ball.x - ball.radius < 0) {
    com.score++;
    comScore.play();
    resetBall();
  } else if (ball.x + ball.radius > canvas.width) {
    user.score++;
    userScore.play();
    resetBall();
  }

  ball.x += ball.velocityX;
  ball.y += ball.velocityY;

  com.y += ((ball.y - (com.y + com.height / 2))) * 0.1;

  //collision with the edges
  if (ball.y - ball.radius < 0 || ball.y + ball.radius > canvas.height) {
    ball.velocityY = -ball.velocityY;
    wall.play();
  }

  // we check if the paddle hit the user or the com paddle
  var player = (ball.x + ball.radius < canvas.width / 2) ? user : com;

  // if the ball hits a paddle
  if (collision(ball, player)) {
    hit.play();
    var collidePoint = (ball.y - (player.y + player.height / 2));
    collidePoint = collidePoint / (player.height / 2);
    var angleRad = (Math.PI / 4) * collidePoint;
    var direction = (ball.x + ball.radius < canvas.width / 2) ? 1 : -1;
    ball.velocityX = direction * ball.speed * Math.cos(angleRad);
    ball.velocityY = ball.speed * Math.sin(angleRad);
    ball.speed += 0.1;
    //Colton had to help me with this beast of a line.
    backgroundcolor = "rgb("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")";
  }
}

function create() {

  drawRect(0, 0, canvas.width, canvas.height, backgroundcolor);
  drawText(user.score, canvas.width / 4, canvas.height / 5);
  drawText(com.score, 3 * canvas.width / 4, canvas.height / 5);
  drawNet();
  drawRect(user.x, user.y, user.width, user.height, user.color);
  drawRect(com.x, com.y, com.width, com.height, com.color);
  drawArc(ball.x, ball.y, ball.radius, ball.color);
}

function game() {
  update();
  create();
}

var loop = setInterval(game, 1000 / 60);
