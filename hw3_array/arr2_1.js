// 寫一個程式把矩陣轉置。
// 範例：transpose([[1,2,3], [3,2,1]]) => [[1,3], [2,2], [3,1]]

function transpose (arr) {
  var nArr = []
  for (var i = 0; i < arr[0].length; i++) {
    var row = []
    for (var j = 0; j < arr.length; j++) {
      row.push(arr[j][i])
    }
    nArr.push(row)
  }
  return nArr
}
console.log('transpose([[1,2,3], [3,2,1]]) =', transpose([[1, 2, 3], [3, 2, 1]]))
