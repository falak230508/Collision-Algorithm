function setup() {
  createCanvas(800,400);
box = createSprite(400, 200, 50, 50);
box.shapeColor = "purple";

rectangle = createSprite(600,280,100,50);
rectangle.shapeColor = "purple";

square = createSprite(100,100,80,80);
square.shapeColor = "pink";

}

function draw() {
  background("cyan");
  
 square.x = mouseX;
 square.y = mouseY;

 if(square.x-box.x < box.width/2 + square.width/2
   && box.x-square.x < box.width/2 + square.width/2
  && square.y-box.y < box.height/2 + square.height/2
  && box.y-square.y < box.height/2 + square.height/2){
   box.shapeColor = "green";
   square.shapeColor = "magenta";
   }
   else{
     box.shapeColor = "blue";
     square.shapeColor = "pink";
   }

  drawSprites();
}