class Complex {
  constructor (r, i) {
    this.r = r
    this.i = i
  }

  add (c2) {
    return new Complex(this.r + c2.r, this.i + c2.i)
  }

  sub (c2) {
    return new Complex(this.r - c2.r, this.i - c2.i)
  }

  mul (c2) {
    return new Complex(this.r * c2.r - this.i * c2.i, this.r * c2.i + this.i * c2.r)
  }
  div (c2) {
    var a, b, c, d
    a = this.r
    b = this.i
    c = c2.r
    d = c2.i
    return new Complex((a * c + b * d) / (c * c + d * d), (b * c - a * d) / (c * c + d * d))
  }
  toString () {
    if (this.i >= 0) {
      return this.r + '+' + this.i + 'i'
    } else {
      return this.r + '' + this.i + 'i'
    }
  }
}

var a = new Complex(1, 3)
var b = new Complex(5, 7)
var x = a.add(b).sub(b).mul(b).div(b)

console.log('a= %s', a)
console.log('b= %s', b)
console.log('a.add(b)= %s', a.add(b))
console.log('a.sub(b)= %s', a.sub(b))
console.log('a.mul(b)= %s', a.mul(b))
console.log('a.div(b)= %s', a.div(b))
console.log('x=%s', x)
