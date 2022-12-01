//class encapsulating different penguin playable characters
class Player
{
  constructor(x, y, w, h, penguin_type)
  {
    //movement/forces
    this.x = x;
    this.y = y;
    this.lives = 3;
    this.score = 0;
    this.position = new p5.Vector(this.x, this.y);
    this.jump = 0;
    this.normalJump = -12;
    this.umbrellaJump = -8;
    this.jumpForce = new p5.Vector(0, -12);
    this.velocity = new p5.Vector(0, 0);
    this.drag = createVector(.2, 0);
    this.acceleration = new p5.Vector(0 , 0);
    this.gravity = .45;
    this.fallMult = 1.75;
    this.umbrellaGravity = .15;
    this.gravityForce = new p5.Vector(0, this.gravity);
    this.maxNormalFallSpeed = 8;
    this.maxUmbrellaFallSpeed = 3;
    this.maxFallSpeed = this.maxNormalFallSpeed;
    this.umbreallaSize = createVector(0, 0);
    this.umbreallPos = createVector(0, 0);
    this.usedDash = false;
    this.maxDashSpeed = 8;
    this.dashSpeedTimeGraph = [
      {'time': 0, 'speed': 0 },
      {'time': .25, 'speed': 1 },
      {'time': .6, 'speed': 1 },
      {'time': 1, 'speed': 0 },
    ];

    this.walkSpeed = 2.5;
    this.specialMoveFrames = 60;
    this.currSpecialMoveFrames = 0;
    //sound effects
    this.walkingSound = sounds.walkingSound;

    this.size = createVector(w, h);
    this.dashCooldown = 35;
    this.throwCooldown = 30;
    this.currSpecialMoveCooldown = 0;
    this.dashing = false;
    this.dashDir = createVector(0, 0);

    this.playerSwitchCooldown = 30;
    this.currPlayerSwitchCooldown = 0;

    this.penguin_type = penguin_type; //1 = black, 2 = blue, 3 = red
    this.moving = false;
    this.stepRate = 6;
    this.currAnimIndex = 0
    this.umbrellaUp = false;
  }

  updatePlayer(volume)
  {
    if (this.handlePlayerSwitch(volume)) return;
    if (keyArray[32] == 1 && this.currSpecialMoveCooldown <= 0 
      && (!this.usedDash || this.penguin_type != 2))
    {
      if (this.penguin_type == 1)
        this.currSpecialMoveCooldown = this.throwCooldown;
      else if (this.penguin_type == 2)
        this.currSpecialMoveCooldown = this.dashCooldown;
      //no cooldown for umbrella
      else
        this.currSpecialMoveCooldown = 0;
      this.startSpecialMove();
    }
    //executing special move
    else if (this.currSpecialMoveCooldown >= 0)
    {
      this.updateSpecialMove(this.currSpecialMoveCooldown);
      this.currSpecialMoveCooldown--;
      this.moving = true;
    }
    this.volume = volume;
    this.walkingSound.setVolume(volume);
    this.updatePlayerPosition();
    this.updatePlayerCollision(volume);
    this.updatePlayerAnim();
  }d

  handlePlayerSwitch(volume)
  {    
    //handle input for switching penguins
    if (this.dashing) return;
    //switch in progress
    if (this.currPlayerSwitchCooldown >= 0)
    {
      var currTime = 1 - this.currPlayerSwitchCooldown / this.playerSwitchCooldown;
      var animFrame = images.smokeCloud[Math.ceil(currTime*images.smokeCloud.length)-1];
      image(animFrame, this.position.x, this.position.y);
      this.currPlayerSwitchCooldown--;
      return true;
    }

    //check for switch
    var prevPenguinType = this.penguin_type;
    if (keyIsDown(69) == 1)
      this.penguin_type = (this.penguin_type % 3) + 1;
    if (keyIsDown(81) == 1)
    {
      this.penguin_type--;
      if (this.penguin_type <= 0)
        this.penguin_type = 3;
    }
    if (prevPenguinType != this.penguin_type)
    {
      sounds.poofSound.setVolume(volume*0.4);
      sounds.poofSound.play();
      this.currPlayerSwitchCooldown = this.playerSwitchCooldown - 1;
      if (this.penguin_type == 1 || this.penguin_type == 2)
      {
        this.gravityForce.y = this.gravity;
        this.jumpForce.y = this.normalJump;
        this.maxFallSpeed = this.maxNormalFallSpeed;
      }
      else
      {
        this.gravityForce.y = this.umbrellaGravity;
        this.jumpForce.y = this.umbrellaJump;
        this.maxFallSpeed = this.maxUmbrellaFallSpeed;
      }
      return true;
    }
    return false;
  }

