var player;
//0-8 floor tiles
//QWE ice platform
//RTYU platform
//ASDFG ice wall
//ZXCV Ice wall corner
//wasd spikes
var tileMap = [
  " N B                ",
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "TY111111111111111111",
  "  ssssssssssssssssss",
  "                    ",
  "                    ",
  "           P      P ",
  "11111  111111  111RR",
  "11111 B111111  111  ",
  "111111111111111111  ",
  "111111111111111111  ",
  "111111111111111111RR",
  "                    ",
  "                    ",
  "                    ",
  "               TYYYU",
  "                    ",
  "                    ",
  "                 P B",
  "              w11111",
  "             w111111",
  "            w1111111",
  "           w11111111",
  "       w111111111111",
  "      w1111111111111",
  "     w11111111111111",
  "    w111111111111111",
  "TYYY1d              ",
  "   a1d              ",
  "   a1d              ",
  "TYYYs               ",
  "                    ",
  "                    ",
  "111                 ",
  "111                 ",
  "      !             ",
  "      11            ",
  "      11            ",
  "                    ",
  "                    ",
  "                    ",
  "          11        ",
  "          11        ",
  "                    ",
  "                    ",
  "                    ",
  "                 P  ",
  "     11       TYYYYU",
  "                    ",
  "                    ",
  "                    ",
  "    wwww   www    PB",
  "TYYY1111TYU111TYYYYU",
  "                    ",
  "                    ",
  "                    ",
  "TYYU                ",
  "                    ",
  "                    ",
  "       P    P       ",
  "TYYU  TYU  TYU  TYYU",
  "                    ",
  "                    ",
  "                TYYU",
  "                    ",
  "                  P ",
  "                1111",
  "B     P         1111",
  "1111ww11ww11TYYU1111",
  "111111111111        ",
  "111111111111        ",
  "111111111111TYYU    ",
  "                    ",
  "                    ",
  "            TYYU    ",
  "                    ",
  "                    ",
  "        TYYU        ",
  "                    ",
  "                    ",
  "    TYYU            ",
  "                    ",
  "                    ",
  "TYYU                ",
  "                    ",
  "P                   ",
  "11111  11111        ",
  "11111  1111111      ",
  "11111  111111111    ",
  "                    ",
  "                  11",
  "                  11",
  "01111111111111111112",
  "34444444444444444445",
  "34444444444444444445",
  "34444444444444444445",
  "34444444444444444445",
  "3TTTTTTTTTTTTTTTTTTT",
  "3TTTTTTTTTTTTTTTTTTT",
];

var blockingTiles = [];
var walkableTiles = [];
var platforms = [];
//objects that need to be updated every frame
var collisionObjs = [];
var poptarts = [];
var snowballs = [];
var fishes = [];
var goldFish;

