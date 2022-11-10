class Agent
{
  constructor(pos)
  {
    this.position = createVector(pos.x, pos.y);
    this.velocity = createVector(0, 0);
    this.maxWalkSpeed = 4;
    this.maxWalkAcc = 1;
    this.acceleration = createVector(0, 0);
    this.force = createVector(0, 0);
    this.currFrame = frameCount;
    this.jump = 0;
    this.walkForward = 0;
    this.walkBackward = 0;
    this.facedDir = 1;
    //keep track of next platform to jump to and current platform 
    this.targetPlatform = null;
    this.currPlatform = null;
    //only simulate npc when enabled
    this.enabled = true;
    //npc states are refrenced by key 
    this.statesDict = {
      "JumpToNextPlatform" : new JumpToNextPlatform(this),
      "WalkForward" : new WalkForward(this),
      "WalkBackward" : new WalkBackward(this),
      "JumpOverBall" : new JumpOverBall(this)
    }
    this.currState = "WalkForward";
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
      this.applyForce(walkForce);
    }
    else if (this.walkBackward === 1) {
      this.applyForce(backForce);
    }

    //apply drag to npc if not walking in a direction
    else
    {
      if (this.velocity.x > .1) {
        if (dragForce.x > 0)
          dragForce.mult(-1);
        this.applyForce(dragForce);
      }
      else if (this.velocity.x < -.1) {
        if (dragForce.x < 0)
          dragForce.mult(-1);
        this.applyForce(dragForce);
      }
      else {
        this.velocity.x = 0;
      }
    }
    if (this.jump === 2) {
      this.applyForce(jumpForce);
      this.jump = 1;
    }
    if (this.jump > 0) {
      this.applyForce(gravity);
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
      if (collisionObjs[c].layer == "Platform")
      {
        let dir = detectCollision(this.position.x, this.position.y, 12, 25, 
          collisionObjs[c].position.x, collisionObjs[c].position.y, collisionObjs[c].size.x, collisionObjs[c].size.y);
          //make sure npc only collides with platform on way down
        if (dir.mag() < .1 || this.velocity.y < -.01) continue;
        if (this.position.y + 12.5 >= collisionObjs[c].position.y - collisionObjs[c].size.y/2 &&
        this.position.y + 12.5 < collisionObjs[c].position.y - collisionObjs[c].size.y/2 + 5)
        {
          this.position.y = collisionObjs[c].position.y - collisionObjs[c].size.y/2 - 12.5 + .01;
          this.velocity.y = 0;
          this.jump = 0;
          grounded = true;
        }
      }
      if (collisionObjs[c].layer == "Coin")
      {
        let dir = detectCollision(this.position.x, this.position.y, 12, 25, 
          collisionObjs[c].position.x, collisionObjs[c].position.y, collisionObjs[c].size.x, collisionObjs[c].size.y);
        if (dir.mag() > .1)
          lose = true;
      }
    }
    for (let b = 0; b < ballObjs.length; b++)
    {
      let dir = detectCollision(this.position.x, this.position.y, 12, 25, 
        ballObjs[b].position.x, ballObjs[b].position.y,ballObjs[b].size.x, ballObjs[b].size.y);
      if (dir.mag() > .1)
      {
        this.enabled = false;
        liveAgents--;
        return;
      }
    }
    if (this.position.y >= 380) {
      this.enabled = false;
      liveAgents--;
      return;
    }
    if (!grounded)
    {
      this.jump = 1;
    }
  }

  drawAgent()
  {
    //change direction of player based on velocity
    if (this.velocity.x > 0)
      this.facedDir = 1;
    if (this.velocity.x < 0)
      this.facedDir = -1;

     //face
     noStroke();
     fill(0,200,0);
     rect(this.position.x, this.position.y-5, 10, 10);
     fill(0);
     circle (this.position.x + 2*this.facedDir, this.position.y-5, 3)
     stroke(0, 200, 0);
     strokeWeight(5);
     //body
     line(this.position.x, this.position.y, this.position.x,
     this.position.y+12);

     switch (this.jump) {
       case 0:
       stroke(0, 150, 0)
       //arms forward
       line(this.position.x, this.position.y+1, this.position.x+ this.facedDir*5,
       this.position.y+5);
       break;
       case 1:
       strokeWeight(4);
       stroke(0, 150, 0)
       //arms angled
       line(this.position.x, this.position.y+1, this.position.x - this.facedDir*5,
       this.position.y+5);
       line(this.position.x, this.position.y+1, this.position.x + this.facedDir*5, this.position.y-3);
       break;
     }
     
     stroke(0)
     strokeWeight(2);
  }
}

