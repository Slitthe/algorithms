import search from "./search_in_rotated_array"

const tests = [
    {
        arr: [4, 5, 6, 7, 0, 1, 2],
        target: 0,
        result: 4,
    },
    {
        arr: [4, 5, 6, 7, 0, 1, 2],
        target: 3,
        result: -1,
    },
    {
        arr: [1],
        target: 0,
        result: -1,
    },
    {
        arr: [3, 5, 1],
        target: 3,
        result: 0,
    },
    {
        arr: [3, 4, 5, 6, 1, 2],
        target: 2,
        result: 5,
    },
    {
        arr: [3, 1],
        target: 0,
        result: -1,
    },

];

describe("Search a value in a sorted rotated array", () => {
    for (let test of tests) {
        it(`${test.arr} with a target of ${test.target} should result ${test.result}`, () => {

            const result = search(test.arr, test.target);

            expect(result).toEqual(test.result);
        });
    }
});
