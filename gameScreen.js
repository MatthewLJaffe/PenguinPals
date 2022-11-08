class gameScreen //4
{  
  execute(me)
  {
      background(220, 250, 250);
      fill(135, 206, 250);
      textSize(64);
      textAlign(LEFT);
      text("TBD", 20, 75);
  }    
}

class Player
{
  constructor(pos, size, maxMoveSpeed, jumpHeight, animStates, specialMoveFunction)
  {
    this.pos = pos;
    this.size = size;
    this.speed = maxMoveSpeed;
    this.jumpHeight = jumpHeight;
    this.animStates = animStates;
    this.specialMoveFunction = specialMoveFunction;
    this.specialMoveCooldown = 30;
    this.currSpecialMoveCooldown = 0;
  }

  updatePlayer()
  {
    this.updatePlayerPosition();
    this.updatePlayerCollision();
    this.updatePlayerAnim();
    this.useSpecialMove();
  }

  updatePlayerCollision()
  {

  }

  updatePlayerPosition()
  {

  }

  updatePlayerAnim()
  {

  }
}