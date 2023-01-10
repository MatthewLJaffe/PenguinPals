var player;
//0-8 floor tiles
//QWE ice platform
//RTYU platform
//ASDFG ice wall
//ZXCV Ice wall corner
//wasd spikes
//!-( UIBorder
//I icicle
//,./ penguins
var tileMap = [
  "                    ",
  "N                   ",
  "QWWWWWWWWWWWWWWWWETU",
  "   IIIIIIIIIIIIIII  ",
  "                    ",
  "                    ",
  "                  TU",
  "                    ",
  "                    ",
  "  www  www  www   B ",
  "TUQWWWWWWWWWWWWWWWWE",
  "  IIIIII   IIIIII   ",
  "                    ",
  "                    ",
  "TU                  ",
  "                    ",
  "        P           ",
  "     P  111        B",
  "QWWWWWWWWWWWWWWWWETU",
  "                    ",
  "                    ",
  "                    ",
  "               TYYYU",
  "                    ",
  "            P       ",
  "          TYYU      ",
  "                    ",
  "       P            ",
  "     TYYU           ",
  "                    ",
  "                    ",
  "TYYU                ",
  "                    ",
  "                    ",
  "TYYU                ",
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "   b                ",
  "TYYU             3  ",
  "                 3  ",
  "                 3  ",
  "TYYU             3  ",
  "                 3  ",
  "                 3  ",
  "TYYU             3  ",
  "                 3  ",
  "   f             3  ",
  "QETYYU012        3bB",
  "      678TYYYYYYY677",
  "                    ",
  "                    ",
  "     B              ",
  "wwwwwbwwww          ",
  "0111111112  P       ",
  "3444444445 TYU  TYYU",
  "3444444445          ",
  "6777777778          ",
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "                 b  ",
  "TYYYYYYYYYYYYYYYYYYU",
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "           b        ",
  "           1        ",
  "           s        ",
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "           b        ",
  "           1        ",
  "           s        ",
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "           b        ",
  "           1        ",
  "           s        ",
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "           b        ",
  "QE  QTYYYYYYYYYYYYYU",
  " s  s               ",
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "  b                 ",
  "0111112             ",
  "3444445             ",
  "6777778             ",
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "             b      ",
  "             R      ",
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "        b           ",
  "        R           ",
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "             b      ",
  "             R      ",
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "                w Bb",
  "               a0112",
  "               a3445",
  "                3445",
  "              b 3445",
  "          011111Z445",
  "          3444444445",
  "          3444444445",
  "          3444444445",
  "        b 3444444445",
  "TYQWWWWWE 6777777778",
  "                    ",
  "                    ",
  "                    ",
  "TYYYU               ",
  "                    ",
  "                    ",
  "       TYU          ",
  "                    ",
  "                    ",
  "            TYU     ",
  "                    ",
  "                    ",
  "                 TYU",
  "                    ",
  "                    ",
  "                    ",
  "                 TYU",
  "                    ",
  "                    ",
  "                    ",
  "TYU              TYU",
  "                    ",
  "                    ",
  "                    ",
  "TYU              TYU",
  "                    ",
  "                    ",
  "                  B ",
  "TYU              TYU",
  "                    ",
  "                    ",
  "                    ",
  "     QWE            ",
  "     III            ",
  "                    ",
  "                    ",
  "QWE                 ",
  "III                 ",
  "                    ",
  "                    ",
  "     QWE            ",
  "                    ",
  "                    ",
  "                    ",
  "QWE                 ",
  "                    ",
  "                    ",
  "                   B",
  "TYYUQWWWWWWWWWWWWWWE",
  "          IIIII     ",
  "                    ",
  "                    ",
  "TYYU       !@# !@@# ",
  "      0112 &*( &**( ",
  "      3445          ",
  "      3445     f/   ",
  "011111Z44X111112TYYU",
  "6777777777777778    ",
  "                    ",
  "                    ",
  "                   B",
  "              w01112",
  "             w0Z4445",
  "            w0Z44445",
  "           w0Z444445",
  "       w0111Z4444445",
  "      w0Z44444444445",
  "     w0Z444444444445",
  "    w0Z4444444444445",
  "TYYYA677777777777778",
  "   aSd              ",
  "   aDd              ",
  "TYYYs               ",
  "                    ",
  "                    ",
  "                    ",
  "012                 ",
  "678                 ",
  "                    ",
  "                    ",
  "                    ",
  "    QWE    QWE      ",
  "    III    III      ",
  "                    ",
  "                  TU",
  "                    ",
  "                    ",
  "                    ",
  "       wwww   wwww  ",
  "  012222222222222223",
  "TU677777777777777778",
  "     III    III     ",
  "                    ",
  "                    ",
  "                    ",
  "         B          ",
  "0112     02     02  ",
  "6778     68     68  ",
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "    wwwwwwwww   P   ",
  "QWWWWWWWWWWWWETYYYYU",
  "    IIII  III       ",
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "    wwww  www  P  B ",
  "TYYYQWWETUQWETYYYYYU",
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "B  P                ",
  "TYYYYYYYYYU         ",
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "  TYU               ",
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "        TYU         ",
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "  TYU               ",
  "                    ",
  "    !@@#            ",
  "    &**(            ",
  "                    ",
  "                    ",
  "       QWWE      TYU",
  "       ssss         ",
  "                    ",
  "                 TYU",
  "                    ",
  "        B           ",
  "       wwww         ",
  "TYUQWWWWWWWWWWWWWWWE",
  "                    ",
  "                    ",
  "                    ",
  "        !@@#        ",
  "TYU     &**(        ",
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "QWWWWWE     QWETYYYU",
  "                !@@#",
  "                &**(",
  "       !@@#         ",
  "       &**(         ",
  "                    ",
  "  .  f              ",
  "TYYUQWWWWWWWWWWWWWWE",
  "                    ",
  "                    ",
  "TYYU                ",
  "                    ",
  "                    ",
  "TYYU                ",
  "                    ",
  "       P    P       ",
  "TYYU  TYU  TYU  TYYU",
  "                    ",
  "                    ",
  "                TYYU",
  "                    ",
  "                  P ",
  "                0112",
  "B     P         3445",
  "012ww02ww02     3445",
  "34X11ZX11Z5TYYYU3445",
  "34444444445     3445",
  "67777777778  f  6778",
  "           TYYYU    ",
  "                    ",
  "                    ",
  "             TU     ",
  "                    ",
  "                    ",
  "                 TYU",
  "                    ",
  "         B          ",
  "    TU  TU  TU  TYYU",
  "                    ",
  "                    ",
  "02                  ",
  "35                  ",
  "35  02              ",
  "35ww35              ",
  "3X11Z5ww02          ",
  "34444X11Z5          ",
  "3444444445ww02TYYYYU",
  "344444444X11Z5       ",
  "67777777777778      ",
  "                TYYU",
  "                    ",
  "                    ",
  "            TYYU    ",
  "                    ",
  "                    ",
  "        TYYU        ",
  "                    ",
  "                    ",
  "    TYYU            ",
  "                    ",
  "                    ",
  "TYYU                ",
  "                    ",
  "P                   ",
  "01112  01112        ",
  "34445  3444X1112    ",
  "67778  677777778    ",
  "                    ",
  "                  01",
  "                  34",
  "011111111111111111Z4",
  "34444444444444444444",
  "34444444444444444444",
  "34444444444444444444",
  "34444444444444444444",
  "3TTTTTTTTTTTTTTTTTTT",
  "3TTTTTTTTTTTTTTTTTTT",
];

