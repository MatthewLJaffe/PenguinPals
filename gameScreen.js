var player;
//0-8 floor tiles
//QWE ice platform
//ASDFG ice wall

/*
var tileMap = [
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "111111              ",
  "                    ",
  "       11111        ",
  "       11111        ",
  "              011112",
  "              344445",
  "01111111111111Z44445",
  "34444444444444444445",
  "34444444444444444445",
  "34444444444444444445",
  "34444444444444444445",
  "3TTTTTTTTTTTTTTTTTTT",
  "3TTTTTTTTTTTTTTTTTTT",
];
*/

var tileMap = [
  "                    ",
  "P                   ",
  "11111111111111    11",
  "                 1  ",
  "                1   ",
  "              11    ",
  "                    ",
  "        11          ",
  "        1111        ",
  "      11            ",
  "      11            ",
  "    11        11    ",
  "P   11              ",
  "111111              ",
  "                  11",
  "                    ",
  "                    ",
  "              111111",
  "              111111",
  "11111111111111111111",
  "11111111111111111111",
  "11111111111111111111",
  "11111111111111111111",
  "11111111111111111111",
  "11111111111111111111",
  "11111111111111111111",
];

var collisionObjs = [];
var poptarts = [];

class gameScreen //4
{ 
  constructor()
  {
    this.snowDrops = [];
      
    for(let i = 0; i < 400; i++){
      this.snowDrops.push(new snowObj(2, 5));
    }
    this.backgroundScrollSpeed = .25;
    this.foregroundScrollSpeed = .5;
    player = new Player(400, 289, 64, 1);  //x, y, size, penguin_type
    var yOffset = (tileMap.length - 15) * -40;
    for (let y = 0; y < tileMap.length; y++)
    {
      for (let x = 0; x < tileMap[y].length; x++)
      {
        switch (tileMap[y][x])
        {
          case '0':
            collisionObjs.push(new CollisionObj(x*40+20,  yOffset + y*40+20, 40, 40, images.iceCornerImages[0]));
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
            collisionObjs.push(new CollisionObj(x*40+20,  yOffset + y*40+20, 40, 40, images.iceCenterImage));
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
          
        }
      }
    }
  }

  execute(me)
  {
      background(220, 250, 250);
      image(images.background, 400, constrain(-this.backgroundScrollSpeed*(player.position.y - 300), 0, 600));
      image(images.foreground, 400, constrain(-this.foregroundScrollSpeed*(player.position.y - 300), 0, 600));
      
      //snow falling
      for(let i = 0; i < this.snowDrops.length; i++){
        this.snowDrops[i].move();
        this.snowDrops[i].draw();
      }

      push();
      translate(0, height/2 - player.position.y+100);
      fill(135, 206, 250);
      textSize(64);
      textAlign(LEFT);

      player.volume = me.volume;
      player.updatePlayer();
      for (let i = 0; i < poptarts.length; i++)
      {
        poptarts[i].update();
      }
      for (let i = 0; i < collisionObjs.length; i++){
        fill(0, 255 ,0);
        collisionObjs[i].drawCollisionObj();
      }
      pop();

      this.lifeDisplay();
      this.scoreDisplay();
  }
  
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

  scoreDisplay(){
    fill(135, 206, 250);
    textAlign(LEFT);
    textSize(32);
    text("Score: " + player.score, 10, 32);
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
    this.jumpForce = new p5.Vector(0, -10);
    this.velocity = new p5.Vector(0, 0);
    this.acceleration = new p5.Vector(0 , 0);
    this.gravity = new p5.Vector(0, 0.3);
    this.speed = 2;
    this.fall = false;

    //sound effects
    this.walkingSound = sounds.walkingSound;
    this.volume = 0;
    this.walkingSound.setVolume(this.volume * 0.1);  //volume comes from game object, set before playing game

    this.size = size;
    this.height = this.size;
    //this.speed = maxMoveSpeed;
    //this.jumpHeight = jumpHeight;
    //this.animStates = animStates;
    //this.specialMoveFunction = specialMoveFunction;
    this.specialMoveCooldown = 30;
    this.currSpecialMoveCooldown = 0;


    this.penguin_type = penguin_type; //1 = black, 2 = blue, 3 = red
    this.moving = false;
    this.stepRate = 3;
    this.currAnimIndex = 0
    //animation changes depending on penguin
    if(this.penguin_type == 1){
      this.anim = images.blackPenguinWalkRight;
    }
    else if(this.penguin_type == 2){
      this.anim = images.blackPenguinWalkLeft;
    }
    else{
      this.anim = images.redPenguinWalkLeft;
    }

    //this.direction = "L"; //"L" is left, "R" is right (for powerups later)
  }

