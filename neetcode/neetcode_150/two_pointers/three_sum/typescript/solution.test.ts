import { threeSum } from "./solution";

test(`Input: nums = [-1,0,1,2,-1,-4] should Output: [[-1,-1,2],[-1,0,1]]`, () => {
    const testNums = [-1, 0, 1, 2, -1, -4];
    const result = threeSum(testNums);
    const expectedResult = [
        [-1, -1, 2],
        [-1, 0, 1],
    ];
    expect(result).toEqual(expectedResult);
});

test(`Input: nums = [0,1,1] should Output: []`, () => {
    const testNums = [0, 1, 1];
    const result = threeSum(testNums);
    const expectedResult: number[] = [];
    expect(result).toEqual(expectedResult);
});

test(`Input: nums = [0,0,0] should Output: [[0,0,0]]`, () => {
    const testNums = [0, 0, 0];
    const result = threeSum(testNums);
    const expectedResult = [[0, 0, 0]];
    expect(result).toEqual(expectedResult);
});
