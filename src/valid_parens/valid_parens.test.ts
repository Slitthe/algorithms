import {isValid} from "./index";

const tests = [
    {
        parens: "()",
        result: true,
    },
    {
        parens: "()[]{}",
        result: true,
    }, {
        parens: "(]",
        result: false,
    },
];

describe("Valid parens", () => {
    for (let test of tests) {
        it(`${test.parens} to be ${test.result}`, () => {

            const result = isValid(test.parens);

            expect(result).toEqual(test.result);
        });
    }
});
