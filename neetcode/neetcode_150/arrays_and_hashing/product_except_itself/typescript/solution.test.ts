import { productExceptSelf } from "./solution";

test("[1,2,4,6] should return [48,24,12,8]", () => {
    const argument = [1, 2, 4, 6];
    const expectedResult = [48, 24, 12, 8];
    const result = productExceptSelf(argument);
    expect(result.every((v, i) => v === expectedResult[i])).toBe(true);
});

test("[-1,0,1,2,3] should return [0,-6,0,0,0]", () => {
    const argument = [-1, 0, 1, 2, 3];
    const expectedResult = [0, -6, 0, 0, 0];
    const result = productExceptSelf(argument);
    expect(result.every((v, i) => v === expectedResult[i])).toBe(true);
});
