const minScore = 0;
let maxScore = 50;
let currentScore1 = 20;
let currentScore2 = 20;

function addScore(amount, player) {
  if (player === 'player1') {
    if(currentScore1 === maxScore) {
      return;
     } else if(currentScore1 === minScore){
        return;
     } else {
         currentScore1 += amount;
      }

    console.log(currentScore1)
    document.getElementById("score1").textContent = currentScore1;

   }else if (player === 'player2') {
    if(currentScore2 === maxScore) {
      return;
     } else if(currentScore2 === minScore){
        return;
     } else {
         currentScore2 += amount;
       
      }
    console.log(currentScore2)
    document.getElementById("score2").textContent = currentScore2;
  }
}
