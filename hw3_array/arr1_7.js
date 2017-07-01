// 請寫一個函數 random(n, a, b) 可以產生 n 個介於 a 到 b 之間的浮點亂數？
// 範例： random(3, 10, 20)= [13.76, 19,23, 14,11]

var random = (n, a, b) => {
  var arr = []
  var min = Math.min(a, b)
  var max = Math.max(a, b)
  for (var i = 0; i < n; i++) {
    arr.push(Math.random() * (max - min) + min)
  }
  return arr
}
console.log('random(3, 10, 20)=', random(3, 10, 20))
