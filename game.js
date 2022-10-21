class gameObj
{
    constructor()
    {
      
      this.animations = new Animations();
      this.state = [new introScreen(this.animations), new InstructionsScreen(this.animations), new volumeScreen(), new highscoreScreen(), new gameScreen(), new gameoverScreen()];
      this.currentState = 0;
      this.gameOver = false; //true if the game is over
      this.lose = false; //true if the player lost the game
      this.win = false;  //true if the player won the game
      this.score = 0;

      //for menu in instructions screen
      this.cursor = 0;
      this.cursorY = [400, 445, 490];
      this.cursorX = 280;

      //for high scores
      this.highScores = [0, 0, 0, 0, 0];    //default high scores

      //for volume
      this.volume = 5;  //starts at 5

      this.redPenguinWalkRight = [];
      this.blackPenguinWalkRight = [];
      this.bluePenguinWalkRight = [];
      this.blackPenguinWalkLeft = [];
      this.poptartWalkRight = [];
      this.poptartWalkLeft = [];
  
      this.topIce = loadImage("images/IceBlocks1.png");
      this.bottomIce = loadImage("images/IceBlocks2.png");
  
      for (let i = 1; i <= 6; i ++)
      {
        this.redPenguinWalkRight.push(loadImage("images/RedPenguin" + i + ".png") );
        this.blackPenguinWalkRight.push(loadImage("images/BlackPenguin" + i + ".png"));
        this.bluePenguinWalkRight.push(loadImage("images/BluePenguin" + i + ".png"));
        this.blackPenguinWalkLeft.push(loadImage("images/BlackPenguinWalkLeft" + i + ".png"));
      }
  
      for (let i = 1; i <= 5; i ++)
      {
        this.poptartWalkRight.push(loadImage("images/PoptartWalkRight" + i + ".png"));
        this.poptartWalkLeft.push(loadImage("images/PoptartWalkLeft" + i + ".png"));
      }
    }


    updateHighScores(){

    }
  }

  class Animations
  {
    constructor()
    {
        this.redPenguinWalkRight = [];
        this.blackPenguinWalkRight = [];
        this.bluePenguinWalkRight = [];
        this.blackPenguinWalkLeft = [];
        this.poptartWalkRight = [];
        this.poptartWalkLeft = [];
        this.smokeCloud = [];
        this.fish = loadImage("images/Fish.png");
    
        this.topIce = loadImage("images/IceBlocks1.png");
        this.bottomIce = loadImage("images/IceBlocks2.png");
    
        for (let i = 1; i <= 6; i ++)
        {
            this.redPenguinWalkRight.push(loadImage("images/RedPenguin" + i + ".png") );
            this.blackPenguinWalkRight.push(loadImage("images/BlackPenguin" + i + ".png"));
            this.bluePenguinWalkRight.push(loadImage("images/BluePenguin" + i + ".png"));
            this.blackPenguinWalkLeft.push(loadImage("images/BlackPenguinWalkLeft" + i + ".png"));
        }
    
        for (let i = 1; i <= 5; i ++)
        {
            this.poptartWalkRight.push(loadImage("images/PoptartWalkRight" + i + ".png"));
            this.poptartWalkLeft.push(loadImage("images/PoptartWalkLeft" + i + ".png"));
        }

        for (let i = 1; i <= 4; i++)
        {
            this.smokeCloud.push(loadImage("images/SmokeCloud" + i + ".png"));
        }
    }
  }