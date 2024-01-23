import {searchRotatedArray} from "./search_rotated_array";

const tests = [
    {
        arr: [3, 4, 5, 1, 2],
        result: 1,
    },
    {
        arr: [4, 5, 6, 7, 0, 1, 2],
        result: 0,
    },
    {
        arr: [11, 13, 15, 17],
        result: 11,
    }
];

describe("Search for min in rotated array", () => {
    for (let test of tests) {
        it(`${test.arr} should result ${test.result}`, () => {

            const result = searchRotatedArray(test.arr);

            expect(result).toEqual(test.result);
        });
    }
});
