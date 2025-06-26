import {encode, decode} from "./solution";


test('Input: ["neet","code","love","you"] should encode and encode properly', () => {
    const original = ["neet","code","love","you"];
    const encoded = encode(original);
    const decoded = decode(encoded);
    expect(decoded).toStrictEqual(original);
})

test('Input: ["we","say",":","yes"] should encode and encode properly', () => {
    const original = ["we","say",":","yes"];
    const encoded = encode(original);
    const decoded = decode(encoded);
    expect(decoded).toStrictEqual(original);
})

test('Input: [] should encode and encode properly', () => {
    const original: string[] = [];
    const encoded = encode(original);
    const decoded = decode(encoded);
    expect(decoded).toStrictEqual(original);
})

test('Input: ["", "", "test", ""] should encode and encode properly', () => {
    const original: string[] = [];
    const encoded = encode(original);
    const decoded = decode(encoded);
    expect(decoded).toStrictEqual(original);
})



