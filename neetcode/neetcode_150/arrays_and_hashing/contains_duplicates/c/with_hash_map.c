#include <stdlib.h>
#include <stdio.h>
#include <stdbool.h>

typedef struct {
    int value;
    int key;
    int is_set;
} HashValue;


int hash(int value, int array_length);

void set_map_value(HashValue *hash_set, int key, int value, int size);

HashValue get_map_value(HashValue *hash_set, int key, int size);

bool containsDuplicate(const int *nums, int numsSize);

int main() {
    const int SIZE = 4;

    int nums[SIZE] = {1, 2, 3, 4};
    
    bool has_duplicates = containsDuplicate(nums, SIZE);

    printf("[");
    for (int i = 0; i < SIZE; i++) {
        printf("%d,", nums[i]);
    }
    printf("]");

    if (has_duplicates) {
        printf(" contains duplicates");
    } else {
        printf(" does not contain duplicates");
    }

    return 0;
}

int hash(int value, int array_length) {
    return value % array_length;
};


void set_map_value(HashValue *hash_set, int key, int value, int size) {
    int key_hash = hash(key, size);
    for (int i = 0; i < size; i++) {
        int offset_index = (key_hash + i) % size;
        int is_empty = !hash_set[offset_index].is_set;

        if (is_empty) {
            hash_set[offset_index].value = value;
            hash_set[offset_index].key = key;
            hash_set[offset_index].is_set = 1;
            break;
        }
    }
}

HashValue get_map_value(HashValue *hash_set, int key, int size) {
    int key_hash = hash(key, size);
    for (int i = 0; i < size; i++) {
        int offset_index = (key_hash + i) % size;
        int is_empty = !hash_set[offset_index].is_set;

        if (!is_empty) {
            return hash_set[offset_index];
        }
    }

    HashValue not_found;
    not_found.is_set = 0;
    return not_found;
};

bool containsDuplicate(const int *nums, int numsSize) {
    int hash_size = numsSize * 4;
    HashValue *hash_array = malloc(sizeof(HashValue) * hash_size);

    for (int i = 0; i < numsSize; i++) {
        int num = nums[i];
        HashValue foundValue = get_map_value(hash_array, num, hash_size);
        if (foundValue.is_set && foundValue.value == num) {
            free(hash_array);
            return true;
        }

        set_map_value(hash_array, num, num, hash_size);
    }


    free(hash_array);
    return false;
};


