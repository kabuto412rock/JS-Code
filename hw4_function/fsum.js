// fsum.js
function sum (n) {
  // var s = 0
  // for (var i = 1; i <= n; i++) {
  //   s = s + i
  // }
  if (n < 1) {
    return undefined
  }
  var s = (1 + n) * n / 2
  return s
}

var sum10 = sum(10)
console.log('1+2+...+10=%d', sum10)
