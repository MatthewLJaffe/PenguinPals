class snowObj{
    constructor(){
      this.size = random(8, 12);
      this.rate = random(0.5, 1.2);
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
  
  class introScreen{  //0
    constructor(){
      this.snowDrops = [];
      
      for(var i = 0; i < 125; i++){
        this.snowDrops.push(new snowObj());
      }
    }
    execute(me){
      background(220, 250, 250);
  
      //falling snow
      for(var i = 0; i < this.snowDrops.length; i++){
        this.snowDrops[i].move();
        this.snowDrops[i].draw();
      }
      
      //Title with icicles on letters
      fill(135, 206, 250);
      textAlign(CENTER);
      textSize(150);
      textFont('Georgia');
      text('PENGUIN', width/2, 275);
      text('PALS', width/2, 400);
      
      textSize(32);
      text('click to start', width/2, 550);
      
      //icicles
      //P
      triangle(93, 273, 95, 282, 97, 275);
      triangle(95, 273, 98, 285, 101, 273);
      
      //E
      triangle(162, 273, 166, 292, 170, 273);
      triangle(158, 273, 161, 282, 164, 273);
      triangle(171, 273, 170, 284,164, 273);
      
      //N
      triangle(342, 173, 346, 196, 350, 173);
      triangle(347, 178, 350, 190, 353, 175);
      
      //G
      triangle(416, 230, 420, 246, 424, 230);
      triangle(421, 232, 424, 242, 427, 232);
      
      //U
      triangle(533, 174, 535, 190, 537, 174);
      triangle(566, 174, 568, 188, 570, 174);
      triangle(568, 174, 571, 194, 574, 174);
      
      //I
      triangle(622, 274, 624, 284, 626, 274);
      //N
      
      //P
      //A
      //L
      //S
    
      
      
      
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
      if(currFrame < (frameCount - 10)){
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
        text('click to enter to return', width/2, 550);

        if(currFrame < (frameCount - 10)){  //return to instructions screen
            currFrame = frameCount;
            if(keyArray[13] == 1){
                me.currentState = 1;
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
        text('click to enter to return', width/2, 550);

        if(currFrame < (frameCount - 10)){  //return to instructions screen
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
  
  