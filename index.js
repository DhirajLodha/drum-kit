var numOfButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    // var audio = new Audio("sounds/tom-1.mp3");
    // audio.play();

    var buttonClicked = this.innerHTML;
    makeSound(buttonClicked);
    buttonAninmation(buttonClicked);
  });
}

document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAninmation(event.key);
});
function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "k":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "l":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    default:
      break;
  }
}

function buttonAninmation(keyPressed) {
  var animate = document.querySelector("." + keyPressed);
  animate.classList.add("pressed");

  setTimeout(() => {
    animate.classList.remove("pressed");
  }, 200);
}
