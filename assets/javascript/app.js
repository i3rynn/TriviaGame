document.getElementById("after_submit").style.display = "none";
document.getElementById("questionsDiv").style.display = "none";
document.getElementById("startPage").style.display = "block";

var timerCounter = 180;
var timer;
function runTimer() {
    timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
    document.getElementById("time").innerText = timerCounter;
    timerCounter--;

    if (timerCounter == 0) {
        clearInterval(timer);
        check();
        document.getElementById("after_submit").style.display = "block";
        document.getElementById("questionsDiv").style.display = "none";
        document.getElementById("startPage").style.display = "none";
    }

}

function check() {

    var question1 = document.trivia.question1.value;
    var question2 = document.trivia.question2.value;
    var question3 = document.trivia.question3.value;
    var question4 = document.trivia.question4.value;
    var question5 = document.trivia.question5.value;
    var question6 = document.trivia.question6.value;
    var question7 = document.trivia.question7.value;
    var question8 = document.trivia.question8.value;
    var question9 = document.trivia.question9.value;
    var question10 = document.trivia.question10.value;

    var correct = 0;
    var incorrect = 0;

    if (question1 == "Sweet") {
        correct++;
    }
    else {
        incorrect++;
    }
    if (question2 == "Calico") {
        correct++;
    }
    else {
        incorrect++;
    }
    if (question3 == "True") {
        correct++;
    }
    else {
        incorrect++;
    }
    if (question4 == "Smell") {
        correct++;
    }
    else {
        incorrect++;
    }
    if (question5 == "A Tom") {
        correct++;
    }
    else {
        incorrect++;
    }
    if (question6 == "Left") {
        correct++;
    }
    else {
        incorrect++;
    }
    if (question7 == "70%") {
        correct++;
    }
    else {
        incorrect++;
    }
    if (question8 == "30-50%") {
        correct++;
    }
    else {
        incorrect++;
    }
    if (question9 == "A Kindle") {
        correct++;
    }
    else {
        incorrect++;
    }
    if (question10 == "Napoleon Bonaparte") {
        correct++;
    }
    else {
        incorrect++;
    }

    var commentary = ["You're the cat's meow!  Purrfect!", "Radiclaw!", "Purrhaps you have a feline fur-end!", "You seem to be furmiliar with cats!", "Maybe you're just furgetful.", "It seems as if some of these questions were purrplexing to you.", "Are you unfurmiliar with cats?", "How unfurtonate!", "How clawful!", "Just apawling!", "What a catastrophe!"];
    var gifs = ["assets/images/cat10.gif", "assets/images/cat9.gif", "assets/images/cat8.gif", "assets/images/cat7.gif", "assets/images/cat6.gif", "assets/images/cat5.gif", "assets/images/cat4.gif", "assets/images/cat3.gif", "assets/images/cat2.gif", "assets/images/cat1.gif", "assets/images/cat0.gif"];
    var score;

    if (correct < 1) {
        score = 10;
    }

    if (correct == 1) {
        score = 9;
    }

    if (correct == 2) {
        score = 8;
    }

    if (correct == 3) {
        score = 7;
    }

    if (correct == 4) {
        score = 6;
    }

    if (correct == 5) {
        score = 5;
    }

    if (correct == 6) {
        score = 4;
    }

    if (correct == 7) {
        score = 3;
    }

    if (correct == 8) {
        score = 2;
    }

    if (correct == 9) {
        score = 1;
    }

    if (correct == 10) {
        score = 0;
    }

    setInterval(ctdwn, 1000);
    function ctdwn() {
        document.getElementById("time").innerText
        time--;
    }
    document.getElementById("after_submit").style.visibility = "visible";
    document.getElementById("commentary").innerHTML = commentary[score];
    document.getElementById("number_correct").innerHTML = "Out of ten questions, you got " + correct + " of them right!";
    document.getElementById("number_incorrect").innerHTML = "You didn't correctly answer " + incorrect + ".";
    document.getElementById("gifs").src = gifs[score];
}

document.getElementById("startGame").addEventListener("click", function () {
    runTimer();
    document.getElementById("after_submit").style.display = "none";
    document.getElementById("questionsDiv").style.display = "block";
    document.getElementById("startPage").style.display = "none";
});

document.getElementById("subButton").addEventListener("click", function () {
    clearInterval(timer);
    check();
    document.getElementById("after_submit").style.display = "block";
    document.getElementById("questionsDiv").style.display = "none";
    document.getElementById("startPage").style.display = "none";
});



