import {calcPoints} from "./index";

const tests = [
    {
        ops: ["5", "2", "C", "D", "+"],
        result: [5, 10, 15],
    },
    {
        ops: ["5", "-2", "4", "C", "D", "9", "+", "+"],
        result: [5, -2, -4, 9, 5, 14],
    }

];

describe("Calc Points", () => {
    for (let test of tests) {
        it(`${test.ops} to result ${test.result}`, () => {

            const result = calcPoints(test.ops);

            expect(result).toEqual(test.result);
        });
    }
});
