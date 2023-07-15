var longestPalindrome = function (s) {
  let sArray = s.split("");
  let longestLength = 0;
  let longestStringArray = [];
  let longestType = 1;

  for (let i = 0; i < sArray.length; i++) {
    let start = i;
    let end = i;
    let nowLength = -1;
    let nowArray = [];
    while (start >= 0 && end <= sArray.length - 1) {
      if (sArray[start] == sArray[end]) {
        nowLength += 2;
        nowArray.push(sArray[start]);
        if (nowLength > longestLength) {
          longestLength = nowLength;
          longestStringArray = nowArray;
          longestType = 1;
        }
      } else {
        break;
      }
      start--;
      end++;
    }

    if (sArray[i] === sArray[i + 1]) {
      start = i;
      end = i + 1;
      nowLength = 0;
      nowArray = [];
      while (start >= 0 && end <= sArray.length - 1) {
        if (sArray[start] == sArray[end]) {
          nowLength += 2;
          nowArray.push(sArray[start]);
          if (nowLength > longestLength) {
            longestLength = nowLength;
            longestStringArray = nowArray;
            longestType = 2;
          }
        } else {
          break;
        }
        start--;
        end++;
      }
    }
  }

  let answerArray = [];

  for (let i = longestStringArray.length - 1; i >= 0; i--) {
    answerArray.push(longestStringArray[i]);
  }
  if (longestType == 1) {
    for (let i = 1; i < longestStringArray.length; i++) {
      answerArray.push(longestStringArray[i]);
    }
  } else if (longestType == 2) {
    for (let i = 0; i < longestStringArray.length; i++) {
      answerArray.push(longestStringArray[i]);
    }
  }

  let answer = answerArray.join("");
  return answer;
};

let s = "babad";
console.log(longestPalindrome(s));
