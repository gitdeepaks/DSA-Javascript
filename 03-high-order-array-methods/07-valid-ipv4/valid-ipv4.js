const isValidIPv4 = (input) => {
  const octects = input.split(".");
  if (octects.length !== 4) {
    return false;
  }

  return octects.every((octet) => {
    const num = parseInt(octet);
    return num >= 0 && num <= 255 && octet === num.toString();
  });
};

module.exports = isValidIPv4;
