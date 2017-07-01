// 請寫出 minimal 函數可以找出函數 f 的區域最低點。
// 範例： function f(x) { return x*x-4*x+4; } minimal(f) => x=2, f(2)=0
function df (f, x) {
  var dx = 0.00001
  var dy = f(x + dx) - f(x)
  return dy / dx
}

function f (x) {
  return x * x - 4 * x + 4
}

function minimal (f) {
  var x = 0
  var dx = 0.25
  while (Math.abs(df(f, x)) > 0.01) {
    var m = df(f, x)
    if (m > 0) {
      x -= dx
    } else if (m < 0) {
      x += dx
    } else {
      break
    }
  // console.log('x = %d, df(f,x) = %d, f(x) = %d', x, df(f, x), f(x))
  }
  console.log('Min: x=%d, f(%d)=%d', x, x, f(x))
}
minimal(f)

// 請寫出 maximal 函數可以找出函數 f 的區域最高點。
// 範例： function f(x) { return -1*(x*x-4*x+4); } maximal(f) => x=2, f(2)=0

function maximal (f) {
  var x = 0
  var dx = 0.25
  while (Math.abs(df(f, x)) > 0.01) {
    var m = df(f, x)
    if (m > 0) {
      x += dx
    } else if (m < 0) {
      x -= dx
    } else {
      break
    }
  // console.log('x = %d, df(f,x) = %d, f(x) = %d', x, df(f, x), f(x))
  }
  console.log('Max: x=%d, f(%d)=%d', x, x, f(x))
}
function f2 (x) {
  return -1 * (x * x - 4 * x + 4)
}

maximal(f2)
