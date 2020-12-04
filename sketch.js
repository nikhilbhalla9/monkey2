var PLAY = 1;
var END = 0;
var gameState = PLAY;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score



function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas  (400,400);
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;

  ground=createSprite(10,350,900,10)
  ground.velocityX=-4;
 
  console.log(ground.x)
  
  
}


function draw() {
background(180)
var survivalTime=0;
stroke("white");
textSize(20)
fill("white")

stroke("black");
textSize(20);
fill ("black")
survivalTime=Math.ceil(frameCount/frameRate())
  text("survival Time:"+survivalTime,100,50)
  if(ground.x<10){
    ground.x=200
  }
   if((touches.length>0 || keyDown("space")) && monkey.y >= 159) {
      touches=[]
      monkey.velocityY = -12;
    }
  monkey.velocityY=monkey.velocityY+0.8
    monkey.collide(ground)
  spawnbananas();
  obstacle();
  drawSprites();
}
  function spawnbananas() {
  if (frameCount % 40 === 0){
    var bananas = createSprite(400,120,40,10);
    bananas.y = Math.round(random(80,100));
  bananas.addImage(bananaImage);
    bananas.scale = 0.09;
    bananas.velocityX = -3;
  }
}
 function obstacle() {
  if (frameCount % 80 === 0){
    var obstacle = createSprite(400,330,40,10);
                             
  obstacle.addImage(obstacleImage);
    obstacle.scale = 0.10;
    obstacle.velocityX = -7;
  }
}