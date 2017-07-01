// 求一元二次方程式 ax^2+bx+c=0 的根。
// 範例： findroot(1,-4,4) => 2
function findroot (a, b, c) {
  var result = b * b - 4 * a * c
  if (result === 0) return (-b) / (2 * a)
  else if (result > 0) return [(-b + Math.sqrt(result)) / (2 * a), (-b - Math.sqrt(result)) / (2 * a)]
  else if (result < 0) return '沒有實根'
}
console.log('findroot(1,0,-4) =', findroot(1, 0, -4))
console.log('findroot(1,-4,4) = %d', findroot(1, -4, 4))
console.log('findroot(2,5,4) =', findroot(2, 5, 4))
