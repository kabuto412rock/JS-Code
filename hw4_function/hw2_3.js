// 請用遞迴計算 power(n,k) = n^k = n...n ？
// 範例：power(2,3) = 8

function power (n, k) {
  if (k === 0) return 1
  return n * power(n, k - 1)
}
console.log('power(2,3) = %d', power(2, 3))
