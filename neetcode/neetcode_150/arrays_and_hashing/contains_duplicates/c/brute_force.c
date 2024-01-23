#include <stdio.h>
#include <stdbool.h>

bool containsDuplicate(int* nums, int numsSize);

int main() {
    int nums[] = {1,2,3,4,5};
    int size = sizeof(nums) / sizeof(nums[0]);

    bool contains = containsDuplicate(nums, size);

    if(contains) {
        printf("contains duplicates");
    } else {
        printf("doesn't contain duplicates");
    }
}

bool containsDuplicate(int* nums, int numsSize) {
    for(int i = 0; i < numsSize; i++) {
        for(int j = i + 1; j < numsSize; j++) {
            if(nums[i] == nums[j]) {
                return true;
            }
        }
    }

    return false;
};