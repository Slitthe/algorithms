import { twoSum } from "./solution";

test("nums = [3,4,5,6], target = 7 should result in [0, 1]", () => {
    expect(twoSum([3, 4, 5, 6], 7)).toEqual([0, 1]);
});

test("Input: nums = [4,5,6], target = 10 should result in [0,2]", () => {
    expect(twoSum([4, 5, 6], 10)).toEqual([0, 2]);
});

test("Input: nums = [5,5], target = 10 should result in [0, 1]", () => {
    expect(twoSum([5, 5], 10)).toEqual([0, 1]);
});