var blockingTiles = [];
var walkableTiles = [];
var platforms = [];
var UIBorders = [];
//objects that need to be updated every frame
var collisionObjs = [];
var flags = [];
var numFlags = 4;
var poptarts = [];
var snowballs = [];
var chocolateChips = [];
var fishes = [];
var springs = [];
var goldFish;
var icicles = [];
var penguinUnlocks = [];
var textAnchorPositions = [];
var worldUI = [];

//entry point to game loop
//contains much of game state 
class Game //4
{ 
  constructor()
  {
    this.snowDrops = [];
    for(let i = 0; i < 100; i++){
      this.snowDrops.push(new SnowParticle(2, 5));
    }
    //parallax effect with background
    this.backgroundScrollSpeed = .12;
    this.foregroundScrollSpeed = .25;
    player = new Player(400, 289, 35, 64, 1);  //x, y, size, penguin_type
    //correctly position things dynamically based off height of tilemap

    worldUI.push(new WorldSpaceUI("2 key switch\n\nto blue penguin", 12, 0, -5));
    worldUI.push(new WorldSpaceUI("A/D + Space\n\nhorizontal dash", 12, 0, -7));
    worldUI.push(new WorldSpaceUI("W + Space\n\nvertical dash", 12, 0, -7));
    worldUI.push(new WorldSpaceUI("W + A/D + Space\n\ndiagonal dash", 12, 0, -7));
    worldUI.push(new WorldSpaceUI("3 key switch\n\nto red penguin", 12, 0, -5));
    worldUI.push(new WorldSpaceUI("space to use\n\numbrella", 12, 0, -5));

    this.loadTileMap();
  }

