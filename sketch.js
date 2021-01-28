var fixedrect, movingrect
function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(200, 200, 50, 50);
 // createSprite(x, y, w, h)
  fixedrect.shapeColor="green"
  movingrect=createSprite(400, 200,60,50)
  movingrect.shapeColor="green"
}

function draw() {
  background(255,255,255); 
  movingrect.x=World.mouseX
  movingrect.y=World.mouseY 
  console.log(movingrect.x-fixedrect.x)
  console.log(movingrect.y-fixedrect.y)
  // collision happens when the difference between movingrect.x and fixedrect.x is 50
// fixedrect.width=50/2=25, 
//movingrect.width=60/2=30
//fixedrect.width/2+movingrect.width/2=25+30=55
  if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2
    && fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2
    && movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2
    && fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2)
  {
    fixedrect.shapeColor="red"
    movingrect.shapeColor="red"
    text("collided", 500,200)
  }
  else 
  {
    fixedrect.shapeColor="green"
    movingrect.shapeColor="green"
  }
  drawSprites();
}