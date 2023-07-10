//這是 easy 的題目，第一次就寫出還行的解法

var intersect = function (nums1, nums2) {
  let obj1 = {};
  //let obj2 = {};
  let answer = [];

  for (let i = 0; i < nums1.length; i++) {
    if (!obj1[nums1[i]]) {
      obj1[nums1[i]] = 1;
    } else {
      obj1[nums1[i]]++;
    }
  }

  for (let j = 0; j < nums2.length; j++) {
    if (obj1[nums2[j]] > 0) {
      obj1[nums2[j]]--;
      answer.push(nums2[j]);
    }
  }
  return answer;
};
