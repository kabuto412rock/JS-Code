// 請算出某陣列的平均值？
// 範例： mean([1,2,3,4,5]) => 3

function mean (arr) {
  var sum = 0
  for (var i in arr) {
    sum += arr[i]
  }
  return sum / arr.length
}

console.log('mean([1,2,3,4,5] =', mean([1, 2, 3, 4, 5]))
