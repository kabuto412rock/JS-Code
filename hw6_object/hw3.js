class Shape {

}

class Circle {
  constructor (radius) {
    this.radius = radius
  }
  area () {
    return this.radius * this.radius * Math.PI
  }
}

class Rectangle {
  constructor (width, height) {
    this.width = width
    this.height = height
  }

  area () {
    return this.width * this.height
  }
}

var cir = new Circle(5)
var rect = new Rectangle(2, 4)

console.log('cir.area() = %s', cir.area())
console.log('rect.area() = %s', rect.area())
