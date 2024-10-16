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
  if(player1==player2){
    return "draw";
  }
 if(player1 === "scissors" && player2 === "rock"){
    return "player2";
  }
  if(player1 === "rock" && player2 === "paper"){
    return "player2";
  }
  if(player1 === "paper" && player2 === "scissors"){
    return "player2";
  }
  if(player1 === "rock" && player2 === "scissors"){
    return "player1";
  }
  if(player1 === "paper" && player2 === "rock"){
    return "player1";
  }
  if(player1 === "scissors" && player2 === "paper"){
    return "player1";
  }
  if(player1 === "spock" && player2 === "lizard"){
    return "player2";
  }
  if(player1 === "scissors" && player2 === "spock"){
    return "player2";
  }
  if(player1 === "lizard" && player2 === "rock"){
    return "player2";
  }
  if(player1 === "spock" && player2 === "paper"){
    return "player2";
  }
  if(player1 === "lizard" && player2 === "scissors"){
    return "player2";
  }
  if(player1 === "paper" && player2 === "lizard"){
    return "player2";
  }
  if(player1 === "rock" && player2 === "spock"){
    return "player2";
  }
  if(player1 === "lizard" && player2 === "spock"){
    return "player1";
  }
  if(player1 === "spock" && player2 === "scissors"){
    return "player1";
  }
  if(player1 === "rock" && player2 === "lizard"){
    return "player1";
  }
  if(player1 === "paper" && player2 === "spock"){
    return "player1";
  }
  if(player1 === "scissors" && player2 === "lizard"){
    return "player1";
  }
  if(player1 === "lizard" && player2 === "paper"){
    return "player1";
  }
  if(player1 === "spock" && player2 === "rock"){
    return "player1";
  }
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