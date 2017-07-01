// 請用遞迴計算 sum(n) = 1+2+...+n ？
// 範例：sum(10) = 55

function sum (n) {
  if (n === 0) return 0
  return n + sum(n - 1)
}

console.log('sum(10) = %d', sum(10))
