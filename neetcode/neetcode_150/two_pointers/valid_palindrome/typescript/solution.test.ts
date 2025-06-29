import { isPalindrome } from "./solution";

test("'Was it a car or a cat I saw?' should return as a valid palindrome", () => {
    const testStr = "Was it a car or a cat I saw?";
    const result = isPalindrome(testStr);
    const expectedResult = true;
    expect(result).toBe(expectedResult);
});

test("'tab a cat' should return as a invalid palindrome", () => {
    const testStr = "tab a cat";
    const result = isPalindrome(testStr);
    const expectedResult = false;
    expect(result).toBe(expectedResult);
});

test("'0P' should return as a invalid palindrome", () => {
    const testStr = "0P";
    const result = isPalindrome(testStr);
    const expectedResult = false;
    expect(result).toBe(expectedResult);
});

test("'abcba' should return as a valid palindrome", () => {
    const testStr = "abcba";
    const result = isPalindrome(testStr);
    const expectedResult = true;
    expect(result).toBe(expectedResult);
});
