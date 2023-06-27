function moveZeroes(nums) {
  let nonZeroIndex = 0;

  // Move all non-zero elements to the beginning of the array
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[nonZeroIndex] = nums[i];
      nonZeroIndex++;
    }
  }

  // Fill the remaining positions with zeros
  for (let i = nonZeroIndex; i < nums.length; i++) {
    nums[i] = 0;
  }
}

let nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums);