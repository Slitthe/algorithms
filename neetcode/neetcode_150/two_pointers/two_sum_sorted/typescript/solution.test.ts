import { twoSum } from "./solution";

test("Input: numbers = [1,2,3,4], target = 3 should output [1,2]", () => {
    const testNumList = [1, 2, 3, 4];
    const testTarget = 3;

    const result = twoSum(testNumList, testTarget);
    const expectedResult = [1, 2];
    expect(result).toEqual(expectedResult);
});
