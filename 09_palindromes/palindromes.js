const palindromes = function (string) {

const cleanString = string.toLowerCase().replace(/[^a-z]/g, "");
const letters = cleanString.split("");
const reversed = letters.reverse();
const reversedString = reversed.join("");

return cleanString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
