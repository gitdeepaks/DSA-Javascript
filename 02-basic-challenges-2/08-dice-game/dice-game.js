function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function diceGameSimulation(numSim) {
  const res = [];

  for (let i = 0; i < numSim; i++) {
    const dice1 = rollDice();
    const dice2 = rollDice();
    const sum = dice1 + dice2;

    let res2 = "";

    if (sum === 7 || sum === 11) {
      res2 = "win";
    } else if (sum === 2 || sum === 3 || sum === 12) {
      res2 = "lose";
    } else {
      res2 = "roll again";
    }
    res2.push({ dice1, dice2, sum, res });
  }

  return res;
}

module.exports = diceGameSimulation;
