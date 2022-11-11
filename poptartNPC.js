class poptart
{
  constructor(pos)
  {
    this.poptartWalkRight = [];
    this.poptartWalkLeft = [];
    this.position = createVector(pos.x, pos.y);
    this.velocity = createVector(0, 0);
    this.maxWalkSpeed = 4;
    this.maxWalkAcc = 1;
    this.acceleration = createVector(0, 0);
    this.force = createVector(0, 0);
    this.size = createVector(40, 40);
    this.frameStepRate = 6;
    this.animIdx = 0;
    this.jump = 0;
    this.walkForward = 0;
    this.walkBackward = 0;
    this.walkForce = .4;
    this.gravity = 1;
    this.dragForce = .25;
    this.jumpForce = -10;
    this.facedDir = 1;
    //keep track of next platform to jump to and current platform 
    this.targetPlatform = null;
    this.currPlatform = null;
    //only simulate npc when enabled
    this.enabled = true;
    //npc states are refrenced by key 
    this.statesDict = 
    {
      //"Jump" : new JumpToNextPlatform(this),
      "Idle" : new Idle(this),
      //"ChasePlayer" : new WalkBackward(this),
    }
    this.currState = "Idle";
  }

  update()
  {
    if (!this.enabled) return;
    this.updateStateMachine();
    this.updatePos();
    this.checkCollision();
    this.drawAgent();
  }

  updateStateMachine()
  {
    //executes / updates currState
    this.currState = this.statesDict[this.currState].tick();
  }

  applyForce(force) {
    this.acceleration.add(force);
  }

  updatePos()
  {
    this.acceleration.set(0, 0);

    //apply horizontal move forces
    if (this.walkForward === 1) {
      this.applyForce(this.walkForce);
    }
    else if (this.walkBackward === 1) {
      this.applyForce(-this.walkForce);
    }

    //apply drag to npc if not walking in a direction
    else
    {
      if (this.velocity.x > .1) {
        if (this.dragForce.x > 0)
          this.dragForce.mult(-1);
        this.applyForce(this.dragForce);
      }
      else if (this.velocity.x < -.1) {
        if (this.dragForce.x < 0)
          this.dragForce.mult(-1);
        this.applyForce(this.dragForce);
      }
      else {
        this.velocity.x = 0;
      }
    }
    if (this.jump === 2) {
      this.applyForce(this.jumpForce);
      this.jump = 1;
    }
    if (this.jump > 0) {
      this.applyForce(this.gravity);
    }
    //limit speed and acceleration
    this.acceleration.x = constrain(this.acceleration.x, -this.maxWalkAcc, this.maxWalkAcc);
    this.velocity.add(this.acceleration);
    this.velocity.x = constrain(this.velocity.x, -this.maxWalkSpeed, this.maxWalkSpeed);
    this.position.add(this.velocity);
    this.acceleration.set(0, 0);
    //prevent from going out of bounds horizontally
    if (this.position.x > 394) {
      this.position.x = 394;
    }
    else if (this.position.x < 6) {
      this.position.x = 6;
    }
  }

  checkCollision()
  {
    var grounded = false;
    for (let c = 0; c < collisionObjs.length; c++)
    {

      let dir = detectCollision(this.position.x, this.position.y, 40, 40, 
        collisionObjs[c].position.x, collisionObjs[c].position.y, collisionObjs[c].size.x, collisionObjs[c].size.y);
        //make sure npc only collides with platform on way down
      if (dir.mag() < .1) continue;
      if (dir.x > .1)
        this.position.x = collisionObjs[c].x + collisionObjs[c].size.x/2 + this.size.x/2;
      if (dir.x < -.1)
        this.position.x = collisionObjs[c].x - collisionObjs[c].size.x/2 - this.size.x/2;
      if (this.dir.y > .1)
        this.position.y = collisionObjs[c].y + collisionObjs[c].size.y/2 + this.size.y/2;
      if (this.dir.y < -.1)
        this.position.y = collisionObjs[c].y - collisionObjs[c].size.y/2 - this.size.y/2;
    }
    if (!grounded)
    {
      this.jump = 1;
    }
  }

  drawAgent()
  {
    if (frameCount % this.frameStepRate == 0)
      this.animIdx = (this.animIdx + 1) % images.poptartWalkLeft.length;
    if (this.velocity.x > 0)
      image(images.poptartWalkRight[this.animIdx], this.position.x, this.position.y);
    else
      image(images.poptartWalkLeft[this.animIdx], this.position.x, this.position.y);
  }
}

class Jump
{
  constructor(agent)
  {

  }

  tick()
  {

  }
}

class Idle
{
  constructor(agent)
  {

  }

  tick()
  {
    return "Idle";
  }
}

class ChasePlayer
{
  constructor(agent)
  {

  }

  tick()
  {

  }
}

class Platform
{
  constructor(minX, maxX, y)
  {
    this.minX = minX;
    this.maxX = maxX;
    this.y = y;
  }
}

function tileToPos(x, y)
{
  return createVector(x*40+20, y*40+20);
}

function posToTile(x, y)
{
  return createVector(Math.round(x-20)/40, Math.round(y-20)/40);
}