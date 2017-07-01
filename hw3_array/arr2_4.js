// 請寫一個函數計算兩矩陣相乘？
// 範例： mul([[1,2],[3,4]], [[1,1],[1,1]]) => [[3,3], [7,7]]
function mul (a, b) {
  var arr = []
  for (var i in a) {
    var tmpArr = []
    for (var j in a[i]) {
      var sum = 0
      for (var k in b[j]) {
        sum += a[i][k] * b[j][k]
      }
      tmpArr.push(sum)
    }
    arr.push(tmpArr)
  }
  return arr
}
// print 'mul([[1,2],[3,4]], [[1,1],[1,1]]) = [ [ 3, 3 ], [ 7, 7 ] ]'
console.log('mul([[1,2],[3,4]], [[1,1],[1,1]]) =', mul([[1, 2], [3, 4]], [[1, 1], [1, 1]]))

// print 'mul([[1,2],[3,4]], [[5, 6],[7,8]]) = [ [ 17, 23 ], [ 39, 53 ]]'
console.log('mul([[1,2],[3,4]], [[5, 6],[7,8]]) =', mul([[1, 2], [3, 4]], [[5, 6], [7, 8]]))
