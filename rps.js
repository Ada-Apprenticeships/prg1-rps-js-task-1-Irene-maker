function rockPaperScissors(player1, player2) {
  // To handle situations when players use uppercase
  player1 = player1.toLowerCase();
  player2 = player2.toLowerCase();
  if(player1 !== "scissors" && player1 !== "rock" && player1 !== "paper" && player1 !== "spock" && player1 !== "lizard"){
    return "Please check your response";
  }
  if(player2 !== "scissors" && player2 !== "rock" && player2 !== "paper" && player2 !== "spock" && player2 !== "lizard"){
    return "Please check your response";
  }
  // each choice mapped to an array of other choices it can only beat
  const factors = {
    rock: ["scissors", "lizard"],
    paper: ["rock", "spock"],
    scissors: ["paper", "lizard"],
    lizard: ["spock", "paper"],
    spock: ["rock", "scissors"]
  };
  if(player1==player2){
    return "draw";
  }
  return factors[player1].includes(player2) ? "player1" : "player2" ;
};

// normal occurrence 
console.log(rockPaperScissors("paper","scissors"));
// handles uppercase
console.log(rockPaperScissors("PAPer","sciSSors"));
// handles errors well
console.log(rockPaperScissors("papeeer","scissooors"));






// Leave this code here for the automated tests
module.exports = {
  rockPaperScissors,
}