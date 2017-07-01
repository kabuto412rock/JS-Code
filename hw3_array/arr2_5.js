// 請寫一個函數 neg(A) 傳回某矩陣 A 的負矩陣 -A。
// 範例： neg([[1,2],[3,4]]) => [[-1,-2],[-3,-4]]
function neg (arr) {
  for (var i in arr) {
    for (var j in arr[i]) {
      arr[i][j] *= -1
    }
  }
  return arr
}

console.log('neg([[1,2],[3,4]]) =', neg([[1, 2], [3, 4]]))