//entry point to game loop
//contains much of game state 
class gameScreen //4
{ 
  constructor()
  {
    this.snowDrops = [];
    for(let i = 0; i < 400; i++){
      this.snowDrops.push(new snowObj(2, 5));
    }
    //parallax effect with background
    this.backgroundScrollSpeed = .25;
    this.foregroundScrollSpeed = .5;
    player = new Player(400, 289, 35, 64, 1);  //x, y, size, penguin_type
    //correctly position things dynamically based off height of tilemap
    var yOffset = (tileMap.length - 15) * -40;
    //iterate through tilemap and instantiate objects
    for (let y = 0; y < tileMap.length; y++)
    {
      for (let x = 0; x < tileMap[y].length; x++)
      {
        switch (tileMap[y][x])
        {
          case '0':
            collisionObjs.push(new CollisionObj(x*40+20, yOffset + y*40+20, 40, 40, images.iceCornerImages[0], '0'));
            break;
          case '1':
            collisionObjs.push(new CollisionObj(x*40+20, yOffset + y*40+20, 40, 40, images.iceFloorImages[0], '1'));
            break;
          case '2':
            collisionObjs.push(new CollisionObj(x*40+20, yOffset + y*40+20, 40, 40, images.iceCornerImages[1], '2'));
            break;
          case '3':
            collisionObjs.push(new CollisionObj(x*40+20, yOffset +  y*40+20, 40, 40, images.iceFloorImages[3], '3'));
            break;
          case '4':
            collisionObjs.push(new CollisionObj(x*40+20, yOffset + y*40+20, 40, 40, images.iceCenterImage, '4'));
            break;
          case '5':
            collisionObjs.push(new CollisionObj(x*40+20,  yOffset + y*40+20, 40, 40, images.iceFloorImages[1], '5'));
            break;
          case '6':
            collisionObjs.push(new CollisionObj(x*40+20,  yOffset + y*40+20, 40, 40, images.iceCornerImages[2], '6'));
            break;
          case '7':
            collisionObjs.push(new CollisionObj(x*40+20,  yOffset + y*40+20, 40, 40, images.iceFloorImages[2], '7'));
            break;
          case '8':
            collisionObjs.push(new CollisionObj(x*40+20,  yOffset + y*40+20, 40, 40, images.iceCornerImages[3], '8'));
            break;
          case 'Q':
            collisionObjs.push(new CollisionObj(x*40+20, yOffset + y*40+20, 40, 40, images.icePlatformImages[0], 'Q'));
            break;
          case 'W':
            collisionObjs.push(new CollisionObj(x*40+20,  yOffset + y*40+20, 40, 40, images.icePlatformImages[1], 'W'));
            break;
          case 'E':
            collisionObjs.push(new CollisionObj(x*40+20,  yOffset + y*40+20, 40, 40, images.icePlatformImages[2], 'E'));
            break;
          case 'A':
            collisionObjs.push(new CollisionObj(x*40+20,  yOffset + y*40+20, 40, 40, images.iceWallImages[0], 'A'));
            break;
          case 'S':
            collisionObjs.push(new CollisionObj(x*40+20,  yOffset + y*40+20, 40, 40, images.iceWallImages[1], 'S'));
            break;
          case 'D':
            collisionObjs.push(new CollisionObj(x*40+20,  yOffset + y*40+20, 40, 40, images.iceWallImages[2], 'D'));
            break;
          case 'F':
            collisionObjs.push(new CollisionObj(x*40+20, yOffset +  y*40+20, 40, 40, images.iceWallFloorUpImage, 'F'));
            break;
          case 'G':
            collisionObjs.push(new CollisionObj(x*40+20, yOffset +  y*40+20, 40, 40, images.iceWallFloorDownImage, 'G'));
            break;
          case 'Z':
            collisionObjs.push(new CollisionObj(x*40+20, yOffset +  y*40+20, 40, 40, images.iceWallCornerImages[0], 'Z'));
            break;
          case 'X':
            collisionObjs.push(new CollisionObj(x*40+20, yOffset +  y*40+20, 40, 40, images.iceWallCornerImages[1], 'X'));
            break;
          case 'C':
            collisionObjs.push(new CollisionObj(x*40+20, yOffset +  y*40+20, 40, 40, images.iceWallCornerImages[2], 'C'));
            break;
          case 'V':
            collisionObjs.push(new CollisionObj(x*40+20, yOffset +  y*40+20, 40, 40, images.iceWallCornerImages[3], 'V'));
            break;
          case 'P':
            poptarts.push(new poptart(x*40+20, yOffset +  y*40+20, 40, 40, 'P'));
            break;
          case 'B':
            fishes.push(new Fish(x*40+20, yOffset +  y*40+20, 40, 40, 'B'));
            break;
          case 'N':
            goldFish = new GoldFish(x*40+20, yOffset +  y*40+20, 40, 40, 'N');
            break;
          case 'R':
            platforms.push(new Platform(x*40+20, yOffset +  y*40+20-15, 40, 10, images.platformImages[0], 'R'));
            break;
          case 'T':
            platforms.push(new Platform(x*40+20, yOffset +  y*40+20-15, 40, 10, images.platformImages[1], 'T'));
            break;
          case 'Y':
            platforms.push(new Platform(x*40+20, yOffset +  y*40+20-15, 40, 10, images.platformImages[2], 'Y'));
            break;
          case 'U':
            platforms.push(new Platform(x*40+20, yOffset +  y*40+20-15, 40, 10, images.platformImages[3], 'U'));
            break;
          case '!':
            player = new Player(x*40+20, yOffset +  y*40+20, 35, 64, 1);
            break;
          case 'w':
            collisionObjs.push(new CollisionObj(x*40+20, yOffset +  y*40+30, 30, 20, images.whiteSpikesUp, 'w', true, createVector(0, -10)));
            break;
          case 'a':
            collisionObjs.push(new CollisionObj(x*40+30, yOffset +  y*40+20, 20, 30, images.whiteSpikesLeft, 'a', true, createVector(-10, 0)));
            break;
          case 's':
            collisionObjs.push(new CollisionObj(x*40+20, yOffset +  y*40+10, 30, 20, images.whiteSpikesDown, 's', true, createVector(0, 10)));
            break;
          case 'd':
            collisionObjs.push(new CollisionObj(x*40+10, yOffset +  y*40+20, 20, 30, images.whiteSpikesRight, 'd', true, createVector(10, 0)));
            break;
        }
      }
    }
  }

