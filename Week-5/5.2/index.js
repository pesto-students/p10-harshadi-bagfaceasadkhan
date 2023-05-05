function vowelCount(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  const countMap = new Map();

  str
    .toLowerCase()
    .split("")
    .forEach((char, index) => {
      char = char.toLowerCase();
      if (vowels.includes(char)) {
        if (countMap.has(char)) {
          countMap.set(char, countMap.get(char) + 1);
        } else {
          countMap.set(char, 1);
        }
      }
    });

  return countMap;
}

console.log(vowelCount("Hello World"));
