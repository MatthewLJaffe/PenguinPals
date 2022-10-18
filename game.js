class gameObj{
    constructor(){
      this.state = [new introScreen(), new instructionScreen(), new volumeScreen(), new highscoreScreen(), new gameScreen(), new gameoverScreen()];
      this.currentState = 0;
      this.gameOver = false; //true if the game is over
      this.lose = false; //true if the player lost the game
      this.win = false;  //true if the player won the game
    }
    //drawScreen(){
      
    //
  
  }