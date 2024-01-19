// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

export function searchRotatedArray(arr: number[], left: number = 0, right: number = arr.length - 1): number {
    if (left === right) {
        return arr[left];
    }

    const middle = Math.floor((right - left) / 2) + left;

    let leftMin = Math.min(arr[left], arr[middle]);
    let rightMin = Math.min(arr[middle + 1], arr[right]);

    if (leftMin < rightMin) {
        return searchRotatedArray(arr, left, middle)
    } else {
        return searchRotatedArray(arr, middle + 1, right);
    }
}