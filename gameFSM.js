class snowObj
{
    constructor(){
      this.size = random(4, 8);
      this.rate = random(0.5,  0.8);
      this.x = random(this.size, 800 + this.size)
      this.y = random(-600, 600);
    }
    draw(){
      fill(255);
      noStroke();
      ellipse(this.x, this.y, this.size, this.size);
    }
    move(){
      if(this.y < (height + this.size)){
        this.y += this.rate;
      }
      else{
        this.y = -5;
      }
    }
  }
  
  function mouseClicked() {
    if(game.currentState == 0){
      game.currentState = 1; //changes to options screen
    }
    else if(game.currentState == 1){
      
    }
  }

  var currFrame = 0;
  
  class introScreen //0
  {
    constructor()
    {
      this.topIce = loadImage("images/IceBlocks1.png");
      this.bottomIce = loadImage("images/IceBlocks2.png");
      this.snowDrops = [];
      
      for(let i = 0; i < 400; i++){
        this.snowDrops.push(new snowObj());
      }
      this.redPenguinAnim = [];
      this.blackPenguinAnim = [];
      this.bluePenguinAnim = [];
      this.poptartAnim = [];
      this.walkingObjs = [];

      for (let i = 1; i <= 6; i ++)
      {
        this.redPenguinAnim.push(loadImage("images/RedPenguin" + i + ".png") );
        this.blackPenguinAnim.push(loadImage("images/BlackPenguin" + i + ".png"));
        this.bluePenguinAnim.push(loadImage("images/BluePenguin" + i + ".png"));
      }

      for (let i = 1; i <= 5; i ++)
      {
        this.poptartAnim.push(loadImage("images/PoptartWalkRight" + i + ".png") );
      }

      this.walkingObjs.push(new WalkingAnimation(
        createVector(width/2, 500), createVector(64, 64), 1, this.bluePenguinAnim, 6));
      this.walkingObjs.push(new WalkingAnimation(
        createVector(width/2 - 50, 500), createVector(64, 64), 1, this.redPenguinAnim, 6));
      this.walkingObjs.push(new WalkingAnimation(
        createVector(width/2 - 100, 500), createVector(64, 64), 1, this.blackPenguinAnim, 6));
      
      this.walkingObjs.push(new WalkingAnimation(
        createVector(width/2 - 300, 500+5), createVector(40, 40), 1, this.poptartAnim, 6));
    }

    execute(me)
    {      
      let yOffset = 100;
      background(220, 250, 250);
  
      //falling snow
      for(let i = 0; i < this.snowDrops.length; i++){
        this.snowDrops[i].move();
        this.snowDrops[i].draw();
      }
      image(this.topIce, 20, 580, 40, 40);
      for (let x = 20; x < 820; x += 40)
      {
        image(this.topIce, x, 540, 40, 40);
        image(this.bottomIce, x, 580, 40, 40);
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
      triangle(171, 273 - yOffset, 170, 284 - yOffset,164, 273 - yOffset);
      
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
  
  class instructionScreen{  //1
    execute(me){
      background(220, 250, 250);
      
      fill(135, 206, 250);
      textSize(64);
      textAlign(LEFT);
      text("INSTRUCTIONS", 20, 75);
      let instr = "Use the WASD keys to move your character up the map. Avoid the angry poptarts. You start with 3 lives. Catching fish gives you an extra life. See if you can unlock all of the characters. Switch between characters using the Q and E keys. Scroll through the menu below with the up and down arrow keys, and select an option with enter.";
      fill(50, 140, 220);
      textSize(32);
      textAlign(LEFT);
      text(instr, 25, 100, 775, 400);


      //menu
      textSize(48);
      fill(25, 100, 175);    //font color of menu
      text("Start", 290, 425);
      text("Volume", 290, 470);
      text("High Scores", 290, 515);
      
      me.drawTriangle();
      if(currFrame < (frameCount - 12)){
        currFrame = frameCount;
        me.changeOption();
        me.selectOption();
      }
      
    }
  }
  
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
        let vol = "Adjust the volume using the left and right arrows. Press enter to return to the options menu.";
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
            if(keyArray[13] == 1){
                me.currentState = 1;
            }
          }
    }
  }
  
  class gameScreen{  //4
    execute(me){
        background(220, 250, 250);
      
        fill(135, 206, 250);
        textSize(64);
        textAlign(LEFT);
        text("TBD", 20, 75);
    }    
  }
  
  class gameoverScreen{  //5
    execute(me){
      
    }  
  }
  
  