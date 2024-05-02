function generateHashtag(str) {
  //   if (str.trim() === "") {
  //     return false;
  //   }

  //   const words = str.trim().split(/\s+/);
  // }
  // return (capitalizeWords = words.map(
  //   (word) => word.charAt(0).toUpperCase() + word.slice(1)
  // ));
  // const hasgTag = "#" + capitalizeWords.join("");
  // return hasgTag.length > 140 ? false : hasgTag;
  const hasgTag = str.split(" ").reduce((tag, word) => {
    return tag + word.charAt(0).toUpperCase() + word.substring(1);
  }, "#");

  return hasgTag.length === 1 || hasgTag.length > 140 ? false : hasgTag;
}

module.exports = generateHashtag;
