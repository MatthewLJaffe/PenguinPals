var player;
//0-8 floor tiles
//QWE ice platform
//ASDFG ice wall
var tileMap = [
  "                    ",
  "                    ",
  "                    ",
  " N    11   11       ",
  "111111111111111     ",
  "                    ",
  "                 111",
  "                    ",
  "             B      ",
  "          11111     ",
  "     11111          ",
  "                    ",
  "                    ",
  "11111111111111    11",
  "                 1  ",
  "                1   ",
  "              11    ",
  "        P           ",
  "        11          ",
  "        11111       ",
  "      11            ",
  "      11            ",
  "    11              ",
  "  B 11        11    ",
  "111111              ",
  "                    ",
  "                  11",
  "                    ",
  "              011111",
  "              344444",
  "01111111111111Z44444",
  "34444444444444444444",
  "34444444444444444444",
  "34444444444444444444",
  "34444444444444444444",
  "3TTTTTTTTTTTTTTTTTTT",
  "3TTTTTTTTTTTTTTTTTTT",
];

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
    player = new Player(400, 289, 64, 1);  //x, y, size, penguin_type
    //correcly position things dynamically based off height of tilemap=
    var yOffset = (tileMap.length - 15) * -40;
    //iterate through tilemap and instantiate objects
    for (let y = 0; y < tileMap.length; y++)
    {
      for (let x = 0; x < tileMap[y].length; x++)
      {
        switch (tileMap[y][x])
        {
          case '0':
            collisionObjs.push(new CollisionObj(x*40+20, yOffset + y*40+20, 40, 40, images.iceCornerImages[0]));
            break;
          case '1':
            collisionObjs.push(new CollisionObj(x*40+20, yOffset + y*40+20, 40, 40, images.iceFloorImages[0]));
            break;
          case '2':
            collisionObjs.push(new CollisionObj(x*40+20, y*40+20, 40, 40, images.iceCornerImages[1]));
            break;
          case '3':
            collisionObjs.push(new CollisionObj(x*40+20, yOffset +  y*40+20, 40, 40, images.iceFloorImages[3]));
            break;
          case '4':
            collisionObjs.push(new CollisionObj(x*40+20, yOffset + y*40+20, 40, 40, images.iceCenterImage));
            break;
          case '5':
            collisionObjs.push(new CollisionObj(x*40+20,  yOffset + y*40+20, 40, 40, images.iceFloorImages[1]));
            break;
          case '6':
            collisionObjs.push(new CollisionObj(x*40+20,  yOffset + y*40+20, 40, 40, images.iceCornerImages[2]));
            break;
          case '7':
            collisionObjs.push(new CollisionObj(x*40+20,  yOffset + y*40+20, 40, 40, images.iceFloorImages[2]));
            break;
          case '8':
            collisionObjs.push(new CollisionObj(x*40+20,  yOffset + y*40+20, 40, 40, images.iceCornerImages[3]));
            break;
          case 'Q':
            collisionObjs.push(new CollisionObj(x*40+20, yOffset + y*40+20, 40, 40, images.icePlatformImages[0]));
            break;
          case 'W':
            collisionObjs.push(new CollisionObj(x*40+20,  yOffset + y*40+20, 40, 40, images.icePlatformImages[1]));
            break;
          case 'E':
            collisionObjs.push(new CollisionObj(x*40+20,  yOffset + y*40+20, 40, 40, images.icePlatformImages[2]));
            break;
          case 'A':
            collisionObjs.push(new CollisionObj(x*40+20,  yOffset + y*40+20, 40, 40, images.iceWallImages[0]));
            break;
          case 'S':
            collisionObjs.push(new CollisionObj(x*40+20,  yOffset + y*40+20, 40, 40, images.iceWallImages[1]));
            break;
          case 'D':
            collisionObjs.push(new CollisionObj(x*40+20,  yOffset + y*40+20, 40, 40, images.iceWallImages[2]));
            break;
          case 'F':
            collisionObjs.push(new CollisionObj(x*40+20, yOffset +  y*40+20, 40, 40, images.iceWallFloorUpImage));
            break;
          case 'G':
            collisionObjs.push(new CollisionObj(x*40+20, yOffset +  y*40+20, 40, 40, images.iceWallFloorDownImage));
            break;
          case 'Z':
            collisionObjs.push(new CollisionObj(x*40+20, yOffset +  y*40+20, 40, 40, images.iceWallCornerImages[0]));
            break;
          case 'X':
            collisionObjs.push(new CollisionObj(x*40+20, yOffset +  y*40+20, 40, 40, images.iceWallCornerImages[1]));
            break;
          case 'C':
            collisionObjs.push(new CollisionObj(x*40+20, yOffset +  y*40+20, 40, 40, images.iceWallCornerImages[2]));
            break;
          case 'V':
            collisionObjs.push(new CollisionObj(x*40+20, yOffset +  y*40+20, 40, 40, images.iceWallCornerImages[3]));
            break;
          case 'P':
            poptarts.push(new poptart(x*40+20, yOffset +  y*40+20, 40, 40));
            break;
          case 'B':
            fishes.push(new Fish(x*40+20, yOffset +  y*40+20, 40, 40));
            break;
          case 'N':
            goldFish = new GoldFish(x*40+20, yOffset +  y*40+20, 40, 40);
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
        this.snowDrops[i].draw();
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
  lifeDisplay(){
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

//class encapsulating different penguin playable characters
class Player
{
  constructor(x, y, size, penguin_type)
  {
    //movement/forces
    this.x = x;
    this.y = y;
    this.lives = 3;
    this.score = 0;
    this.position = new p5.Vector(this.x, this.y);
    this.jump = 0;
    this.jumpForce = new p5.Vector(0, -12);
    this.velocity = new p5.Vector(0, 0);
    this.drag = createVector(.2, 0);
    this.acceleration = new p5.Vector(0 , 0);
    this.gravity = new p5.Vector(0, 0.45);
    this.speed = 2;
    this.fall = false;
    this.specialMoveFrames = 60;
    this.currSpecialMoveFrames = 0;
    //sound effects
    this.walkingSound = sounds.walkingSound;


    this.size = size;
    this.height = this.size;
    this.specialMoveCooldown = 30;
    this.currSpecialMoveCooldown = 0;

    this.playerSwitchCooldown = 60;
    this.currPlayerSwitchCooldown = 0;

    this.penguin_type = penguin_type; //1 = black, 2 = blue
    this.moving = false;
    this.stepRate = 6;
    this.currAnimIndex = 0
    //animation changes depending on penguin
    if(this.penguin_type == 1){
      this.anim = images.blackPenguinWalkRight;
    }
    else if(this.penguin_type == 2){
      this.anim = images.blackPenguinWalkLeft;
    }
  }


  updatePlayer(volume)
  {
    //handle input for switching penguins
    if (keyArray[69] == 1 && this.currPlayerSwitchCooldown <= 0)
    {
      this.currPlayerSwitchCooldown = this.playerSwitchCooldown;
      if (this.penguin_type == 1)
      {
        //set up blue penguin animations
        this.penguin_type = 2;
        if (this.facedDir == 1)
          this.anim = images.bluePenguinWalkRight;
        else
          this.anim = images.bluePenguinWalkLeft;
      }
      else
      {
        //set up black penguin animations 
        this.penguin_type = 1;
        if (this.facedDir == 1)
          this.anim = images.blackPenguinWalkRight;
        else
          this.anim = images.blackPenguinWalkLeft;
      }
    }
    this.currPlayerSwitchCooldown--;
    this.walkingSound.setVolume(volume);
    this.updatePlayerPosition();
    this.updatePlayerCollision();
    this.updatePlayerAnim();
  }

  //different special moves for penguins executable with the space key
  specialMove()
  {
    //black penguin throw snowball
    if (this.penguin_type == 1)
    {
      this.currAnimIndex = 0;
      if (this.facedDir == 1)
      {
        this.anim = images.blackPenguinSpecialRight;
      }
      else 
      {
        this.anim = images.blackPenguinSpecialLeft;
      }
      snowballs.push(new Snowball(this.position.x, this.position.y, this.facedDir));
    }
    //blue penguin lateral dash in faced direction
    else
    {
      if (this.facedDir == 1)
        this.acceleration.add(8, 0);
      else
        this.acceleration.add(-8, 0);
    }
  }

  //make sure player does not collide with tiles
  updatePlayerCollision()
  {
    var grounded = false;
    //check for collision with tiles
    for(var c = 0; c < collisionObjs.length; c++)
    {
      let dir = detectCollision(this.position.x, this.position.y, 35, 64, collisionObjs[c].position.x, collisionObjs[c].position.y, collisionObjs[c].size.x, collisionObjs[c].size.y);
      if (dir.mag() == 0) continue;
      if (dir.x > .1)
        this.position.x = collisionObjs[c].position.x + collisionObjs[c].size.x/2 + 18;
      if (dir.x < -.1)
        this.position.x = collisionObjs[c].position.x - collisionObjs[c].size.x/2 - 18;
      if (dir.y > .1)
        this.position.y = collisionObjs[c].position.y + collisionObjs[c].size.y/2 + 32;
      if (dir.y < -.1)
      {
        this.position.y = collisionObjs[c].position.y - collisionObjs[c].size.y/2 - 32;
        grounded = true;
        this.jump = 0;
        this.velocity.y = 0;
      }
    }
    if (!grounded)
    {
      this.jump = 1;
    }
    //check for collision with poptarts
    for (let p = 0; p < poptarts.length; p++)
    {
      let dir = detectCollision(this.position.x, this.position.y, 35, 64, poptarts[p].position.x, poptarts[p].position.y, poptarts[p].size.x*.9, poptarts[p].size.y*.9);
      if (dir.mag() == 0) continue;
      if(currFrame < (frameCount - 60) ) {
        currFrame = frameCount
        poptarts[p].collisionSound.setVolume(poptarts[p].volume);
        player.lives--;
        player.score-=50;
        if(!poptarts[p].collisionSound.isPlaying() && player.lives > 0)
        poptarts[p].collisionSound.play();
      }
    }
  }

  //update left facing animations for player
  updatePenguinLeft(){
    if(this.penguin_type == 1){
      this.anim = images.blackPenguinWalkLeft;
    }
    else if(this.penguin_type == 2){
      this.anim = images.bluePenguinWalkLeft;
    }
    else{
      this.anim = images.redPenguinWalkLeft;
    }
  }

  //update right facing animations for player
  updatePenguinRight(){
    if(this.penguin_type == 1){
      this.anim = images.blackPenguinWalkRight;
    }
    else if(this.penguin_type == 2){
      this.anim = images.bluePenguinWalkRight;
    }
    else{
      this.anim =images.redPenguinWalkRight;
    }
  }

  //update position velocity and acceleration for player and handle input for special moves / jumping
  updatePlayerPosition()
  {
    var gravityForce = p5.Vector.mult(this.gravity, this.acceleration.add(gravityForce));

    //not executing special move
    if (this.currSpecialMoveCooldown <= 0)
    {
      if (keyArray[32] == 1)
      {
        this.currSpecialMoveCooldown = this.specialMoveCooldown;
        this.specialMove();
      }
      //Jump
      else if(keyArray[87] == 1 && this.jump == 0)
      {  //player jumping
        //sound effect
        if(!this.walkingSound.isPlaying()){
          this.walkingSound.play();
        }
        this.acceleration.add(this.jumpForce);
        this.jump = 1;
      }
      //A/D Movement
      else if(keyArray[65] == 1 && this.position.x > 20)
      {  //player moving to the left
        this.facedDir = -1;
        this.updatePenguinLeft();
        this.position.x -= this.speed;

        this.moving = true;
      }
      else if(keyArray[68] == 1 && this.position.x  + this.size/4 < width)
      {  //player moving to the right
        this.facedDir = 1;
        this.updatePenguinRight();
        this.position.x += this.speed;
        this.moving = true;
      }
      else
      {
        this.moving = false;
        this.height = this.size;
      }
    }
    //executing special move
    else
    {
      this.currSpecialMoveCooldown--;
      this.moving = true;
    }
    
    //update position velocity and acceleration 
    if(this.jump > 0 || this.fall == true){
      this.height = this.size*1.05;
      this.acceleration.add(this.gravity);
    }
    if (this.velocity.x > 0) {
      this.acceleration.add(createVector(-this.drag.x, 0))
    }
    else if (this.velocity.x < 0) {
      this.acceleration.add(createVector(this.drag.x, 0))
    }
    this.velocity.add(this.acceleration);
    if (abs(this.velocity.x) < this.drag.x)
      this.velocity.x = 0;
    this.position.add(this.velocity);

    this.acceleration.set(0, 0);
  }

  //loop through current player animation
  updatePlayerAnim()
  {
    if(this.moving == true && (this.fall == false || this.currSpecialMoveCooldown > 0))
    {
      if (frameCount % this.stepRate == 0)
      {
        this.currAnimIndex = (this.currAnimIndex + 1) % this.anim.length;
      }
      image(this.anim[this.currAnimIndex], this.position.x, this.position.y, this.size, this.height);
    }
    else{
      image(this.anim[0], this.position.x, this.position.y, this.size, this.height);
    }

  }
}

//class for tiles that can be collided with by npcs/ player
class CollisionObj
{
  constructor(x, y, w, h, img)
  {
    this.position = createVector(x, y);
    this.size = createVector(w, h);
    this.img = img;
  }

  drawCollisionObj()
  {
    image(this.img, this.position.x, this.position.y);
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

  if (right1 >= left2 && left1 <= right2 && bottom1 >= top2 && top1 <= bottom2)
  {
    if (abs(x1 - x2) < abs(y1 - y2))
    {
      if (y1 > y2)
        return createVector(0, 1);
      else
        return createVector(0, -1);
    }
    else
    {
      if (x1 > x2)
        return createVector(1, 0);
      else
        return createVector(-1, 0);
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