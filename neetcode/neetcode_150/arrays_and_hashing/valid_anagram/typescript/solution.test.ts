import { isValidAnagram } from "./solution";

test('"racecar". ""carrace" should return true ', () => {
    expect(isValidAnagram("racecar", "carrace")).toBe(true);
});


test('"jar". ""jam" should return false ', () => {
    expect(isValidAnagram("jar", "jam")).toBe(false);
});


test('"test". ""test2" should return false ', () => {
    expect(isValidAnagram("jar", "jam")).toBe(false);
});