function twoSum(nums, target) {
  const complementMap = new Map();
  
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const complement = target - num;
    
    if (complementMap.has(complement)) {
      return [complementMap.get(complement), i];
    }
    
    complementMap.set(num, i);
  }
  
  return [];
}

const nums = [2, 7, 11, 15];
const target = 9;

const result = twoSum(nums, target);
console.log(result);







