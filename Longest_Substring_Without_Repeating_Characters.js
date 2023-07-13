var lengthOfLongestSubstring = function (s) {
  /*
      第二個方法，改用 map，速度跟記憶體都大概一半
      一個記錄器記得目前最長的答案
      一個紀錄最長長度
      一個 map 紀錄目前是否出現
      */

  let sArray = s.split("");
  let numExistMap = new Map();
  let longestString = 0;
  let nowStringLong = 0;
  let nowStart = 0;
  for (let i = 0; i < sArray.length; i++) {
    if (numExistMap.has(sArray[i]) == false) {
      numExistMap.set(sArray[i], i);
      nowStringLong += 1;

      if (nowStringLong > longestString) {
        longestString = nowStringLong;
      }
    } else if (numExistMap.has(sArray[i]) == true) {
      for (const key of numExistMap.keys()) {
        numExistMap.delete(key);
        nowStringLong -= 1;

        if (key === sArray[i]) {
          break;
        }
      }

      numExistMap.set(sArray[i], i);
      nowStringLong += 1;

      if (nowStringLong > longestString) {
        longestString = nowStringLong;
      }
    }
  }

  return longestString;
};

//第一個想到的方法，速度太慢

// var lengthOfLongestSubstring = function (s) {
//   /*
//     一個記錄器記得目前最長的答案
//     一個紀錄最長長度
//     一個 object 紀錄目前是否出現 （是不是用 map 比較好，可以數總數）
//     */

//   let sArray = s.split("");
//   let numExist = {};
//   let longestString = 0;
//   let nowStringLong = 0;
//   let nowArray = [];
//   let longestArray = [];

//   for (let i = 0; i < sArray.length; i++) {
//     if (numExist[sArray[i]] == undefined) {
//       numExist[sArray[i]] = i;
//       nowStringLong += 1;
//       nowArray.push(sArray[i]);
//       if (nowStringLong > longestString) {
//         longestString = nowStringLong;
//         longestArray = nowArray;
//       }
//     } else if (numExist[sArray[i]] != undefined) {
//       i = numExist[sArray[i]];
//       nowArray = [];
//       nowStringLong = 0;
//       numExist = {};
//     }
//   }

//   //let answer = longestArray.join("");
//   return longestString;
// };

let s = "umvejcuuk";
console.log(lengthOfLongestSubstring(s));
