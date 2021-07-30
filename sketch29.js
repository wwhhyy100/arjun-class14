var ship,ship_sailing;
var sea,seaImage;

function preload(){

  seaImage = loadImage("sea.png");
  
  ship_sailing = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");


}

function setup(){
  createCanvas(400,400);
  //creating the ship


  //making the sea background
  sea=createSprite(400,200,20,20);
  sea.addImage(seaImage);
  sea.velocityX=-5
  sea.scale = 0.3

  //creating the ship
  ship = createSprite(130,260,20,20);
  ship.addAnimation("sailing",ship_sailing);
  ship.scale = 0.2


}



function draw() {
  background("blue");

  //code to make backgrond infenite 

  if(sea.x < 0){
  sea.x=sea.width/30
  }
  drawSprites()
}