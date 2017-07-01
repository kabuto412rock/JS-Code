// 請判斷一個字串是否是一個迴文？
// 範例： palindrome("abcba") => true

function palindrome (str) {
  // return str === str.split('').reverse().join('')
  for (var i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] !== str[str.length - i - 1]) {
      return false
    }
  }
  return true
}
console.log('palindrome("abcba") =', palindrome('abcba'))
