function containsDuplicate(nums: number[]): boolean {
    const foundNumsSet = new Set();

    for(const num of nums) {
        if(foundNumsSet.has(num)) {
            return true;
        }
        foundNumsSet.add(num);
    }

    return false;
};