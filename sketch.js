/*
Project 7: Penguin Pals
By: Katherine Pajares and Matthew Jaffe
Matthew: pixel art and character animations(3 different penguins and poptart), ice on the bottom of intro screen, NPC AI
Katherine: game FSM, different screens general layout, snow and icicles on intro screen, collision, sound effects, player movement
*/

var keyArray = [];
var startImages;
var instructionImages;
var pixelBodyFont;
var pixelHeaderFont;
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
  pixelBodyFont = loadFont("FFFFORWA.ttf");
  pixelHeaderFont = loadFont("ka1.ttf");
}


function setup() {
  noSmooth();
  imageMode(CENTER);
  createCanvas(800, 600);
  game = new GameObj();
  textFont(pixelBodyFont);
}


function draw() {
  game.state[game.currentState].execute(game);
}

