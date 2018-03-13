//Declare elements
var img;
var counter = 1;

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
//function preload() {
    //img = loadImage("images/burger.png");
    //img = loadImage("https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/11846561_10207367454493454_1386268924484398062_n.jpg?oh=e958aa7543f77e97530c7f8aab02355e&oe=5B49A159");
//}

//create banner
function setup() {
    //var myCanvas = createCanvas(650, 185); // To place my banner in the header //
    //myCanvas.parent('mySketch');


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


//interactive part of banner
//function mouseClicked() {
//image(img,mouseX,mouseY,50,50)
//}
imgClickAndChange.onclick = function() {
    if(counter == 0){
        document.getElementById("imgClickAndChange").src = "images/bannerImg01.png";
        counter++;
    }
    else if(counter == 1){
        document.getElementById("imgClickAndChange").src = "images/bannerImg02.png";
        counter++;
    }
    else if(counter == 2){
        document.getElementById("imgClickAndChange").src = "images/bannerImg03.png";
        counter++;
    }
    else if(counter == 3){
        document.getElementById("imgClickAndChange").src = "images/bannerImg04.png";
        counter++;
    }else if(counter == 4){
        document.getElementById("imgClickAndChange").src = "images/bannerImg05.png";
        counter++;
    }else if(counter == 5){
        document.getElementById("imgClickAndChange").src = "images/bannerImg06.png";
        counter++;
    }else if(counter == 6){
        document.getElementById("imgClickAndChange").src = "images/bannerImg07.png";
        counter++;
    }else if(counter == 7){
        document.getElementById("imgClickAndChange").src = "images/bannerImg08.png";
        counter++;
    }else if(counter == 8){
        document.getElementById("imgClickAndChange").src = "images/bannerImg09.png";
        counter++;
    }else if(counter == 9){
        document.getElementById("imgClickAndChange").src = "images/bannerImg10.png";
        counter++;
    }else if(counter == 10){
        document.getElementById("imgClickAndChange").src = "images/bannerImg11.png";
        counter++;
    }else if(counter == 11){
        document.getElementById("imgClickAndChange").src = "images/bannerImg12.png";
        counter++;
    }else if(counter == 12){
        document.getElementById("imgClickAndChange").src = "images/bannerImg13.png";
        counter++;
    }else if(counter == 13){
        document.getElementById("imgClickAndChange").src = "images/bannerImg14.png";
        counter++;
    }else if(counter == 14){
        document.getElementById("imgClickAndChange").src = "images/bannerImg15.png";
        counter++;
    }else if(counter == 15){
        document.getElementById("imgClickAndChange").src = "images/bannerImg16.png";
        counter++;
    }else if(counter == 16){
        document.getElementById("imgClickAndChange").src = "images/bannerImg17.png";
        counter = 0;
    }
};


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
