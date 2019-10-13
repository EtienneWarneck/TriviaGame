
var array1 = ["Question 1 of 3: Which of these 3 artists made this drawing in 1912 ?",
    "a. Fernand Léger", "b. Pablo Picasso", "c. Juan Gris"];
// correctAnswer: [1]

var array2 = ["Question 2 of 3: Which of these 3 artists made this painting in 1964 ?",
    "a. Roy Lichtenstein", "b. James Rosenquist", "c. Claus Oldenburg"];
// correctAnswer: 2

var results = ["Congratulations!Good answer", "Nope, try again", "Time's up!"];

onload = function () {
    $("#buttonStart").on("click", question1); //START BUTTON CALLING FIRST QUESTION
    $("#buttonStart").on("click", move); //START BUTTON CALLING PROGRESS BAR
};

function question1() {
    $("#question").html("<h4>" + array1[0] + "</h4>");
    $("#answer1").html("<h4>" + array1[1] + "</h4>");
    $("#answer2").html("<h4>" + array1[2] + "</h4>");
    $("#answer3").html("<h4>" + array1[3] + "</h4>");
    $("#image").html("<img src='assets/images/img_01.png' width='400px'>");
    $(".answ").css("visibility", "visible");
    move();
    $("#buttonContinue").css("visibility", "visible");
};

$("#buttonContinue").on("click", question2()) //NOT WORKING

//Trying to write if answer 2 of array 1 is clicked, show results[0], else show results[1]
// ($("#answer2").results.html("<h4>" + results[0] + "</h4>")

function question2() {
    $("#question").html("<h4>" + array2[0] + "</h4>");
    $("#answer1").html("<h4>" + array2[1] + "</h4>");
    $("#answer2").html("<h4>" + array2[1] + "</h4>");
    $("#answer3").html("<h4>" + array2[1] + "</h4>");
    $("#image").html("<img src='assets/images/img_02.png width='400px'>");
    $(".answ").css("visibility", "visible");
    move();
}


function move() {  //PROGRESS BAR
    $("#myProgress").css("visibility", "visible");
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 100);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}

//HOVER ANSWERS IN COLOR YELLOW
$(function () { //same as jQuery(document).ready(function(){});

    $('li').css('background-color', 'white').hover(function () {
        $(this).css('background-color', 'yellow');
    },
        function () {
            $(this).css('background-color', 'white');
        });
    $("p").mouseout(function () {
        $("p").css("background-color", "lightgray");
    });
});



