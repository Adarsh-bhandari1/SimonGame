var color = ["red", "brown", "green", "purple"];
var gamePattern = [];
var userclkedPattern = [];
var level = 0;
var gamestatus = false;
var sounds = {
  red: new Audio("./sounds/red.mp3"),
  green: new Audio("./sounds/green.mp3"),
  brown: new Audio("./sounds/brown.mp3"),
  purple: new Audio("./sounds/purple.mp3"),
  wrong: new Audio("./sounds/wrong.mp3"),
};
Object.values(sounds).forEach((audio) => {
  audio.preload = "auto";
  audio.load();
});

function nextSeq() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomColor = color[randomNumber];
  gamePattern.push(randomColor);
  level++;
  $("h1").text("Level " + level);
  $("body").removeClass("flash");
  showPattern(randomColor);
}

function showPattern(randomColor) {
  $("#" + randomColor)
    .fadeOut(100)
    .fadeIn(100);
  playSound(randomColor);
}

$("body").on("keypress", function () {
  if (!gamestatus) {
    gamestatus = true;
    nextSeq();
  }
});

$(".btn").on("click", function () {
  var userchoice = $(this).attr("id");
  userclkedPattern.push(userchoice);
  playSound(userchoice);
  showPattern(userchoice);
  checkAns(userclkedPattern.length - 1);
});

function checkAns(len) {
  if (userclkedPattern[len] === gamePattern[len]) {
    if (userclkedPattern.length === gamePattern.length) {
      //add delay
      setTimeout(function () {
        userclkedPattern = [];
        nextSeq();
      }, 1000);
    }
  } else {
    gameOver();
  }
}

function gameOver() {
  $("h1").text("Game Over, Press Any Key to Restart");
  sounds.wrong.currentTime = 0;
  sounds.wrong.play();
  gamestatus = false;
  userclkedPattern = [];
  gamePattern = [];
  level = 0;
  $("body").addClass("flash");
}

function playSound(userclk) {
  if (sounds[userclk]) {
    sounds[userclk].currentTime = 0;
    sounds[userclk].play();
  }
}
