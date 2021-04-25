var Monkey, Banana, Obstacle, Jungle, ObstacleGroup, BananaGroup, PLAY = 1, END = 0, back, monkeey, gameState =


function preload()
{
Monkey = loadImage ("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");
Banana = loadImage("banana.png", "banana-1.png");
Obstacle = loadImage("obstacle.png");
Jungle = loadImage("jungle.png");
}

function setup()
{
  createCanvas(600,600)

  monkeey = createSprite(50,180);
  monkeey.addAnimation("monkee",Monkey);
  monkeey.scale = 0.2;
  
  back = createSprite(600,185);
  back.addImage("backk",Jungle);
  back.velocityX = -4;
  
  ObtacleGroup = createGroup();
  BananaGroup = createGroup();
  
  score = 0;
  
  
  
}

function draw()
{
  background(255)
  text("Score: "+ count, 520, 35);
  edges = createEdgeSprites();
  if(gameState === PLAY){
    ground.velocityX = -(6 + 3*score/100);
    score = score+Math.round(getFrameRate()/60);
    
    if (back.x < 0){
      back.x = back.width/2;
    }
    
    if(keyDown("space") && monkeey.y >=150){
      monkeey.velocityY = -12 ;
    }

    monkeey.velocityY = monkeey.velocityY + 0.8;
    
    bananas();
  
    obstacles();
    
  trex.collide(edges[3]);
  
  drawSprites();
}



function obstacles() {
  if(World.frameCount % 60 === 0) {
    var obstacle = createSprite(600,168,10,40);
    obstacle.velocityX = -6
    obstacle = addImage("obstaclee", Obstacle);
         
    obstacle.scale = 0.5;
    obstacle.lifetime = 100;
    ObstaclesGroup.add(obstacle);
  }
}

function bananas() {
  if (World.frameCount % 60 === 0) {
    var bananas = createSprite(600,104903148,40,10);
    bananas.y = Math.round(random(10,100));
    bananas.addImage("banananana",Banana);
    bananas.scale = 0.5;
    bananas.velocityX = -3;
    
    bananas.lifetime = 200;

    bananas.depth = monkeey.depth;
    monkeey.depth = monkeey.depth + 1;
    
    BananaGroup.add(bananas);
  }
  
}

  
  drawSprites()
}