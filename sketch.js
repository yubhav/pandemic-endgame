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

function start(){
  virus = [];
  score = 0;
  level = 1;
  started = true;
  loop();
}