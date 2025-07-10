import { maxArea } from "./solution";

test(`For Input: height = [1,7,2,5,4,7,3,6] Output should be 36`, () => {
    const testNums = [1, 7, 2, 5, 4, 7, 3, 6];
    const result = maxArea(testNums);
    const expectedResult = 36;
    expect(result).toEqual(expectedResult);
});

test(`For Input: height = [2,2,2] Output should be 4`, () => {
    const testNums = [2, 2, 2];
    const result = maxArea(testNums);
    const expectedResult = 4;
    expect(result).toEqual(expectedResult);
});

test(`For Input: height = [1,7,2,5,12,3,500,500,7,8,4,7,3,6] Output should be 500`, () => {
    const testNums = [1, 7, 2, 5, 12, 3, 500, 500, 7, 8, 4, 7, 3, 6];
    const result = maxArea(testNums);
    const expectedResult = 500;
    expect(result).toEqual(expectedResult);
});
