// 寫一個程式做因數分解。
// 範例：factor(45) => [3, 3, 5]
function factor (n) {
  if (n === 1) return 1
  var f = 2
  var arr = []
  while (n > 1) {
    if (n % f === 0) {
      arr.push(f)
      n /= f
    } else {
      f++
    }
  }
  return arr
}

console.log('factor(45) =', factor(45))
