var Complex = function (r, i) {
  this.r = r
  this.i = i
  this.add = function (c2) {
    return new Complex(this.r + c2.r, this.i + c2.i)
  }
  this.sub = function (c2) {
    return new Complex(this.r - c2.r, this.i - c2.i)
  }
  this.mul = function (c2) {
    return new Complex(this.r * c2.r - this.i * c2.i, this.r * c2.i + this.i * c2.r)
  }
  this.toString = function () {
    if (this.i >= 0) {
      return this.r + '+' + this.i + 'i'
    } else {
      return this.r + '' + this.i + 'i'
    }
  }
}
var a = new Complex(1, 2)
var b = new Complex(2, 1)
var x = a.add(b).sub(b).mul(b)

console.log('a=%s', a)
console.log('b=%s', b)
console.log('a.add(b)=%s', a.add(b))
console.log('a.sub(b)=%s', a.sub(b))
console.log('a.mul(b)=%s', a.mul(b))
console.log('x=%s', x)

// 給房東阿姨打電話。
// 首先打招呼"陳阿姨好，我是住在Ａ22房的古宗嘉。"
// 第一件事： 現在電費有超過之前預繳的電嗎費？如果有的話，要補多少？

// 第二件事：八月底我媽媽才會把錢匯到你的戶頭
半年大概花1500 
3000

1500 
106 3月～

去年8~2 