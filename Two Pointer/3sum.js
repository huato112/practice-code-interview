var threeSum = function (nums) {
  let numSorted = nums.sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < numSorted.length; i++) {
    if (i > 0 && numSorted[i] == numSorted[i - 1]) {
      continue;
    }
    let left = i + 1;
    let right = numSorted.length - 1;

    while (left < right) {
      let sum = numSorted[i] + numSorted[left] + numSorted[right];

      if (sum == 0) {
        result.push([numSorted[i], numSorted[left], numSorted[right]]);
        left++;
        while (left < right && numSorted[left] == numSorted[left - 1]) {
          left++;
        }
      } else if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }
  return result;
};
