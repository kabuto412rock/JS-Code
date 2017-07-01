// prime.js
function isPrime (n) {
  if (n === 1) return false
  for (var i = 2; i <= n / 2; i++) {
    if (n % i === 0) return false
  }
  return true
}
console.log('isPrime(1)=%d', isPrime(1))
console.log('isPrime(33)=%d', isPrime(33))

console.log('列出1~100的所有質數：')
for (var i = 1; i <= 100; i++) {
  if (isPrime(i)) {
    console.log('isPrime(%d)', i)
  }
}
