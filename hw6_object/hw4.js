// 4 請寫一組物件，包含『浮點數，有理數，複數』，這三個都繼承『數』這個物件，
// 而且每個都具有 add, sub, mul, div, power 等成員函數！+
// 總覺得題目稍嫌怪怪的，先放棄吧。

class Number {
  power (n) {
    var p = this
    for (var i = 1; i < n; i++) {
      p.mul(this)
    }
    return p
  }
}

class Float extends Number {
  add (o2) {  
  }
  sub (o2) {}
  mul (o2) {}
  div (o2) {}
  toString () {}
}

class Rational extends Number {
  add (o2) {}
  sub (o2) {}
  mul (o2) {}
  div (o2) {}
  toString () {}
}

class Complex {
  constructor (r, i) {
    this.r = r
    this.i = i
  }

  add (o2) {
    return new Complex(this.r + o2.r, this.i + o2.i)
  }
  sub (o2) {
    return new Complex(this.r - o2.r, this.i - o2.i)
  }
  mul (o2) {
    return new Complex(this.r * o2.r - this.i * o2.i, this.r * o2.i + this.i * o2.r)
  }
  div (o2) {
    return new Complex(
      (this.r * o2.r + this.i * o2.i) / (o2.r * o2.r + o2.i * o2.i),
      (this.i * o2.r - this.r * o2.i) / (o2.r * o2.r + o2.i * o2.i)
    )
  }
  toString () {
    if (this.i >= 0) {
      return this.r + '+' + this.i + 'i'
    } else {
      return this.r + '' + this.i + 'i'
    }
  }
}
