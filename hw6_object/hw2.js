class Vector {
  constructor (x, y) {
    this.x = x
    this.y = y
  }
  add (v2) {
    return new Vector(this.x + v2.x, this.y + v2.y)
  }

  sub (v2) {
    return new Vector(this.x - v2.x, this.y - v2.y)
  }
  dot (v2) {
    return this.x * v2.y - this.y * v2.x
  }
  neg () {
    return new Vector(-this.x, -this.y)
  }
  toString () {
    return '(' + this.x + ',' + this.y + ')'
  }
}

var a = new Vector(1, 2)
var b = new Vector(3, 5)

console.log('a=%s', a)
console.log('b=%s', b)
console.log('a.add(b)= %s', a.add(b))
console.log('a.sub(b)= %s', a.sub(b))
console.log('a.dot(b)= %s', a.dot(b))
console.log('a.neg()= %s', a.neg())
