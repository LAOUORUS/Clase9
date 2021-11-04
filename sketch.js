var box; 

function setup() {
  createCanvas(400,400);
box = createSprite(200,200,30,30)}

function draw() 
{
  background(30);

if (keyDown ("up")) {
  box.velocityY = -2
  box.velocityX = 0
}
if (keyDown ("down")) {
  box.velocityY = 2
  box.velocityX = 0
}
if (keyDown ("left")) {
  box.velocityX = -2
  box.velocityY = 0
}
if (keyDown ("right")) {
  box.velocityX = 2
  box.velocityY = 0
}
  drawSprites();
}




