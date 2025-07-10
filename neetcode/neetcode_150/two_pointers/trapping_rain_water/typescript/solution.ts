export function trap(heights: number[]): number {
    let leftPointer = 0;
    let rightPointer = 0;

    while (leftPointer < heights.length && heights[leftPointer] === 0) {
        leftPointer++;
    }

    let volume = 0;
    rightPointer = leftPointer + 1;

    while (rightPointer < heights.length && leftPointer < heights.length) {
        let currentVolume = 0;
        while (rightPointer < heights.length && heights[rightPointer] < heights[leftPointer]) {
            currentVolume += heights[leftPointer] - heights[rightPointer];
            rightPointer++;
        }

        if (rightPointer === heights.length && leftPointer < heights.length - 3) {
            leftPointer++;
            rightPointer = leftPointer + 1;
            continue;
        }

        if (rightPointer >= heights.length || leftPointer >= heights.length) {
            console.log({ rightPointer, leftPointer });
            break;
        }

        if (heights[leftPointer] > heights[rightPointer]) {
            currentVolume -= Math.abs(heights[leftPointer] - heights[rightPointer]) * (rightPointer - 1 - leftPointer);
        }

        volume += currentVolume;

        // console.log({ leftPointer, rightPointer, volume });

        leftPointer = rightPointer;
        rightPointer++;
    }

    return volume;
}
