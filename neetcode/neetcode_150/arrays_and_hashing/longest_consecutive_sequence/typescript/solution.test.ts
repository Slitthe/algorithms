import { longestConsecutive } from "./solution";

test("For the input: [2,20,4,10,3,4,5] the longest consecutive sequence should be 4", () => {
    const arg = [2, 20, 4, 10, 3, 4, 5];
    const result = longestConsecutive(arg);
    const expected = 4;

    expect(result).toBe(expected);
});

test("For the input: [0,3,2,5,4,6,1,1] the longest consecutive sequence should be 7", () => {
    const arg = [0, 3, 2, 5, 4, 6, 1, 1];
    const result = longestConsecutive(arg);
    const expected = 7;

    expect(result).toBe(expected);
});
