
//Detect Button Press
var i=0;
while (i<document.querySelectorAll(".drum").length){
    document.querySelectorAll("button")[i].addEventListener("click", function (){
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
    
    
    
    });
    i++;
}
    

    

//Detect key press
document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});



//Make Sound function

function makeSound(key){

    

    switch (key) {
        case "w": //wasdjkl
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a": //wasdjkl
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s": //wasdjkl
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d": //wasdjkl
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j": //wasdjkl
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k": //wasdjkl
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l": //wasdjkl
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
    
        default:
            break;
    }
}


function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);

    //adding a class to an existing html tag without a class
    activeButton.classList.add("pressed");

    //remove the animation after a while
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}




