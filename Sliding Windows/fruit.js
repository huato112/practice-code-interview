var totalFruit = function (fruits) {
  let maxLength = 0;

  for (let i = 0; i < fruits.length; i++) {
    let currentFruit = {};
    let left = i;

    while (left < fruits.length && Object.keys(currentFruit).length <= 2) {
      currentFruit[fruits[left]] = (currentFruit[fruits[left]] || 0) + 1;
      left++;
      if (Object.keys(currentFruit).length <= 2) {
        maxLength = Math.max(maxLength, left - i);
      }
    }
  }
  return maxLength;
};

//time complexity: O(n^2)
//space complexity: O(1)

//   Example 1:
//   Input: fruits = [1,2,1]
//   Output: 3
//   Explanation: We can pick from all 3 trees.

//   Example 2:
//   Input: fruits = [0,1,2,2]
//   Output: 3
//   Explanation: We can pick from trees [1,2,2].
//   If we had started at the first tree, we would only pick from trees [0,1].

//   Example 3:
//   Input: fruits = [1,2,3,2,2]
//   Output: 4
//   Explanation: We can pick from trees [2,3,2,2].
//   If we had started at the first tree, we would only pick from trees [1,2].

var totalFruit = function (fruits) {
  let maxLength = 0;
  let currentFruit = {};
  let left = 0;

  for (let right = 0; right < fruits.length; right++) {
    currentFruit[fruits[right]] = (currentFruit[fruits[right]] || 0) + 1;

    while (Object.keys(currentFruit).length > 2) {
      currentFruit[fruits[left]] -= 1;
      if (currentFruit[fruits[left]] == 0) {
        delete currentFruit[fruits[left]];
      }
      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
};

//time complexity: O(n)
//space complexity: O(1)
