// 請將 a 到 b 之間無法被 3, 5, 7 整除的數字放到陣列中？
// 範例： filter357(5,10) = [8]
// 範例： filter357(5,15) = [8,11,13]

function filter357 (a, b) {
  var arr = []
  for (var i = a; i <= b; i++) {
    if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
      continue
    }
    arr.push(i)
  }
  return arr
}
console.log('filter357(5,10) = [' + filter357(5, 10) + ']')
console.log('filter357(5,15) = [' + filter357(5, 15) + ']')
