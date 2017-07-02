// c2e.js的加強版
// 請將本章中的《英翻中》系統，改成《中翻英》系統，
// 但輸入的中文詞彙之間可以強制用空白隔開。例如:
// $ node mt2.js 一隻 狗 追 一隻 貓
// [ 'a', 'dog', 'chase', 'a', 'cat' ]

var c2e = {
  '一隻': 'a',
  '狗': 'dog',
  '追': 'chase',
  '貓': 'cat'
}

function c2eWork (str) {
  var eWords = []
  var findOne = false
  while (str !== '') {
    for (var i in c2e) {
      var wordLen = i.length
      if (str.substr(0, wordLen) === i) {
        eWords.push(c2e[i])
        str = str.slice(wordLen)
        findOne = true
        break
      }
    }

    if (findOne) {
    } else {
      // 如果上一個推入的也是undefined就不做事
      if (typeof (eWords[eWords.length - 1]) === 'undefined') {
      } else { // 如果上一個不是undefined就推入
        eWords.push(undefined)
      }
      str = str.slice(1)
    }
    // reset
    findOne = false
  }
  return eWords
}

// 主程式
var c2eWords = c2eWork(process.argv[2])
var c2eSentence = ''
for (var i in c2eWords) {
  var eWord = c2eWords[i]
  if (typeof (eWord) === 'undefined') {
    c2eSentence += '? '
  } else {
    c2eSentence += eWord + ' '
  }
}
console.log(c2eSentence)
