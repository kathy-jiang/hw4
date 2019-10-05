function setup() {
  createCanvas(400, 400);
}

var x = [10,20,30,40,50,60,70,80,90,100]; // new empty array
var y = [10,20,30,40,50,60,70,80,90,100]; // new empty array

function draw() {
  background(255);
  noFill();

  
  x.push(mouseX);
  y.push(mouseY);

  for (var i = 0; i < x.length; i = i + 5) {
    rectMode(CENTER)
    square(x[i], y[i], 1 + (x.length - i));
    
  }

  x = x.slice(-50); // remove all but the last 50 x values
  y = y.slice(-50); // remove all but the last 50 y values
}
