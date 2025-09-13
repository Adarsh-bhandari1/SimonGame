var color = ["red", "brown", "green", "purple"];
var gamePattern = [];
var userclkedPattern = [];
var level = 0;
var gamestatus = false;
function nextSeq() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomColor = color[randomNumber];
  gamePattern.push(randomColor);
  level++;
  $("h1").text("Level " + level);
  showPattern(randomColor);
  // btn1Audio.play();
}

// var btn1Audio = new Audio("./sounds/red.mp3");

function showPattern(randomColor) {
  $("#" + randomColor)
    .fadeOut(100)
    .fadeIn(100);
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
  // play audio
  // change css
  $("h1").text("Game Over, Press Any Key to Restart");
  gamestatus = false;
  userclkedPattern = [];
  gamePattern = [];
  level = 0;
}
