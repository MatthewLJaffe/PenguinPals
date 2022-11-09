class gameScreen //4
{ 
  constructor(){
    this.snowDrops = [];
      
    for(let i = 0; i < 400; i++){
      this.snowDrops.push(new snowObj(2, 5));
    }

    this.player = new Player(100, 100, 50, 1);  //x, y, size, penguin_type
  } 
  execute(me)
  {
      background(220, 250, 250);
      fill(135, 206, 250);
      textSize(64);
      textAlign(LEFT);
      text("TBD", 20, 75);

      //snow falling
      for(let i = 0; i < this.snowDrops.length; i++){
        this.snowDrops[i].move();
        this.snowDrops[i].draw();
      }

      this.player.volume = me.volume;
      this.player.updatePlayer();
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

  updatePlayerPosition()
  {
    fill(0);
    //textSize(24);
    //text(this.position.x + ", " + this.position.y, mouseX, mouseY);
      //using WASD for movement
    if(keyArray[65] == 1 && this.position.x - this.size > 0){  //player moving to the left
      if(this.penguin_type == 1){
        this.anim = this.animations.blackPenguinWalkLeft;
      }
      else if(this.penguin_type == 2){
        this.anim = this.animations.bluePenguinWalk;
      }
      else{
        this.anim = this.animations.redPenguinWalkLeft;
      }
      this.position.x--;

      //sound effect
      if(!this.walkingSound.isPlaying()){
        this.walkingSound.play();
      }

      this.moving = true;
    }
    else if(keyArray[68] == 1 && this.position.x  - this.size/3 < width){  //player moving to the right
      if(this.penguin_type == 1){
        this.anim = this.animations.blackPenguinWalkRight;
      }
      else if(this.penguin_type == 2){
        this.anim = this.animations.bluePenguinWalkRight;
      }
      else{
        this.anim = this.animations.redPenguinWalkRight;
      }
      this.position.x++;
            //sound effect
      if(!this.walkingSound.isPlaying()){
        this.walkingSound.play();
      }
      this.moving = true;
    }
    else if(keyArray[87] == 1){  //player crouching
      this.position.y--;

      //sound effect
      if(!this.walkingSound.isPlaying()){
        this.walkingSound.play();
      }

      this.moving = true;
    }
    else if(keyArray[83] == 1){  //player jumping
      this.position.y++;

      this.moving = true;

      //sound effect
      if(!this.walkingSound.isPlaying()){
        this.walkingSound.play();
      }
    }
    else{
      this.moving = false;
    }
  }

  updatePlayerAnim()
  {
    if(this.moving == true){
      if (frameCount % this.stepRate == 0)
      {
        this.currAnimIndex = (this.currAnimIndex + 1) % this.anim.length;
      }
      image(this.anim[this.currAnimIndex], this.position.x - this.size/2, this.position.y - this.size/2, this.size, this.size);
    }
    else{
      image(this.anim[0], this.position.x - this.size/2, this.position.y - this.size/2, this.size, this.size);
    }
  }
}