const lengthOfLastWord = function (s) {
  let letter = 0;
  let space = 0;

  for (let i = s.length-1; i >= 0; i--) {
    if (s[i] == ' ') {
      space++;
    } else {
      letter++;
    }

    if (s[i] == ' ' && letter > 0) {
      break;
    }
  }

  return letter;
}

console.log(lengthOfLastWord('   fly me   to   the moon  '));