/*
Project 7: Penguin Pals
By: Katherine Pajares and Matthew Jaffe
Matthew: pixel art and penguin animation, intro screen
Katherine: game FSM, different screens
*/

var keyArray = [];
function keyPressed() {
  keyArray[keyCode] = 1;
}

function keyReleased() {
  keyArray[keyCode] = 0;
}

function setup() {
  noSmooth();
  imageMode(CENTER);
  createCanvas(800, 600);

  game = new gameObj();
  
}


function draw() {
  game.state[game.currentState].execute(game);

  //use for debugging
  textSize(50);
  fill(0);
  //text(round(mouseX) + ", " + round(mouseY), mouseX, mouseY - 25);
}
