// 請輸出某二進位字串的偶校驗位元 (parity bit)
// 範例： evenParity("1010001") => 1

function evenParity (str) {
  var cnt = 0
  for (var i in str) {
    if (str[i] === '1') {
      cnt += 1
    }
  }
  if (cnt % 2 === 1) {
    return 1
  } else {
    return 0
  }
}

console.log('evenParity("1010001") =', evenParity('1010001'))
