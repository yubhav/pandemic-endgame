let started = false;

let keyWorker;
let virus = [];

let score = 0;
let level = 1;

let timer = 300;
let timeWas = 0;


function preload(){
  virusImage = loadImage('./images/object-virus.png');
  backgroundImage = loadImage('./images/background-image.png');
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

  //keyworker to be added
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
      keyWorker.jump();
    }
}

function loadBackground() {
    return backgroundImage
}