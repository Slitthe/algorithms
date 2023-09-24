export function calcPoints(ops: string[]): number[] {
    const result: number[] = [];
    for (let op of ops) {
        if (op === "+") {
            const last = result[result.length - 1];
            const prevLast = result[result.length - 2];
            result.push(Number(last) + Number(prevLast));
        } else if (op === "D") {
            const last = result[result.length - 1];
            result.push(Number(last) * 2);
        } else if (op === "C") {
            result.pop();
        } else {
            result.push(Number(op));
        }
    }

    return result;
}
