/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let arr = s.trim().split(" ");
  return arr[arr.length - 1].length;
};

const answer1 = lengthOfLastWord("Hello World");
const answer2 = lengthOfLastWord("   fly me   to   the moon  ");
const answer3 = lengthOfLastWord("luffy is still joyboy");

console.log(answer1);
console.log(answer2);
console.log(answer3);
