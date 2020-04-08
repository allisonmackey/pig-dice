//Business Logic 
//for Player One -->
function PlayerOne (){
  this.playerName = "";
  this.totalScore = 0;
  this.turnScore = [];
  this.holdButton = [];
};

//Global variable for random number generator: 
var random = Math.floor(Math.random() * (+max - +min)) + +min;

PlayerOne.prototype.rollDice = function() {
  var min = 1;
  var max = 6;

  // var num = random; 
  // var num1 = turnScore;
  // var total = num + num1; 
  
  if (random === 1) {
    turnScore = [];  // might need to be refactored once we have multi-player option
  } else if (random !== 1) {
    turnScore.push(random);
  
  // if (total >= 3)  // goal is to only run this if the player hits "hold button"
  //   totalScore = total;
  // }
  // else {
  //   random.sumScore();
  // }
  console.log("turn score", turnScore);
  console.log("Random", random);
};

PlayerOne.prototype.sumScore = function(){
  var num = random; 
  var num1 = turnScore;
  var total = num + num1; 
  totalScore.push(total);
  console.log("total score", totalScore)
};

// for Score --->
// function Score () {
//   this.currentScore = rollOne + rollTwo; 
// }
// Score.prototype.addScore = function() {
// }

var playerOne = new PlayerOne(); 
var turnScore = [];
playerOne.rollDice();
// playerOne.sumScore();


// //User Interface Logic -----------------
// $(document).ready(function() {
//   $("form").submit(function(event) {
//     event.preventDefault();
//     rollDice = function() {
//       var min = 1;
//       var max = 6;
//       var random = Math.floor(Math.random() * (+max - +min)) + +min;
//       this.rollOne.push(random);
//       console.log("roll one", rollOne);
//       console.log("Dice", Dice);
//       console.log("Random", random);
//   };
//   });
// });