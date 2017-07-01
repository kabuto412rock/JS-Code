// 請寫出計算遞迴函數 f(n) = 2*f(n-1)+f(n-2) 的函數，其中 f(0)=f(1)=1？
// 範例： f(2) = 2*1+1 = 3, f(3)=2*3+1=7 。
var f = (n) => {
  if (n === 0 || n === 1) return 1
  return 2 * f(n - 1) + f(n - 2)
}

console.log('f(2) = %d', f(2))
console.log('f(3) = %d', f(3))
