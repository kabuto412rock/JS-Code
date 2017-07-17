var Complex = {
  add: function (c2) {
    return createComplex(this.r + c2.r, this.i + c2.i)
  }
}

function createComplex (r, i) {
  var c = Object.create(Complex)
  c.r = r
  c.i = i
  return c
}

var a = createComplex(1, 2)
var b = createComplex(2, 1)

var x = a.add(b).add(b)
console.log('a=%j', a)
console.log('b=%j', b)
console.log('a.add(b)=%j', a.add(b))
console.log('x=%j', x)
