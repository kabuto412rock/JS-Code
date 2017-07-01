// 請寫一個函數判斷某方陣是否每行每列的加總都是一樣的？
// 範例： isMagic([[1,2,3], [2,3,1], [3,1,2]]) = true
// 範例： isMagic([[1,2,3], [2,3,1], [3,2,1]]) = false

function isMagic (arr) {
  var num = 0
  var i, j, sum

  for (i in arr) {
    num += arr[0][i]
  }
  // sum of one row or sum of one column should be equal to num...
  for (i in arr) {
    sum = 0
    for (j in arr[i]) {
      sum += arr[i][j]
    }
    if (sum !== num) {
      return false
    }
  }
  for (i in arr[0]) {
    sum = 0
    for (j in arr) {
      sum += arr[j][i]
    }
    if (sum !== num) {
      return false
    }
  }
  return true
}

console.log('isMagic([[1,2,3], [2,3,1], [3,1,2]]) =', isMagic([[1, 2, 3], [2, 3, 1], [3, 1, 2]]))
console.log('isMagic([[1,2,3], [2,3,1], [3,2,1]]) =', isMagic([[1, 2, 3], [2, 3, 1], [3, 2, 1]]))
