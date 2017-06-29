var countdownGenerator = function (x) {
  var timeLeft = x;
  return function(){
    if(timeLeft > 0){
      console.log("T-minus " + timeLeft + "...");
    } else if (timeLeft === 0){
      console.log("Blast Off!");
    } else {
      console.log("Rockets already gone, bub!");
    }
    timeLeft--;
  };
}

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
