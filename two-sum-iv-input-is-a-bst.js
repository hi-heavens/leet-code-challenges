/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
  let result = false;
  for (let i = 0; i < root.length; i++) {
    for (let j = 0; j < root.length; j++) {
      if (i !== j && (root[i] !== null || root[j] !== null)) {
        if (root[i] + root[j] === k) {
          result = true;
        }
      }
    }
  }
  return result;
};

const answer1 = findTarget([5, 3, 6, 2, 4, null, 7], 9);
const answer2 = findTarget([5, 3, 6, 2, 4, null, 7], 28);
console.log(answer1);
console.log(answer2);
