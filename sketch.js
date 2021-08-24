var sonic;
var mario;
var hare;
var trophy;
var track;
var obstaclesIMG;
var powercoinIMG;
var finishline;
var playerCount;
var gameState;
var game;


function preload(){
sonic = loadAnimation("Sonic1.png","Sonic2.png","Sonic3.png","Sonic4.png");
mario = loadAnimation("Mario1.png","Mario2.png","Mario3.png","Mario4.png","Mario5.png","Mario6.png","Mario7.png","Mario8.png");
hare = loadAnimation("bunny1.png","bunny2.png","bunny3.png","bunny4.png","bunny5.png","bunny6.png");
finishline = loadImage("finishline.png");
track = loadImage("longTrack.png");
powercoinIMG = loadImage("coin.png");
obstaclesIMG = loadImage("rock.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}

function draw() {
  background(track);
 if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
   game.play();
 }

  //if (gameState === 2) {
    //game.showLeaderboard();
    //game.end();
  //}
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}