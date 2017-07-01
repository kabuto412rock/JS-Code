// integral.js
function integral (f, a, b) {
  var dx = 0.0001
  var area = 0
  for (var x = a; x <= b; x += dx) {
    area += f(x) * dx
  }
  return area
}

function square (x) {
  return x * x
}

console.log('integral(x^2,0,1)=', integral(square, 0, 1))
console.log('integral(sin(x),0,pi)=', integral(Math.sin, 0, Math.PI))
