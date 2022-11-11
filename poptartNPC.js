class poptart
{
  constructor(x, y)
  {
    this.poptartWalkRight = [];
    this.poptartWalkLeft = [];
    this.position = createVector(x, y);
    this.velocity = createVector(0, 0);
    this.maxWalkSpeed = 1;
    this.maxWalkAcc = 1;
    this.maxFallSpeed = 4;
    this.acceleration = createVector(0, 0);
    this.force = createVector(0, 0);
    this.size = createVector(40, 40);
    this.frameStepRate = 6;
    this.animIdx = 0;
    this.jump = 1;
    this.walkForward = 0;
    this.walkBackward = 0;
    this.walkForce = createVector(.15, 0);
    this.gravity = createVector(0, .25);
    this.dragForce = .25;
    this.jumpForce = createVector(0, -8);
    this.idleTime = 0;
    //+1 for right -1 for left
    this.facedDir = 1;
    this.maxChaseDistance = 200;
    this.findCurrentPlatform();
    //only simulate npc when enabled
    this.enabled = true;
    //npc states are refrenced by key 
    this.statesDict = 
    {
      "Jump" : new Jump(this),
      "Idle" : new Idle(this),
      "ChasePlayer" : new ChasePlayer(this),
    }
    this.currState = "Idle";
  }

  findCurrentPlatform()
  {
    let currTile = posToTile(this.position.x, this.position.y);
    this.currPlatform = new Platform(0, 600, this.position.y - 20);
    currTile.y += 1;
    for (let x = currTile.x - 1; x >= 0; x--)
    {
      if (tileMap[currTile.y][x] == ' ' || tileMap[currTile.y - 1][x] != ' ')
      {
        this.currPlatform.minX = tileToPos(x, 0).x + 20;
        break;
      }
    }
    for (let x = currTile.x + 1; x < tileMap[currTile.y].length; x++)
    {
      if (tileMap[currTile.y][x] == ' ' || tileMap[currTile.y - 1][x] != ' ')
      {
        this.currPlatform.maxX = tileToPos(x, 0).x - 20;
        break;
      }
    }
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
      this.walkForce.x = abs(this.walkForce.x)
      this.applyForce(this.walkForce);
    }
    else if (this.walkBackward === 1) {
      this.walkForce.x = -abs(this.walkForce.x)
      this.applyForce(this.walkForce);
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
    this.velocity.y = constrain(this.velocity.y, -100, this.maxFallSpeed);
    if (this.velocity.x > 0)
      this.facedDir = 1;
    else if (this.velocity.x < 0)
      this.facedDir = -1;
    this.position.add(this.velocity);
    this.acceleration.set(0, 0);
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
        this.velocity.y = 0;
      }
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
    this.agent = agent;
  }

  tick()
  {
    if (this.agent.jump == 0)
    {
      this.agent.findCurrentPlatform();
      return "ChasePlayer";
    }
    return "Jump";
  }
}

class Idle
{
  constructor(agent)
  {
    this.agent = agent;
  }

  tick()
  {
    if (this.agent.idleTime > 0)
      this.agent.idleTime -= deltaTime;
    if (this.agent.facedDir == 1)
    {
      if (this.agent.position.x + this.agent.size.x/2 >= this.agent.currPlatform.maxX)
      {
        this.agent.walkForward = 0;
        this.agent.walkBackward = 1;
      }
      else
      {
        this.agent.walkForward = 1;
        this.agent.walkBackward = 0;
      }
    }
    else if (this.agent.facedDir == -1)
    {
      if (this.agent.position.x - this.agent.size.x/2 <= this.agent.currPlatform.minX)
      {
        this.agent.walkForward = 1;
        this.agent.walkBackward = 0;
      }
      else
      {
        this.agent.walkForward = 0;
        this.agent.walkBackward = 1;
      }
    }
    if (this.agent.position.dist(player.position) < this.agent.maxChaseDistance && this.agent.idleTime <= 0)
    {
      return "ChasePlayer";
    }
    return "Idle";
  }
}

class ChasePlayer
{
  constructor(agent)
  {
    this.agent = agent;
  }

