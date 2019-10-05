function setup() {
  createCanvas(400, 400);
  colorMode(HSB, width, height, 100);
}

function draw() {
 for( let x = random(width);x<=400;x++){
  for(let y = random(height);y<=400;y++){

  stroke(x, y, 100);
  point(x, y);
}
}
}
