function isMonotonic(nums) {
    let isIncreasing = true;
    let isDecreasing = true;
  
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] > nums[i - 1]) {
        isIncreasing = false;
      }
  
      if (nums[i] < nums[i - 1]) {
        isDecreasing = false;
      }
    }
  
    return isIncreasing || isDecreasing;
  }
  
  const nums = [1, 2, 2, 3];
  const result = isMonotonic(nums);
  console.log(result); 
  
  
  
  
  
  
  