  //different special moves for penguins executable with the space key
  startSpecialMove()
  {
    //black penguin throw snowball
    if (this.penguin_type == 1)
    {
      this.currAnimIndex = 0;
      snowballs.push(new Snowball(this.position.x, this.position.y, this.facedDir));
    }
    
    //blue penguin lateral dash in faced direction
    else if (this.penguin_type == 2)
    {
      this.dashing = true;
      this.usedDash = true;
      //up right
      if (keyArray[87] && keyArray[68])
      {
        this.dashDir = createVector(1, -1).normalize();
      }
      //up left
      else if (keyArray[87] && keyArray[65])
      {
        this.dashDir = createVector(-1, -1).normalize();
      }
      //up
      else if (keyArray[87])
      {
        this.dashDir = createVector(0, -1);
      }
      //down right
      else if (keyArray[83] && keyArray[68])
      {
        this.dashDir = createVector(1, 1).normalize();
      }
      //down left
      else if (keyArray[83] && keyArray[65])
      {
        this.dashDir = createVector(-1, 1).normalize();
      }
      //down
      else if (keyArray[83])
      {
        this.dashDir = createVector(0, 1);
      }
      //right
      else if (this.facedDir == 1)
      this.dashDir = createVector(1, 0);
      //left
      else
        this.dashDir = createVector(-1, 0);
    }
    else
    {
      //umbrella right
      if (keyArray[68] && this.jump == 0)
      {
        this.umbreallPos.set(20, 0);
        this.umbreallaSize.set(30, 64);
      }
      //umbrella left
      else if (keyArray[65] && this.jump == 0)
      {
        this.umbreallPos.set(-20, 0);
        this.umbreallaSize.set(30, 64);
      }
      //umbrella is not up
      else if(!keyArray[32] && !keyArray[68] && !keyArray[65]){
        this.umbrellaUp = false;
      }
      //umbrella is up
      else
      {
        this.umbrellaUp = true;
        this.umbreallPos.set(0, -20);
        this.umbreallaSize.set(50, 30);
      }
    }
  }

  updateSpecialMove(frame)
  {
    if (this.penguin_type == 2)
    {
      let t = 1 - frame / this.dashCooldown;
      for (let i = 0; i < this.dashSpeedTimeGraph.length - 1; i++)
      {
        //current point in dash speed time graph
        if (t >= this.dashSpeedTimeGraph[i].time && t < this.dashSpeedTimeGraph[i+1].time)
        {
          let speed = lerp(this.dashSpeedTimeGraph[i].speed, this.dashSpeedTimeGraph[i+1].speed, 
            (t - this.dashSpeedTimeGraph[i].time)/(this.dashSpeedTimeGraph[i+1].time - this.dashSpeedTimeGraph[i].time));
          speed *= this.maxDashSpeed;
          this.velocity.x = this.dashDir.x * speed;
          this.velocity.y = this.dashDir.y * speed;
          break;
        }
      }
      if (frame == 0)
      {
        this.dashing = false;
      }
    }
    if (this.penguin_type == 3)
    {
      //player is not holding space so put umbrella away
      this.umbreallPos.set(0, 0);
      this.umbreallaSize.set(0, 0);
    }
  }

