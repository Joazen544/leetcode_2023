var plusOne = function (digits) {
  let stringDigits = digits.join("");
  let bigIntDigits = BigInt(stringDigits) + 1n;
  stringDigits = bigIntDigits.toString();
  digits = stringDigits.split("");
  return digits;
};

let array = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];
console.log(plusOne(array));
