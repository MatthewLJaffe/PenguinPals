//used to load all static assets in preload function
class Images
{
  constructor()
  {
    this.iceWallFloorUpImage = loadImage("images/tiles/IceWallFloor1.png");
    this.iceWallFloorDownImage = loadImage("images/tiles/IceWallFloor2.png");

    this.checkpointFlagWhite = loadImage("images/CheckpointFlag1.png");
    this.checkpointFlagGreen = loadImage("images/CheckpointFlag2.png");

    this.UIBorder = loadImage("images/UIBorder.png");
    this.UIBorderUnlock = loadImage("images/UIBorderUnlock.png");

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
    this.goldFish = loadImage("images/GoldFish.png");

    this.topIce = loadImage("images/IceBlocks1.png");
    this.bottomIce = loadImage("images/IceBlocks2.png");

    this.background = loadImage("images/Background.png");
    this.foreground = loadImage("images/Foreground.png");
    this.iceCenterImage = loadImage("images/tiles/IceCenter.png");
    this.snowBall = loadImage("images/Snowball.png");

    this.snowParticleImages = [];
    this.platformImages = [];
    this.platformImages.push(loadImage("images/tiles/Platform.png"));
    this.penguinPortraits = [];
    this.penguinUI = [];
    this.icePlatformImages = [];
    this.iceWallImages = [];
    for (let i = 1; i <= 3; i++)
    {
      this.penguinPortraits.push(loadImage("images/characters/PenguinPortrait" + i + ".png"));
      this.snowParticleImages.push(loadImage("images/SnowParticles" + i + ".png"));
      this.platformImages.push(loadImage("images/tiles/Platform" + i + ".png"));
      this.penguinUI.push(loadImage("images/PenguinUI" + i + ".png"));
      this.icePlatformImages.push(loadImage("images/tiles/IcePlatform" + i + ".png"));
      this.iceWallImages.push(loadImage("images/tiles/IceWall" + i + ".png"));
    }


    this.iceWallCornerImages = [];
    this.iceFloorImages = [];
    this.chocolateChipRightImages = [];
    this.chocolateChipLeftImages = [];
    this.iceCornerImages = [];
    this.springImages = [];
    this.snowBallRightImages = [];
    this.snowBallLeftImages = [];
    this.fallingIcicles = [];

    for (let i = 1; i <= 4; i++)
    {
      this.iceWallCornerImages.push(loadImage("images/tiles/IceWallCorner" + i + ".png"));
      this.iceFloorImages.push(loadImage("images/tiles/IceFloor" + i + ".png"));
      this.chocolateChipRightImages.push(loadImage("images/characters/ChocolateChipRight" + i + ".png"));
      this.chocolateChipLeftImages.push(loadImage("images/characters/ChocolateChipLeft" + i + ".png"));
      this.iceCornerImages.push(loadImage("images/tiles/IceCorner" + i + ".png"));
      this.springImages.push(loadImage("images/tiles/Spring" + i + ".png"));
      this.snowBallRightImages.push(loadImage("images/Snowball" + i + ".png"));
      this.snowBallLeftImages.push(loadImage("images/SnowballLeft" + i + ".png"));
      this.fallingIcicles.push(loadImage("images/FallingIcicles" + i + ".png"));
    }

    this.poptartWalkRight = [];
    this.poptartWalkLeft = [];
    this.bluePenguinWalkRight = [];
    this.cookieWalkRight = [];
    this.cookieWalkLeft = [];

    for (let i = 1; i <= 5; i ++)
    {
        this.poptartWalkRight.push(loadImage("images/characters/PoptartWalkRight" + i + ".png"));
        this.poptartWalkLeft.push(loadImage("images/characters/PoptartWalkLeft" + i + ".png"));
        this.bluePenguinWalkRight.push(loadImage("images/characters/BluePenguinWalkRight" + i + ".png"));
        this.cookieWalkRight.push(loadImage("images/characters/CookieWalkRight" + i + ".png"));
        this.cookieWalkLeft.push(loadImage("images/characters/CookieWalkLeft" + i + ".png"));
    }

    this.blackPenguinSpecialRight = [];
    this.blackPenguinSpecialLeft = [];
    this.redPenguinWalkRight = [];
    this.redPenguinWalkLeft = [];
    this.blackPenguinWalkRight = [];
    this.bluePenguinWalkLeft = [];
    this.blackPenguinWalkLeft = [];

    for (let i = 1; i <= 6; i ++)
    {
      this.blackPenguinSpecialRight.push(loadImage("images/characters/BlackPenguinSpecialRight" + i + ".png"));
      this.blackPenguinSpecialLeft.push(loadImage("images/characters/BlackPenguinSpecialLeft" + i + ".png"));
      this.redPenguinWalkRight.push(loadImage("images/characters/RedPenguinWalkRight" + i + ".png") );
      this.redPenguinWalkLeft.push(loadImage("images/characters/RedPenguinWalkLeft" + i + ".png") );
      this.blackPenguinWalkRight.push(loadImage("images/characters/BlackPenguin" + i + ".png"));
      this.blackPenguinWalkLeft.push(loadImage("images/characters/BlackPenguinWalkLeft" + i + ".png"));
      this.bluePenguinWalkLeft.push(loadImage("images/characters/BluePenguinWalkLeft" + i + ".png"));

    }

    this.smokeCloud = [];
    this.cookieShootLeft = [];
    this.cookieShootRight = [];
    for (let i = 1; i <= 7; i++)
    {
        this.smokeCloud.push(loadImage("images/SmokeCloud" + i + ".png"));
        this.cookieShootLeft.push(loadImage("images/characters/CookieShootLeft" + i + ".png"));
        this.cookieShootRight.push(loadImage("images/characters/CookieShootRight" + i + ".png"));
    }


    this.whiteSpikesDown = loadImage("images/tiles/WhiteSpikesDown.png");
    this.whiteSpikesUp = loadImage("images/tiles/WhiteSpikesUp.png");
    this.whiteSpikesLeft = loadImage("images/tiles/WhiteSpikesLeft.png");
    this.whiteSpikesRight = loadImage("images/tiles/WhiteSpikesRight.png");

    this.slicedUI = [];
    for (let i = 1; i <= 9; i++) {
      this.slicedUI.push(loadImage("images/9SliceUIBorder" + i + ".png"));
    }
  }
}

class SoundEffects
{
  constructor()
  {
    this.soundVolumeDict = new Map();
    this.poofSound = loadSound("sounds/poof.mp3");
    this.soundVolumeDict.set(this.poofSound, 1);
    this.gameLoseSound = loadSound("sounds/game_lose.wav");
    this.soundVolumeDict.set(this.gameLoseSound, .5);
    this.gameWinSound = loadSound("sounds/game_win.wav");
    this.soundVolumeDict.set(this.gameWinSound, 1);
    this.loseLifeSound = loadSound("sounds/lose_life.wav");
    this.soundVolumeDict.set(this.loseLifeSound, .25);
    this.NPCDeathSound = loadSound("sounds/lose_life2.wav");
    this.soundVolumeDict.set(this.NPCDeathSound, .75);
    this.walkingSound = loadSound("sounds/walking.wav");
    this.soundVolumeDict.set(this.walkingSound, .75);
    this.checkPointSound = loadSound("sounds/checkpoint.wav");
    this.soundVolumeDict.set(this.checkPointSound, .75);

  }

  playSound(sound)
  {
    if (sound.isPlaying()) return;
    console.log(this.soundVolumeDict.get(sound));
    sound.setVolume(this.soundVolumeDict.get(sound) * volume/10);
    sound.play();
  }
}

