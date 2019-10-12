
var myArray = [
    {
        question: "Which of these 3 famous artists made this drawing in 1912 ?",
        image: { i: "" },
        answers: {
            a: "a. Fernand Léger",
            b: "b. Pablo Picasso",
            c: "c. Juan Gris",
        },
        correctAnswer: {
            correct: "b. Pablo Picasso, Guitar 1912"
        },
    },
    {
        question: "What artist made this artwork?",
        image: { i: "img_02.png" },
        answers: {
            a: "a. Roy Lichtenstein",
            b: "b. James Rosenquist",
            c: "c. Claus Oldenburg",
        },
        correctAnswer: {
            correct: "b. Pablo Picasso, Guitar 1912"
        },
    },
]

var nextQuestion;
var clockRunning = false;
var time = 0;
var number = 100;
var progressBar;


window.onload = function () {
    $("#buttonStart").on("click", startQuiz);
    $("#buttonStart").on("click", move);

};

function startQuiz() {

    $("#question").html("<h4>" + myArray[0].question + "</h4>");
    $("#answer1").html("<h4>" + myArray[0].answers.a + "</h4>");
    $("#answer2").html("<h4>" + myArray[0].answers.b + "</h4>");
    $("#answer3").html("<h4>" + myArray[0].answers.c + "</h4>");
    $("#image").html("<h4>" + myArray[0].image.i + "<img src='assets/images/img_01.png' width='400px'>");
    $(".answ").css("visibility", "visible");
};

function move() {  //FOUND CODE
    $("#myProgress").css("visibility", "visible");
    var elem = $("#myBar");
    var width = 0;
    var id = setInterval(frame, 100);
    function frame() {
        if (width == 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}

$(document).ready(function () {

    // var answers; MY CODE
    // for (i = 0; i < answers.length; i++) {
    //     $("answers[i].i").mouseover(function () {
    //         $("answers[i].i").css("background-color", "yellow");
    //     });
    // }

    $('li').css('background-color', 'white').hover(function() {
        $(this).css('background-color', 'yellow');
      },
      function() {
        $(this).css('background-color', 'white');
      });


    // $("p").mouseout(function(){
    //   $("p").css("background-color", "lightgray");
    // });
});



function countDown() {
};


