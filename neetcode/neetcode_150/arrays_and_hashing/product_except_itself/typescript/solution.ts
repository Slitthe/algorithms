export function productExceptSelf(nums: number[]): number[] {
    const leftSum: number[] = Array.from({ length: nums.length }).fill(1) as number[];
    const rightSum: number[] = Array.from({ length: nums.length }).fill(1) as number[];

    leftSum[0] = nums[0];

    for (let i = 1; i < nums.length; i++) {
        leftSum[i] = leftSum[i - 1] * nums[i];
    }

    rightSum[rightSum.length - 1] = nums[nums.length - 1];

    for (let i = nums.length - 2; i >= 0; i--) {
        rightSum[i] = nums[i] * rightSum[i + 1];
    }

    let result: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        const previous = leftSum[i - 1] ?? 1;
        const next = rightSum[i + 1] ?? 1;

        result.push(previous * next);
    }

    return result;
}
