var PI = 3.14
var Circle = function (radius) {
  this.radius = radius
  this.area = function () {
    return PI * radius * radius
  }
}

module.exports = Circle
