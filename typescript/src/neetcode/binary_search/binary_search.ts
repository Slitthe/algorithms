// https://leetcode.com/problems/binary-search/

export default function search(arr: number[], target: number): number {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const middle = Math.floor((right - left) / 2) + left;
        if (arr[middle] < target) {
            left = middle + 1;
        } else if (arr[middle] > target) {
            right = middle - 1;
        } else {
            return middle;
        }
    }
    return -1;
}