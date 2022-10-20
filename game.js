class gameObj{
    constructor(){
      this.state = [new introScreen(), new instructionScreen(), new volumeScreen(), new highscoreScreen(), new gameScreen(), new gameoverScreen()];
      this.currentState = 0;
      this.gameOver = false; //true if the game is over
      this.lose = false; //true if the player lost the game
      this.win = false;  //true if the player won the game

      //for menu in instructions screen
      this.cursor = 0;
      this.cursorY = [400, 445, 490];
      this.cursorX = 280;

      //for high scores
      this.highScores = [0, 0, 0, 0, 0];

      //for volume
      this.volume = 5;  //starts at 5
    }
    //drawScreen(){
      
    //for menu in instructions screen
    drawTriangle(){
        fill(25, 100, 175); //color of triangle
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

    selectOption(){
        if(keyArray[13] == 1){//select option with enter
            if(this.cursor == 0){
                this.currentState = 4;
            }
            else if(this.cursor == 1){
                this.currentState = 2;
            }
            else if(this.cursor == 2){
                this.currentState = 3;
            }
        }
    }
  
  }