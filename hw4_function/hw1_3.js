// 請寫一個函數 df(f,x) 可以做數值微分？
// 範例： df(sin, Pi/4) = 0.707
function df (f, x) {
  var dx = 0.00001
  var dy = f(x + dx) - f(x)
  return dy / dx
}

console.log(' df(sin, Pi/4) =', df(Math.sin, Math.PI / 4))
