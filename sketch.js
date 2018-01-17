var img;
var smallPoint, largePoint;

function preload() {
    img = loadImage("paintingLandscape.jpg");
}

function setup() {
    var myCanvas = createCanvas(800, 250); // To place my banner in the header //
    myCanvas.parent('mySketch');
    img.resize (800, 250);
    smallPoint = 4;
    largePoint = 40;
    imageMode(CENTER);
    noStroke();
    background(255);
    img.loadPixels();
}

function draw() {
  var pointillize = map(mouseX, 0, width, smallPoint, largePoint);
  var x = floor(random(img.width));
  var y = floor(random(img.height));
  var pix = img.get(x, y);
  fill(pix, 128);
  rect(x, y, pointillize, pointillize,12,12,12,12);
}