  loadTileMap()
  {
    blockingTiles = [];
    walkableTiles = [];
    platforms = [];
    UIBorders = [];
    collisionObjs = [];
    poptarts = [];
    snowballs = [];
    fishes = [];
    springs = [];
    goldFish;
    icicles = [];
    penguinUnlocks = [];
    textAnchorPositions = [];
    //iterate through tilemap and instantiate objects
     var yOffset = (tileMap.length - 15) * -40;
     for (let y = 0; y < tileMap.length; y++)
     {
       for (let x = 0; x < tileMap[y].length; x++)
       {
         switch (tileMap[y][x])
         {
           case '0':
             collisionObjs.push(new CollisionObj(x*40+20, yOffset + y*40+20, 40, 40, images.iceCornerImages[0], '0'));
             break;
           case '1':
             collisionObjs.push(new CollisionObj(x*40+20, yOffset + y*40+20, 40, 40, images.iceFloorImages[0], '1'));
             break;
           case '2':
             collisionObjs.push(new CollisionObj(x*40+20, yOffset + y*40+20, 40, 40, images.iceCornerImages[1], '2'));
             break;
           case '3':
             collisionObjs.push(new CollisionObj(x*40+20, yOffset +  y*40+20, 40, 40, images.iceFloorImages[3], '3'));
             break;
           case '4':
             collisionObjs.push(new CollisionObj(x*40+20, yOffset + y*40+20, 40, 40, images.iceCenterImage, '4'));
             break;
           case '5':
             collisionObjs.push(new CollisionObj(x*40+20,  yOffset + y*40+20, 40, 40, images.iceFloorImages[1], '5'));
             break;
           case '6':
             collisionObjs.push(new CollisionObj(x*40+20,  yOffset + y*40+20, 40, 40, images.iceCornerImages[2], '6'));
             break;
           case '7':
             collisionObjs.push(new CollisionObj(x*40+20,  yOffset + y*40+20, 40, 40, images.iceFloorImages[2], '7'));
             break;
           case '8':
             collisionObjs.push(new CollisionObj(x*40+20,  yOffset + y*40+20, 40, 40, images.iceCornerImages[3], '8'));
             break;
           case 'Q':
             collisionObjs.push(new CollisionObj(x*40+20, yOffset + y*40+20, 40, 40, images.icePlatformImages[0], 'Q'));
             break;
           case 'W':
             collisionObjs.push(new CollisionObj(x*40+20,  yOffset + y*40+20, 40, 40, images.icePlatformImages[1], 'W'));
             break;
           case 'E':
             collisionObjs.push(new CollisionObj(x*40+20,  yOffset + y*40+20, 40, 40, images.icePlatformImages[2], 'E'));
             break;
           case 'A':
             collisionObjs.push(new CollisionObj(x*40+20,  yOffset + y*40+20, 40, 40, images.iceWallImages[0], 'A'));
             break;
           case 'S':
             collisionObjs.push(new CollisionObj(x*40+20,  yOffset + y*40+20, 40, 40, images.iceWallImages[1], 'S'));
             break;
           case 'D':
             collisionObjs.push(new CollisionObj(x*40+20,  yOffset + y*40+20, 40, 40, images.iceWallImages[2], 'D'));
             break;
           case 'F':
             collisionObjs.push(new CollisionObj(x*40+20, yOffset +  y*40+20, 40, 40, images.iceWallFloorUpImage, 'F'));
             break;
           case 'G':
             collisionObjs.push(new CollisionObj(x*40+20, yOffset +  y*40+20, 40, 40, images.iceWallFloorDownImage, 'G'));
             break;
           case 'Z':
             collisionObjs.push(new CollisionObj(x*40+20, yOffset +  y*40+20, 40, 40, images.iceWallCornerImages[0], 'Z'));
             break;
           case 'X':
             collisionObjs.push(new CollisionObj(x*40+20, yOffset +  y*40+20, 40, 40, images.iceWallCornerImages[1], 'X'));
             break;
           case 'C':
             collisionObjs.push(new CollisionObj(x*40+20, yOffset +  y*40+20, 40, 40, images.iceWallCornerImages[2], 'C'));
             break;
           case 'V':
             collisionObjs.push(new CollisionObj(x*40+20, yOffset +  y*40+20, 40, 40, images.iceWallCornerImages[3], 'V'));
             break;
           case 'P':
             poptarts.push(new Poptart(x*40+20, yOffset +  y*40+20, 40, 40, 'P'));
             break;
           case 'B':
             fishes.push(new Fish(x*40+20, yOffset +  y*40+20, 40, 40, 'B'));
             break;
           case 'N':
             goldFish = new GoldFish(x*40+20, yOffset +  y*40+20, 40, 40, 'N');
             break;
           case 'R':
             platforms.push(new Platform(x*40+20, yOffset +  y*40+20-15, 40, 10, images.platformImages[0], 'R'));
             break;
           case 'T':
             platforms.push(new Platform(x*40+20, yOffset +  y*40+20-15, 40, 10, images.platformImages[1], 'T'));
             break;
           case 'Y':
             platforms.push(new Platform(x*40+20, yOffset +  y*40+20-15, 40, 10, images.platformImages[2], 'Y'));
             break;
           case 'U':
             platforms.push(new Platform(x*40+20, yOffset +  y*40+20-15, 40, 10, images.platformImages[3], 'U'));
             break;
           case ',':
             player = new Player(x*40+20, yOffset +  y*40+20, 35, 64, 1);
             break;
           case 'w':
             collisionObjs.push(new CollisionObj(x*40+20, yOffset +  y*40+30, 30, 20, images.whiteSpikesUp, 'w', true, createVector(0, -10)));
             break;
           case 'a':
             collisionObjs.push(new CollisionObj(x*40+30, yOffset +  y*40+20, 20, 30, images.whiteSpikesLeft, 'a', true, createVector(-10, 0)));
             break;
           case 's':
             collisionObjs.push(new CollisionObj(x*40+20, yOffset +  y*40+10, 30, 20, images.whiteSpikesDown, 's', true, createVector(0, 10)));
             break;
           case 'd':
             collisionObjs.push(new CollisionObj(x*40+10, yOffset +  y*40+20, 20, 30, images.whiteSpikesRight, 'd', true, createVector(10, 0)));
             break;
           case 'b':
             springs.push(new Spring(x*40+20, yOffset + y*40+20, 0, 15, 20, 10, 'b'));
             break;
           case 'I':
             icicles.push(new FallingIcicle(x*40 + 20, yOffset + y*40+15));
             break;
           case '.':
             penguinUnlocks.push(new PenguinUnlock(x*40+20, yOffset +  y*40+8, 64, 64, images.bluePenguinWalkLeft[0], 2));
             break;
           case '/':
             penguinUnlocks.push(new PenguinUnlock(x*40+20, yOffset +  y*40+8, 64, 64, images.redPenguinWalkLeft[0], 3));
             break;
           case '!':
             UIBorders.push(new VisibleObject(x*40+20, yOffset + y*40+20, images.slicedUI[0]));
             for (let i = worldUI.length-1; i >= 0; i--)
             {
               //worldUI Position not set
               if (worldUI[i].topLeftAnchor.magSq() <= .01)
               {
                 worldUI[i].topLeftAnchor.x = x*40+20;
                 worldUI[i].topLeftAnchor.y = yOffset + y*40+20;
                 break;
               }
             }
             break;
           case '@':
             UIBorders.push(new VisibleObject(x*40+20, yOffset + y*40+20, images.slicedUI[1]));
             break;
           case '#':
             UIBorders.push(new VisibleObject(x*40+20, yOffset + y*40+20, images.slicedUI[2]));
             break;
           case '$':
             UIBorders.push(new VisibleObject(x*40+20, yOffset + y*40+20, images.slicedUI[3]));
             break;
           case '%':
             UIBorders.push(new VisibleObject(x*40+20, yOffset + y*40+20, images.slicedUI[4]));
             break;
           case '^':
             UIBorders.push(new VisibleObject(x*40+20, yOffset + y*40+20, images.slicedUI[5]));
             break;
           case '&':
             UIBorders.push(new VisibleObject(x*40+20, yOffset + y*40+20, images.slicedUI[6]));
             break;
           case '*':
             UIBorders.push(new VisibleObject(x*40+20, yOffset + y*40+20, images.slicedUI[7]));
             break;
           case '(':
             UIBorders.push(new VisibleObject(x*40+20, yOffset + y*40+20, images.slicedUI[8]));
             for (let i = worldUI.length-1; i >= 0; i--)
             {
               //worldUI Position not set
               if (worldUI[i].bottomRightAnchor.magSq() <= .01)
               {
                 worldUI[i].bottomRightAnchor.x = x*40+20;
                 worldUI[i].bottomRightAnchor.y = yOffset + y*40+20;
                 worldUI[i].centerAnchor.x = (worldUI[i].bottomRightAnchor.x + worldUI[i].topLeftAnchor.x)/2;
                 worldUI[i].centerAnchor.y = (worldUI[i].bottomRightAnchor.y + worldUI[i].topLeftAnchor.y)/2;
                 break;
               }
             }
             break;
           case 'f':
            if (flags.length < numFlags)
            {
              flags.push(
                {
                  collisionObj: new CollisionObj(x*40+20, yOffset +  y*40, 40, 80, images.checkpointFlagWhite, 'f'),
                  reached: false
                });
            }
            break;
           case 'c':
            poptarts.push(new Cookie(x*40+20, yOffset +  y*40+20, 40, 40, 'c'));
         }
       }
     }
  }

