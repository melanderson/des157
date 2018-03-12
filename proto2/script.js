//Declare elements
var img;
var smallPoint, largePoint;

//Event Listener for banner
//document.getElementById("burgers").addEventListener("click", myFunction);

// Get a reference to the database service
var database = firebase.database();
var ref = database.ref(posts);
var data = {
    title: "Philly Cheese",
    image: "Hoagie Roll"

}
ref.push(data);

//Preload image
function preload() {
    //img = loadImage("images/burger.png");
    img = loadImage("https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/11846561_10207367454493454_1386268924484398062_n.jpg?oh=e958aa7543f77e97530c7f8aab02355e&oe=5B49A159");
}

//create banner
function setup() {
    var myCanvas = createCanvas(650, 185); // To place my banner in the header //
    myCanvas.parent('mySketch');
    smallPoint = 4;
    largePoint = 40;
    imageMode(CENTER);
    noStroke();
    background(255);
    img.loadPixels();

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyAsz6gpLeq1f5jsHqERB6mzYZxbb60gJhw",
        authDomain: "final-project-recipeshare.firebaseapp.com",
        databaseURL: "https://final-project-recipeshare.firebaseio.com",
        projectId: "final-project-recipeshare",
        storageBucket: "final-project-recipeshare.appspot.com",
        messagingSenderId: "708473248388"
    };
    firebase.initializeApp(config);
}

//draw for banner
function draw() {
    var pointillize = map(mouseX, 0, width, smallPoint, largePoint);
    var x = floor(random(img.width));
    var y = floor(random(img.height));
    var pix = img.get(x, y);
    fill(pix, 128);
    ellipse(x, y, pointillize, pointillize);
}

//interactive part of banner
//function mouseClicked() {
//image(img,mouseX,mouseY,50,50)
//}

//add ingredient
function addIngredient() {
    var textBox = document.createElement("input");
    textBox.type = "text";
    textBox.placeholder = "Ingredient here!";
    textBox.autocomplete = "off";
    textBox.maxlength = "255";
    textBox.className = "ingredients";
    document.getElementById("ingredientAdd").appendChild(textBox);
}
