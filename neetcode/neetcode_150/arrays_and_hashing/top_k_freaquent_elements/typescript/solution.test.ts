import {topKFrequent} from "./solution";


test('Input: nums = [1,2,2,3,3,3], k = 2 Output: [2,3]', () => {
    const result = topKFrequent([1,2,2,3,3,3], 2).sort((a, b) => a - b);
    const expected = [2,3].sort((a, b) => a - b);
    expect(result).toStrictEqual(expected);
});

test('[7,7], k = 1 Output: [7]', () => {
    const result = topKFrequent([7, 7], 1).sort((a, b) => a - b);
    const expected = [7];
    expect(result).toStrictEqual(expected);
});