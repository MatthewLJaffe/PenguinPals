var keyArray = [];
function keyPressed() {
  keyArray[keyCode] = 1;
}

function keyReleased() {
  keyArray[keyCode] = 0;
}

function setup() {
  createCanvas(800, 600);
  
  game = new gameObj();

  
}


function draw() {
  
  game.state[game.currentState].execute(game);
  
  
  //debugging
  textSize(50);
  text(mouseX + ", " + mouseY, mouseX, mouseY - 100);
}