//state where npc positions themself on current platform for jump
class WalkForward
{
  constructor(agent)
  {
    this.agent = agent;
  }

  tick()
  {
    var ballPos = findClosestBallPos(this.agent.position);
    if (ballPos && p5.Vector.dist(ballPos, this.agent.position) < 150)
    {
      return "WalkBackward"
    }
    if (this.currPlatform == null && this.targetPlatform == null)
    {
      this.agent.currPlatform = findCurrPlatform(this.agent.position);
      for (let i = 0; i < platformObjs.length - 1; i++)
      {
        if (this.agent.currPlatform == platformObjs[i])  
        {
          this.agent.targetPlatform = platformObjs[i+1];
        }
      }
    }
    var onUpperPlatform = isUpperPlatform(this.agent.currPlatform);
    if (onUpperPlatform)
    {
      this.agent.walkForward = 0;
      this.agent.walkBackward = 1;
    }
    else
    {
      this.agent.walkBackward = 0;
      this.agent.walkForward = 1;
    }
    if ((this.agent.walkForward == 1 && 
      this.agent.position.x - this.agent.currPlatform.position.x > this.agent.currPlatform.size.x/2 - 15) 
    || (this.agent.walkForward == 0 && 
      this.agent.position.x - this.agent.currPlatform.position.x < -this.agent.currPlatform.size.x/2 + 15))
    {
      this.agent.jump = 2;
      return "JumpToNextPlatform";
    }
    return "WalkForward";
  }
}

//state where npc jumps to next platform
class JumpToNextPlatform
{
  constructor(agent)
  {
    this.agent = agent;
  }

  tick()
  {
    if (abs(this.agent.targetPlatform.position.x - this.agent.position.x) < 30)
    {
      this.agent.walkBackward = 0;
      this.agent.walkForward = 0;
    }
    if (this.agent.jump > 0)
    {
      return "JumpToNextPlatform";
    }
    this.agent.currPlatform = findCurrPlatform(this.agent.position);
    for (let i = 0; i < platformObjs.length - 1; i++)
    {
      if (this.agent.currPlatform == platformObjs[i])  
      {
        this.agent.targetPlatform = platformObjs[i+1];
      }
    }
    return "WalkForward";
  }
}

//state that moves npc backwards to increase chances of avoiding ball
class WalkBackward
{
  constructor (agent)
  {
    this.agent = agent;
  }

  tick()
  {
    var ballPos = findClosestBallPos(this.agent.position);
    if (!ballPos || p5.Vector.dist(ballPos, this.agent.position) > 150) return "WalkForward";
    if (abs(this.agent.position.x - ballPos.x) < 40 && ballPos.y - this.agent.position.y > -30)
    {
      this.agent.walkForward = 0;
      this.agent.walkBackward = 0;
      this.agent.jump = 2;
      return "JumpOverBall";
    }
    if (isUpperPlatform(this.agent.currPlatform))
    {
      this.agent.walkForward = 1;
      this.agent.walkBackward = 0;
    }
    else
    {
      this.agent.walkBackward = 1;
      this.agent.walkForward = 0;
    }
    if ((this.agent.walkForward == 1 && 
      this.agent.position.x - this.agent.currPlatform.position.x > this.agent.currPlatform.size.x/2 - 15) 
    || (this.agent.walkForward == 0 && 
      this.agent.position.x - this.agent.currPlatform.position.x < -this.agent.currPlatform.size.x/2 + 15))
    {
      this.agent.walkForward = 0;
      this.agent.walkBackward = 0;
    }
    return "WalkBackward";
  }
}

//state that performs jump in place and then returns to walking forward
class JumpOverBall
{
  constructor(agent)
  {
    this.agent = agent;
  }

  tick()
  {
    if (this.agent.jump == 0)
      return "WalkForward";
    return "JumpOverBall";
  }
}