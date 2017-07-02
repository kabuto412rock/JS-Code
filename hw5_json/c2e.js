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

function translate (c) {
  var eWords = []
  for (var i in c) {
    var cWord = c[i]
    var eWord = c2e[cWord]
    eWords.push(eWord)
  }
  return eWords
}

var chineseSentence = process.argv.slice(2)
var englishSentence = translate(chineseSentence)
console.log(englishSentence)
