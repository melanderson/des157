var img;
var pixel = document.querySelector('#pixel');
var pixelInterval = setInterval(moveDiv, 1500);
var section = document.querySelector('#container');
pixel.addEventListener("click", img.push);

function preload() {
    var img=new Image();
    img.src="images/burger";
}

function setup() {
    var myCanvas = createCanvas(350, 185); // To place my banner in the header //
    myCanvas.parent('mySketch');
}

function draw() {
    background(255);
    img.load;
    text('click for a burger :)', 170, 90);
    textAlign(CENTER);
    textSize(10);

}

function mousePressed() {
    img.push(mouseX);
    img.push(mouseY);
}
