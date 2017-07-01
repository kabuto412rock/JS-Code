// 請將輸入的字串翻轉？
// 範例 reverse("abcde") => "edcba"

function reverse (str) {
  var result = ''
  for (var i in str) {
    result = str[i] + result
  }
  return result
}

console.log('reverse("abcde") =', reverse('abcde'))