  //game loop
  execute(me)
  {
      noSmooth();
      background(220, 250, 250);
      //scrolling foreground and background layers at different speeds
      image(images.background, 400, constrain(-this.backgroundScrollSpeed*(player.position.y - 300), 0, 600));
      image(images.foreground, 400, constrain(-this.foregroundScrollSpeed*(player.position.y - 300), 0, 600));
      
      push();
      //translate to center y around player
      //snow falling
      translate(0, height/2 - player.position.y+100);
      for(let i = 0; i < this.snowDrops.length; i++){
        this.snowDrops[i].move();
        this.snowDrops[i].drawSnow();
      }
      fill(135, 206, 250);
      textSize(64);
      textAlign(LEFT);
      for (let i = 0; i < UIBorders.length; i++)
      {
        UIBorders[i].drawObject();
      }
      for (let i = 0; i < worldUI.length; i++)
      {
        worldUI[i].writeText();
      }
      for (let i = 0; i < springs.length; i++)
      {
        springs[i].updateSpring();
      }
      for(var i = 0; i < icicles.length; i++){
        icicles[i].updateIcicle();
      }
      for (let i =  0; i < flags.length; i++)
        flags[i].collisionObj.drawCollisionObj();
      //adjust volume
      player.updatePlayer();
      //update poptarts
      for (let i = 0; i < poptarts.length; i++)
      {
        poptarts[i].update();
      }
      //draw tiles
      for (let i = 0; i < collisionObjs.length; i++){
        fill(0, 255 ,0);
        collisionObjs[i].drawCollisionObj();
      }
      for (let i = 0; i < snowballs.length; i++)
      {
        snowballs[i].updateSnowBall();
      }
      for (let i = 0; i < chocolateChips.length; i++)
      {
        chocolateChips[i].updateChocolateChip();
      }
      for (let i = 0; i < fishes.length; i++)
      {
        fishes[i].updateFish();
      }
      for (let i = 0; i < platforms.length; i++)
      {
        platforms[i].drawPlatform();
      }
      goldFish.updateFish();
      for (let i = 0; i < penguinUnlocks.length; i++)
      {
        penguinUnlocks[i].updatePenguinUnlock();
      }

      pop();
      
      //game displays in upper left and right hand corners
      this.lifeDisplay();
      this.scoreDisplay();

      if(player.lives == 0){
        me.gameOver = true;
        me.lose = true;
        me.currentState = 5;

        //disable poptarts as soon as game is over to prevent post game over deaths
        for (let i = 0; i < poptarts.length; i++)
        {
          poptarts[i].enabled = false;
        }
      }

      if (detectCollision(goldFish.position.x, goldFish.position.y, 40, 40, player.position.x, player.position.y, 64, 16).mag() > 0)
      {
        me.gameOver = true;
        me.win = true;
        me.currentState = 5;
      }
      //penguin portrait displays at the bottom right hand corner to show the current penguin
      //and what penguin the Q and E keys will change it to
      image(images.penguinUI[player.penguin_type-1], width-70, height-40);
      textSize(20);
      fill(0);
      text("1", width - 120, height - 50);
      text("2", width - 77, height - 50);
      text("3", width - 30, height - 50);
      image(images.penguinPortraits[0], width - 70 - 46, height - 20);
      if (player.bluePenguinUnlocked)
        image(images.penguinPortraits[1], width - 70, height - 20);
      if (player.redPenguinUnlocked)
        image(images.penguinPortraits[2], width - 70 + 46, height - 20);

  }
  
