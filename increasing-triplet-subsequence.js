/**
 * Given an integer array nums, return true if there exists a
 * triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. 
 * If no such indices exists, return false.
 * 
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let count = 0, prev = 0
    for (num in nums) {   
        if (nums[prev] < nums[num]) count++, prev++
    }
    return count >= 3 ? true : false
};
/*
Example 1:
Input: nums = [1,2,3,4,5]
Output: true
Explanation: Any triplet where i < j < k is valid.
*/
console.log(increasingTriplet([1,2,3,4,5]))

/*
Example 2:
Input: nums = [5,4,3,2,1]
Output: false
Explanation: No triplet exists.
*/
console.log(increasingTriplet([5,4,3,2,1]))

/*
Example 3:
Input: nums = [2,1,5,0,4,6]
Output: true
Explanation: The triplet (3, 4, 5) is valid because nums[3] == 0 < nums[4] == 4 < nums[5] == 6.
*/
console.log(increasingTriplet([2,1,5,0,4,6]))

