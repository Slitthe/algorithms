const offset = "a".charCodeAt(0);

export function groupAnagrams(strs: string[]): string[][] {
    const anagrams: { [key: string]: string[] } = {};

    for (let i = 0; i < strs.length; i++) {
        const str = strs[i];
        const lettersArray: number[] = Array.from({ length: 26 }).fill(-1) as number[];

        for (const letter of str) {


            const baseCharCode = letter.charCodeAt(0) - offset;
            lettersArray[baseCharCode]++;
        }

        const key = lettersArray.join("");

        if (anagrams[key]) {
            anagrams[key].push(str);
        } else {
            anagrams[key] = [str]
        }
    }

    return Object.values(anagrams);
}