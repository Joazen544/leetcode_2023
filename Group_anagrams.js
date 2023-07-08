/*
先把其中一個 string split，然後比對其他 string split 是否相符
比較方式
長度相同
裡面每個元素的數量相同

*/

var groupAnagrams = function (strs) {
  let ifCounted = {};
  let nowArray = [];
  let comparingArray = [];
  let sameWordArray = [];
  let outPutArray = [];

  for (i = 0; i < strs.length; i++) {
    if (ifCounted[strs[i]] !== 1) {
      //還沒被輸出過
      sameWordArray = [];
      nowArray = strs[i].split(""); //將當前的 string 看成 array
      sameWordArray.push(strs[i]);
      ifCounted[strs[i]] = 1;

      for (j = i + 1; j < strs.length; j++) {
        //比對接下來的每一個 string
        comparingArray = strs[j].split("");
        if (nowArray.length !== comparingArray.length) {
          continue;
        }
        let ifSame = 1;
        for (z = 0; z < nowArray.length; z++) {
          const index = comparingArray.indexOf(nowArray[z]);
          if (index > -1) {
            comparingArray.splice(index, 1);
          } else {
            ifSame = 0;
            break;
          }
        }
        if (ifSame === 1) {
          //兩個字完全相同
          sameWordArray.push(strs[j]);
          ifCounted[strs[j]] = 1;
        }
      }
      outPutArray.push(sameWordArray);
    }
  }

  return outPutArray;
};

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));
