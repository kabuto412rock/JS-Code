// 請寫一個函數找出一個排序好陣列中差異最小的兩個數之距離？
// 範例： minGap([1,3,6,7,10]) = 1
function minGap (arr) {
  if (arr < 2) {
    return undefined
  }
  var min = Math.abs(arr[0] - arr[1])
  for (var i = 0; i < arr.length - 1; i++) {
    if (min > Math.abs(arr[i] - arr[i + 1])) {
      min = Math.abs(arr[i] - arr[i + 1])
    }
  }
  return min
}

console.log('minGap([1,3,6,7,10]) = %d', minGap([1, 3, 6, 7, 10]))
