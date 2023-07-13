var moveZeroes = function (nums) {
  let firstZeroPosi = null;
  let zeroNum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (zeroNum === 0 && nums[i] != 0) {
      continue;
    }
    if (nums[i] === 0) {
      if (zeroNum === 0) {
        firstZeroPosi = i;
      }
      zeroNum += 1;
      continue;
    }

    if (zeroNum != 0 && nums[i] != 0) {
      nums[firstZeroPosi] = nums[i];
      nums[i] = 0;
      firstZeroPosi += 1;
    }
  }
  return nums;
};

let array = [0, 1, 0, 3, 12];
console.log(moveZeroes(array));
