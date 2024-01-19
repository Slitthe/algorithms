// https://leetcode.com/problems/koko-eating-bananas/

export function minEatingSpeed(piles: number[], timeInHours: number): number {
    let left = 1;
    let right = Math.max(...piles);


    let minTimeToEat = Infinity;

    while (left <= right) {
        let middle = Math.floor((right - left) / 2) + left;
        let timeToEatMiddle = piles.reduce((acc, curr) => acc + Math.ceil(curr / middle), 0);


        if (timeToEatMiddle > timeInHours) {
            left = middle + 1;
            // need to eat more/h --> move right
        } else {
            // need to eat less --> move left
            right = middle - 1;
            minTimeToEat = Math.min(minTimeToEat, middle);
        }

    }

    return minTimeToEat;
}