  //make sure player does not collide with tiles
  updatePlayerCollision(volume)
  {
    var grounded = false;
    //check for collision with tiles
    for(var c = 0; c < collisionObjs.length; c++)
    {
      let dir = detectCollision(this.position.x, this.position.y, 35, 64, collisionObjs[c].position.x, collisionObjs[c].position.y, collisionObjs[c].size.x, collisionObjs[c].size.y);
      if (dir.mag() == 0) continue;
      if (dir.x > .1)
        this.position.x = collisionObjs[c].position.x + collisionObjs[c].size.x/2 + this.size.x/2;
      if (dir.x < -.1)
        this.position.x = collisionObjs[c].position.x - collisionObjs[c].size.x/2 - this.size.x/2;
      if (dir.y > .1)
        this.position.y = collisionObjs[c].position.y + collisionObjs[c].size.y/2 + this.size.y/2;
      if (dir.y < -.1)
      {
        this.position.y = collisionObjs[c].position.y - collisionObjs[c].size.y/2 - this.size.y/2;
        grounded = true;
        this.jump = 0;
        this.usedDash = false;
        this.velocity.y = 0;
      }
      if(currFrame < (frameCount - 60) && collisionObjs[c].doesDamage) 
      {
        currFrame = frameCount;
        player.lives--;
        player.score-=50;
        if(!sounds.loseLifeSound.isPlaying() && player.lives > 0){
          sounds.loseLifeSound.setVolume(volume * .1);
          sounds.loseLifeSound.play();
        }
      }
    }
    for(var p = 0; p < platforms.length; p++)
    {
      let dir = detectCollision(this.position.x, this.position.y, 35, 64, platforms[p].position.x, platforms[p].position.y, platforms[p].size.x, platforms[p].size.y)
      if (dir.y < -.1 && this.velocity.y >= 0)
      {
        this.position.y = platforms[p].position.y - platforms[p].size.y/2 - this.size.y/2;
        grounded = true;
        this.jump = 0;
        this.usedDash = false;
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
      if (currFrame < (frameCount - 60) ) {
        currFrame = frameCount;
        poptarts[p].collisionSound.setVolume(poptarts[p].volume);
        player.lives--;
        player.score-=50;
        if(!poptarts[p].collisionSound.isPlaying() && player.lives > 0)
          poptarts[p].collisionSound.play();
      }
    }
  }


  //update position velocity and acceleration for player and handle input for special moves / jumping
  updatePlayerPosition()
  {
    //not executing special move
    if (this.currSpecialMoveCooldown < 0)
    {
      //Jump
      if(keyArray[87] == 1 && this.jump == 0)
      {  //player jumping
        //sound effect
        if(!this.walkingSound.isPlaying()){
          this.walkingSound.play();
        }
        this.acceleration.add(this.jumpForce);
        this.jump = 1;
      }
      //A/D Movement
      else if(keyArray[65] == 1)
      {  //player moving to the left
        this.facedDir = -1;
        this.position.x -= this.walkSpeed;
      }
      else if(keyArray[68] == 1)
      {  //player moving to the right
        this.facedDir = 1;
        this.position.x += this.walkSpeed;
      }
    }

    //normal physics so long as we aren't dashing
    if (!this.dashing) {
      //update position velocity and acceleration 
      if(this.jump > 0) 
      {
        if (keyArray[87])
            this.acceleration.add(this.gravityForce);
        else
            this.acceleration.add(p5.Vector.mult(this.gravityForce, this.fallMult));
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
      if (this.velocity.y > this.maxFallSpeed)
        this.velocity.y = this.maxFallSpeed;
    }
    //update position
    this.position.add(this.velocity);
    if (this.position.x + this.size.x/2 > width) {
      this.position.x = width - this.size.x/2
    }
    if (this.position.x - this.size.x/2 < 0) {
      this.position.x = this.size.x/2;
    }
    this.acceleration.set(0, 0);
  }

  //loop through current player animation
  //TODO handle all animation logic here
  updatePlayerAnim()
  {
    let prevAnim = this.anim;
    //special move
    if (this.currSpecialMoveCooldown >= 0)
    {
      if (this.penguin_type == 1)
      {
        if (this.facedDir == 1)
          this.anim = images.blackPenguinSpecialRight;
        else
          this.anim = images.blackPenguinSpecialLeft;
      }
      else if (this.penguin_type == 3)
      {
        if (keyArray[68] && this.jump == 0)
          this.anim = [images.redPenguinUmbrellaRight];
        else if (keyArray[65] && this.jump == 0)
          this.anim = [images.redPenguinUmbrellaLeft];
        else if (this.facedDir == 1)
          this.anim = [images.redPenguinUmbrellaUpRight];
        else
          this.anim = [images.redPenguinUmbrellaUpLeft];
      }
    }
    //arial animation
    else if (this.jump == 1 || this.dashing)
    {
      if (this.penguin_type == 1)
      {
        if (this.facedDir == 1)
          this.anim = [images.blackPenguinJumpRight];
        else
          this.anim = [images.blackPenguinJumpLeft];
      }
      else if (this.penguin_type == 2)
      {
        if (this.facedDir == 1)
          this.anim = [images.bluePenguinJumpRight];
        else
          this.anim = [images.bluePenguinJumpLeft];
      }
      else
      {
        if (this.facedDir == 1)
          this.anim = [images.redPenguinJumpRight];
        else
          this.anim = [images.redPenguinJumpLeft];
      }
    }
    //walking
    else if (keyArray[68] || keyArray[65])
    {
      if (this.penguin_type == 1)
      {
        if (this.facedDir == 1)
          this.anim = images.blackPenguinWalkRight;
        else
          this.anim = images.blackPenguinWalkLeft;
      }
      else if (this.penguin_type == 2)
      {
        if (this.facedDir == 1)
          this.anim = images.bluePenguinWalkRight;
        else
          this.anim = images.bluePenguinWalkLeft;
      }
      else
      {
        if (this.facedDir == 1)
          this.anim = images.redPenguinWalkRight;
        else
          this.anim = images.redPenguinWalkLeft;
      }
    }
    //standing still
    else
    {
      if (this.penguin_type == 1)
      {
        if (this.facedDir == 1)
          this.anim = [images.blackPenguinWalkRight[0]];
        else
          this.anim = [images.blackPenguinWalkLeft[0]];
      }
      else if (this.penguin_type == 2)
      {
        if (this.facedDir == 1)
          this.anim = [images.bluePenguinWalkRight[0]];
        else
          this.anim = [images.bluePenguinWalkLeft[0]];
      }
      else
      {
        if (this.facedDir == 1)
          this.anim = [images.redPenguinWalkRight[0]];
        else
          this.anim = [images.redPenguinWalkLeft[0]];
      }
    }
    if (prevAnim != this.anim)
      this.currAnimIndex = 0;
    if (frameCount % this.stepRate == 0)
    {
      this.currAnimIndex = (this.currAnimIndex + 1) % this.anim.length;
    }
    //opacity if damaged
    if (currFrame > (frameCount - 60)) {
      tint(255, 128);
    }
    image(this.anim[this.currAnimIndex], this.position.x, this.position.y);
    noTint();
  }
}