// 請寫一個函數可以把 n*m 個數值的陣列改變為的矩陣？
// 範例： asMatrix([1,2,3,4,5,6], 2, 3) => [[1,2,3],[4,5,6]]

function asMatrix (list, r, c) {
  var arr = []
  for (var i = 0; i < r; i++) {
    var rArr = []
    for (var j = 0; j < c; j++) {
      rArr.push(list[i * c + j])
    }
    arr.push(rArr)
  }
  return arr
}

console.log('asMatrix([1,2,3,4,5,6], 2, 3) =', asMatrix([1, 2, 3, 4, 5, 6], 2, 3))
