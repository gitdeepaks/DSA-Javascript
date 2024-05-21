function phoneNumberDirectory(phoneNumber) {
  const dir = new Map();

  for (const entry of phoneNumber) {
    const [name, phoneNumber] = entry.split(":");

    dir.set(name, phoneNumber);
  }

  return dir;
}

module.exports = phoneNumberDirectory;
