/**
 * Given an integer array nums, return true if any value appears at least twice in the array,
 * and return false if every element is distinct.
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let toCheck = [], correct = false
    nums.forEach((num) => {
        (toCheck.includes(num)) ? correct = true : toCheck.push(num)
    })  
    return correct;  
};

/*
Example 1:
Input: nums = [1,2,3,1]
Output: true
*/
console.log(containsDuplicate([1,2,3,4]))

/*
Example 2:
Input: nums = [1,2,3,4]
Output: false
*/
console.log(containsDuplicate([1,2,3,1]))

/*
Example 3:
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
*/
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))