  //ui display of current life count
  lifeDisplay()
  {
    if(player.lives > 0) {
      image(images.fullHeart, width - 105, 25, 45, 45);
    }
    else {
      image(images.emptyHeart, width - 105, 25, 45, 45);
    }
    if(player.lives > 1){
      image(images.fullHeart, width - 65, 25, 45, 45);
    }
    else {
      image(images.emptyHeart, width - 65, 25, 45, 45);
    }
    if(player.lives > 2) {
      image(images.fullHeart, width - 25, 25, 45, 45);
    }
    else {
      image(images.emptyHeart, width - 25, 25, 45, 45);
    }
  }

  //show score ui
  scoreDisplay()
  {
    image(images.UIBorder, 100, 25);
    fill(0);
    textFont(pixelBodyFont);
    textAlign(LEFT);
    textSize(20);
    text("Score " + player.score, 10, 36);
  }

  //reseting the variables to replay
  resetVariables(me)
  {
    this.loadTileMap();
    var newPlayer = new Player(player.savedPos.x, player.savedPos.y, 35, 64, 1);
    newPlayer.savedPos = player.savedPos;
    newPlayer.score = player.savedScore;
    newPlayer.savedScore = player.savedScore;
    newPlayer.redPenguinUnlocked = player.savedRedPenguin;
    newPlayer.bluePenguinUnlocked = player.savedBluePenguin;
    newPlayer.savedRedPenguin = player.savedRedPenguin;
    newPlayer.savedBluePenguin = player.savedBluePenguin;
    player = newPlayer;

    //resetting game variables
    me.gameOver = false;
    me.lose = false;
    me.win = false;

  }

