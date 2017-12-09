console.log("hello")
//when click the done button, it will end/clear timer, then go to score

//var myTime;

//function myFunction() {
//    myTime = setTimeout(function() { console.log("Hello"); }, 100);
//}
var timerNum = 120

function run() {
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    timerNum--;
    $("#timeRem").html("<h2>" + "Time Remaining: " + timerNum + "</h2>");
    if (timerNum === 0) {
        stop();
        alert("Time Up!");
    }
}

function stop() {
    clearInterval(intervalId);
}

run();

var userScore = 0 //to be stored hidden until the end
var finalCorr //how many were right
var finalWrong // this will be equal 10 minue finalCorr

$("#1a").click(function() {
    console.log("You clicked the first box, correct answer!");
    userScore++;
    console.log("New userScore= " + userScore);
});

$("#2c").click(function() {
    console.log("You clicked the third box, correct answer!");
    userScore++;
    console.log("New userScore= " + userScore);
});

$("#3b").click(function() {
    console.log("You clicked the second box, correct answer!");
    userScore++;
    console.log("New userScore= " + userScore);
});

$("#4a").click(function() {
    console.log("You clicked the first box, correct answer!");
    userScore++;
    console.log("New userScore= " + userScore);
});

$("#5d").click(function() {
    console.log("You clicked the fourth box, correct answer!");
    userScore++;
    console.log("New userScore= " + userScore);
});

$("#6a").click(function() {
    console.log("You clicked the first box, correct answer!");
    userScore++;
    console.log("New userScore= " + userScore);
});

$("#7a").click(function() {
    console.log("You clicked the first box, correct answer!");
    userScore++;
    console.log("New userScore= " + userScore);
});

$("#8c").click(function() {
    console.log("You clicked the third box, correct answer!");
    userScore++;
    console.log("New userScore= " + userScore);
});

$("#9a").click(function() {
    console.log("You clicked the first box, correct answer!");
    userScore++;
    console.log("New userScore= " + userScore);
});

$("#10d").click(function() {
    console.log("You clicked the forth box, correct answer!");
    userScore++;
    console.log("New userScore= " + userScore);
});



$("#done").click(function() {
    console.log("I am finished")
    console.log("Total userScore= " + userScore)
    stop(); //to stop the clock from ticking down
    //alert("Total correct= " + userScore)
    //alert("Total incorrect= " + (10 - userScore))

    $(".finish").html("Total correct= " + userScore + "   Total incorrect= " + (10 - userScore))

    //$(".finish").append("Total incorrect= " + (10 - userScore))

});