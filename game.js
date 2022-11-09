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

      /*
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
        this.redPenguinWalkRight.push(loadImage("images/characters/RedPenguin" + i + ".png") );
        this.blackPenguinWalkRight.push(loadImage("images/characters/BlackPenguin" + i + ".png"));
        this.bluePenguinWalkRight.push(loadImage("images/characters/BluePenguin" + i + ".png"));
        this.blackPenguinWalkLeft.push(loadImage("images/characters/BlackPenguinWalkLeft" + i + ".png"));
      }
  
      for (let i = 1; i <= 5; i ++)
      {
        this.poptartWalkRight.push(loadImage("images/characters/PoptartWalkRight" + i + ".png"));
        this.poptartWalkLeft.push(loadImage("images/characters/PoptartWalkLeft" + i + ".png"));
      }
      */
    }


    updateHighScores(){

    }
  }

  class SoundEffects{
    constructor(){
      this.poofSound = loadSound("sounds/poof.mp3");
      this.gameLoseSound = loadSound("sounds/game_lose.wav");
      this.gameWinSound = loadSound("sounds/game_win.wav");
      this.loseLifeSound = loadSound("sounds/lose_life.wav");   //or lose_life2.wav
      this.walkingSound = loadSound("sounds/walking.wav");
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
        this.blackPenguinSpecialRight = [];
        this.poptartWalkRight = [];
        this.poptartWalkLeft = [];
        this.smokeCloud = [];

        /*
        PLEASE ADD:
        this.bluePenguinWalkLeft = [];
        this.redPenguinWalkLeft = [];
        this.blackPenguinSpecialLeft = [];
        this.bluePenguinSpecialLeft = [];
        this.redPenguinSpecialLeft = [];

        */


        this.fish = loadImage("images/Fish.png");
        this.snowBall = loadImage("images/Snowball.png");
    
        this.topIce = loadImage("images/IceBlocks1.png");
        this.bottomIce = loadImage("images/IceBlocks2.png");
    
        for (let i = 1; i <= 6; i ++)
        {
            this.blackPenguinSpecialRight.push(loadImage("images/characters/BlackPenguinSpecialRight" + i + ".png"));
            this.redPenguinWalkRight.push(loadImage("images/characters/RedPenguin" + i + ".png") );
            this.blackPenguinWalkRight.push(loadImage("images/characters/BlackPenguin" + i + ".png"));
            this.bluePenguinWalkRight.push(loadImage("images/characters/BluePenguin" + i + ".png"));
            this.blackPenguinWalkLeft.push(loadImage("images/characters/BlackPenguinWalkLeft" + i + ".png"));
        }
    
        for (let i = 1; i <= 5; i ++)
        {
            this.poptartWalkRight.push(loadImage("images/characters/PoptartWalkRight" + i + ".png"));
            this.poptartWalkLeft.push(loadImage("images/characters/PoptartWalkLeft" + i + ".png"));
        }

        for (let i = 1; i <= 4; i++)
        {
            this.smokeCloud.push(loadImage("images/SmokeCloud" + i + ".png"));
        }
    }
  }