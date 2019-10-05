var X;
var offset = 0;
var offsetSpeed = 10;

function setup() {
  frameRate(10);
  createCanvas(900, 800);
}

function draw() {
  background(255);
  X= 0;
  offset = offset + offsetSpeed;
  if(offset > width || offset < (-1*width)){
    offsetSpeed *= -1;
  }
  
  while(X < height){
    for(var posX = 0; posX <= width; posX+=20){
     
     line(X+offset, height/2, X+offset+100, height/2-75);}
    X+=10;
  }
}
