function randomInt (a, b) {
  return a + Math.round(Math.random() * (b - a))
}
function randomN (n, a, b) {
  var arr = []
  for (var i = 0; i < n; i++) {
    arr.push(randomInt(a, b))
  }
  return arr
}
console.log(randomN(3, 5, 10))
