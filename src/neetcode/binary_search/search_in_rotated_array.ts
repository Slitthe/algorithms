export default function search(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const middle = Math.floor((right - left) / 2) + left;
        const middleValue = nums[middle];
        if (middleValue === target) {
            return middle;
        }

        if (left === right) {
            break;
        }
        
        if (nums[left] <= middleValue) {
            // left part is in ascending order
            if (target >= nums[left] && target < middleValue) {
                // look only in left part from now on
                right = middle - 1;
            } else {
                left = middle + 1;
            }

        } else if (middleValue <= nums[right]) {
            // right part is in ascending order
            if (target > middleValue && target <= nums[right]) {
                // look only in right part from now on
                left = middle + 1;
            } else {
                right = middle - 1;
            }

        }
    }
    return -1;
}