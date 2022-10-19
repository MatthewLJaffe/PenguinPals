var keyArray = [];
function keyPressed() {
  keyArray[keyCode] = 1;
}

function keyReleased() {
  keyArray[keyCode] = 0;
}
var currFrame;
function setup() {
  createCanvas(800, 600);
  
  game = new gameObj();
  currFrame = 0;
  
}


function draw() {
  
  game.state[game.currentState].execute(game);
  
  currFrame++;
  //debugging
  textSize(50);
  text(mouseX + ", " + mouseY, mouseX, mouseY - 100);
}
