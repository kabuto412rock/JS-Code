// ocomplex3.js
var Complex = {
  add: function (c2) {
    return createComplex(this.r + c2.r, this.i + c2.i)
  },
  sub: function (c2) {
    return createComplex(this.r - c2.r, this.i - c2.i)
  },
  mul: function (c2) {
    return createComplex(this.r * c2.r - this.i * c2.i, this.i * c2.r + this.r * c2.i)
  },
  toString: function () {
    return this.r + '+' + this.i + 'i'
  }
}

function createComplex (r, i) {
  var obj = Object.create(Complex)
  obj.r = r
  obj.i = i
  return obj
}

var a = createComplex(1, 2)
var b = createComplex(2, 1)

var x = a.add(b).sub(b).mul(b)
console.log('a=%s', a)
console.log('b=%s', b)
console.log('a.add(b)=%s', a.add(b))
console.log('x=%s', x)
