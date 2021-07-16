var colors = ["green", "red", "yellow", "blue"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;

$(document).keypress(function() {
    if(!started){
        $("#level-title").text('Level ' + level);
        started = true;
        nextSequence();
    }
})

function nextSequence() {

    userClickedPattern = [];

    level++;

    $("#level-title").text("Level " + level);
   
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = colors[randomNumber];
    // console.log(randomChosenColor);

    gamePattern.push(randomChosenColor);
    

    $("#"+ randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColor);

}

$(".btn").click(function() {
    var userChosenColor = $(this).attr("id");
    // console.log(userChosenColor);

    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);

    animateClick(userChosenColor);

    checkResult(userClickedPattern.length-1);
})

function checkResult(record) {
    if(gamePattern[record] === userClickedPattern[record]) {
        // console.log("success");
        if(userClickedPattern.length === gamePattern.length) {
            setTimeout(() => {
                nextSequence();
            }, 1000);
        }
    } else {
        // console.log("wrong");
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(() => {
            $("body").removeClass("game-over");
        }, 200);

        $("#level-title").text("Game Over, Press Any Key To Continue");
        startOver();
    }
}

function startOver() {
    level = 0;
    started = false;
    gamePattern = [];
}

function playSound(name) {
    var sound = new Audio("sounds/" + name + ".mp3");
    sound.play();
}

function animateClick(buttonPress) {
    $("#"+ buttonPress).addClass("pressed");

    setTimeout(() => {
        $("#"+ buttonPress).removeClass("pressed");
    }, 100);
}
