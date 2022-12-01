
//particle system that softly rains down snow
class snowObj
{
  //snow has a lower limit and upper limit to the size
    constructor(lower_limit, upper_limit)
    {
      this.lower_limit = lower_limit;
      this.upper_limit = upper_limit;
      this.size = random(this.lower_limit, this.upper_limit);
      this.rate = random(this.lower_limit * 0.1,  this.upper_limit * 0.1);
      this.x = random(this.size, 800 + this.size)
      //handles the offset of when the player is moving so the snow movement looks cleaner
      let playerOffset = 0;
      if (player)
        playerOffset =  height/2 - player.position.y+100;
      this.y = random(-600 + playerOffset, 600 + playerOffset);
    }
    drawSnow()
    {
      fill(255);
      noStroke();
      ellipse(this.x, this.y, this.size, this.size);
      //image(this.img, this.x, this.y);
    }
    //update individual particles based on player offset and movement
    move()
    {
      let playerOffset = 0;
      if (player)
        playerOffset = height/2 - player.position.y + 100;

      if(this.y < (height + this.size - playerOffset )) {
        this.y += this.rate;
      }
      else{
        this.y = -5 - playerOffset;
      }
    }
  }
  
  //input handling for menu buttons
  function mouseClicked() 
  {
    if(game.currentState == 0){
      game.currentState = 1; //changes to options screen
      //return;
    }

    var buttons = game.state[game.currentState].buttons;
    if (buttons)
    {
      for (let i = 0; i < buttons.length; i++)
      {
        buttons[i].checkPressed();
      }
    }

  }

  var currFrame = 0;
  
  //state encapslating functionality of intro screen
  class introScreen //0
  {
    constructor()
    {

      this.snowDrops = [];
      this.walkingObjs = [];
      
      //add snow
      for(let i = 0; i < 400; i++){
        this.snowDrops.push(new snowObj(4, 8));
      }
      //add walking animations
      this.walkingObjs.push(new WalkingAnimation(
        createVector(width/2, 500), createVector(64, 64), 1, images.bluePenguinWalkRight, 6));
      this.walkingObjs.push(new WalkingAnimation(
        createVector(width/2 - 50, 500), createVector(64, 64), 1, images.redPenguinWalkRight, 6));
      this.walkingObjs.push(new WalkingAnimation(
        createVector(width/2 - 100, 500), createVector(64, 64), 1, images.blackPenguinWalkRight, 6));
      
      this.walkingObjs.push(new WalkingAnimation(
        createVector(width/2 - 300, 500+5), createVector(40, 40), 1, images.poptartWalkRight, 6));
    }

    //loop for intro screen
    execute(me)
    {      
      let yOffset = 100;
      background(220, 250, 250);
  
      //falling snow
      for(let i = 0; i < this.snowDrops.length; i++){
        this.snowDrops[i].move();
        this.snowDrops[i].drawSnow();
      }
      image(images.topIce, 20, 580, 40, 40);
      for (let x = 20; x < 820; x += 40)
      {
        image(images.topIce, x, 540, 40, 40);
        image(images.bottomIce, x, 580, 40, 40);
      }
      //make penguins walk
      for (let i = 0; i < this.walkingObjs.length; i++)
      {
        this.walkingObjs[i].update();
      }
      fill(255,255,255);

      
      //Title with icicles on letters
      fill(135, 206, 250);
      textAlign(CENTER);
      textSize(150);
      textFont('Georgia');
      text('PENGUIN', width/2, 275 - yOffset);
      text('PALS', width/2, 400 - yOffset);
      
      textSize(32);
      text('By Katherine Pajares and Matthew Jaffe', width/2, 450 - yOffset);
      //flash effect
      if (frameCount % 80 < 40)
        fill(135, 206, 250, 0);
      text('click to start', width/2, 500 - yOffset);
      fill (135, 206, 250);
      
      //icicles
      //P
      triangle(93, 273 - yOffset, 95, 282 - yOffset, 97, 275 - yOffset);
      triangle(95, 273 - yOffset, 98, 285 - yOffset, 101, 273 - yOffset);
      
      //E
      triangle(162, 273 - yOffset, 166, 292 - yOffset, 170, 273 - yOffset);
      triangle(158, 273 - yOffset, 161, 282 - yOffset, 164, 273 - yOffset);
      triangle(171, 273 - yOffset, 170, 284 - yOffset, 164, 273 - yOffset);
      
      //N
      triangle(342, 173 - yOffset, 346, 196 - yOffset, 350, 173 - yOffset);
      triangle(347, 178 - yOffset, 350, 190 - yOffset, 353, 175 - yOffset);
      
      //G
      triangle(416, 230 - yOffset, 420, 246 - yOffset, 424, 230 - yOffset);
      triangle(421, 232 - yOffset, 424, 242 - yOffset, 427, 232 - yOffset);
      
      //U
      triangle(533, 174 - yOffset, 535, 190 - yOffset, 537, 174 - yOffset);
      triangle(566, 174 - yOffset, 568, 188 - yOffset, 570, 174 - yOffset);
      triangle(568, 174 - yOffset, 571, 194 - yOffset, 574, 174 - yOffset);
      
      //I
      triangle(621, 274 - yOffset, 623, 286 - yOffset, 625, 274 - yOffset);
      triangle(619, 175, 620, 181, 623, 174);
      triangle(623, 174, 625, 183, 627, 174);

      //N
      triangle(707, 76, 709, 87, 711, 76);
      triangle(710, 76, 712, 84, 714, 76);

      //P
      triangle(224, 200, 227, 215, 230, 200);
      triangle(228, 198, 231, 210, 234, 198);

      //A
      triangle(365, 262, 368, 274, 371, 262);
      triangle(363, 260, 365, 272, 367, 260);
      triangle(369, 260, 371, 272, 373, 260);

      //L
      triangle(416, 198, 418, 209, 420, 198);
      triangle(419, 198, 421, 215, 423, 198);

      //S
      triangle(543, 198, 545, 215, 547, 198);
      triangle(540, 198, 542, 208, 544, 198);
      triangle(545, 198, 547, 212, 549, 198);
    }
  }

  //simple class for playing walking animation and advancing player
  class WalkingAnimation
  {
    constructor(pos, size, speed, anim, stepRate)
    {
      this.pos = pos;
      this.size = size;
      this.speed = speed;
      this.anim = anim;
      this.currAnimIndex = 0;
      this.stepRate = stepRate;
    }

    //updates the animation based on a step rate
    update()
    {
      this.pos.x += this.speed;
      if (this.pos.x - 32 > width)
        this.pos.x = -32;
      if (frameCount % this.stepRate == 0)
      {
        this.currAnimIndex = (this.currAnimIndex + 1) % this.anim.length;
      }
      image(this.anim[this.currAnimIndex], this.pos.x, this.pos.y, this.size.x, this.size.y);
    }
  }

  //similar to walkinganimation but stays within confined x range
  class WalkBackAndForthAnimation
  {
    constructor(pos, size, speed, rightAnim, leftAnim, stepRate, xMin, xMax)
    {
      this.pos = pos;
      this.size = size;
      this.speed = speed;
      this.rightAnim = rightAnim;
      this.leftAnim = leftAnim;
      this.currAnim = rightAnim;
      this.currAnimIndex = 0;
      this.stepRate = stepRate;
      this.xMin = xMin;
      this.xMax = xMax;
    }
  
    update()
    {
      this.pos.x += this.speed;
      if (this.pos.x > this.xMax)
      {
        this.currAnim = this.leftAnim;
        this.currAnimIndex = 0;
        this.speed *= -1;
      }
      else if (this.pos.x < this.xMin)
      {
        this.currAnim = this.rightAnim;
        this.currAnimIndex = 0;
        this.speed *= -1;
      }
      if (frameCount % this.stepRate == 0)
      {
        this.currAnimIndex = (this.currAnimIndex + 1) % this.currAnim.length;
      }
      image(this.currAnim[this.currAnimIndex], this.pos.x, this.pos.y, this.size.x, this.size.y);
    }

  }

  //state for instructions screen
  class InstructionsScreen
  {  //1

    constructor()
    {
      //initialize walking animations and ui
      this.pacingPoptart = new WalkBackAndForthAnimation(createVector(450 - 25, 160), createVector(40, 40), 1, images.poptartWalkRight, images.poptartWalkLeft, 6, 400 - 25, 500 - 25);
      this.pacingPenguin = new WalkBackAndForthAnimation(createVector(415, 110), createVector(32, 32), 1, images.blackPenguinWalkRight, images.blackPenguinWalkLeft, 6, 415 - 50, 415+ 50);
      this.buttonPressed = "";
      this.buttons = [];
      this.buttons.push(new button(createVector(width/2, 380), createVector(120, 60),"Start", this));
      this.buttons.push(new button(createVector(width/2, 453), createVector(180, 60), "Volume", this));
      this.buttons.push(new button(createVector(width/2, 531), createVector(270, 60), "High Scores", this));
    }

    //loop for intro screen
    execute(me)
    {
      background(220, 250, 250);
      //update state based on ui presses
      for (let i = 0; i < this.buttons.length; i++)
      {
        this.buttons[i].drawButton();
      }
      if (this.buttonPressed == "Start")
      {
        me.currentState = 4;
      }
      else if (this.buttonPressed == "Volume")
      {
        me.currentState = 2;
      }
      else if (this.buttonPressed == "High Scores")
      {
        me.currentState = 3;
      }
      this.buttonPressed = "";
      //update animations
      this.pacingPoptart.update();
      this.pacingPenguin.update();
      //smoke cloud animation
      let smokeFrame = frameCount % 168;
      if (smokeFrame < 60)
        image(images.redPenguinWalkRight[3], 425, 270, 32, 32);
      else if (smokeFrame < 84)
      {
        let idx = Math.floor((smokeFrame - 60) / 6);
        image(images.smokeCloud[idx], 425, 270, 32, 32);
      }
      else if (smokeFrame < 144)
      {
        image(images.blackPenguinWalkRight[3], 425, 270, 32, 32);
      }
      else
      {
        let idx = Math.floor((smokeFrame - 144) / 6);
        image(images.smokeCloud[idx], 425, 270, 32, 32);
      }

      //special move animation
      let specialFrame = frameCount % 96;
      if (specialFrame < 36)
      {
        image(images.blackPenguinSpecialRight[Math.floor(specialFrame/6)], 435, 315, 40, 40);
      }
      if (specialFrame > 24)
      {
        image(images.snowBall, 465 + (specialFrame - 36)*2, 315, 20, 20);
      }
      if (specialFrame >= 36)
      {
        image(images.blackPenguinSpecialRight[5], 435, 315, 40, 40);
      }

      image(images.fish, 425, 220);
      
      fill(135, 206, 250);
      textSize(64);
      textAlign(LEFT);
      text("INSTRUCTIONS", 20, 75);
      /*
      WASD keys to move
      Avoid Angry Poptarts
      Collect Fish for extra lives
      Q / E to switch penguins

      */
      fill(50, 140, 220);
      textSize(32);
      textAlign(LEFT);
      text("WASD keys to move", 25, 125);
      text("Avoid angry Poptarts", 25, 175);
      text("Collect fish for extra lives", 25, 225);
      text("Q/E to switch penguins", 25, 275);
      text("Space to use special move", 25, 325);

      //menu
      textSize(48);
      fill(25, 100, 175);    //font color of menu
      textAlign(CENTER);
      text("Start", width/2, 392);
      text("Volume", width/2, 468);
      text("High Scores", width/2, 544);
      
    }
  }
  
  //screen in state maching for updating volume
  class volumeScreen{  //2
    execute(me){
        background(220, 250, 250);
      
        fill(135, 206, 250);
        textSize(64);
        textAlign(LEFT);
        text("VOLUME", 20, 75);

        textSize(32);
        textAlign(CENTER)
        text('click enter to return', width/2, 550);
        
        fill(50, 140, 220);
        let vol = "Adjust the volume using the left and right arrows.";
        textSize(32);
        textAlign(LEFT);
        text(vol, 25, 100, 775, 400);

        for(var i = 0; i < me.volume; i++){
          rect(100 + i*60, 350, 58, 50);
        }
        
        //
        textSize(64);
        textAlign(CENTER);
        text("-", 52, 390);
        text("+", 750, 390);

        //volume bar border
        rect(100, 350, 600, 2);
        rect(100, 350, 2, 50);
        rect(100, 400, 600, 2);
        rect(698, 350, 2, 50);

        //setVolume(me.volume * 0.1); //setVolume ranges from 0.0 to 1.0 so we scale accordingly

        if(currFrame < (frameCount - 12)){  //return to instructions screen
            currFrame = frameCount;
            if(keyArray[13] == 1){
                me.currentState = 1;
            }

            if(keyArray[LEFT_ARROW] == 1){  //lower volume
              if(me.volume > 0){
                me.volume--;
              }
            }
    
            if(keyArray[RIGHT_ARROW] == 1){ //increase volume
              if(me.volume < 10){
                me.volume++;
              }
            }
          }
    }  
  }
  
  //screen in state machine for displaying high scores
  class highscoreScreen{  //3
    execute(me){
      background(220, 250, 250);
    
      fill(135, 206, 250);
      textSize(64);
      textAlign(LEFT);
      text("HIGH SCORES", 20, 75);

      textSize(64);
  
      for(var i = 0; i < me.highScores.length; i++){
          text((i + 1) + ". " + me.highScores[i], 100, 150 + i*75);
      }

      textSize(32);
      textAlign(CENTER)
      text('click enter to return', width/2, 550);

      if(currFrame < (frameCount - 12)){  //return to instructions screen
          currFrame = frameCount;
          if(keyArray[13] == 1) {
              me.currentState = 1;
          }
        }
    }
  }
  
  //screen in state machine for displaying loss or win
  class gameoverScreen //5
  {  
    constructor(){
      this.snowDrops = [];

      //add snow
      for(let i = 0; i < 400; i++){
        this.snowDrops.push(new snowObj(4, 8));
      }
      this.played = false;
      this.walkingObjs = [];
      this.poptartObjs = [];

      //add walking animations
      this.walkingObjs.push(new WalkingAnimation(
        createVector(width/2, 500), createVector(64, 64), 1, images.bluePenguinWalkRight, 6));
      this.walkingObjs.push(new WalkingAnimation(
        createVector(width/2 - 50, 500), createVector(64, 64), 1, images.redPenguinWalkRight, 6));
      this.walkingObjs.push(new WalkingAnimation(
        createVector(width/2 - 100, 500), createVector(64, 64), 1, images.blackPenguinWalkRight, 6));
      
      this.poptartObjs.push(new WalkingAnimation(
        createVector(width/2 - 300, 500+5), createVector(40, 40), 1, images.poptartWalkRight, 6));
    }
    execute(me){
      background(220, 250, 250);
      fill(135, 206, 250)
      textAlign(CENTER);
      textSize(24);
      text("click enter to restart", width/2, height - 100);
      textSize(48);

      //falling snow
      for(let i = 0; i < this.snowDrops.length; i++){
        this.snowDrops[i].move();
        this.snowDrops[i].drawSnow();
      }

      fill(135, 206, 250);

      image(images.topIce, 20, 580, 40, 40);
      for (let x = 20; x < 820; x += 40)
      {
        image(images.topIce, x, 540, 40, 40);
        image(images.bottomIce, x, 580, 40, 40);
      }
    

      //show correct ui based on win / lose conditions
      if(me.lose == true){
        //if the player loses, a poptart animation plays
        this.poptartObjs[0].update();

        text("You lose!", width/2, height/3);
        if(!sounds.gameLoseSound.isPlaying() && this.played == false){
          sounds.gameLoseSound.setVolume(me.volume*0.01);
          this.played = true;
          sounds.gameLoseSound.play();
        }
      }
      if(me.win == true){
        //if the player wins, there is an animation for each penguin playing
        for (let i = 0; i < this.walkingObjs.length; i++)
        {
          this.walkingObjs[i].update();
        }
        text("You win!", width/2, height/3);
        if(!sounds.gameWinSound.isPlaying() && this.played == false){
          sounds.gameWinSound.setVolume(me.volume*0.01);
          this.played = true;
          sounds.gameWinSound.play();
        }
      }

      text("Play again?", width/2, height/3 + 80);

      //if the player hits enter, then the game resets and returns the player to the instruction screen to allow
      //for volume adjustments and to check the high scores
      if(currFrame < (frameCount - 12)){  //return to instructions screen
        currFrame = frameCount;
        if(keyArray[13] == 1) {
          me.state[4].updateHighScore(me);
          me.state[4].resetVariables(me);
          me.currentState = 1;
        }
      }
      }
    }  

  
  