  //game loop
  execute(me)
  {
      background(220, 250, 250);
      //scrolling foreground and background layers at different speeds
      image(images.background, 400, constrain(-this.backgroundScrollSpeed*(player.position.y - 300), 0, 600));
      image(images.foreground, 400, constrain(-this.foregroundScrollSpeed*(player.position.y - 300), 0, 600));
      
      //snow falling
      for(let i = 0; i < this.snowDrops.length; i++){
        this.snowDrops[i].move();
        this.snowDrops[i].drawSnow();
      }

      push();
      //translate to center y around player
      translate(0, height/2 - player.position.y+100);
      fill(135, 206, 250);
      textSize(64);
      textAlign(LEFT);
      //adjust volume
      player.updatePlayer(me.volume*0.1);
      //update poptarts
      for (let i = 0; i < poptarts.length; i++)
      {
        poptarts[i].update();
        poptarts[i].volume = me.volume*0.005;
      }
      //draw tiles
      for (let i = 0; i < collisionObjs.length; i++){
        fill(0, 255 ,0);
        collisionObjs[i].drawCollisionObj();
      }
      for (let i = 0; i < snowballs.length; i++)
      {
        snowballs[i].updateSnowBall();
      }
      for (let i = 0; i < fishes.length; i++)
      {
        fishes[i].updateFish();
      }
      for (let i = 0; i < platforms.length; i++)
      {
        platforms[i].drawPlatform();
      }
      goldFish.updateFish();
      pop();
      this.lifeDisplay();
      this.scoreDisplay();

      if(player.lives == 0){
        me.gameOver = true;
        me.lose = true;
        me.currentState = 5;

        for (let i = 0; i < poptarts.length; i++)
        {
          poptarts[i].enabled = false;
        }
      }

      if (detectCollision(goldFish.position.x, goldFish.position.y, 40, 40, player.position.x, player.position.y, 64, 16).mag() > 0)
      {
        me.gameOver = true;
        me.win = true;
        me.currentState = 5;
      }
  }
  
  //ui display of current life count
  lifeDisplay()
  {
    if(player.lives > 0){
      image(images.fullHeart, width - 105, 25, 45, 45);
    }
    else{
      image(images.emptyHeart, width - 105, 25, 45, 45);
    }
    if(player.lives > 1){
      image(images.fullHeart, width - 65, 25, 45, 45);
    }
    else{
      image(images.emptyHeart, width - 65, 25, 45, 45);
    }

    if(player.lives > 2){
      image(images.fullHeart, width - 25, 25, 45, 45);
    }
    else{
      image(images.emptyHeart, width - 25, 25, 45, 45);
    }
  }

  //show score ui
  scoreDisplay(){
    fill(200, 245, 255, 230);
    noStroke();
    rect(0, 0, 180, 50);
    fill(100, 200, 245);
    textAlign(LEFT);
    textSize(32);
    text("Score: " + player.score, 10, 32);
  }

  //reseting the variables to replay
  resetVariables(me){
    for (let i = 0; i < fishes.length; i++)
    {
      fishes[i].show = true;
    }

    for (let i = 0; i < poptarts.length; i++)
    {
      poptarts[i].position = poptarts[i].initialPosition;
      poptarts[i].enabled = true;
      poptarts[i].currState = "Idle";
    }

    player.lives = 3;
    player.score = 0;
    player.position.x = 400;
    player.position.y = 289;
    player.jump = 0;
    player.penguin_type = 1;

    //resetting game variables
    me.gameOver = false;
    me.lose = false;
    me.win = false;

  }

  //add a new highscore when a player finishes the game
  updateHighScore(me){
    this.newHighScores = [];
    this.added = false;
    if(me.highScores.length < 5){
      for(var i = 0; i < me.highScores.length; i++){
        if(player.score > me.highScores[i] && this.added == false){
          this.added = true;
          this.newHighScores.push(player.score)
        }
          this.newHighScores.push(me.highScores[i]);
      }
      me.highScores = this.newHighScores;
    }
    else{
      if(player.score > me.highScores[me.highScores.length - 1]){
        for(var i = 0; i < me.highScores.length - 1; i++){
          if(player.score > me.highScores[i] && this.added == false){
            this.added = true;
            this.newHighScores.push(player.score)
          }
            this.newHighScores.push(me.highScores[i]);
        }
      }
      me.highScores = this.newHighScores;
    }
  }


}

var keyArray = [];

//for WASD movement of player
function keyPressed() {
  keyArray[keyCode] = 1;
}

function keyReleased() {
  keyArray[keyCode] = 0;
}

//class for tiles that can be collided with by npcs/ player
class CollisionObj
{
  constructor(x, y, w, h, img, char, doesDamage, offset)
  {
    if (offset)
      this.offset = offset;
    else
      this.offset = createVector(0, 0);
    this.position = createVector(x, y);
    this.size = createVector(w, h);
    this.img = img;
    if (doesDamage)
      this.doesDamage = true;
    else
      this.doesDamage = false;
    blockingTiles[char] = true;
    walkableTiles[char] = !doesDamage;
  }

