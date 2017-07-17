var Complex = {
  add: function (c2) {
    return Complex.create(this.r + c2.r, this.i + c2.i)
  },
  sub: function (c2) {
    return Complex.create(this.r - c2.r, this.i - c2.i)
  },
  mul: function (c2) {
    return Complex.create(this.r * c2.r - this.i * c2.i, this.r * c2.i + this.i * c2.r)
  },
  toString: function () {
    if (this.i >= 0) {
      return this.r + '+' + this.i + 'i'
    } else {
      return this.r + '' + this.i + 'i'
    }
  }
}

Complex.create = function (r, i) {
  var c = Object.create(Complex)
  c.r = r
  c.i = i
  return c
}

var a = Complex.create(2, 1)
var b = Complex.create(1, 2)
var x = a.add(b).sub(b).mul(b)
console.log('a=%s', a)
console.log('b=%s', b)
console.log('a.add(b)=%s', a.add(b))
console.log('a.sub(b)=%s', a.sub(b))
console.log('a.mul(b)=%s', a.mul(b))
console.log('x=%s', x)
