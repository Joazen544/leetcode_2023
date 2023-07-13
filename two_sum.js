var twoSum = function (nums, target) {
  let posiStorage = {};

  for (let i = 0; i < nums.length; i++) {
    if (!posiStorage[nums[i]]) {
      posiStorage[nums[i]] = [i];
    } else {
      posiStorage[nums[i]].push(i);
    }
  }

  let answerNum = twoSumOrder(nums, target);

  for (let j = 0; j < 2; j++) {
    answerPosi.push(posiStorage[answerNum[j]].pop());
  }

  return answerPosi;
};

var twoSumOrder = function (nums, target) {
  let sortedArray = nums.sort(function (a, b) {
    return a - b;
  });
  let start = 0;
  let end = nums.length - 1;
  let answerNum = [];

  while (start < end) {
    if (sortedArray[start] + sortedArray[end] === target) {
      answerNum.push(sortedArray[start]);
      answerNum.push(sortedArray[end]);
      break;
    }
    if (sortedArray[start] + sortedArray[end] < target) {
      start++;
    } else {
      end--;
    }
  }

  return answerNum;
};

let arr = [3, 3];
let target = 6;
console.log(twoSum(arr, target));

/*
第二個想到的解法，用 object 記錄每個數字的位置，然後透過在 sorted array 上用 two pointer 來找答案
快很多 

var twoSum = function (nums, target) {
  let posiStorage = {};

  for (let i = 0; i < nums.length; i++) {
    if (!posiStorage[nums[i]]) {
      posiStorage[nums[i]] = [i];
    } else {
      posiStorage[nums[i]].push(i);
    }
  }

  let sortedArray = nums.sort(function (a, b) {
    return a - b;
  });
  let start = 0;
  let end = nums.length - 1;
  let answerNum = [];
  let answerPosi = [];

  while (start < end) {
    if (sortedArray[start] + sortedArray[end] === target) {
      answerNum.push(sortedArray[start]);
      answerNum.push(sortedArray[end]);
      break;
    }
    if (sortedArray[start] + sortedArray[end] < target) {
      start++;
    } else {
      end--;
    }
  }

  for (let j = 0; j < 2; j++) {
    answerPosi.push(posiStorage[answerNum[j]].pop());
  }

  return answerPosi;
};
*/

/*
直覺的解法，但這樣 time complexity 會是 n^2
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                let array = [];
                array.push(i);
                array.push(j);
                return array;
                
            }
        }
    }
};

*/
