var e2c = {dog: '狗', cat: '貓', a: '一隻', chase: '追', eat: '吃'}

function translate (e) {
  var c = []
  for (var i in e) {
    var eWord = e[i]
    var cWord = e2c[eWord]
    c.push(cWord)
  }
  return c
}

var c = translate(process.argv.slice(2))
console.log(c)
