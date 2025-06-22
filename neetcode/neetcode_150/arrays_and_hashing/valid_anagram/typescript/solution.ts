// You should aim for a solution with O(n + m) time and O(1) space, where n is the length of the string s and m is the length of the string t.
export function isValidAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false;
    }

    const charCount = {};
    for (const char of s) {
        if (!charCount[char]) {
            charCount[char] = 1;
        } else {
            charCount[char]++;
        }
    }

    for (const char of t) {
        if (!charCount[char]) {
            return false;
        }

        charCount[char]--;

        if (charCount[char] < 0) {
            return false
        }
    }

    return true;
}