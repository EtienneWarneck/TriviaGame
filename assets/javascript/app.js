
var intervalId;
var clockRunning = false;
var time = 0;
var number = 100;  

$("#start").on("click", run);

function run() {
    intervalId = setInterval(decrement, 1000);
    clockRunning = true;
        }

function decrement() {
    number--;
    if (number === 0) {
        stop();
        alert("Time Up!");
    }
};

function stop() {
    clearInterval(intervalId);
    intervalId === 0 ;
  }

run();
