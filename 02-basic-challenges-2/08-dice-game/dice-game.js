function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function diceGameSimulation(numSim) {
  const res = [];

  for (let i = 0; i < numSim; i++) {
    const dice1 = rollDice();
    const dice2 = rollDice();
    const sum = dice1 + dice2;

    let res = "";

    if (sum === 7 || sum === 11) {
      res = "win";
    } else if (sum === 2 || sum === 3 || sum === 12) {
      res = "lose";
    } else {
      res = "roll again";
    }
    res.push({ dice1, dice2, sum, res });
  }

  return res;
}

module.exports = diceGameSimulation;
