export function trap(heights: number[]): number {
    const leftHeights: number[] = Array.from({ length: heights.length }).fill(0) as number[];
    const rightHeights: number[] = Array.from({ length: heights.length }).fill(0) as number[];

    for (let i = 1; i < heights.length; i++) {
        const previousMaxHeight = leftHeights[i - 1];
        const leftValue = heights[i - 1];

        leftHeights[i] = Math.max(previousMaxHeight, leftValue);
    }

    for (let i = heights.length - 2; i >= 0; i--) {
        const previousMaxHeight = rightHeights[i + 1];
        const rightValue = heights[i + 1];

        rightHeights[i] = Math.max(rightValue, previousMaxHeight);
    }

    let trappedTotalWater = 0;
    for (let i = 0; i < heights.length; i++) {
        const currentNum = heights[i];

        const leftMax = leftHeights[i];
        const rightMax = rightHeights[i];

        const possibleTrappedHeight = Math.min(leftMax, rightMax) - currentNum;

        if (possibleTrappedHeight > 0) {
            trappedTotalWater += possibleTrappedHeight;
        }
    }

    return trappedTotalWater;
}
