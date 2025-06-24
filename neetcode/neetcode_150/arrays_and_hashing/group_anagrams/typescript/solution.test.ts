import { groupAnagrams } from "./solution";

test('["act","pots","tops","cat","stop","hat"] should return [["hat"],["act", "cat"],["stop", "pots", "tops"]]', () => {
    const result = groupAnagrams(["act", "pots", "tops", "cat", "stop", "hat"]).sort((a, b) => {
        const sortedA = a.sort();
        const sortedB = b.sort()
        return sortedA.join("").localeCompare(sortedB.join(""))
    });
    const expected = [["hat"], ["act", "cat"], ["stop", "pots", "tops"]].sort((a, b) => {
        const sortedA = a.sort();
        const sortedB = b.sort()
        return sortedA.join("").localeCompare(sortedB.join(""))
    })

    expect(result).toStrictEqual(expected);
});

test('["x"] should return [["x"]]', () => {
    expect(groupAnagrams(["x"])).toStrictEqual([["x"]]);
});

test('[""] should return [[""]]', () => {
    expect(groupAnagrams([""])).toStrictEqual([[""]]);
});

test('["bdddddddddd","bbbbbbbbbbc"] should return [["bdddddddddd"],["bbbbbbbbbbc"]]', () => {
    expect(groupAnagrams(["bdddddddddd", "bbbbbbbbbbc"])).toStrictEqual([["bdddddddddd"], ["bbbbbbbbbbc"]]);
});