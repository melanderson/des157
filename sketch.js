var img;
var smallPoint, largePoint;

function preload() {
    img = loadImage("moonFlower.jpg");
}

function setup() {
    var myCanvas = createCanvas(800, 250); // To place my banner in the header //
    myCanvas.parent('mySketch');
    smallPoint = 4;
    largePoint = 40;
    imageMode(CENTER);
    noStroke();
    background(255);
    img.loadPixels();
}

function draw() {
  float pointillize = map(mouseX, 0, width, smallPoint, largePoint);
  var x = var(random(img.width));
  var y = var(random(img.height));
  color pix = img.get(x, y);
  fill(pix, 128);
  rect(x, y, pointillize, pointillize,3,3,3,3);
}
