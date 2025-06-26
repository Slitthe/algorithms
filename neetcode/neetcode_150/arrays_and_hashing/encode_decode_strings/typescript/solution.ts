export function encode(strs: string[]): string {
    const encoded = strs.map(str => `[${str.length}]${str}`).join("");
    return encoded;
}

export function decode(str: string): string[] {
    const decoded = [];
    let currentStrNum = "";
    let withinBrackets = false;
    for(let i = 0; i < str.length; i++) {
        const char = str[i];


        if(withinBrackets && char !== "]") {
            currentStrNum += char;
        }

        if(char === "[") {
            withinBrackets = true;
        } else if(char === "]") {
            withinBrackets = false;
            const lengthParsed =  Number.isNaN( Number.parseInt(currentStrNum)) ? 0 :  Number.parseInt(currentStrNum);
            currentStrNum = "";
            const currentSubstr = str.slice(i + 1, i + 1 + lengthParsed);
            decoded.push(currentSubstr);
        }
    }
    return decoded;
}