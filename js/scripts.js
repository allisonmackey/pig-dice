//Business Logic 
//for Player -->
function Player () {
  this.playerName = "";
  this.totalScore = 0;
  this.turnScore = [];
};

Player.prototype.rollDice = function() {
  // var num = random; 
  // var num1 = turnScore;
  // var total = num + num1; 
  var random = Math.floor(Math.random() * 6) + 1;
  if (random === 1) {
    this.turnScore = [];  // might need to be refactored once we have multi-player option
  } else if (random !== 1) {
    this.turnScore.push(random);
  }
  // if (total >= 3)  // goal is to only run this if the player hits "hold button"
  //   totalScore = total;
  // }
  // else {
  //   random.sumScore();
  // }
  console.log("turn score", this.turnScore);
  console.log("Random", random);
};

// "Hold Button" Method --> Adds to the total score
Player.prototype.sumScore = function(){
  for (var i = 0; i <= this.turnScore; i ++) {
    var num = this.turnScore[i];
    var total = num + this.totalScore
    this.totalScore = total; 
  }
  console.log("total score", this.totalScore);
  return 

  // this.turnScore.forEach(function(num){
  //   this.totalScore = this.totalScore + num;
  // });
   
}
//   var random = Math.floor(Math.random() * 5) + 1;
//   var num = random; 
//   var num1 = parseInt(this.turnScore);
//   var total = num1; 
//   this.totalScore = total;  
//   console.log("total score", this.totalScore)
// };

// Optional "Game" Construct to keep track of which players turn it is, 

// for Score --->
// function Score () {
//   this.currentScore = rollOne + rollTwo; 
// }
// Score.prototype.addScore = function() {
//

// var playerOne = new Player(); 
// var playerTwo = new Player();
// var turnScore = [];
// playerOne.rollDice();
// playerOne.sumScore();


//User Interface Logic ----------------->
//creating function for hold button that calls on the .sumScore method when it's clicked 
// testing add function of .sumScore method when said button is clicked
// .append() | .html()
// if we set turnscore to 0 var total would = random number rolled + 0, and on next roll it would be random number rolled + previously stored integer in turnscore.

$(document).ready(function() {
  var playerOne = new Player(); 
  $("button#roll").click(function() {
    var output = playerOne.rollDice();
  $("button#hold").click(function(){  
    return playerOne.sumScore();
  });
    console.log("output", output);
    //   playerOne.rollDice();
    // });
    
   
   
    
    $("#output").append(output);
  });

  
});



//  $('#MyButton').click(function () {
//       rollDice();
//     });