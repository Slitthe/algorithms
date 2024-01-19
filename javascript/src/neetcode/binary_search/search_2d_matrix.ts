// https://leetcode.com/problems/search-a-2d-matrix/

function binarySearch(arr: number[], target: number): boolean {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const middle = Math.floor((right - left) / 2) + left;
        if (arr[middle] < target) {
            left = middle + 1;
        } else if (arr[middle] > target) {
            right = middle - 1;
        } else {
            return true;
        }
    }
    return false;
}

export function searchMatrix(matrix: number[][], target: number): boolean {

    let left = 0;
    let right = matrix.length - 1;

    while (left <= right) {
        const middle = Math.floor((right - left) / 2) + left;
        if (target < matrix[middle][0]) {
            right = middle - 1;
        } else if (target > matrix[middle][matrix[middle].length - 1]) {
            left = middle + 1;
        } else {
            return binarySearch(matrix[middle], target);
        }
    }

    return false;
}