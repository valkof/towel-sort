module.exports = function towelSort (matrix) {
  return matrix ? matrix.reduce((array, row, i) => i % 2 == 0 ? array.concat(row) : array.concat(row.reverse()), []) : [];
}