  //add a new highscore when a player finishes the game
  updateHighScore(me){
    this.newHighScores = [];
    this.added = false;
    if(me.highScores.length < 5){
      for(var i = 0; i < me.highScores.length; i++){
        if(player.score > me.highScores[i] && this.added == false){
          this.added = true;
          this.newHighScores.push(player.score)
        }
          this.newHighScores.push(me.highScores[i]);
      }
      me.highScores = this.newHighScores;
    }
    else{
      if(player.score > me.highScores[me.highScores.length - 1]){
        for(var i = 0; i < me.highScores.length - 1; i++){
          if(player.score > me.highScores[i] && this.added == false){
            this.added = true;
            this.newHighScores.push(player.score)
          }
            this.newHighScores.push(me.highScores[i]);
        }
      }
      me.highScores = this.newHighScores;
    }
  }
}

var keyArray = [];

//for WASD movement of player
function keyPressed() {
  keyArray[keyCode] = 1;
}

function keyReleased() {
  keyArray[keyCode] = 0;
}

//class for tiles that can be collided with by npcs/ player
class CollisionObj
{
  constructor(x, y, w, h, img, char, doesDamage, offset)
  {
    if (offset)
      this.offset = offset;
    else
      this.offset = createVector(0, 0);
    this.position = createVector(x, y);
    this.size = createVector(w, h);
    this.img = img;
    if (doesDamage)
      this.doesDamage = true;
    else
      this.doesDamage = false;
    blockingTiles[char] = true;
    walkableTiles[char] = !doesDamage;
  }

  drawCollisionObj()
  {
    if (inViewOfPlayer(this.position.x + this.offset.x, this.position.y + this.offset.y, this.size.x, this.size.y))
      image(this.img, this.position.x + this.offset.x, this.position.y+this.offset.y);
  }
}

function inViewOfPlayer(x, y, w, h)
{
  var distToPlayer = abs(player.position.y - y) + h/2;
  return distToPlayer < 500;
}

//return normal vector of collision if there is one otherwise return zero vector
function detectCollision(x1, y1, w1, h1, x2, y2, w2, h2)
{
  let left1 = x1 - w1/2;
  let right1 = x1 + w1/2;
  let top1 = y1 - h1/2;
  let bottom1 = y1 + h1/2;

  let left2 = x2 - w2/2;
  let right2 = x2 + w2/2;
  let top2 = y2 - h2/2;
  let bottom2 = y2 + h2/2;

  //overlap detected
  if (right1 >= left2 && left1 <= right2 && bottom1 >= top2 && top1 <= bottom2)
  {
    dir = createVector(x2 - x1, y2 - y1);
    if(dir.x > 0)
    {
      //bottom right of 1
      if (dir.y > 0)
      {
        if (abs(bottom1 - top2) < abs(right1 - left2))
          return createVector(0, -1);
        else
          return createVector(-1, 0);
      }
      //top right of 1
      else
      {
        if (abs(top1 - bottom2) < abs(right1 - left2))
          return createVector(0, 1);
        else
          return createVector(-1, 0);
      }
    }
    else
    {
      //bottom left of 1
      if (dir.y > 0)
      {
        if (abs(bottom1 - top2) < abs(left1 - right2))
          return createVector(0, -1);
        else
          return createVector(1, 0);
      }
      //top left of 1
      else
      {
        if (abs(top1 - bottom2) < abs(left1 - right2))
          return createVector(0, 1);
        else
          return createVector(1, 0);
      }
    }
  }
  return createVector(0, 0);
}

//icicles that fall when the player moves under it
class FallingIcicle
{
  constructor(x, y)
  {
    this.position = new p5.Vector(x, y);
    this.size = createVector(35, 20);
    this.collisionOffset = createVector(0, -10);
    this.initialPosition = new p5.Vector(x, y);

    //forces
    this.velocity = new p5.Vector(0, 0);
    this.acceleration = new p5.Vector(0 , 0);
    this.gravity = .15;
    this.gravityForce = new p5.Vector(0, this.gravity);
    this.maxNormalFallSpeed = 5;
    this.maxDropDist = 300;
    this.timer = 60;
    this.currAnimIdx = 0;
    this.frameStep = 6;
    this.destroyed = false;
  }

  updateIcicle()
  {
    //destroy icicle when it falls too far
    if (this.position.y - this.initialPosition.y > 3*height/4)
      this.destroyed = true;
    this.updateIciclePosition();
    this.checkIcicleCollision();
    this.drawIcicle();
  }

  updateIciclePosition()
  {
    if (this.destroyed) return;
    if(dist(this.position.x, this.position.y, player.position.x, player.position.y) < this.maxDropDist && 
    (player.position.y) > (this.position.y ) && abs(player.position.x - this.position.x) < 12){
      this.acceleration = this.gravityForce;
    }
    if(this.velocity.mag() < this.maxNormalFallSpeed) {
      this.velocity.add(this.acceleration);
    }
    this.position.add(this.velocity);
  }

