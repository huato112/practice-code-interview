/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let max = 0;

  while (left < right) {
    const result = Math.abs(
      Math.min(height[left], height[right]) * (left - right)
    );
    if (max < result) {
      max = result;
    }

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return max;
};
