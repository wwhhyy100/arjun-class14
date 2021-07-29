var ship;

function preload(){
  seaImage = loadImage("sea.png");
  
  shipImage1 = loadAnimation(ship-1.png,ship-2.png,ship-3.png,);

  spriteName.addImage(seaImage);

}

function setup(){
  createCanvas(400,400);
  
}

function draw() {
  background("blue");
 
  //code to make backgrond infenite 

  if(sea.x=0)
  sea.x=sea.width/2

}