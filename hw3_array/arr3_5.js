// 請寫一個程式檢查數學是中的括號是否合法？
// 範例： isPaired("(a+3)*5/7)))*8") => false
function isPaired (str) {
  var stack = []
  for (var i in str) {
    if (str[i] === '(') {
      stack.push(str[i])
    } else if (str[i] === ')') {
      var a = stack.pop()
      if (a !== '(') {
        return false
      }
    }
  }
  if (stack.length === 0) {
    return true
  } else {
    return false
  }
}
console.log('isPaired("(a+3)*5/7)))*8") =', isPaired('(a+3)*5/7)))*8'))
