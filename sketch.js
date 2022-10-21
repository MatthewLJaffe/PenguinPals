/*
Project 7: Penguin Pals
By: Katherine Pajares and Matthew Jaffe
Matthew: pixel art and character animations(3 different penguins and poptart), ice on the bottom of intro screen
Katherine: game FSM, different screens general layout, snow and icicles on intro screen
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
