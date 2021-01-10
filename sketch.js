let started = false;

let player;
let virus = [];

let score = 0;
let level = 1;

let timer = 300;
let timeWas = 0;


function preload(){
  virusImage = loadImage('./img/object-virus.png');
  backgroundImage = loadImage('./img/background-image.png');

  // characters
  captamerica = loadImage('./img/captain-america.png');
  ironman = loadImage('./img/iron-man.png');
  thor = loadImage('./img/thor.png');
  hulk =  loadImage('./img/hulk.png');
  widow = loadImage('./img/black-widow.png');
}

function setup() {
  createCanvas(1000, 500);
  textSize(30);
  textFont("Courier New");
  textStyle(BOLD);
  
  resetGame();
}

function resetGame() {
  clear();

  gameOver = select('#gameOver');
  gameOver.hide();
 
  menu = select('#chooseCharacter');
  menu.show();

  // select player 
  player = new Avenger();
  selectSkin = select('#skin');
  button = select('#startGame');

  // onclick functionality to be added 
}

function start(){
  virus = [];
  score = 0;
  level = 1;
  started = true;
  loop();
}

function keyPressed() {
  if (keyIsDown(32) || keyIsDown(38)) {
    player.jump();
  }
}

function loadBackground() {
    return backgroundImage
}