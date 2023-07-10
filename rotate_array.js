var rotate = function (nums, k) {
  let numsCopy = [];
  for (let i = 0; i < nums.length; i++) {
    numsCopy[i] = nums[i];
  }

  // Rotate the elements.
  for (let i = 0; i < nums.length; i++) {
    nums[(i + k) % nums.length] = numsCopy[i];
  }
  return nums;
};

const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
console.log(rotate(nums, k));
