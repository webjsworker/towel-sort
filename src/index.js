
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (!matrix || matrix.length === 0) {
    return [];
  }
  let result = [].concat(matrix[0])
  if (matrix) {
    matrix.reduce((prev, curr, index) => {

      if (index === 1 || index % 2 !== 0) {
        result = result.concat(curr.reverse())
      }
      else {
        result = result.concat(curr)
      }
    })
    return result
      ;
  }


  /* return []; */
}