  tick()
  {
    if (this.agent.position.dist(player.position) > this.agent.maxChaseDistance)
      return "Idle";
    //walk towards player
    if (this.agent.position.x - player.position.x > 0)
    {
      this.agent.walkForward = 0;
      this.agent.walkBackward = 1;
    }
    else
    {
      this.agent.walkForward = 1;
      this.agent.walkBackward = 0;
    }
    //if at edge determine if you can make a jump
    if (this.agent.position.x + this.agent.size.x/2 >= this.agent.currPlatform.maxX 
    || this.agent.position.x - this.agent.size.x/2 <= this.agent.currPlatform.minX)
    {
      var targetPlatform = this.findTargetPlatform();
      //Jump to different platform to reach player
      if (targetPlatform != this.agent.currPlatform) {
        this.agent.jump = 2;
        return "Jump";
      }
      //return to idle state to turn back from edge
      else {
        this.agent.idleTime = random(2,4);
        return "Idle";
      }
    }
    return "ChasePlayer";
  }

  findTargetPlatform()
  {
    //search left
    if (this.agent.position.x - player.position.x > 0)
    {
      let leftEdgeTile = posToTile(this.agent.currPlatform.minX + 20, this.agent.currPlatform.y - 20);
      let minTileX = constrain(leftEdgeTile.x - 2, 0, tileMap[0].length - 1);
      let maxTileX = constrain(leftEdgeTile.x - 1, 0, tileMap[0].length - 1);
      let minTileY = constrain(leftEdgeTile.y - 1, 0, tileMap.length - 1);
      let maxTileY = constrain(leftEdgeTile.y + 2, 0, tileMap.length - 1);
      let newPlatform;
      for (var tileX = maxTileX; tileX >= minTileX; tileX--)
      {
        for (var tileY = minTileY; tileY <= maxTileY; tileY++)
        {
          if (tileMap[tileY][tileX] != ' ' && tileMap[tileY - 1][tileX] == ' ')
          {
            newPlatform = new Platform(0, tileToPos(tileX, tileY).x, tileToPos(tileX, tileY).y - 20);
            break;
          }
        }
      }
      if (!newPlatform)
      {
        return this.agent.currPlatform;
      }
      for (; tileX > 0; tileX--)
      {
        if (tileMap[tileY][tileX] == ' ') {
          newPlatform.minX = tileToPos(tileX+1, tileY).x - 20;
        }
      }
      return newPlatform;
    }
    //search right
    else
    {
      let rightEdgeTile = posToTile(this.agent.currPlatform.maxX - 20, this.agent.currPlatform.y - 20);
      let minTileX = constrain(rightEdgeTile.x + 1, 0, tileMap[0].length - 1);
      let maxTileX = constrain(rightEdgeTile.x + 2, 0, tileMap[0].length - 1);
      let minTileY = constrain(rightEdgeTile.y - 1, 0, tileMap.length - 1);
      let maxTileY = constrain(rightEdgeTile.y + 2, 0, tileMap.length - 1);
      let newPlatform;
      for (var tileX = minTileX; tileX <= maxTileX; tileX++)
      {
        for (var tileY = minTileY; tileY <= maxTileY; tileY++)
        {
          if (tileMap[tileY][tileX] != ' ' && tileMap[tileY - 1][tileX] == ' ')
          {
            newPlatform = new Platform(tileToPos(tileX, tileY).x, 800, tileToPos(tileX, tileY).y - 20);
            break;
          }
        }
      }
      if (!newPlatform)
      {
        return this.agent.currPlatform;
      }
      for (; tileX < tileMap[0].length; tileX++)
      {
        if (tileMap[tileY][tileX] == ' ') {
          newPlatform.maxX = tileToPos(tileX-1, tileY).x + 20;
        }
      }
      return newPlatform;
    }
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
  var yOffset = (tileMap.length - 15) * -40;
  return createVector(x*40+20, yOffset + y*40+20);
}

function posToTile(x, y)
{
  var yOffset = (tileMap.length - 15) * -40;
  return createVector(Math.round((x-20)/40), Math.round((y-20 - yOffset)/40));
}