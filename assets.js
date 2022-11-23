//used to load all static assets in preload function
class Images
{
    constructor()
    {
        this.redPenguinWalkRight = [];
        this.redPenguinWalkLeft = [];
        this.blackPenguinWalkRight = [];
        this.bluePenguinWalkRight = [];
        this.bluePenguinWalkLeft = [];
        this.blackPenguinWalkLeft = [];
        this.blackPenguinSpecialRight = [];
        this.blackPenguinSpecialLeft = [];
        this.poptartWalkRight = [];
        this.poptartWalkLeft = [];
        this.smokeCloud = [];

        this.blackPenguinJumpLeft = loadImage("images/characters/BlackPenguinJumpLeft.png");
        this.blackPenguinJumpRight = loadImage("images/characters/BlackPenguinJumpRight.png");
        this.bluePenguinJumpLeft = loadImage("images/characters/BluePenguinJumpLeft.png");
        this.bluePenguinJumpRight = loadImage("images/characters/BluePenguinJumpRight.png");
        this.redPenguinJumpLeft = loadImage("images/characters/RedPenguinJumpLeft.png");
        this.redPenguinJumpRight = loadImage("images/characters/RedPenguinJumpRight.png");

        this.redPenguinUmbrellaUpRight = loadImage("images/characters/RedPenguinUmbrellaUpRight.png");
        this.redPenguinUmbrellaUpLeft = loadImage("images/characters/RedPenguinUmbrellaUpLeft.png");
        this.redPenguinUmbrellaLeft = loadImage("images/characters/RedPenguinUmbrellaLeft.png");
        this.redPenguinUmbrellaRight = loadImage("images/characters/RedPenguinUmbrellaRight.png");

        this.fullHeart = loadImage("images/Heart1.png");
        this.emptyHeart = loadImage("images/Heart2.png");

        this.fish = loadImage("images/Fish.png");
        this.snowBall = loadImage("images/Snowball.png");

        this.topIce = loadImage("images/IceBlocks1.png");
        this.bottomIce = loadImage("images/IceBlocks2.png");

        for (let i = 1; i <= 6; i ++)
        {
          this.blackPenguinSpecialRight.push(loadImage("images/characters/BlackPenguinSpecialRight" + i + ".png"));
          this.blackPenguinSpecialLeft.push(loadImage("images/characters/BlackPenguinSpecialLeft" + i + ".png"));
          this.redPenguinWalkRight.push(loadImage("images/characters/RedPenguinWalkRight" + i + ".png") );
          this.redPenguinWalkLeft.push(loadImage("images/characters/RedPenguinWalkLeft" + i + ".png") );
          this.blackPenguinWalkRight.push(loadImage("images/characters/BlackPenguin" + i + ".png"));
          this.bluePenguinWalkRight.push(loadImage("images/characters/BluePenguin" + i + ".png"));
          this.blackPenguinWalkLeft.push(loadImage("images/characters/BlackPenguinWalkLeft" + i + ".png"));
          this.bluePenguinWalkLeft.push(loadImage("images/characters/BluePenguinWalkLeft" + i + ".png"));
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
        this.goldFish = loadImage("images/GoldFish.png");
        this.background = loadImage("images/Background.png");
        this.foreground = loadImage("images/Foreground.png");
        this.iceCenterImage = loadImage("images/tiles/IceCenter.png");
        this.iceCornerImages = [];
        for (let i = 1; i <= 4; i++)
          this.iceCornerImages.push(loadImage("images/tiles/IceCorner" + i + ".png"));
        this.iceFloorImages = [];
        for (let i = 0; i < 4; i++)
          this.iceFloorImages[i] = loadImage("images/tiles/IceFloor" + ( i + 1) + ".png");
        this.icePlatformImages = [];
        for (let i = 0; i < 3; i++)
          this.icePlatformImages[i] = loadImage("images/tiles/IcePlatform" + ( i + 1) + ".png");
        this.iceWallImages = [];
        for (let i = 0; i < 3; i++)
          this.iceWallImages[i] = loadImage("images/tiles/IceWall" + ( i + 1) + ".png");
        this.iceWallCornerImages = [];
        for (let i = 1; i < 5; i++)
        {
          this.iceWallCornerImages.push(loadImage("images/tiles/IceWallCorner" + i + ".png"));
        }
        this.iceWallFloorUpImage = loadImage("images/tiles/IceWallFloor1.png");
        this.iceWallFloorDownImage = loadImage("images/tiles/IceWallFloor2.png");
        this.snowParticleImages = [];
        this.platformImages = [];
        this.platformImages.push(loadImage("images/tiles/Platform.png"));
        for (let i = 1; i <= 3; i++)
        {
          this.snowParticleImages.push(loadImage("images/SnowParticles" + i + ".png"));
          this.platformImages.push(loadImage("images/tiles/Platform" + i + ".png"));
        }
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
    this.NPCDeathSound = loadSound("sounds/lose_life2.wav");
    this.walkingSound = loadSound("sounds/walking.wav");
  }
}