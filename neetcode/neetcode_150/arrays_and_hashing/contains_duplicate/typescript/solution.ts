/* 
Contains Duplicate
Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

Example 1:

Input: nums = [1, 2, 3, 3]

Output: true

Example 2:

Input: nums = [1, 2, 3, 4]

Output: false
*/

export function containsDuplicate(nums: number[]): boolean {
    const numsSet = new Set();

    for (const num of nums) {
        // if the set already contains the number then it means it's a duplicate
        if (numsSet.has(num)) {
            return true;
        }

        numsSet.add(num);
    }

    // if the execution has reached this step, then it means that no duplicates were found
    return false;
}

