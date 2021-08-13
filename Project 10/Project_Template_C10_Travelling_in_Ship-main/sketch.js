var sea, seaImg;
var ship, shipImg;


function preload(){
seaImg = loadImage("sea.png");
shipImg = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
}

function setup(){
  createCanvas(400,400);

  sea = createSprite(400,200,0,0);
  ship = createSprite(200,350,40,40);
  ship.addAnimation("rocking",shipImg);
  sea.addImage(seaImg);
  //sea.x = sea.width/2;
  sea.velocityX = -4;
  sea.scale = 0.25;
  ship.scale = 0.2;
}

function draw() {
  background("blue");
 
  if(sea.x < -120){
    sea.x = 400;
  }

  drawSprites();
}