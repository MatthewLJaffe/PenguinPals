class gameObj{
    constructor(){
      this.state = [new introScreen(), new instructionScreen(), new volumeScreen(), new highscoreScreen(), new gameScreen(), new gameoverScreen()];
      this.currentState = 0;
      this.gameOver = false; //true if the game is over
      this.lose = false; //true if the player lost the game
      this.win = false;  //true if the player won the game

      //for menu in instructions screen
      this.cursor = 0;
      this.cursorY = [400, 450, 500];
      //this.cursorY = 400;
      this.cursorX = 270;
    }
    //drawScreen(){
      
    //for menu in instructions screen
    drawTriangle(){
        fill(0);
        triangle(this.cursorX - 10, this.cursorY[this.cursor], this.cursorX - 10, this.cursorY[this.cursor] + 20, this.cursorX, this.cursorY[this.cursor] + 10);
    }

    changeOption(){
        if(keyArray[UP_ARROW] == 1){
            if(this.cursor == 0){
                this.cursor = 2;
            }
            else{
                this.cursor--;
            }
        }

        if(keyArray[DOWN_ARROW] == 1){
            if(this.cursor == 2){
                this.cursor = 0;
            }
            else{
                this.cursor++;
            }
        }
    }
  
  }