export function maxArea(heights: number[]): number {
    let leftIndex = 0;
    let rightIndex = heights.length - 1;

    let currentMaxArea = Number.MIN_SAFE_INTEGER;
    while (leftIndex < rightIndex) {
        const leftValue = heights[leftIndex];
        const rightValue = heights[rightIndex];

        const area = Math.min(leftValue, rightValue) * (rightIndex - leftIndex);

        currentMaxArea = Math.max(area, currentMaxArea);

        if (leftValue < rightValue) {
            leftIndex++;
        } else if (rightValue < leftValue) {
            rightIndex--;
        } else {
            leftIndex++;
        }
    }

    return currentMaxArea;
}
