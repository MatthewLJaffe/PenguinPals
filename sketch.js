/*
Project 7: Penguin Pals
By: Katherine Pajares and Matthew Jaffe
Matthew: pixel art and character animations(3 different penguins and poptart), ice on the bottom of intro screen, NPC AI
Katherine: game FSM, different screens general layout, snow and icicles on intro screen, collision, sound effects, player movement
*/

var keyArray = [];
var startImages;
var instructionImages;
//I do this to get intellisense working images should be constructed in preload
var images;
var sounds;
function keyPressed() {
  keyArray[keyCode] = 1;
}

function keyReleased() {
  keyArray[keyCode] = 0;
}

function preload()
{
  images = new Images();
  sounds = new SoundEffects();
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
