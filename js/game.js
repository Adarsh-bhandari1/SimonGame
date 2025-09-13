var color = ['red' , 'brown' , 'green' , 'purple'];
var gamePattern = [];
var gamestatus = false;
function nextSeq()
{
    var randomNumber = Math.floor(Math.random()*4);
    var randomColor =  color[randomNumber];
    gamePattern.push(randomColor);
    showPattern(randomColor);
    btn1Audio.play();

}

var btn1Audio = new Audio("./sounds/red.mp3");

function showPattern(randomColor)
{
    $("#"+randomColor).fadeOut(100).fadeIn(100);
}

$("body").on("keypress" , function(){
    if(!gamestatus)
    {
        gamestatus=true;
        nextSeq();
    }
});