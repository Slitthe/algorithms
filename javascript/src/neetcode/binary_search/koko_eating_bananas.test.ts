import {minEatingSpeed} from "./koko_eating_bananas";

const tests = [
    {
        piles: [3, 6, 7, 11],
        timeInHours: 8,
        result: 4,
    },
    {
        piles: [30, 11, 23, 4, 20],
        timeInHours: 5,
        result: 30,
    },
    {
        piles: [30, 11, 23, 4, 20],
        timeInHours: 6,
        result: 23,
    },


];

describe("Koko eating bananas", () => {
    for (let test of tests) {
        it(`To eat the banana pile: ${test.piles} in ${test.timeInHours}h -> rate of ${test.result}bananas/hour`, () => {

            const result = minEatingSpeed(test.piles, test.timeInHours);

            expect(result).toEqual(test.result);
        });
    }
});
