//Business Logic 
//for Player -->
function Player () {
  this.playerName = "";
  this.totalScore = 0;
  this.turnScore = 0;
};

Player.prototype.rollDice = function() {
  // var num = random; 
  // var num1 = turnScore;
  // var total = num + num1; 
  var random = Math.floor(Math.random() * 6) + 1;
  if (random === 1) {
    this.turnScore = 0;
      
  } else if (this.turnScore >= 21) {
    this.turnScore = 0;
    return alert("You Win!")

  } else if (random !== 1) {
    this.turnScore += random;
  } 

  console.log("turn score", this.turnScore);
  console.log("Random", random);
};

// "Hold Button" Method --> Adds to the total score
Player.prototype.sumScore = function(){
  var total = this.totalScore;
  var roll = this.turnScore;
    total += roll;
};
  
// Optional "Game" Construct to keep track of which players turn it is??

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
    
    
   
   
    
    $("#output").append(output);
  });

  
});

// Tomorrow!
// - Get functionality for "Hold Button"/sumScore to work in BL 
//    - When player presses "hold" display player's total in UI
//    - Create 4 different outputs in HTML 
//          1. Display Turn Total for PlayerOne & PlayerTwo
//          
//          

