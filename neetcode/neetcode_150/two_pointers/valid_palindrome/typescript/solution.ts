export function isPalindrome(s: string): boolean {
    const alphaRegEx = new RegExp("[a-zA-Z0-9]");
    if (!s) {
        throw new Error("Argument must be a non-empty string");
    }

    if (s.length < 2) {
        return true;
    }

    let leftIndex = -1;
    let rightIndex = s.length;

    while (leftIndex < rightIndex) {
        leftIndex++;
        rightIndex--;
        let leftChar = "";
        let rightChar = "";

        while (leftIndex < rightIndex) {
            const currentLeftChar = s[leftIndex];
            if (alphaRegEx.test(currentLeftChar)) {
                leftChar = currentLeftChar;
                break;
            }
            leftIndex++;
        }

        while (leftIndex < rightIndex) {
            const currentRightChar = s[rightIndex];
            if (alphaRegEx.test(currentRightChar)) {
                rightChar = currentRightChar;
                break;
            }
            rightIndex--;
        }

        if (leftIndex >= rightIndex) {
            break;
        }

        if (leftChar.toLowerCase() !== rightChar.toLowerCase()) {
            return false;
        }
    }

    return true;
}
