// 請輸出某二進位字串的1補數
// 範例： complement1("10101010") => "01010101"

function complement1 (str) {
  var result = ''
  for (var i in str) {
    if (str[i] === '1') {
      result += '0'
    } else {
      result += '1'
    }
  }
  return result
}

console.log('complement1("10101010") =', complement1('10101010'))
