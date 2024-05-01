// function highestScoringWord(str) {
//   const words = str.split(" ");

//   const scores = words.map((wrd) => {
//     let score = 0;
//     for (const letter of wrd) {
//       score += letter.charCodeAt(0) - 96;
//     }

//     let heightScore = 0;
//     let heighstIndex = 0;

//     for (let i = 0; i < score.lenght; i++) {
//       if (score[i] > heightScore) {
//         heightScore = score[i];
//         heighstIndex = 1;
//       }
//     }

//     return words[heighstIndex];
//   });

//   return scores;
// }

function highestScoringWord(str) {
  const words = str.split(" ");
  const scores = words.map((word) => {
    return Array.from(word).reduce(
      (score, letter) => score + letter.charCodeAt(0) - 96,
      0
    );
  });

  const highestScore = Math.max(...scores);
  const heighstIndex = scores.indexOf(highestScore);

  return words[heighstIndex];

  // let highestScore = 0;

  // let heighstIndex = 0;

  // for (let index = 0; index < scores.length; index++) {
  //   if (scores[index] > highestScore) {
  //     heightScore = scores[index];
  //     heighstIndex = index;
  //   }
  // }
  // return words[heighstIndex];
}

module.exports = highestScoringWord;
