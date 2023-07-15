var reverse = function (x) {
  let positive = true;
  if (x < 0) {
    positive = false;
    x = -x;
  }

  let xString = x.toString();
  //xString = reverseString(x);

  let xArray = xString.split("");
  let answer = 0;

  for (let i = 0; i < xArray.length; i++) {
    answer += xArray[i] * 10 ** i;
  }

  if (answer > 2147483647) {
    return 0;
  } else if (positive == false && answer > 2147483648) {
    return 0;
  }

  if (positive == false) {
    return answer * -1;
  } else {
    return answer;
  }
};

x = 123;
console.log(reverse(x));
