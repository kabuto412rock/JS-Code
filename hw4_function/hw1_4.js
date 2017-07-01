// 請寫一個函數 integral(f, a, b) 可以做數值積分？
// 範例： integral(sin, 0, Pi) = 2
function integral (f, a, b) {
  var dx = 0.0000001
  var area = 0
  for (var i = a; i < b; i += dx) {
    area += f(i) * dx
  }
  return area
}

console.log('integral(sin, 0, pi) =', integral(Math.sin, 0, Math.PI))
