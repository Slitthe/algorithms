export function threeSum(nums: number[]): number[][] {
    nums.sort((a, b) => a - b);
    const solutionList = [];

    for (let i = 0; i < nums.length - 1; i++) {
        const currentNum = nums[i];
        if (nums[i + 2] === undefined) {
            break;
        }

        let leftIndex = i + 1;
        let rightIndex = nums.length - 1;

        while (leftIndex < rightIndex) {
            const sum = nums[leftIndex] + nums[rightIndex];

            if (sum + currentNum === 0) {
                solutionList.push([currentNum, nums[leftIndex], nums[rightIndex]]);

                do {
                    leftIndex++;
                } while (leftIndex < rightIndex && nums[leftIndex] === nums[leftIndex - 1]);

                do {
                    rightIndex--;
                } while (leftIndex < rightIndex && nums[rightIndex] === nums[rightIndex + 1]);
            } else if (sum + currentNum < 0) {
                leftIndex++;
            } else {
                rightIndex--;
            }
        }

        while (nums[i + 1] === nums[i]) {
            i++;
        }
    }
    return solutionList;
}
