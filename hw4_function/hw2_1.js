// 請用遞迴計算 n! = n...2*1 ？
// 範例： factorial(3) = 6

function factorial (n) {
  if (n === 1) return 1
  return n * factorial(n - 1)
}

console.log('factorial(3) =', factorial(3))
