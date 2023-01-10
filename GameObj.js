var volume = 5;

class GameObj
{
    constructor()
    {
      //all of the animations and images used within the game
      this.animations = new Images();
      //game states
      this.state = [new introScreen(this.animations), new InstructionsScreen(this.animations), new VolumeScreen(), new HighscoreScreen(), new Game(), new GameoverScreen()];
      this.currentState = 0;
      this.gameOver = false; //true if the game is over
      this.lose = false; //true if the player lost the game
      this.win = false;  //true if the player won the game

      //for menu in instructions screen
      this.cursor = 0;
      this.cursorY = [400, 445, 490];
      this.cursorX = 280;

      //for high scores
      this.highScores = [0, 0, 0, 0, 0];    //default high scores

    }
  }