var ship,ship_sailing;
var sea

function preload(){
  seaImage = loadImage("sea.png");
  
  ship_sailing = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

  sea.addImage(seaImage);

}

function setup(){
  createCanvas(400,400);
  //creating the ship
  ship = createSprite(200,200);
  ship.addAnimation("sailing",ship_sailing);

  //making the sea background
  sea=createSprite(200,400,400,20);
  sea.addImage(sea.png)

}

function draw() {
  background(sea.png);



 sea.velocityX=5
  //code to make backgrond infenite 

  if(sea.x=0){
  sea.x=sea.width/2
  }
}