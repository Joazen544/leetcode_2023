var rotate = function (matrix) {
  let n = matrix.length;
  let storage1 = 0;
  let storage2 = 0;
  console.log(matrix);
  for (let i = 0; i < Math.ceil(n / 2) + 1; i++) {
    if (n % 2 == 1 && i == Math.ceil(n / 2)) {
      break;
    }
    for (let j = 0; j < n - i * 2 - 1; j++) {
      /*
        matrix[0+i][0+j+i];     #1
        matrix[0+j+i][n-1-i];   #2
        matrix[n-1-i][n-1-j-i]; #3
        matrix[n-1-j-i][0+i]    #4
        */

      storage1 = matrix[0 + j + i][n - 1 - i];
      matrix[0 + j + i][n - 1 - i] = matrix[0 + i][0 + j + i];
      storage2 = matrix[n - 1 - i][n - 1 - j - i];
      matrix[n - 1 - i][n - 1 - j - i] = storage1;
      storage1 = matrix[n - 1 - j - i][0 + i];
      matrix[n - 1 - j - i][0 + i] = storage2;
      matrix[0 + i][0 + j + i] = storage1;
      console.log(matrix);
    }
  }
  return matrix;
};

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(rotate(matrix));
