var tileMap = [
  "                    ",
  "                    ",
  "                    ",
  "     012            ",
  "     345            ",
  "     678            ",
  "                    ",
  "                    ",
  "01111111111111111112",
  "34444444444444444445",
  "34444444444444444445",
  "34444444444444444445",
  "34444444444444444445",
  "3TTTTTTTTTTTTTTTTTTT",
  "3TTTTTTTTTTTTTTTTTTT",

];

var collisionObjs = [];

class gameScreen //4
{ 
  constructor()
  {
    this.snowDrops = [];
      
    for(let i = 0; i < 400; i++){
      this.snowDrops.push(new snowObj(2, 5));
    }
    this.backgroundScrollSpeed = .25;
    this.player = new Player(400, 300, 64, 1);  //x, y, size, penguin_type
    this.background = loadImage("/images/Background.png");
    this.iceCenterImage = loadImage("images/tiles/IceCenter.png");
    this.iceCornerImages = [];
    for (let i = 0; i < 4; i++)
      this.iceCornerImages[i] = loadImage("images/tiles/IceCorner" + ( i + 1) + ".png");
    this.iceFloorImages = [];
    for (let i = 0; i < 4; i++)
      this.iceFloorImages[i] = loadImage("images/tiles/IceFloor" + ( i + 1) + ".png");
    this.icePlatformImages = [];
    for (let i = 0; i < 3; i++)
      this.icePlatformImages[i] = loadImage("images/tiles/IcePlatform" + ( i + 1) + ".png");
    this.iceWallImages = [];
    for (let i = 0; i < 3; i++)
      this.iceWallImages[i] = loadImage("images/tiles/IceWall" + ( i + 1) + ".png");
    this.iceWallFloorUpImage = loadImage("images/tiles/IceWallFloor1.png");
    this.iceWallFloorDownImage = loadImage("images/tiles/IceWallFloor2.png");
    for (let y = 0; y < tileMap.length; y++)
    {
      for (let x = 0; x < tileMap[y].length; x++)
      {
        switch (tileMap[y][x])
        {
          case '0':
            collisionObjs.push(new CollisionObj(x*40+20, y*40+20, 40, 40, this.iceCornerImages[0]));
            break;
          case '1':
            collisionObjs.push(new CollisionObj(x*40+20, y*40+20, 40, 40, this.iceFloorImages[0]));
            break;
          case '2':
            collisionObjs.push(new CollisionObj(x*40+20, y*40+20, 40, 40, this.iceCornerImages[1]));
            break;
          case '3':
            collisionObjs.push(new CollisionObj(x*40+20, y*40+20, 40, 40, this.iceFloorImages[3]));
            break;
          case '4':
            collisionObjs.push(new CollisionObj(x*40+20, y*40+20, 40, 40, this.iceCenterImage));
            break;
          case '5':
            collisionObjs.push(new CollisionObj(x*40+20, y*40+20, 40, 40, this.iceFloorImages[1]));
            break;
          case '6':
            collisionObjs.push(new CollisionObj(x*40+20, y*40+20, 40, 40, this.iceCornerImages[2]));
            break;
          case '7':
            collisionObjs.push(new CollisionObj(x*40+20, y*40+20, 40, 40, this.iceFloorImages[2]));
            break;
          case '8':
            collisionObjs.push(new CollisionObj(x*40+20, y*40+20, 40, 40, this.iceCornerImages[3]));
            break;
        }
      }
    }

  }

  execute(me)
  {
      background(220, 250, 250);
      image(this.background, 400, constrain(-.25*(this.player.position.y - 300), 0, 600));
      
      //snow fallingd
      for(let i = 0; i < this.snowDrops.length; i++){
        this.snowDrops[i].move();
        this.snowDrops[i].draw();
      }

      push();
      translate(0, height/2 - this.player.position.y+100);
      fill(135, 206, 250);
      textSize(64);
      textAlign(LEFT);

      this.player.volume = me.volume;
      this.player.updatePlayer();
      for (let i = 0; i < collisionObjs.length; i++)
        collisionObjs[i].drawCollisionObj();
      pop();
      

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
    //this.pos = pos;
    this.x = x;
    this.y = y;
    this.position = new p5.Vector(this.x, this.y);

    //sound effects
    this.sounds = new SoundEffects();
    this.walkingSound = this.sounds.walkingSound;
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

    //animations/penguin
    this.animations = new Animations();
    this.penguin_type = penguin_type; //1 = black, 2 = blue, 3 = red
    this.moving = false;
    this.stepRate = 6;
    this.currAnimIndex = 0
    //animation changes depending on penguin
    if(this.penguin_type == 1){
      this.anim = this.animations.blackPenguinWalkRight;
    }
    else if(this.penguin_type == 2){
      this.anim = this.animations.bluePenguinWalkRight;
    }
    else{
      this.anim = this.animations.redPenguinWalkRight;
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

  }

  updatePenguinLeft(){
    if(this.penguin_type == 1){
      this.anim = this.animations.blackPenguinWalkLeft;
    }
    else if(this.penguin_type == 2){
      this.anim = this.animations.bluePenguinWalkLeft;
    }
    else{
      this.anim = this.animations.redPenguinWalkLeft;
    }
  }

  updatePenguinRight(){
    if(this.penguin_type == 1){
      this.anim = this.animations.blackPenguinWalkRight;
    }
    else if(this.penguin_type == 2){
      this.anim = this.animations.bluePenguinWalkRight;
    }
    else{
      this.anim = this.animations.redPenguinWalkRight;
    }
  }

  updatePlayerPosition()
  {
    fill(0);
    //textSize(24);
    //text(this.position.x + ", " + this.position.y, mouseX, mouseY);
      //using WASD for movement
    if(keyArray[65] == 1 && this.position.x - 2*this.size/3 > 0){  //player moving to the left
      this.updatePenguinLeft();
      this.position.x--;

      //sound effect
      if(!this.walkingSound.isPlaying()){
        this.walkingSound.play();
      }

      this.moving = true;
    }
    else if(keyArray[68] == 1 && this.position.x  - this.size/3 < width){  //player moving to the right
      this.updatePenguinRight();
      this.position.x++;

      //sound effect
      if(!this.walkingSound.isPlaying()){
        this.walkingSound.play();
      }
      this.moving = true;
    }
    else if(keyArray[87] == 1){  //player jumping
      this.position.y--;
      //sound effect
      if(!this.walkingSound.isPlaying()){
        this.walkingSound.play();
      }

      //this.moving = true;
    }
    else if(keyArray[83] == 1){  //player crouching
      //this.position.y++;
      this.height = this.size*(4/5);

      //this.moving = false;

      //sound effect
      if(!this.walkingSound.isPlaying()){
        this.walkingSound.play();
      }
    }
    else{
      this.moving = false;
      this.height = this.size;
    }
  }

  updatePlayerAnim()
  {
    if(this.moving == true){
      if (frameCount % this.stepRate == 0)
      {
        this.currAnimIndex = (this.currAnimIndex + 1) % this.anim.length;
      }
      image(this.anim[this.currAnimIndex], this.position.x - this.size/2, this.position.y - this.height/2, this.size, this.height);
    }
    else{
      image(this.anim[0], this.position.x - this.size/2, this.position.y - this.height/2, this.size, this.height);
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