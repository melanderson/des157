/*Execute script*/
window.onload = function() {
    /*variables for textboxes and other */
    var name = document.querySelector("#name");
    var vegetable = document.querySelector("#vegetable");
    var toy = document.querySelector("#toy");
    var place = document.querySelector("#place");
    var number = document.querySelector("#number");
    var story = document.querySelector("#story")
    var launch = document.querySelector("#launch");
    launch.addEventListener("click", writeStory, false);

    /*The story + values*/
    function writeStory() {
        var launchedStory = "";
        launchedStory += "<p>Hi there, " + name.value + ". I'm Larry the " + vegetable.value + ". It's been a looooooooooong day of " + verb.value + ", so I'm ready for something new! </p>" ;
        launchedStory += "<p>I heard you like " + toy.value + "s, would you want to play with the " + toy.value + " with me? </p>"; /*The s is for plural form*/
        launchedStory += "<p>*Hours Later...*</p>";
        launchedStory += "<p>That was fun! Should we go to the " + place.value + "? I hear that there are many other " + vegetable.value + "s there too. We might be able to make " + number.value + " friends there too! </p>";
        story.innerHTML = launchedStory;
    }
}
