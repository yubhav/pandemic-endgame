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

  button.mousePressed(()=> {
    player.selectAvenger();
    menu = select('#chooseCharacter');
    menu.hide();
    start();
  })
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

// main functionality of game 
function draw(){
  if (started) {
    
    background(166);
    background(loadBackground());
    
    text(`Score: ${score}`, 10, 10, 200, 100);
    text(`Level: ${level}`, 820, 10, 200, 100);
  
    // new virus
    if (frameCount > timeWas + timer && timer != 0) {
      timeWas = frameCount;
      timer = random(100, timer);
      virus.push(new ObjectVirus());
    }

    for(let v of virus) {
      v.move();
      v.draw();

      //collision
      if(player.hits(v)){
        noLoop();
        gameOver = select('#gameOver');
        gameOver.show();
        button = select('#playAgain');
  
        button.mousePressed(()=> {
          started = false;
          resetGame();
        }) 
      }

      // Caclulate score and level
      if (v.x == 0) {
        score += 1;
        if (score % 5 == 0) {
          level += 1;
          timer -= 50;
        }
      }
    }
    
    player.draw();
    player.move();
  }
}