  checkIcicleCollision()
  {
    if (this.destroyed) return;
    var umbreallaPos = player.getUmbrellaPos();
    //collision with umbrella
    if (detectCollision(this.position.x + this.collisionOffset.x, this.position.y + this.collisionOffset.y,
      this.size.x, this.size.y, umbreallaPos.x, umbreallaPos.y, player.umbrellaSize.x, player.umbrellaSize.y).magSq() > 0)
      {
        this.destroyed = true;
      }
    //collision with player
    else if (detectCollision(this.position.x + this.collisionOffset.x, this.position.y + this.collisionOffset.y,
      this.size.x, this.size.y, player.position.x, player.position.y, player.size.x, player.size.y).magSq() > 0)
      {
        this.destroyed = true;
        player.damagePlayer();
      }
  }

  drawIcicle()
  {
    if (this.destroyed)
    {
      if (frameCount % this.frameStep == 0)
        this.currAnimIdx++;
      //if animation is complete remove icicle from active icicles list;
      if (this.currAnimIdx >= images.fallingIcicles.length)
      {
        for (let i = 0; i < icicles.length; i++)
        {
          if (icicles[i] == this) {
            icicles.splice(i, 1);
            return;
          }
        }
      }
      image(images.fallingIcicles[this.currAnimIdx], this.position.x,  this.position.y);
    }
    else
    {
      image(images.fallingIcicles[0], this.position.x, this.position.y);
    }
  }
}

//projectile for player spawned with special move
class Snowball
{
  constructor(x, y, dir)
  {
    if (dir == 1)
      this.position = createVector(x, y );
    else
      this.position = createVector(x-10, y);
    this.dir = dir;
    this.speed = 5;
    this.liveTime = 55;
    this.currTime = 0;
    this.animStepRate = 6;
    this.destroyAnimIndex = 1;
    this.currFrame = 0;
    this.destroying = false;
  }

  //move snowball and check for collision with enemies
  updateSnowBall()
  {
    var animImages = this.dir > 0 ? images.snowBallRightImages : images.snowBallLeftImages;
    if (this.destroying)
    {
      this.destroySnowball(animImages);
      return;
    }
    this.position.x += this.speed * this.dir;
    image(animImages[0], this.position.x, this.position.y);
    for (let i = 0; i < collisionObjs.length; i++)
    {
      if (detectCollision(this.position.x, this.position.y, 20, 20, collisionObjs[i].position.x, collisionObjs[i].position.y, collisionObjs[i].size.x, collisionObjs[i].size.y).mag() > 0) 
      {
        this.destroying = true;
      }
    }
    for (let i = 0; i < poptarts.length; i ++)
    {
      if (detectCollision(this.position.x, this.position.y, 20, 20, poptarts[i].position.x, poptarts[i].position.y, poptarts[i].size.x, poptarts[i].size.y).mag() > 0 && poptarts[i].enabled)
      {
        player.score += 100;
        poptarts[i].enabled = false;
        sounds.playSound(sounds.NPCDeathSound);
        this.destroying = true;
        return;
      }
    }
    this.currTime++;
    if (this.currTime > this.liveTime)
      this.destroying = true;

  }

  //remove snowball from array so it is no longer updated
  destroySnowball(animImages)
  {
    this.currFrame++;
    if (this.currFrame % this.animStepRate == 0)
      this.destroyAnimIndex++;
    //animation complete destroy snowball
    if (this.destroyAnimIndex == animImages.length)
    {
      for (let i = 0; i < snowballs.length; i++)
      {
        if (snowballs[i] == this)
          snowballs.splice(i, 1);
      }
    }
    //play snowball animation
    else
      image(animImages[this.destroyAnimIndex], this.position.x, this.position.y);
  }
}

//gives the player an extra life and extra score on collision
class Fish
{
  constructor(x, y)
  {
    this.position = createVector(x, y);
    this.show = true;
  }

  //check for collision with player and update plaer score and lives if collision
  updateFish()
  {
    if(this.show == true){
      image(images.fish, this.position.x, this.position.y);
    }
    if (detectCollision(this.position.x, this.position.y, 40, 40, player.position.x, player.position.y, 64, 64).mag() > 0 && this.show == true)
    {
      for (let i = 0; i < fishes.length; i++)
      {
        if (this == fishes[i]) 
        {
          //fishes.splice(i, 1);
          this.show = false;
          player.score += 500;
          if (player.lives < 3)
          {
            player.lives++;
          }
        }
      }
    }
  }
}

//similar to fish but collision wins the game for the player
class GoldFish
{
  constructor(x, y)
  {
    this.position = createVector(x, y);
  }

  updateFish()
  {
    image(images.goldFish, this.position.x, this.position.y);
  }
}

function lerp(a, b, t)
{
  return a * (1 - t) + b * t;
}

class Platform
{
  constructor(x, y, w, h, img, char)
  {
    this.position = createVector(x, y);
    this.size = createVector(w, h);
    this.img = img;
    walkableTiles[char] = true;
  }

