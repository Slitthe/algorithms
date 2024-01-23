import {twoSum} from "./two_sum_2";

const tests = [
    {
        nums: [2, 7, 11, 15],
        target: 9,
        result: [1, 2],
    },
    {
        nums: [2, 3, 4],
        target: 6,
        result: [1, 3],
    }, {
        nums: [-1, 0],
        target: -1,
        result: [1, 2],
    },
];

describe("Two Sum II: Input Array is ordered", () => {
    for (let test of tests) {
        it(`${test.nums} with target ${test.target} should result ${test.result}`, () => {

            const result = twoSum(test.nums, test.target);

            expect(result).toEqual(test.result);
        });
    }
});
