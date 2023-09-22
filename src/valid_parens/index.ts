const parensMapping: { [key: string]: string } = {
    ")": "(",
    "}": "{",
    "]": "[",
}

export function isValid(s: string) {
    const stack = [];
    for (let char of s) {
        if (char in parensMapping) {
            if (stack.length && stack[stack.length - 1] === parensMapping[char]) {
                stack.pop();
            } else {
                return false;
            }
        } else {
            stack.push(char);
        }

    }

    return stack.length === 0;
}