  drawPlatform()
  {
    if (inViewOfPlayer(this.position.x, this.position.y, this.size.x, this.size.y))
      image(this.img, this.position.x, this.position.y+15);
  }
}

//launches player upward
class Spring
{
  constructor(x, y, triggerOffsetX, triggerOffsetY, w, h, char)
  {
    this.position = createVector(x, y);
    this.size = createVector(w, h);
    this.triggerPos = createVector(x + triggerOffsetX, y + triggerOffsetY);
    blockingTiles[char] = true;
    this.stepRate = 6;
    this.currAnimIdx = 0;
    this.currFrame = 0;
    this.sprung = false;
  }

  updateSpring()
  {
    //update spring animation
    if (this.sprung)
    {
      this.currFrame++;
      if (this.currFrame % this.stepRate == 0)
      {
        this.currAnimIdx++;
        if (this.currAnimIdx == images.springImages.length) {
          this.sprung = false;
          this.currFrame = 0; 
          this.currAnimIdx = 0;
        }
      }
    }

    //check for spring collision
    else
    {
      if (detectCollision(this.triggerPos.x, this.triggerPos.y, this.size.x, this.size.y, 
        player.position.x, player.position.y, player.size.x, player.size.y).mag() > .1)
      {
        this.sprung = true;
        //this.currAnimIdx = 1;
        player.velocity.y = 0;
        player.velocity.add(p5.Vector.mult(player.jumpForce, 2));
        player.jump = 1;
        player.usedDash = false;
      }
    }
    image(images.springImages[this.currAnimIdx], this.position.x, this.position.y);
    fill(255,0,0);
  }
}

class PenguinUnlock
{
  constructor(x, y, w, h, penguinImage, unlockPenguin)
  {
    this.position = createVector(x, y);
    this.size = createVector(w, h);
    this.img = penguinImage;
    this.triggered = false;
    this.frameStep = 6;
    this.currAnimIdx = 0;
    this.unlockPenguin = unlockPenguin;
  }

  updatePenguinUnlock()
  {
    this.drawPenguinUnlock();
    this.checkForPlayerCollision();
  }

  drawPenguinUnlock()
  {
    //draw normal penguin
    if (!this.triggered)
    {
      if (this.unlockPenguin == 2 && !player.bluePenguinUnlocked || 
        this.unlockPenguin == 3 && !player.redPenguinUnlocked)
      {
        image(this.img, this.position.x, this.position.y);
      }
      return;
    }
    //poof animation
    if (frameCount % this.frameStep == 0)
      this.currAnimIdx++;
    //if animation duration has ended unlock penguin
    if (this.currAnimIdx >= images.smokeCloud.length)
    {
      for (let i = 0; i < penguinUnlocks.length; i++)
      {
        if (penguinUnlocks[i] == this)
          penguinUnlocks.splice(i, 1);
        if (this.unlockPenguin == 2)
          player.bluePenguinUnlocked = true;
        if (this.unlockPenguin == 3)
          player.redPenguinUnlocked = true;
        return;
      }
    }
    image(images.smokeCloud[this.currAnimIdx], this.position.x, this.position.y);
    this.penguinUnlockedNotification();

  }

  async checkForPlayerCollision()
  {
    if (detectCollision(this.position.x, this.position.y, this.size.x, this.size.y,
      player.position.x, player.position.y, player.size.x, player.size.y).magSq() > 0)
      {
        if (this.triggered) return;
        this.triggered = true;
        sounds.playSound(sounds.gameWinSound);
        frameRate(0);
        this.penguinUnlockedNotification();
        await resolveAfterTime(2500);
        frameRate(60);
        sounds.playSound(sounds.poofSound);
      }
  }

  penguinUnlockedNotification()
  {
    push();
    translate(0, -(height/2 - player.position.y+100));
    textFont(pixelBodyFont);
    fill(0);
    image(images.UIBorderUnlock, width/2, height/2);
    textSize(30);
    text("New Penguin\n\nPal Unlocked!", width/2, height/2-20);
    pop();
  }
}

class VisibleObject
{
  constructor(x, y, img)
  {
    this.position = createVector(x, y);
    this.img = img;
  }

  drawObject()
  {
    image(this.img, this.position.x, this.position.y);
  }
}

class WorldSpaceUI
{
  constructor(text, textSize, x, y)
  {
    this.topLeftAnchor = createVector(0, 0);
    this.bottomRightAnchor = createVector(0, 0);
    this.centerAnchor = createVector(0, 0);
    this.centerOffset = createVector(x, y);
    this.message = text;
    this.textSize = textSize;
  }

  writeText()
  {
    fill(0);
    textAlign(CENTER);
    textSize(this.textSize);
    text(this.message, this.centerAnchor.x + this.centerOffset.x, this.centerAnchor.y + this.centerOffset.y);
  }
}

function resolveAfterTime(time)
{
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}



