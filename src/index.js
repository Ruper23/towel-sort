
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (arguments[0] === undefined || arguments[0] === null || arguments[0] === '' || arguments[0] === NaN) {
    return matrix = [];
  } else if (matrix.length === 0) {
    return matrix = [];
  } else if (matrix.length === 2) {
    return matrix[0].concat(matrix[1].sort((a, b) => b - a));
  } else if (matrix.length === 3) {
    return matrix[0].concat(matrix[1].sort((a, b) => b - a), matrix[2]);
  } else if (matrix.length === 4) {
    return matrix[0].concat(matrix[1].sort((a, b) => b - a), matrix[2], matrix[3].sort((a, b) => b - a));
  }
}


