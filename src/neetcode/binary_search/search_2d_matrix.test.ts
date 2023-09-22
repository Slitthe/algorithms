import {searchMatrix} from "./search_2d_matrix";

const tests = [
    {
        matrix: [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]],
        target: 3,
        result: true,
    },
    {
        matrix: [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]],
        target: 13,
        result: false,
    }
];

describe("Search 2D Matrix", () => {
    for (let test of tests) {
        it(`${test.matrix} with target ${test.target} should result ${test.result}`, () => {

            const result = searchMatrix(test.matrix, test.target);

            expect(result).toEqual(test.result);
        });
    }
});
