function permutations(str) {
  let result = [];

  if (str.lenght === 0) {
    result.push("");
    return result;
  }

  for (let index = 0; index < str.length; index++) {
    const element = str[index];

    const restStr = str.slice(0, index) + str.slice(index + 1);

    const subPersmutations = permutations(restStr);

    for (let j = 0; j < subPersmutations.length; j++) {
      result.push(element + subPersmutations[j]);
    }
  }
  return result;
}

module.exports = permutations;
