
export function twoSum(nums: number[], target: number): number[] {
    const numsMap: { [key: number]: number[] } = {};

    for (let i = 0; i < nums.length; i++) {
        const value = nums[i];
        if (numsMap[value]) {
            numsMap[value].push(i)
        } else {
            numsMap[value] = [i];
        }
    }


    for (let i = 0; i < nums.length; i++) {
        const value = nums[i]
        const diff = target - value;
        // checks to see if the diff exists in the values
        if (numsMap[diff]) {
            const match = numsMap[diff].find(numsMapIndex => numsMapIndex !== i); // needed to not get the current index in case it's a match
            if (match) {
                return [i, match].sort((a, b) => a - b);
            }

        }
    }

    return [];
}