  updatePlayer()
  {
    this.walkingSound.setVolume(this.volume * 0.1);
    this.updatePlayerPosition();
    this.updatePlayerCollision();
    this.updatePlayerAnim();
    //this.useSpecialMove();
  }

  updatePlayerCollision()
  {
    this.fall = true;
    for(var i = 0; i < collisionObjs.length; i++){
      var verticalDist = abs(collisionObjs[i].position.y - this.position.y);
      var horizontalDist = abs(this.position.x - collisionObjs[i].position.x);
      var distance = dist(collisionObjs[i].position.x, collisionObjs[i].position.y, this.position.x, this.position.y);

      //colliding with bottom of stairs
      if(distance  < (this.height/2 + 20)&& this.position.y + this.height/2 <= collisionObjs[i].position.y - 10){
        this.fall = false;
        this.height = this.size;
        this.jump = 0;
        this.velocity.y = 0;
        this.position.y = collisionObjs[i].position.y - 18 - this.height/2;
      }

      
      //colliding from the top
      if(distance  < (this.height/2 + 25)&& this.position.y + this.height/2 >= collisionObjs[i].position.y + 20 && horizontalDist <(this.siz/4 + 20)){
        this.height = this.size*1.05;
        if(this.velocity.y < 0){
          this.velocity.y *= -1;
        }

      
      }
      

      //colliding on the right
      if(distance  < (this.size/4 + 20) && this.position.x + this.size/4 <= collisionObjs[i].position.x + 20){
        if(this.acceleration.x > 0){
          this.acceleration.x *= -1;

        }
      
        if(this.velocity.x > 0){
          this.velocity.x *= -1;
        }
        this.position.x += this.velocity.x;
        this.position.x-=3;
      }

      //colliding on the left
      if(distance  < (this.size/4 + 20) && this.position.x - this.size/4 > collisionObjs[i].position.x  - 20){

        if(this.acceleration.x < 0){
          this.acceleration.x *= -1;

        }
      
        if(this.velocity.x < 0){
          this.velocity.x *= -1;
        }
        this.position.x += this.velocity.x;
        this.position.x++;
      }


    }
  }

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

  updatePlayerPosition()
  {
    var gravityForce = p5.Vector.mult(this.gravity, this.acceleration.add(gravityForce));

      //using WASD for movement
      if(keyArray[87] == 1 && this.jump == 0){  //player jumping
        //this.position.y--;
        this.jump = 2;
        //sound effect
        if(!this.walkingSound.isPlaying()){
          this.walkingSound.play();
        }
      }
    if(keyArray[65] == 1 && this.position.x - 2*this.size/3 > 0){  //player moving to the left
      this.updatePenguinLeft();
      this.position.x -= this.speed;

      this.moving = true;
    }
    else if(keyArray[68] == 1 && this.position.x  - this.size/3 < width){  //player moving to the right
      this.updatePenguinRight();
      this.position.x += this.speed;
      this.moving = true;
    }
    /*
    else if(keyArray[83] == 1 && this.penguin_type == 1){  //player crouching
      //this.position.y++;
      this.height = this.size*(4/5);

    }
    */
    else{
      this.moving = false;
      this.height = this.size;
    }
    
    //handling jumping
    if(this.jump == 2){
      this.acceleration.add(this.jumpForce);
      this.jump = 1;
    }
    
    if(this.jump > 0 || this.fall == true){
      this.height = this.size*1.05;
      this.acceleration.add(this.gravity);
    }
    
    this.velocity.add(this.acceleration);
    
    this.position.add(this.velocity);

    this.acceleration.set(0, 0);
  }

  updatePlayerAnim()
  {
    if(this.moving == true && this.fall == false){
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

  if (right1 > left2 && left1 < right2 && bottom1 > top2 && top1 < bottom2)
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