// circleClass.js
var PI = 3.14
class Circle {
  constructor (radius) {
    this.radius = radius
    this.area = function () {
      return PI * this.radius * this.radius
    }
  }
}

module.exports = Circle
