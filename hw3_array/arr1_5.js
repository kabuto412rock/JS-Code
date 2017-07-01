// 請算出某陣列的標準差？ (標準差為 (xi-x)^2 的總和)
// 範例： sd([1,2,3,4,5]) = sqrt((2^2+1^2+0^2+1^2+2^2)/5) = sqrt(2)=1.414。
function sd (arr) {
  var sqSum = 0
  var mean = 0
  for (var i in arr) {
    mean += arr[i]
  }
  mean /= arr.length

  for (var j in arr) {
    sqSum += Math.pow((arr[j] - mean), 2)
  }

  return Math.sqrt(sqSum / arr.length)
}

console.log('sd([1,2,3,4,5]) = %f', sd([1, 2, 3, 4, 5]))
