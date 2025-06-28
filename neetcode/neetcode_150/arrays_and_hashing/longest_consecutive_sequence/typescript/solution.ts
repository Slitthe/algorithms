export function longestConsecutive(nums: number[]): number {
    if (nums.length < 2) {
        return nums.length;
    }

    nums.sort((a, b) => a - b);

    let longest = 1;
    let currentLength = 1;
    for (let i = 1; i < nums.length; i++) {
        const prevNum = nums[i - 1];
        const currentNum = nums[i];

        if (prevNum === currentNum) {
            continue;
        }

        if (currentNum === prevNum + 1) {
            currentLength++;
            longest = Math.max(longest, currentLength);
        } else {
            longest = Math.max(longest, currentLength);
            currentLength = 1;
        }
    }

    return longest;
}
