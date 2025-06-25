export function topKFrequent(nums: number[], k: number): number[] {

    const frequency: Map<number, number> = new Map();
    for(const num of nums) {
        const currentFrequency = frequency.get(num) ?? 0;
        frequency.set(num, currentFrequency + 1);
    }

    const frequencies: (number[] | null)[] = Array.from({length: nums.length + 1}).fill(null) as (number[] | null)[];


    const entries = [...frequency.entries()];

    for(const [num, count] of entries) {
        if(frequencies[count]) {
            frequencies[count].push(num)
        } else {
            frequencies[count] = [num];
        }

    }

    const mostFrequent: number[] = [];
    for(let i = frequencies.length - 1; i >= 0; i--) {
        const currentValue = frequencies[i];
        if(currentValue === null) {
            continue;
        }

        for(const num of currentValue) {
            mostFrequent.push(num);
            if(mostFrequent.length >= k) {
                return mostFrequent;
            }
        }
    }

    return [];
}