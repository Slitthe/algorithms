export function twoSum(numbers: number[], target: number): number[] {
    let leftIndex = 0;

    let rightIndex = numbers.length - 1;

    while (leftIndex < rightIndex) {
        const leftNum = numbers[leftIndex];
        const rightNum = numbers[rightIndex];

        const sum = leftNum + rightNum;

        if (sum === target) {
            return [leftIndex + 1, rightIndex + 1];
        }

        if (sum < target) {
            leftIndex++;
        } else {
            rightIndex--;
        }
    }

    return [];
}