  drawCollisionObj()
  {
    image(this.img, this.position.x + this.offset.x, this.position.y+this.offset.y);
  }
}

//return normal vector of collision if there is one otherwise return zero vector
function detectCollision(x1, y1, w1, h1, x2, y2, w2, h2)
{
  let left1 = x1 - w1/2;
  let right1 = x1 + w1/2;
  let top1 = y1 - h1/2;
  let bottom1 = y1 + h1/2;

  let left2 = x2 - w2/2;
  let right2 = x2 + w2/2;
  let top2 = y2 - h2/2;
  let bottom2 = y2 + h2/2;

  //overlap detected
  if (right1 >= left2 && left1 <= right2 && bottom1 >= top2 && top1 <= bottom2)
  {
    dir = createVector(x2 - x1, y2 - y1);
    if(dir.x > 0)
    {
      //bottom right of 1
      if (dir.y > 0)
      {
        if (abs(bottom1 - top2) < abs(right1 - left2))
          return createVector(0, -1);
        else
          return createVector(-1, 0);
      }
      //top right of 1
      else
      {
        if (abs(top1 - bottom2) < abs(right1 - left2))
          return createVector(0, 1);
        else
          return createVector(-1, 0);
      }
    }
    else
    {
      //bottom left of 1
      if (dir.y > 0)
      {
        if (abs(bottom1 - top2) < abs(left1 - right2))
          return createVector(0, -1);
        else
          return createVector(1, 0);
      }
      //top left of 1
      else
      {
        if (abs(top1 - bottom2) < abs(left1 - right2))
          return createVector(0, 1);
        else
          return createVector(1, 0);
      }
    }
  }
  return createVector(0, 0);
}

//projectile for player spawned with special move
class Snowball
{
  constructor(x, y, dir)
  {
    if (dir == 1)
      this.position = createVector(x, y );
    else
      this.position = createVector(x-10, y);
    this.dir = dir;
    this.speed = 5;
    this.liveTime = 60;
    this.currTime = 0;
  }

  //move snowball and check for collision with enemies
  updateSnowBall()
  {
    if (this.currTime > this.liveTime)
    {
      this.destroySnowball();
      return;
    }
    this.position.x += this.speed * this.dir;
    image(images.snowBall, this.position.x, this.position.y);
    for (let i = 0; i < collisionObjs.length; i++)
    {
      if (detectCollision(this.position.x, this.position.y, 20, 20, collisionObjs[i].position.x, collisionObjs[i].position.y, collisionObjs[i].size.x, collisionObjs[i].size.y).mag() > 0) 
      {
        this.destroySnowball();
      }
    }
    for (let i = 0; i < poptarts.length; i ++)
    {
      if (detectCollision(this.position.x, this.position.y, 20, 20, poptarts[i].position.x, poptarts[i].position.y, poptarts[i].size.x, poptarts[i].size.y).mag() > 0)
      {
        poptarts.splice(i, 1);
        if(!sounds.NPCDeathSound.isPlaying()){
          sounds.NPCDeathSound.setVolume(player.volume);
          sounds.NPCDeathSound.play();
        }
        this.destroySnowball();
        return;
      }
    }
    this.currTime++
  }

  //remove snowball from array so it is no longer updated
  destroySnowball()
  {
    for (let i = 0; i < snowballs.length; i++)
    {
      if (snowballs[i] == this)
        snowballs.splice(i, 1);
    }
  }
}

//gives the player an extra life and extra score on collision
class Fish
{
  constructor(x, y)
  {
    this.position = createVector(x, y);
    this.show = true;
  }

  //check for collision with player and update plaer score and lives if collision
  updateFish()
  {
    if(this.show == true){
      image(images.fish, this.position.x, this.position.y);
    }
    if (detectCollision(this.position.x, this.position.y, 40, 40, player.position.x, player.position.y, 64, 64).mag() > 0 && this.show == true)
    {
      for (let i = 0; i < fishes.length; i++)
      {
        if (this == fishes[i]) 
        {
          //fishes.splice(i, 1);
          this.show = false;
          player.score += 500;
          if (player.lives < 3)
          {
            player.lives++;
          }
        }
      }
    }
  }
}

//similar to fish but collision wins the game for the player
class GoldFish
{
  constructor(x, y)
  {
    this.position = createVector(x, y);
  }

  updateFish()
  {
    image(images.goldFish, this.position.x, this.position.y);
  }
}

function lerp(a, b, t)
{
  return a * (1 - t) + b * t;
}

class Platform
{
  constructor(x, y, w, h, img, char)
  {
    this.position = createVector(x, y);
    this.size = createVector(w, h);
    this.img = img;
    walkableTiles[char] = true;
  }

  drawPlatform()
  {
    image(this.img, this.position.x, this.position.y+15);
  }
}