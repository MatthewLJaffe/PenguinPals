class gameObj
{
    constructor()
    {
      
      this.animations = new Images();
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
    }

  }