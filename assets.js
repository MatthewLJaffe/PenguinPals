class Images
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
        this.background = loadImage("images/Background.png");
        this.foreground = loadImage("images/Foreground.png");
        this.iceCenterImage = loadImage("images/tiles/IceCenter.png");
        this.iceCornerImages = [];
        for (let i = 0; i < 4; i++)
          this.iceCornerImages[i] = loadImage("images/tiles/IceCorner" + ( i + 1) + ".png");
        this.iceFloorImages = [];
        for (let i = 0; i < 4; i++)
          this.iceFloorImages[i] = loadImage("images/tiles/IceFloor" + ( i + 1) + ".png");
        this.icePlatformImages = [];
        for (let i = 0; i < 3; i++)
          this.icePlatformImages[i] = loadImage("images/tiles/IcePlatform" + ( i + 1) + ".png");
        this.iceWallImages = [];
        for (let i = 0; i < 3; i++)
          this.iceWallImages[i] = loadImage("images/tiles/IceWall" + ( i + 1) + ".png");
        this.iceWallFloorUpImage = loadImage("images/tiles/IceWallFloor1.png");
        this.iceWallFloorDownImage = loadImage("images/tiles/IceWallFloor2.png");
    }

    
}

class SoundEffects
{
  constructor()
  {
    this.poofSound = loadSound("sounds/poof.mp3");
    this.gameLoseSound = loadSound("sounds/game_lose.wav");
    this.gameWinSound = loadSound("sounds/game_win.wav");
    this.loseLifeSound = loadSound("sounds/lose_life.wav");   //or lose_life2.wav
    this.walkingSound = loadSound("sounds/walking.wav");
  }
}