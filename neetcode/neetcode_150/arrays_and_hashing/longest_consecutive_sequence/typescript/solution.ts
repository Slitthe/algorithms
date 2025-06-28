export function longestConsecutive(nums: number[]): number {
    if (nums.length < 2) {
        return nums.length;
    }
    const numsSet = new Set(nums);

    let longestConsecutive = 1;

    for (const num of nums) {
        const isStartOfSequence = !numsSet.has(num - 1);
        if (!isStartOfSequence) {
            continue;
        }

        let currentConsecutive = 1;

        let currentValue = num;
        while (numsSet.has(currentValue + 1)) {
            currentValue++;
            currentConsecutive += 1;
        }

        longestConsecutive = Math.max(currentConsecutive, longestConsecutive);
    }

    return longestConsecutive;
}
