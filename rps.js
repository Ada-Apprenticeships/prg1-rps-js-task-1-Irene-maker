function rockPaperScissors(player1, player2) {
  
  // inputs to lowercase for consistency
  const p1 = player1.toLowerCase();
  const p2 = player2.toLowerCase();
  const validChoices = ["rock", "paper", "scissors", "lizard", "spock"];

  
  if (!validChoices.includes(p1) || !validChoices.includes(p2)) {
    return "Please check your response";
  }

  // each choice mapped to an array of other choices it can beat
  const factors = {
    rock: ["scissors", "lizard"],
    paper: ["rock", "spock"],
    scissors: ["paper", "lizard"],
    lizard: ["spock", "paper"],
    spock: ["rock", "scissors"]
  };
  
  if(p1==p2){
    return "draw";
  }
  return factors[p1].includes(p2) ? "player1" : "player2" ;
};

// normal occurrence 
console.log(rockPaperScissors("paper","scissors"));
// handles uppercase
console.log(rockPaperScissors("PAPer","sciSSors"));
// handles errors well
console.log(rockPaperScissors("papeerr","scissooors"));






// Leave this code here for the automated tests
module.exports = {
  rockPaperScissors,
}