// 請寫一個函數可以傳回陣列的映射值？
// 範例：map(sqrt, [1,4,9])= [1,2,3]

function map (f, a) {
  var fa = []
  for (var i in a) {
    fa.push(f(a[i]))
  }
  return fa
}

console.log('map(sqrt, [1,4,9] =', map(Math.sqrt, [1, 4, 9]))
