
// You should implement your task here.


module.exports = function towelSort (matrix) {
  if(!matrix || matrix.length < 1) return []
  let fromStart = true
  let res = []
  for(let i = 0; i < matrix.length; i++) {
    if(fromStart) {
      res = res.concat(matrix[i])
      fromStart = !fromStart
    } else {
      res = res.concat(matrix[i].reverse())
      fromStart = !fromStart
    }
  }
  console.log(res)
  return res
}
