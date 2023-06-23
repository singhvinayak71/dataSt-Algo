function findErrorNums(nums) {
    let xorResult = 0;

    for (let num of nums) {
        xorResult ^= num;
    }
    for (let i = 1; i <= nums.length; i++) {
        xorResult ^= i;
    }

    let bitMask = xorResult & (-xorResult);

    let num1 = 0;
    let num2 = 0;

    for (let num of nums) {
        if ((num & bitMask) !== 0) {
            num1 ^= num;
        } else {
            num2 ^= num;
        }
    }
    for (let i = 1; i <= nums.length; i++) {
        if ((i & bitMask) !== 0) {
            num1 ^= i;
        } else {
            num2 ^= i;
        }
    }

    return [num1, num2];
}

let nums = [1, 2, 2, 4];
console.log(findErrorNums(nums)); 