var singleNumber = function (nums) {
  nums = nums.sort();

  for (let i = 0; i < nums.length; i = i + 2) {
    if (nums[i] != nums[i + 1]) {
      return nums[i];
    }
  }
};

/*  第二種解法

var singleNumber = function(nums) {
    let obj = {};
    let sum = 0;
    for(let i = 0; i <nums.length; i++){
        if(!obj[nums[i]]){
            sum += nums[i];
            obj[nums[i]] = 1;
        }else{
            sum -= nums[i];
        }
    }
    return sum;
    
};


*/
