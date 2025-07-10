import { trap } from "./solution";

test("For input: Input: height = [0,2,0,3,1,0,1,3,2,1] it should return 9", () => {
    const testHeight = [0, 2, 0, 3, 1, 0, 1, 3, 2, 1];
    const result = trap(testHeight);
    const expectedResult = 9;
    expect(result).toBe(expectedResult);
});

test("For input: Input:height=[0,1,0,2,1,0,1,3,2,1,2,1] it should return 6", () => {
    const testHeight = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
    const result = trap(testHeight);
    const expectedResult = 6;
    expect(result).toBe(expectedResult);
});
