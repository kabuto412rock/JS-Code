// 請寫一個函數可以根據過濾函數f只留下符合的內容？
// 範例：filter(odd, [1,3,5,4,8,9])= [1,3,5,9] ，其中 odd 為判斷是否為奇數的函數。
function filter (f, a) {
  var result = []
  for (var i in a) {
    if (f(a[i])) result.push(a[i])
  }
  return result
}

function odd (n) {
  return n % 2 === 1
}

console.log('filter(odd, [1,3,5,4,8,9]) = ', filter(odd, [1, 3, 5, 4, 8, 9]))
