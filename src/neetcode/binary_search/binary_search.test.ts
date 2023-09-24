import search from "./binary_search";

const tests = [
    {
        arr: [-1, 0, 3, 5, 9, 12],
        target: 9,
        result: 4,
    },
    {
        arr: [-1, 0, 3, 5, 9, 12],
        target: 2,
        result: -1,
    },
];

describe("Search for a value in sorted array (in log n time)", () => {
    for (let test of tests) {
        it(`${test.arr} with a target of ${test.target} should result ${test.result}`, () => {

            const result = search(test.arr, test.target);

            expect(result).toEqual(test.result);
        });
    }
});
