var bg,iss_img,spaceCraft1Img,spaceCraft2Img,spaceCraft3Img,spaceCraft4Img;
var iss,spaceCraft,hasDocked=false;

function preload(){
bg=loadImage("images/spacebg.jpg");
iss_img=loadImage("images/iss.png");
spaceCraft1Img=loadImage("images/spacecraft1.png");
spaceCraft2Img=loadImage("images/spacecraft2.png");
spaceCraft3Img=loadImage("images/spacecraft3.png");
spaceCraft4Img=loadImage("images/spacecraft4.png");

}
function setup() {
  createCanvas(800,400);
  iss=createSprite(330, 130, 50, 50);
  iss.addImage(iss_img);
  iss_img.scale=0.8;
  spaceCraft=createSprite(285,240,50,50);
  spaceCraft.addImage(spaceCraft1Img);
  spaceCraft.scale=0.15;
}

function draw() {
  background(bg);
  if(!hasDocked){
spaceCraft.x=spaceCraft.x+random(-1,1);
if(keyDown(UP_ARROW)){
  spaceCraft.y=spaceCraft.y -2
}

if(keyDown(DOWN_ARROW)){
  spaceCraft.addImage(spaceCraft2Img);
}

if(keyDown(RIGHT_ARROW)){
  spaceCraft.addImage(spaceCraft3Img);
  spaceCraft.x=spaceCraft.x +2
}

if(keyDown(LEFT_ARROW)){
  spaceCraft.addImage(spaceCraft4Img);
  spaceCraft.x=spaceCraft.x -2;
}


  }
if(spaceCraft.y<=(iss.y+70)&& spaceCraft.x <= (iss.x-10)){
hasDocked=true;
fill("white");
textSize(15);
text("Docking Successful",200,300);
}


  drawSprites();
}