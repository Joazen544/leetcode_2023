/*

easy 的題目
這是有參考其他人的寫法後，發現用這個 reverse 的解法蠻快的，
空間的部分則是超省，是 Ｏ(1)

*/

var rotate = function (nums, k) {
  k %= nums.length;
  nums = reverse(nums, 0, nums.length - 1);
  nums = reverse(nums, 0, k - 1);
  nums = reverse(nums, k, nums.length - 1);
};

var reverse = function (nums, start, end) {
  while (start < end) {
    let temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start++;
    end--;
  }
  return nums;
};

/*

第一次的解方，太慢

*/

// var rotate = function (nums, k) {
//   let numsCopy = [];
//   for (let i = 0; i < nums.length; i++) {
//     numsCopy[i] = nums[i];
//   }

//   // Rotate the elements.
//   for (let i = 0; i < nums.length; i++) {
//     nums[(i + k) % nums.length] = numsCopy[i];
//   }
//   return nums;
// };

const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
console.log(rotate(nums, k));
