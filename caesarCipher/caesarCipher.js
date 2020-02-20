const caesarCipher = (string, key) => {
  const num = [];
  const sentence = [];

  for (let i = 0; i < string.length; i += 1) {
    if (string[i].match(/[a-zA-Z]/)) {
      num.push(string[i].charCodeAt(0));
    } else {
      num.push(string[i]);
    }
  }

  for (let i = 0; i < num.length; i += 1) {
    if (string[i].match(/[a-zA-Z]/) && num[i] >= 65 && num[i] <= 90) {
      sentence.push(String.fromCharCode(((num[i] - 65 + key) % 26) + 65));
    } else if (string[i].match(/[a-zA-Z]/) && num[i] >= 97 && num[i] <= 122) {
      sentence.push(String.fromCharCode(((num[i] - 97 + key) % 26) + 97));
    } else {
      sentence.push(num[i]);
    }
  }
  return sentence.join('');
};

module.exports = caesarCipher;
