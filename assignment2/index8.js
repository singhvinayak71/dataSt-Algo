function minimumScore(nums, k) {
    const minimum = Math.min(...nums);
    const maximum = Math.max(...nums);
  
    if (maximum - minimum <= 2 * k) {
      return 0;
    }
  
    const newMinimum = minimum + k;
    const newMaximum = maximum - k;
  
    return newMaximum - newMinimum;
  }
  
  const nums = [1];
  const k = 0;
  const result = minimumScore(nums, k);
  console.log(result);