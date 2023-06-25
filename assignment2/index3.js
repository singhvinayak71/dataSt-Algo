function findLHS(nums) {
    const numCount = new Map();
  
    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      numCount.set(num, (numCount.get(num) || 0) + 1);
    }
  
    let maxLength = 0;
  
    for (const num of numCount.keys()) {
      if (numCount.has(num + 1)) {
        const length = numCount.get(num) + numCount.get(num + 1);
        maxLength = Math.max(maxLength, length);
      }
    }
  
    return maxLength;
  }
  
  const nums = [1, 3, 2, 2, 5, 2, 3, 7];
  const result = findLHS(nums);
  console.log(result);