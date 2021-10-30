var box

function setup() {
  createCanvas(600,300);

  box = createSprite(200,200,50,50);
  box.shapeColor = "green"

}

function draw() 
{
  background("pink");

  if(keyDown(UP_ARROW)){
    box.y = box.y -2;
  }

  if(keyDown(DOWN_ARROW)){
    box.y = box.y +2
  }

  if(keyDown(LEFT_ARROW)){
    box.x = box.x -2;
  }

  if(keyDown(RIGHT_ARROW)){
    box.x = box.x +2
  }
  drawSprites()
}



