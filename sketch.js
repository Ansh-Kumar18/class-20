var fixedRect, movingRect;
//var car, wall;

function setup() {
  createCanvas(800,400);
  movingRect= createSprite(400,200,70,60);
  movingRect.debug = "true";
  movingRect.shapeColor = "green";
  fixedRect= createSprite(400,100,50,50);
  fixedRect.debug = "true";
  fixedRect.shapeColor = "green";
  

}

function draw() {
  background("black"); 

 movingRect.x = mouseX;
 movingRect.y = mouseY;
 if( movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 && 
  fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 &&
  movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 &&
  fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2)
 {
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";

 }
 else{
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";

 }

 
  drawSprites();
}